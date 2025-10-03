/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',   // allow any hostname
        pathname: '**',   // allow all paths
      },
      {
        protocol: 'http',
        hostname: '**',   // (optional) allow http too
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: 'https',
// 				hostname: 'durga-nayak.vercel.app',
// 				pathname: '/assets/**',
// 			},
// 		],
// 	},
// };

// export default nextConfig;

