import Link from 'next/link';
import Post from '@/types/Post'


async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 3600
    }
  });
  return await res.json();
}

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const posts = await getPosts();

  return <>
    <h1>Posts</h1>
    <ul>
      {posts.map(post =>(
        <li key={post.id}><Link href={`/post/${post.id}`}>{post.title}</Link></li>
      ))}
    </ul>
  </>
}
