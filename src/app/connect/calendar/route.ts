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
    clientId:'689134666959-3ib6ihtalmdmivi4hmatoefba50a5duk.apps.googleusercontent.com',
    provider:'google',
    redirectUri:'https://api.eu.nylas.com/v3/connect/callback',
    loginHint:'example@gmail.com',
  })

  cookieStore.set('nylas_code_challenge', data.secretHash)

  return Response.redirect(data.url)
}