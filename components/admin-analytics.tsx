"use client";

import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, Package, DollarSign, RefreshCw, AlertCircle, Lightbulb, Crown, ShoppingBag } from "lucide-react";
import { type Language, t } from "@/lib/translations";

interface TopProduct {
  product_name: string;
  units_sold: number;
  revenue: number;
}

interface CategoryBreakdown {
  category: string;
  units_sold: number;
  revenue: number;
}

interface AnalyticsData {
  success: boolean;
  totalRevenue: number;
  totalUnits: number;
  topProducts: TopProduct[];
  categoryBreakdown: CategoryBreakdown[];
  recommendations: string[];
}

interface AdminAnalyticsProps {
  language: Language;
  onClose?: () => void;
}

export function AdminAnalytics({ language, onClose }: AdminAnalyticsProps) {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalytics = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/analytics", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const responseData = await res.json();
      
      console.log("[AdminAnalytics] API Response:", responseData);
      
      // Use data directly from API (not data.analytics)
      // Only use API values - do NOT fallback to zeros unless API explicitly returned 0
      setData({
        success: responseData.success === true,
        totalRevenue: typeof responseData.totalRevenue === 'number' ? responseData.totalRevenue : 0,
        totalUnits: typeof responseData.totalUnits === 'number' ? responseData.totalUnits : 
                    typeof responseData.unitsSold === 'number' ? responseData.unitsSold : 0,
        topProducts: Array.isArray(responseData.topProducts) ? responseData.topProducts : [],
        categoryBreakdown: Array.isArray(responseData.categoryBreakdown) ? responseData.categoryBreakdown : [],
        recommendations: Array.isArray(responseData.recommendations) ? responseData.recommendations : []
      });
    } catch (err) {
      console.error("[AdminAnalytics] Error:", err);
      setError("Failed to fetch analytics data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  // Format currency with ₹ symbol
  const formatCurrency = (amount: number): string => {
    return `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
        <div className="flex items-center justify-center py-8">
          <RefreshCw className="w-6 h-6 text-indigo-500 animate-spin" />
          <span className="ml-2 text-indigo-600">Loading analytics...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
        <div className="flex items-center gap-2 text-red-600 mb-4">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">Error loading analytics</span>
        </div>
        <p className="text-red-700 text-sm mb-4">{error}</p>
        <button
          onClick={fetchAnalytics}
          className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Retry
        </button>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-indigo-100 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-md">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Sales Analytics</h3>
            <p className="text-xs text-gray-500">Demo + Real Orders Combined</p>
          </div>
        </div>
        <button
          onClick={fetchAnalytics}
          className="p-2 hover:bg-white/60 rounded-lg transition-colors"
          title="Refresh"
        >
          <RefreshCw className="w-4 h-4 text-indigo-500" />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white/80 rounded-xl p-4 border border-green-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 rounded-lg">
              <DollarSign className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Total Revenue</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {formatCurrency(data.totalRevenue)}
          </p>
        </div>
        <div className="bg-white/80 rounded-xl p-4 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <ShoppingBag className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Units Sold</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {data.totalUnits.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Top Products */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-4 h-4 text-yellow-500" />
          <h4 className="font-semibold text-gray-700">Top Products</h4>
        </div>
        {data.topProducts.length > 0 ? (
          <div className="space-y-2">
            {data.topProducts.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/60 rounded-lg px-3 py-2.5 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-700 truncate max-w-[140px]">
                    {item.product_name}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">{item.units_sold} units</p>
                  <p className="text-xs text-gray-500">{formatCurrency(item.revenue)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic bg-white/40 rounded-lg p-3">No product data available yet.</p>
        )}
      </div>

      {/* Category Breakdown */}
      {data.categoryBreakdown.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <h4 className="font-semibold text-gray-700">Category Performance</h4>
          </div>
          <div className="space-y-2">
            {data.categoryBreakdown.slice(0, 5).map((cat, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/60 rounded-lg px-3 py-2.5 border border-gray-100"
              >
                <span className="text-sm font-medium text-gray-700">{cat.category}</span>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">{cat.units_sold} units</p>
                  <p className="text-xs text-gray-500">{formatCurrency(cat.revenue)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Recommendations */}
      {data.recommendations.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <h4 className="font-semibold text-gray-700">AI Recommendations</h4>
          </div>
          <div className="space-y-2">
            {data.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg px-4 py-3 border border-amber-100 text-sm text-gray-700"
              >
                <span className="text-amber-600 font-medium mr-2">💡</span>
                {rec}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAnalytics;
