import { Settings2, X } from 'lucide-react'
import { KBTag } from '@/types/type'
import { Button } from '../ui/button'

type TFilter = {
  filter: KBTag[]
  add: (tag: KBTag) => void
  remove: (tag: KBTag) => void
  arr: KBTag[]
  title: string
}

export const FilterWrapper = ({ children }: { children: React.ReactNode }) => {
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

export const FilterGroup = ({ filter, remove, add, arr, title }: TFilter) => {
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
