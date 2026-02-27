// app/robots.ts
import type { MetadataRoute } from "next";

const SITE_URL = process.env.SITE_URL || "https://yourdomain.com";

export default function robots(): MetadataRoute.Robots {
  return {
    // you can add more rules or bots if needed
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow private or admin paths if you have any
        // disallow: ["/admin", "/private"],
      },
    ],
    // point to the dynamically generated sitemap
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}