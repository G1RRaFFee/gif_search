import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.giphy.com",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/provider.tsx");
export default withNextIntl(nextConfig);
