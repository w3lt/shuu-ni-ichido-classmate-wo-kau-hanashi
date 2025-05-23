import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Shuu ni Ichido Classmate wo Kau Hanashi ~ Futari no Jikan, Iiwake no Gosen\'en ~',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://w3lt.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/shuu-ni-ichido-classmate-wo-kau-hanashi/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'W3lt', // Usually your GitHub org/user name.
  projectName: 'Shuu ni Ichido Classmate wo Kau Hanashi', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/wn',
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: 'Shuu ni Ichido Classmate wo Kau Hanashi',
      logo: {
        alt: '',
        src: 'img/logo.png',
        href: '/wn/what-i-want-from-sendai/chapter-111',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
