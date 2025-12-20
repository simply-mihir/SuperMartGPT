# Product Image Generation Setup

This document describes how to set up dynamic product image generation using OpenAI and Supabase Storage.

## Prerequisites

1. **OpenAI API Key** - Required for image generation
2. **Supabase Project** - With storage bucket configured
3. **Environment Variables** - Set in `.env.local`

## Environment Variables

Add these to your `.env.local` file:

```env
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Supabase Storage Setup

### 1. Create Storage Bucket

1. Go to your Supabase Dashboard
2. Navigate to **Storage** → **Buckets**
3. Click **New Bucket**
4. Name: `product-images`
5. **Make it public** (uncheck "Private bucket")
6. Click **Create bucket**

### 2. Configure Bucket Policies (Optional)

For public access, you can add a policy:

```sql
-- Allow public read access
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT
USING (bucket_id = 'product-images');
```

## How It Works

1. **Client Request**: Frontend calls `/api/product-image` with `productId` and `productName`
2. **Check Cache**: Server checks if image exists in Supabase Storage
3. **Generate**: If not found, calls OpenAI Images API to generate product image
4. **Store**: Uploads generated image to Supabase Storage
5. **Return URL**: Returns public URL to frontend

## API Endpoint

### `POST /api/product-image`

**Request Body:**
```json
{
  "productId": "bs1",
  "productName": "Amul Milk"
}
```

**Response:**
```json
{
  "success": true,
  "imageUrl": "https://...supabase.co/storage/v1/object/public/product-images/generated_bs1.jpg",
  "cached": false
}
```

## Cost Considerations

- **OpenAI Images API**: ~$0.02-0.04 per image (DALL-E 2)
- **Supabase Storage**: Free tier includes 1GB storage
- **Caching**: Images are cached in Supabase, so each product is only generated once

## Rate Limiting

The current implementation:
- Checks Supabase Storage first (avoids duplicate generation)
- Caches images permanently in storage
- Frontend also caches URLs in memory

## Troubleshooting

### Images not generating
- Check OpenAI API key is set correctly
- Verify Supabase bucket exists and is public
- Check service role key has storage permissions

### Images not displaying
- Verify bucket is public
- Check CORS settings if accessing from different domain
- Ensure image URLs are accessible

## Testing

1. Start dev server: `npm run dev`
2. Navigate to homepage
3. Check browser console for any errors
4. Verify images appear in bestsellers section
5. Check Supabase Storage dashboard to see uploaded images
















