// app/sitemap.ts
import type { MetadataRoute } from "next";

// adjust path to where TopTenGamesData is exported
import { TopTenGamesData } from "@/data/TopTenGamesData";

// base site url, fallback to placeholder
const SITE_URL = process.env.SITE_URL || "https://yourdomain.com";

/**
 * Build a URL for a game page.
 * Adjust this if your actual route structure differs.
 * Example: /juwa/fish/happyFishing
 */
function buildGameUrl(
  brandKey: string,
  subCategoryKey: string,
  gameKey: string
) {
  return `${SITE_URL}/${brandKey}/${subCategoryKey}/${gameKey}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // 1) Add the home page
  urls.push({
    url: `${SITE_URL}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  });

  // 2) Add any other static pages you have
  //    e.g., terms, privacy, about, etc.
  //    adjust as needed or comment out if not used.
  urls.push(
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    }
  );

  // 3) Iterate through TopTenGamesData to generate game pages
  // TopTenGamesData has structure like:
  // { brandKey: { subcategoies: { fish: [...], keno: [...], slot: [...] }, ... }, ... }
  Object.entries(TopTenGamesData).forEach(([brandKey, brandValue]: any) => {
    const subCategories = brandValue.subcategoies || {};
    Object.entries(subCategories).forEach(([subKey, games]: any) => {
      if (!Array.isArray(games)) return;
      games.forEach((game: any) => {
        // game.key typically holds the slug / unique id
        const gameSlug = game.key;
        if (!gameSlug) return;

        urls.push({
          url: buildGameUrl(brandKey, subKey, gameSlug),
          lastModified: new Date(), // optionally use a real timestamp if available
          changeFrequency: "weekly",
          // you can tweak priority based on brand or sub category
          priority: 0.7,
        });
      });
    });
  });

  return urls;
}