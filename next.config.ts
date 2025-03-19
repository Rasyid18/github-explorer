import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	basePath: "/github-explorer",
	images: {
		unoptimized: true,
	}
};

export default nextConfig;
