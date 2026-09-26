// Busable runs as its own Amplify app with basePath "/busable"
const BUSABLE_URL = "https://master.dawf8gc1a8ax2.amplifyapp.com";

const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      { source: "/busable", destination: `${BUSABLE_URL}/busable` },
      { source: "/busable/:path*", destination: `${BUSABLE_URL}/busable/:path*` },
    ];
  },
};

export default nextConfig;
