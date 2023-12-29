import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const defaultQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 768px)',
  md: '(max-width: 1024px)',
  l: '(max-width: 1536px)',
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Perfect Tychy`,
    siteUrl: process.env.WEBSITE_HOST,
  },
  graphqlTypegen: true,
  pathPrefix: "/perfectTychy",
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.WEBSITE_HOST,
        sitemap: `${process.env.WEBSITE_HOST}/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: defaultQueries,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -150,
      },
    },
    {
      resolve: '@tmttn/gatsby-plugin-hubspot-tracking',
      options: {
        trackingCode: '21824221',
        respectDNT: false,
        productionOnly: false,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          // formats: ['auto', 'webp', 'avif'],
          // placeholder: `dominantColor`,
          // backgroundColor: 'transparent',
          // tracedSVGOptions: {},
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, `src/pages`),
        ignore: [`**/*.styles.ts`],
      },
    },
  ],
};

export default config;
