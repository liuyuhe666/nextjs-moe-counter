import type { NextRequest } from 'next/server'
import getCountByName from '@/lib/count'
import getImage from '@/lib/image'

// eslint-disable-next-line node/prefer-global/process
const len = process.env.COUNT_LEN ?? '10'
const headers = {
  'Content-Type': 'image/svg+xml',
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get('name') ?? ''
  const theme = searchParams.get('theme') ?? 'moebooru'
  const length = Number.parseInt(len)
  let count = 123456789
  if (name !== '') {
    count = await getCountByName(name)
  }
  const image = await getImage(count, theme, length)
  return new Response(`${image}`, {
    status: 200,
    headers,
  })
}
