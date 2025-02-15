import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withSentryConfig(
  nextConfig,
  {
    // Corrected organization name
    org: "health-care-t3",
    project: "javascript-nextjs",
    authToken: process.env.SENTRY_AUTH_TOKEN,

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // Upload a larger set of source maps for better stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components for better debugging
    reactComponentAnnotation: {
      enabled: true,
    },

    // Hide source maps from generated client bundles
    hideSourceMaps: true,

    // Tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enable automatic instrumentation of Vercel Cron Monitors
    automaticVercelMonitors: true,
  }
);

