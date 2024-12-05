import { useEffect, useState } from 'react'

export interface Post {
  id: string
  title: string
  body: string
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    fetch('https://api.example.com/posts')
      .then((res) => res.json())
      .then(setPosts)
  }, [])

  return (
    <>
      <h1>My Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default App
