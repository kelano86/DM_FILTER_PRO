// Cloudinary configuration and utilities
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary (in production, these would come from environment variables)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'demo',
  api_key: process.env.CLOUDINARY_API_KEY || 'demo',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'demo',
});

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
}

// Upload image buffer to Cloudinary
export async function uploadImageToCloudinary(
  imageBuffer: Buffer,
  scanId: string
): Promise<CloudinaryUploadResult> {
  try {
    const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          public_id: `dm-audit-${scanId}`,
          folder: 'dm-filter-pro',
          format: 'png',
          quality: 'auto',
          fetch_format: 'auto',
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve(result as CloudinaryUploadResult);
          } else {
            reject(new Error('Upload failed'));
          }
        }
      ).end(imageBuffer);
    });

    return result;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
}

// Generate signed upload URL for direct uploads
export function generateSignedUploadUrl(scanId: string): string {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const publicId = `dm-audit-${scanId}`;
  
  // In production, this would generate a proper signed URL
  // For now, return a mock URL
  return `https://api.cloudinary.com/v1_1/demo/image/upload?public_id=${publicId}&timestamp=${timestamp}`;
}

// Get optimized image URL
export function getOptimizedImageUrl(publicId: string, options: {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
} = {}): string {
  const {
    width = 1080,
    height = 1080,
    quality = 'auto',
    format = 'auto'
  } = options;

  return cloudinary.url(publicId, {
    width,
    height,
    quality,
    format,
    crop: 'fill',
    gravity: 'center'
  });
}

