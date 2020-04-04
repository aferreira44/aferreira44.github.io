module.exports = {
  siteMetadata: {
    siteUrl: 'https://andreferreira.me',
    title: 'André Ferreira',
    subtitle: 'Full Stack Developer',
    description: "I'm a software engineer creating startups and open source projects and writing about modern technologies and other things."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
