import type { CartItem } from '@/types/cart'
import { products } from './products'

export const mockCart: CartItem[] = [
  {
    product: products[0],
    quantity: 2,
  },
  {
    product: products[3],
    quantity: 1,
  },
]