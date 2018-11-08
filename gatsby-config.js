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
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N3Q4DJ',
        includeInDevelopment: false,
      },
    },
  ],
}