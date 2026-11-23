/** @type {import('next').NextConfig} */
const nextConfig = {
  // next-mdx-remote precisa ser transpilado pelo Next para que seus imports de
  // react/jsx-runtime usem o React do App Router — sem isso, o MDX renderizado
  // em RSC cria elementos de "outro React" e o prerender falha.
  transpilePackages: ['next-mdx-remote'],
  // /produtos saiu do ar (publicidade de produto de cannabis é restrita pela
  // Anvisa). O redirecionamento permanente preserva links e buscas antigas.
  async redirects() {
    return [{ source: '/produtos', destination: '/como-funciona', permanent: true }]
  },
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
