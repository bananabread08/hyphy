import { useState } from 'react'
import { KBTag, profile, series, size } from '@/types/type'
import { data } from '@/data'
import { FilterWrapper, FilterGroup } from '@/components/Product/Filter'
import { ProductPreview } from '@/components/Product/ProductPreview'

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
      <div className="flex flex-col sm:flex-row ">
        <FilterWrapper>
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
        </FilterWrapper>
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
