export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Backflip Phonk Escape Wiki",
  shortName: "Backflip Phonk Escape",
  logoText: "BPE",
  tagline: "Complete Guides, Codes, Speed & Multipliers",
  description: "Backflip Phonk Escape Wiki with codes, speed guides, multipliers, escape tips, updates, gameplay mechanics, and everything Roblox players need.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://backflipphonkescape.top",
  supportEmail: "support@backflipphonkescape.top",
  gameUrl: "https://www.roblox.com/games/130081301541616/1-Backflip-Phonk-Escape",
  heroVideoId: "cImnqjEG2c0", // Roblox Backflip Phonk Escape gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
