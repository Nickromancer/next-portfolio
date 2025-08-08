/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|rtf|doc|pdf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "static/media/[name].[hash].[ext]",
          publicPath: "/_next/",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
