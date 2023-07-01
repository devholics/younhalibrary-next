/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.daumcdn.net"
            }
        ]
    }
}

module.exports = nextConfig
