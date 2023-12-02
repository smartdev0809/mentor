import { facts } from "../assets";
export const PRODUCT_CATEGORIES = [
    {
      label: 'UI Kits',
      value: 'ui_kits',
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=ui_kits`,
          imageSrc: facts,
        },
        {
          name: 'New Arrivals',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: facts,
        },
        {
          name: 'Bestsellers',
          href: '/products?category=ui_kits',
          imageSrc: facts,
        },
      ],
    },
    {
      label: 'Icons',
      value: 'icons',
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: facts,
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: facts,
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: facts,
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: facts,
        },
      ],
    },
  ]