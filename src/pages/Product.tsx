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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useCart } from '@/hooks/useCart'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const FormSchema = z.object({
  color: z.any(),
  switch: z.enum(['Red 2.0', 'Blue 2.0', 'Brown 2.0']),
  nufolio: z.enum(['Not Included', 'Nostalgic Tan', 'Lustrous Gray']),
})

export const ProductForm = ({
  product,
  variant,
  handleVariant,
}: {
  product: ProductKeyboard
  variant: KBVariant
  handleVariant: (i: number) => void
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      color: product.variant[0].color,
      switch: 'Red 2.0',
      nufolio: 'Not Included',
    },
  })
  const { state, dispatch } = useCart()

  const remove = () => {
    dispatch({ type: 'remove', payload: { id: product.id, variant } })
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const payload = {
      id: product.id,
      variant,
      name: product.name,
      quantity: 1,
      switch: data.switch,
      nufolio: data.nufolio,
      price: product.price,
    }
    dispatch({ type: 'add', payload })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 justify-between h-full"
      >
        <FormField
          control={form.control}
          defaultValue={product.variant[0].color}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">{variant.color}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex flex-col"
                >
                  {product.variant.length !== 0 ? (
                    <ul className="flex gap-4">
                      {product.variant.map((v, i) => {
                        const color = checkColor(v.color)
                        return (
                          <li key={product.name + v.color}>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem
                                  value={v.color}
                                  className={`h-8 w-8 p-0 ${color} border-4 border-secondary text-emerald-400 data-[state=checked]:border-emerald-400`}
                                  onClick={() => handleVariant(i)}
                                  checked={v.color === variant.color}
                                />
                              </FormControl>
                            </FormItem>
                          </li>
                        )
                      })}
                    </ul>
                  ) : (
                    <></>
                  )}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="switch"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="capitalize">Switches</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={'Red 2.0'}
                    className="flex flex-wrap items-center"
                  >
                    {['Red 2.0', 'Blue 2.0', 'Brown 2.0'].map((s) => {
                      return (
                        <FormItem key={s} className="flex items-center ">
                          <FormControl>
                            <RadioGroupItem
                              value={s}
                              className="peer sr-only"
                            />
                          </FormControl>
                          <Button asChild>
                            <FormLabel className="px-3 py-2 border-4 border-primary rounded-xl peer-data-[state=checked]:border-emerald-400 cursor-pointer ">
                              {s}
                            </FormLabel>
                          </Button>
                        </FormItem>
                      )
                    })}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nufolio"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="capitalize">Nufolio Add On</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={'Not Included'}
                    className="flex items-center flex-wrap space-y-1"
                  >
                    {['Not Included', 'Nostalgic Tan', 'Lustrous Gray'].map(
                      (n) => {
                        return (
                          <FormItem key={n} className="flex items-center">
                            <FormControl>
                              <RadioGroupItem
                                value={n}
                                className="peer sr-only"
                              />
                            </FormControl>
                            <Button asChild>
                              <FormLabel className="px-3 py-2 border-4 border-primary rounded-xl peer-data-[state=checked]:border-emerald-400 cursor-pointer">{`${n}`}</FormLabel>
                            </Button>
                          </FormItem>
                        )
                      },
                    )}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {state.find(
          (item) =>
            item.id === product.id && item.variant.color === variant.color,
        ) ? (
          <Button
            type="button"
            className="mt-auto"
            variant="destructive"
            onClick={remove}
            key="delete-button"
          >
            Remove From Cart
          </Button>
        ) : (
          <Button className="mt-auto" type="submit">
            Add to Cart
          </Button>
        )}
      </form>
    </Form>
  )
}

export const Product = () => {
  const data = useLoaderData() as ProductKeyboard[]
  const product = data[0]
  const [variant, setVariant] = useState(data[0].variant[0])

  const handleVariant = (i: number) => {
    setVariant(data[0].variant[i])
  }

  return (
    <section className="grid place-items-center container p-8 ">
      <Card className="h-full flex flex-col lg:flex-row overflow-hidden">
        <CardContent className="p-0 flex-1">
          <img
            src={variant.img}
            alt={product.name}
            className="w-full h-auto max-h-[600px] dark:brightness-75"
          ></img>
        </CardContent>
        <div className="flex flex-col flex-1 p-6">
          <CardHeader className="p-0">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="mt-2">
              {product.originalPrice ? (
                <span className="line-through">${product.originalPrice}</span>
              ) : null}{' '}
              ${product.price}
            </CardDescription>
          </CardHeader>
          <ProductForm
            product={product}
            variant={variant}
            handleVariant={handleVariant}
          />
        </div>
      </Card>
    </section>
  )
}
