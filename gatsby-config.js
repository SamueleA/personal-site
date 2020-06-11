module.exports = {
  siteMetadata: {
    title: 'Hi, I\'m Spencer',
    author: 'Spencer Graham',
    description: 'Hi, I\'m Spencer. Sometimes on the internet I go by spengrah.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Spencer-personal-site',
        short_name: 'spengrah',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/burrito.png', // This path is relative to the root of the site.
        include_favicon: true
      },
    },
    'gatsby-plugin-sass',
  ],
}
