import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Updated SVGR configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false
                    }
                  }
                }
              ]
            },
            titleProp: true,
            ref: true
          }
        }
      ],
    });
    return config;
  },
};

export default nextConfig;