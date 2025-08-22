import { NextResponse } from 'next/server'
import { getProductById } from '@/lib/data'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = getProductById(params.id)
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}