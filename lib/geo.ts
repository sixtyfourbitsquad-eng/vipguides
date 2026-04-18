import { headers } from "next/headers";

export function getGeo() {
  if (process.env.DEV_GEO_COUNTRY) {
    return { country: process.env.DEV_GEO_COUNTRY, region: "DEV" };
  }
  
  const headersList = headers();
  
  const country =
    headersList.get("x-vercel-ip-country") ||
    headersList.get("cf-ipcountry") ||
    headersList.get("CloudFront-Viewer-Country") ||
    "XX";
    
  const region = headersList.get("x-vercel-ip-country-region") || "";
  
  return { country, region };
}
