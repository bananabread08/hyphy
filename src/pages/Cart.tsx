import { useCart } from '@/hooks/useCart'

export const Cart = () => {
  const { state } = useCart()
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {state.map((item) => {
          return (
            <li key={item.id + item.variant.color}>
              <img src={item.variant.img}></img>
              <h2>{item.name}</h2>
              <p>{item.variant.color}</p>
              <p>{item.quantity}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
