import air75v2Black from '../assets/air75-v2-black.webp'
import air75v2White from '../assets/air75-v2-white.webp'
import field75Electro from '../assets/field75-electro.webp'
import field75Gravity from '../assets/field75-gravity.webp'
import field75Noether from '../assets/field75-noether.webp'
import halo65Black from '../assets/halo65-black.webp'
import halo65White from '../assets/halo65-white.webp'
import air60 from '../assets/air60.webp'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import { X } from 'lucide-react'

type HyPhyProduct = {
  name: string
  price: number
  status?: 'new' | 'discontinued'
}

type KeyboardVariant = {
  color: string
  img: string
}

const profile = ['Low', 'Normal'] as const
const series = ['Air', 'Halo', 'Field'] as const
const size = ['60', '65', '75'] as const

type KBProfile = (typeof profile)[number]

type KBSeries = (typeof series)[number]

type KBSize = (typeof size)[number]

type KeyboardTags = Array<KBProfile | KBSeries | KBSize>

interface ProductKeyboard extends HyPhyProduct {
  type: 'keyboard'
  variant: KeyboardVariant[]
  tags: KeyboardTags
}

const keybs: ProductKeyboard[] = [
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
        color: 'base',
        img: air60,
      },
    ],
  },
]

const ProductPreview = ({ keyb }: { keyb: ProductKeyboard }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={keyb.variant[0].img}
            alt={keyb.name}
            className="w-full h-full dark:brightness-75"
          ></img>
          {keyb.status === 'new' ? (
            <div className="absolute top-4 left-4 bg-emerald-400 dark:bg-green-600 text-white px-2 rounded-full uppercase font-bold">
              New!
            </div>
          ) : null}
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-base">{keyb.name}</CardTitle>
        <CardDescription>Price: ${keyb.price}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export const Shop = () => {
  const [filter, setFilter] = useState<KeyboardTags>([])

  const addToFilter = (tag: KBProfile | KBSeries | KBSize) => {
    if (filter.includes(tag)) return
    setFilter(filter.concat(tag))
  }

  const removeFromFilter = (tag: KBProfile | KBSeries | KBSize) => {
    if (!filter.includes(tag)) return
    const newFilter = filter.filter((x) => x !== tag)
    setFilter(newFilter)
  }

  const filteredData =
    filter.length === 0
      ? [...keybs]
      : keybs.filter((k) => {
          return filter.some((t) => k.tags.includes(t))
        })

  return (
    <section>
      <div className="flex flex-col sm:flex-row">
        <aside className="w-full sm:w-[300px] flex flex-col items-center p-8">
          <h1 className="font-bold">Filter</h1>
          <div className="w-full">
            <h1>Keyboard Profile</h1>
            <div className="flex flex-col gap-2">
              {profile.map((t) => {
                return filter.includes(t) ? (
                  <div
                    key={t}
                    onClick={() => removeFromFilter(t)}
                    className={
                      'w-fit flex items-center gap-2 py-1 px-2 cursor-pointer rounded-lg dark:bg-sky-600 bg-sky-500 text-white'
                    }
                  >
                    <span>{t}</span>
                    <X />
                  </div>
                ) : (
                  <div
                    key={t}
                    onClick={() => addToFilter(t)}
                    className={
                      'w-fit flex items-center gap-2 py-1 px-2 cursor-pointer rounded-lg hover:bg-secondary'
                    }
                  >
                    {t}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full">
            <h1>Series</h1>
            <div className="flex flex-col gap-2">
              {series.map((t) => {
                return filter.includes(t) ? (
                  <div
                    key={t}
                    onClick={() => removeFromFilter(t)}
                    className={
                      'w-fit flex items-center gap-2 py-1 px-2 cursor-pointer rounded-lg dark:bg-sky-600 bg-sky-500 text-white'
                    }
                  >
                    <span>{t}</span>
                    <X />
                  </div>
                ) : (
                  <div
                    key={t}
                    onClick={() => addToFilter(t)}
                    className={
                      'w-fit flex items-center gap-2 py-1 px-2 cursor-pointer rounded-lg hover:bg-secondary'
                    }
                  >
                    {t}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full">
            <h1>Size</h1>
            <div className="flex flex-col gap-2">
              {size.map((t) => {
                return filter.includes(t) ? (
                  <div
                    key={t}
                    onClick={() => removeFromFilter(t)}
                    className={
                      'w-fit flex items-center gap-2 py-1 px-2 cursor-pointer rounded-lg dark:bg-sky-600 bg-sky-500 text-white'
                    }
                  >
                    <span>{t}</span>
                    <X />
                  </div>
                ) : (
                  <div
                    key={t}
                    onClick={() => addToFilter(t)}
                    className={
                      'w-fit flex items-center gap-2 py-1 px-2 cursor-pointer rounded-lg hover:bg-secondary'
                    }
                  >
                    {t}
                  </div>
                )
              })}
            </div>
          </div>
        </aside>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredData.length === 0 ? (
            <div>No products found!</div>
          ) : (
            filteredData.map((keyb) => {
              return <ProductPreview key={keyb.name} keyb={keyb} />
            })
          )}
        </div>
      </div>
      <hr />
    </section>
  )
}
