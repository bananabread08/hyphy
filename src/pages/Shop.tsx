import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import { X, Settings2 } from 'lucide-react'
import { ProductKeyboard, KBTag, profile, series, size } from '@/types/type'
import { data } from '@/data'
import { Button } from '@/components/ui/button'

const checkColor = (c: string) => {
  switch (c) {
    case 'black':
      return 'bg-black'
    case 'white':
      return 'bg-white'
    case 'electro':
      return 'bg-lime-400'
    case 'gravity':
      return 'bg-violet-400'
    case 'noether':
      return 'bg-rose-400'
    default:
      console.log(`${c}`)
  }
}

const ProductPreview = ({ keyb }: { keyb: ProductKeyboard }) => {
  const [img, setImage] = useState(keyb.variant[0])
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={img.img}
            alt={keyb.name}
            className="w-full h-full dark:brightness-75"
          ></img>
          {keyb.status === 'new' ? (
            <div className="absolute top-4 left-4 bg-emerald-400 dark:bg-green-600 text-white px-2 rounded-full uppercase font-bold">
              New!
            </div>
          ) : null}
          {keyb.variant.length > 1 ? (
            <ul className="absolute bottom-2 right-2 flex gap-2 cursor-pointer">
              {keyb.variant.map((v) => {
                const color = checkColor(v.color)
                return (
                  <li
                    key={keyb.name + v.color}
                    onMouseEnter={() => setImage(v)}
                  >
                    <Button
                      className={`h-4 w-4 p-0 rounded-sm ${color} hover:${color}`}
                    ></Button>
                  </li>
                )
              })}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-base">{keyb.name}</CardTitle>
        <CardDescription>
          {keyb.originalPrice ? (
            <span className="line-through">${keyb.originalPrice}</span>
          ) : null}{' '}
          ${keyb.price}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

type TFilter = {
  filter: KBTag[]
  add: (tag: KBTag) => void
  remove: (tag: KBTag) => void
  arr: KBTag[]
  title: string
}

const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="w-full sm:w-[300px] p-8 sm:sticky top-0 h-full">
      <div className="flex items-center gap-2">
        <Settings2 />
        <h1 className="font-bold">Filter</h1>
      </div>
      <div className="flex flex-row sm:flex-col gap-8 ">{children}</div>
    </aside>
  )
}

const FilterGroup = ({ filter, remove, add, arr, title }: TFilter) => {
  return (
    <div className="w-full">
      <h1>{title}</h1>
      <div className="flex gap-2 flex-wrap">
        {arr.map((t) => {
          return filter.includes(t) ? (
            <Button
              key={t}
              onClick={() => remove(t)}
              className={'w-fit flex items-center gap-2'}
            >
              <span>{t}</span>
              <X />
            </Button>
          ) : (
            <Button
              key={t}
              onClick={() => add(t)}
              className={'w-fit'}
              variant="secondary"
            >
              {t}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export const Shop = () => {
  const [filter, setFilter] = useState<KBTag[]>([])

  const addToFilter = (tag: KBTag) => {
    if (filter.includes(tag)) return
    setFilter(filter.concat(tag))
  }

  const removeFromFilter = (tag: KBTag) => {
    if (!filter.includes(tag)) return
    const newFilter = filter.filter((x) => x !== tag)
    setFilter(newFilter)
  }

  const filteredData =
    filter.length === 0
      ? [...data]
      : data.filter((k) => {
          return filter.every((t) => k.tags.includes(t))
        })

  return (
    <section>
      <div className="flex flex-col sm:flex-row">
        <Filter>
          <FilterGroup
            filter={filter}
            add={addToFilter}
            remove={removeFromFilter}
            arr={[...profile]}
            title="Profile"
          />
          <FilterGroup
            filter={filter}
            add={addToFilter}
            remove={removeFromFilter}
            arr={[...series]}
            title="Series"
          />
          <FilterGroup
            filter={filter}
            add={addToFilter}
            remove={removeFromFilter}
            arr={[...size]}
            title="Size"
          />
        </Filter>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredData.length === 0 ? (
            <div className="text-2xl font-semibold flex items-center justify-center col-span-3">
              No products found!
            </div>
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
