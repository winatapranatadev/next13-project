import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

import type { NextApiRequest } from 'next'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextApiRequest & NextRequest) {
  /* Conditional for access api & public file */
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  /* Conditional this path can access without login */
  if (
    req.nextUrl.pathname.startsWith('/auth')
  ) {
    return NextResponse.next()
  }

  /* Get token & URL */
  const token = await getToken({ req })
  const url = req.nextUrl.clone()
  url.pathname = '/auth'
  
  /* If there's no token, redirect to login page */
  if (!token) {
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}
