import { Type } from "./type.model"


export interface Restaurant {
    id: number
    name: string
    user_id: number|null
    address: string
    image: string|null
    p_iva: string
    slug: string
    description: string|null
    created_at: Date|null
    updated_at: Date|null
    types: Type[]
  }