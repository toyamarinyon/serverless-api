import Store from '../../../src/posts_store'
export const onRequestGet: PagesFunction = async () => {
  const posts = new Store()
  const body = JSON.stringify(await posts.all())
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}
