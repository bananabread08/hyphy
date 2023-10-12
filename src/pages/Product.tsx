import { ProductKeyboard, KBVariant } from '@/types/type'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { checkColor } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { useCart } from '@/hooks/useCart'

const ProductSubmitButton = ({
  product,
  variant,
}: {
  product: ProductKeyboard
  variant: KBVariant
}) => {
  const { state, dispatch } = useCart()
  const add = () => {
    const payload = {
      id: product.id,
      variant,
      name: product.name,
      quantity: 1,
      switch: 'Red',
    }
    dispatch({ type: 'add', payload })
  }

  const remove = () => {
    dispatch({ type: 'remove', payload: { id: product.id, variant } })
  }
  return (
    <>
      {state.find(
        (item) =>
          item.id === product.id && item.variant.color === variant.color,
      ) ? (
        <Button className="my-auto" variant="destructive" onClick={remove}>
          Remove From Cart
        </Button>
      ) : (
        <Button className="my-auto" onClick={add}>
          Add to Cart
        </Button>
      )}
    </>
  )
}

export const Product = () => {
  const data = useLoaderData() as ProductKeyboard[]
  const product = data[0]
  const [variant, setVariant] = useState(data[0].variant[0])

  return (
    <section className="grid place-items-center container p-8 ">
      <Card className="flex flex-col lg:flex-row overflow-hidden">
        <CardContent className="p-0 flex-1">
          <img
            src={variant.img}
            alt={product.name}
            className="w-full h-auto max-h-[600px] dark:brightness-75"
          ></img>
        </CardContent>
        <CardHeader className="flex-1 flex flex-col gap-4">
          <div className="h-full">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="mt-2">
              {product.originalPrice ? (
                <span className="line-through">${product.originalPrice}</span>
              ) : null}{' '}
              ${product.price}
            </CardDescription>
            <div>
              <h2 className="capitalize">{variant.color}</h2>
              {product.variant.length !== 0 ? (
                <ul className="flex gap-4">
                  {product.variant.map((v, i) => {
                    const color = checkColor(v.color)
                    return (
                      <li key={product.name + v.color}>
                        <Button
                          className={`h-8 w-8 p-0 rounded-full ${color} hover:${color} border-2 ${
                            variant.color === v.color
                              ? 'outline outline-green-400'
                              : ''
                          }`}
                          onClick={() => setVariant(data[0].variant[i])}
                        ></Button>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <></>
              )}
            </div>
            <div>
              <h2>Switches</h2>
              <div className="flex gap-2 flex-wrap">
                <Button>Red 2.0</Button>
                <Button>Brown 2.0</Button>
                <Button>Blue 2.0</Button>
              </div>
            </div>
            <div>
              <h2 className="">Nufolio Add-On</h2>
              <div className="flex gap-2 flex-wrap">
                <Button>Not Included</Button>
                <Button>Nostalgic Tan ($29)</Button>
                <Button>Lustrous Gray ($29)</Button>
              </div>
            </div>
          </div>
          <ProductSubmitButton product={product} variant={variant} />
        </CardHeader>
      </Card>
    </section>
  )
}
