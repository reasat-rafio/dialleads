import { IoNavigate } from 'react-icons/io5';

const siteNavigation = {
  name: 'site.nav',
  title: 'Navigation',
  type: 'document',
  icon: IoNavigate,

  fields: [
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
            {
              name: 'isIndustryPage',
              title: 'Is Industry Page',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      menu: 'menu',
    },
    prepare({ menu }: { menu: { link?: { title?: string } }[] }) {
      if (!menu || menu.length === 0) {
        return {
          title: 'No Menu Items',
        };
      }

      const titles = menu
        .map((item) => item?.link?.title || 'Untitled Link')
        .join(', ');

      return {
        title: `Menu: ${titles}`,
      };
    },
  },
};

export default siteNavigation;
