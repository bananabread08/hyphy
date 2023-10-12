import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { useState } from 'react'
import { ProductKeyboard } from '@/types/type'
import { checkColor } from '@/lib/utils'
import { Link } from 'react-router-dom'

export const ProductPreview = ({ keyb }: { keyb: ProductKeyboard }) => {
  const [img, setImage] = useState(keyb.variant[0])
  return (
    <Link to={`/shop/${keyb.id}`}>
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
    </Link>
  )
}
