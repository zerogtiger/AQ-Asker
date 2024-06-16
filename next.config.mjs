/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dnhoekqobkzsgyxzgidp.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/user_pfp/*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
