import Store from '../../../src/posts_store'

export const onRequestGet: PagesFunction = async ({ params }) => {
  const posts = new Store()
  const postId = params.id as string

  const body = JSON.stringify(await posts.find(parseInt(postId)))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}
