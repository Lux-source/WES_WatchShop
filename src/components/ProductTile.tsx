import { Product } from '@/models/Product'
import { Types } from 'mongoose'
import Link from 'next/link'
import Image from 'next/image';

interface ProductTileProps {
  product: Product & { _id: Types.ObjectId }
}

export default function ProductTile({ product }: ProductTileProps) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="group flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
    >
      <div className="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-white dark:bg-gray-700">
      <Image
          src={product.img || 'public/img/big-bang-integral-time-onlytitanium-38-mm-soldier.png'}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-95"
        />
      </div>
      <h3 className="flex-auto mt-3 text-lg font-bold text-gray-900 dark:text-gray-100">
        {product.name}
      </h3>
      <p className="mt-1 text-base font-medium text-gray-900 dark:text-gray-200">
      {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.price) + ' €'}
      </p>
    </Link>
  )
}
