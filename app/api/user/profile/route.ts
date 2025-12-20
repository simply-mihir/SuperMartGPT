import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import type { DemoUserHistory } from "@/types";

export const runtime = "nodejs";

const DEFAULT_USER_ID = "user1";

// GET /api/user/profile?userId=xxx
// Fetch or create user profile from demo_user_history
export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl;
    const userId = url.searchParams.get("userId") || DEFAULT_USER_ID;

    console.log("[/api/user/profile] GET request for userId:", userId);

    // Try to fetch existing profile
    const { data: existingProfile, error: fetchError } = await supabaseAdmin
      .from("demo_user_history")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      // PGRST116 = no rows returned
      console.error("[/api/user/profile] Fetch error:", fetchError);
      throw new Error(fetchError.message);
    }

    // If profile exists, return it
    if (existingProfile) {
      console.log("[/api/user/profile] Found existing profile:", existingProfile);
      return NextResponse.json({
        success: true,
        profile: existingProfile as DemoUserHistory,
      });
    }

    // Create new profile if it doesn't exist
    const newProfile = {
      user_id: userId,
      recent_searches: [],
      liked_categories: [],
      recommended_products: [],
      last_active: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };

    const { data: createdProfile, error: createError } = await supabaseAdmin
      .from("demo_user_history")
      .insert([newProfile])
      .select()
      .single();

    if (createError) {
      console.error("[/api/user/profile] Create error:", createError);
      // Return default profile even if insert fails
      return NextResponse.json({
        success: true,
        profile: newProfile as DemoUserHistory,
      });
    }

    console.log("[/api/user/profile] Created new profile:", createdProfile);
    return NextResponse.json({
      success: true,
      profile: createdProfile as DemoUserHistory,
    });
  } catch (err) {
    console.error("[/api/user/profile] Error:", err);
    const message = err instanceof Error ? err.message : "Failed to fetch profile";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// POST /api/user/profile
// Update user profile (add searches, update preferences)
// Body: { userId?: string, addSearch?: string, addCategory?: string, addRecommendation?: string }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      userId = DEFAULT_USER_ID,
      addSearch,
      addCategory,
      addRecommendation,
    } = body;

    console.log("[/api/user/profile] POST request:", body);

    // Fetch existing profile first
    let { data: profile, error: fetchError } = await supabaseAdmin
      .from("demo_user_history")
      .select("*")
      .eq("user_id", userId)
      .single();

    // Create profile if it doesn't exist
    if (!profile || (fetchError && fetchError.code === "PGRST116")) {
      const newProfile = {
        user_id: userId,
        recent_searches: [],
        liked_categories: [],
        recommended_products: [],
        last_active: new Date().toISOString(),
        created_at: new Date().toISOString(),
      };

      const { data: createdProfile, error: createError } = await supabaseAdmin
        .from("demo_user_history")
        .insert([newProfile])
        .select()
        .single();

      if (createError) {
        console.error("[/api/user/profile] Create error:", createError);
        // Use in-memory profile
        profile = newProfile as any;
      } else {
        profile = createdProfile;
      }
    }

    // Update arrays with new values (limit to last 10 items)
    const recentSearches = profile?.recent_searches || [];
    const likedCategories = profile?.liked_categories || [];
    const recommendedProducts = profile?.recommended_products || [];

    if (addSearch && !recentSearches.includes(addSearch)) {
      recentSearches.unshift(addSearch);
      if (recentSearches.length > 10) recentSearches.pop();
    }

    if (addCategory && !likedCategories.includes(addCategory)) {
      likedCategories.unshift(addCategory);
      if (likedCategories.length > 10) likedCategories.pop();
    }

    if (addRecommendation && !recommendedProducts.includes(addRecommendation)) {
      recommendedProducts.unshift(addRecommendation);
      if (recommendedProducts.length > 10) recommendedProducts.pop();
    }

    // Update profile in database
    const { data: updatedProfile, error: updateError } = await supabaseAdmin
      .from("demo_user_history")
      .update({
        recent_searches: recentSearches,
        liked_categories: likedCategories,
        recommended_products: recommendedProducts,
        last_active: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .select()
      .single();

    if (updateError) {
      console.error("[/api/user/profile] Update error:", updateError);
      // Return current state even if update fails
      return NextResponse.json({
        success: true,
        profile: {
          user_id: userId,
          recent_searches: recentSearches,
          liked_categories: likedCategories,
          recommended_products: recommendedProducts,
        },
      });
    }

    console.log("[/api/user/profile] Updated profile:", updatedProfile);
    return NextResponse.json({
      success: true,
      profile: updatedProfile,
    });
  } catch (err) {
    console.error("[/api/user/profile] Error:", err);
    const message = err instanceof Error ? err.message : "Failed to update profile";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}





