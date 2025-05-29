// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMathJax from 'rehype-mathjax';
import icon from 'astro-icon';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeMathJax],
    remarkPlugins: [remarkMath],
  },
  integrations: [
    starlight({
      title: 'Engauge',
      tableOfContents: false,
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/engauge-bot/docs',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/engauge-bot/docs/edit/master',
      },
      customCss: [
        '@fontsource/roboto/400.css',
        '@fontsource/roboto/500.css',
        '@fontsource/roboto/600.css',
        '@fontsource/roboto/700.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Overview',
          items: [
            'overview/intro',
            'overview/xp',
            'overview/leaderboard',
            'overview/messages',
            'overview/voice',
            'overview/economy',
            'overview/card',
          ],
        },
        {
          label: 'Commands',
          collapsed: true,
          items: [
            'stats',
            'rank',
            'leaderboard',
            'claim',
            'pay',
            'blackjack',
            'roles',
            'help',
            'ping',
            'give!',
            'take!',
            'diag!',
          ].map((item) => {
            const privileged = item.endsWith('!');
            const trimmed = privileged ? item.slice(0, -1) : item;
            return {
              label: '/' + trimmed,
              link: '/commands/' + trimmed,
              badge: privileged
                ? {
                    text: 'Admin',
                    variant: 'caution',
                  }
                : undefined,
            };
          }),
        },
        {
          label: 'Configuration',
          items: [
            'setup/getting-started',
            'setup/dashboard',
            'setup/import',
            'setup/roles',
            'setup/crates',
            { label: 'Economy', autogenerate: { directory: 'setup/economy' } },
            'setup/premium',
            'setup/server-sites',
            'setup/audit',
            'setup/formatting',
          ],
        },
        {
          label: 'Troubleshooting',
          autogenerate: {
            directory: 'troubleshooting',
          },
        },
        {
          label: 'Miscellaneous',
          collapsed: true,
          autogenerate: {
            directory: 'misc',
          },
        },
        {
          label: 'API',
          badge: {
            text: 'Premium',
          },
          autogenerate: {
            directory: 'api',
          },
        },
      ],
    }),
    icon(),
  ],
});
