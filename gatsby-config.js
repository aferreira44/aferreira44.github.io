module.exports = {
  siteMetadata: {
    siteUrl: 'https://andreferreira.me',
    title: 'André Ferreira',
    subtitle: 'Full Stack Developer',
    description: 'Programming, DevOps, Blockchain, AI and Machine Learning, Startups, Open Source, GNU/Linux, Privacy and Freedom'
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