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
    clientId: '689134666959-3ib6ihtalmdmivi4hmatoefba50a5duk.apps.googleusercontent.com',
    provider: 'google',
    redirectUri: process.env.NYLAS_REDIRECT_URI,
    loginHint: 'vava1lantern7@gmail.com',
    
  })


  cookieStore.set('nylas_code_challenge', data.secretHash)

  console.log(data.url)
  const token = cookieStore.get('nylas_code_challenge')

  const encodedToken = btoa(token + ":");

  console.log('Token:', token)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${encodedToken}` 
    // Add any other headers you need
  }

  const newRequest = new Request(data.url, {
    method: 'GET',
    headers: new Headers(headers),
  })

  return fetch(newRequest)
}