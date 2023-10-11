import air75v2Black from './assets/air75-v2-black.webp'
import air75v2White from './assets/air75-v2-white.webp'
import field75Electro from './assets/field75-electro.webp'
import field75Gravity from './assets/field75-gravity.webp'
import field75Noether from './assets/field75-noether.webp'
import halo65Black from './assets/halo65-black.webp'
import halo65White from './assets/halo65-white.webp'
import air60 from './assets/air60.webp'
import halo75Black from './assets/halo75-black.webp'
import halo75White from './assets/halo75-white.webp'
import air75Base from './assets/air75-base.webp'
import { ProductKeyboard } from './types/type'

export const data: ProductKeyboard[] = [
  {
    name: 'Air75 V2 Wireless Custom Mechanical Keyboard',
    type: 'keyboard',
    price: 119.95,
    status: 'new',
    tags: ['75', 'Air', 'Low'],
    variant: [
      {
        color: 'black',
        img: air75v2Black,
      },
      {
        color: 'white',
        img: air75v2White,
      },
    ],
  },
  {
    name: 'Field75 Wireless Mechanical Gaming Keyboard',
    type: 'keyboard',
    price: 159.95,
    tags: ['75', 'Field', 'Normal'],
    variant: [
      {
        color: 'electro',
        img: field75Electro,
      },
      {
        color: 'gravity',
        img: field75Gravity,
      },
      {
        color: 'noether',
        img: field75Noether,
      },
    ],
  },
  {
    name: 'Halo65 Wireless Mechanical Keyboard',
    type: 'keyboard',
    price: 119.95,
    tags: ['65', 'Halo', 'Normal'],
    variant: [
      {
        color: 'black',
        img: halo65Black,
      },
      {
        color: 'white',
        img: halo65White,
      },
    ],
  },
  {
    name: 'Air60 Wireless Mechanical Keyboard',
    type: 'keyboard',
    price: 99.95,
    tags: ['60', 'Air', 'Low'],
    variant: [
      {
        color: 'black',
        img: air60,
      },
    ],
  },
  {
    name: 'Halo75 Wireless Mechanical Keyboard',
    type: 'keyboard',
    price: 129.95,
    tags: ['75', 'Halo', 'Normal'],
    variant: [
      {
        color: 'black',
        img: halo75Black,
      },
      {
        color: 'white',
        img: halo75White,
      },
    ],
  },
  {
    name: 'Air75 Wireless Mechanical Keyboard',
    type: 'keyboard',
    price: 99.95,
    originalPrice: 109.95,
    tags: ['75', 'Air', 'Low'],
    variant: [
      {
        color: 'black',
        img: air75Base,
      },
    ],
  },
]
