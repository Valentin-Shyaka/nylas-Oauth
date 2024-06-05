import { cookies } from 'next/headers'
import Nylas from "nylas";

const nylas = new Nylas({
  apiKey: process.env.NYLAS_API_KEY,
  apiUri: process.env.NYLAS_API_URI
})

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
  const cookieStore = cookies()

  const data = nylas.auth.urlForOAuth2PKCE({
    clientId: '453995621555-6hqanqi6rp14b2jp5si1pda1qh9h2lua.apps.googleusercontent.com',
    provider: 'google',
    redirectUri: 'https://nylas-oauth.vercel.app/',
    loginHint: 'vava1lantern7@gmail.com',
  })

  cookieStore.set('nylas_code_challenge', data.secretHash)

  return Response.redirect(data.url)
}