export interface Food {
    id: number
    restaurant_id: number
    name: string
    price: number
    description?: string|null
    image?: string|null
    visibility: boolean
    slug: string
    created_at?: Date|null
    updated_at?: Date|null
    quantity: number
  }