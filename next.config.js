/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        SECRET: process.env.SECRET
    },
    images: {
        domains: ['qm-academy.s3.ap-southeast-1.amazonaws.com']
    }
}

module.exports = nextConfig
