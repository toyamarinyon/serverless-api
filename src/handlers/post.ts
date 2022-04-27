import { Request } from 'itty-router'
import Store from '../posts_store'

const Post = async (request: Request): Promise<Response> => {
  const posts = new Store()
  if (request.params == null) {
    throw new Error('Missing parameter')
  }
  const postId = request.params.id

  const body = JSON.stringify(await posts.find(parseInt(postId)))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}

export default Post
