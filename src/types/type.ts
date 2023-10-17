type HyPhyProduct = {
  name: string
  price: number
  originalPrice?: number
  status?: 'new' | 'discontinued'
  id: string
}

export type KBVariant = {
  color: string
  img: string
}

export const profile = ['Low', 'Normal'] as const
export const series = ['Air', 'Halo', 'Field'] as const
export const size = ['60', '65', '75'] as const

type KBProfile = (typeof profile)[number]

type KBSeries = (typeof series)[number]

type KBSize = (typeof size)[number]

export type KBTag = KBProfile | KBSeries | KBSize

export interface ProductKeyboard extends HyPhyProduct {
  type: 'keyboard'
  variant: KBVariant[]
  tags: KBTag[]
}

type Item = Pick<ProductKeyboard, 'name' | 'id' | 'price'>

export interface CartItem extends Item {
  variant: KBVariant
  quantity: number
  switch: string
  nufolio?: 'Nostalgic Tan' | 'Lustrous Gray' | 'Not Included'
}
