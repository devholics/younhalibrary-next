/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.daumcdn.net"
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/gallery',
                destination: '/gallery/photos',
                permanent: false,
            }
        ]
    }
}

module.exports = nextConfig
