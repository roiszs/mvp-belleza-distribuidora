export type ProductBadge = 'Nuevo' | 'Oferta' | 'Mayoreo' | 'Top ventas'

export interface ProductVolumeTier {
minQty: number
label: string
price: number
}

export interface Product {
id: string
slug: string
name: string
category: string
subcategory: string
brand: string
shortDescription: string
description: string
price: number
compareAtPrice?: number
wholesalePrice?: number
volumeTiers?: ProductVolumeTier[]
badge?: ProductBadge
isNew?: boolean
isOnSale?: boolean
isWholesale?: boolean
stock: number
sku: string
images: string[]
sizeLabel?: string
weightLabel?: string
presentation?: string
}