/** @type {import('next').NextConfig} */
const nextConfig = {
  // next-mdx-remote precisa ser transpilado pelo Next para que seus imports de
  // react/jsx-runtime usem o React do App Router — sem isso, o MDX renderizado
  // em RSC cria elementos de "outro React" e o prerender falha.
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
