import type { NextConfig } from "next";

// Web běží na GitHub Pages pod cestou /sazeniceproradost.
// Při přechodu na vlastní doménu stačí buildit s NEXT_PUBLIC_BASE_PATH=""
// (podrobně v README, sekce „Vlastní doména").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/sazeniceproradost";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
