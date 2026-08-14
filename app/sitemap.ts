import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config";
import { PRODUCTS } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticke = [
    { path: "/", priority: 1 },
    { path: "/nabidka/", priority: 0.9 },
    { path: "/jak-nakoupit/", priority: 0.7 },
    { path: "/o-nas/", priority: 0.6 },
    { path: "/kontakt/", priority: 0.6 },
    { path: "/poptavka/", priority: 0.5 },
  ];
  return [
    ...staticke.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...PRODUCTS.map((p) => ({
      url: absoluteUrl(`/nabidka/${p.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
