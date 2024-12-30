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
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
            {
              name: 'moreLinks',
              title: 'More Links',
              type: 'array',
              of: [{ type: 'link' }],
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

      const titles = menu.map((item) => {
        if (!item?.link) {
          return 'Untitled Link';
        }
        return item.link.title || 'Untitled Link';
      });

      return {
        title: titles.join(', '),
      };
    },
  },
};

export default siteNavigation;
