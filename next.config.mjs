/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'durga-nayak.vercel.app',
				pathname: '/assets/**',
			},
		],
	},
};

export default nextConfig;
