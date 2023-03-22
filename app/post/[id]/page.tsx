import Link from 'next/link';
import Post from '@/types/Post'

async function getPost(id: number): Promise<Post> {
  console.log(`POST: ${id}`)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 3600
    }
  });
  return await res.json();
}

export default async function Post({params}: {params: {id: number}}) {
  const {id} = params;
  const posts = await getPost(id);

  return <>
    <h1>{posts.title}</h1>
    <p>{posts.body}</p>
  </>
}
