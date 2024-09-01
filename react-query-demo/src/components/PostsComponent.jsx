import React from 'react'
import { useQuery } from 'react-query'


// function to fetch post

const fetchPosts = async() => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   if(!response.ok) {
    throw new error('Network response was not ok')
   }
   return response.json();
};


const PostsComponent = () => {
    // use the useQuery hoo to fetch data

    const {data, error, isLoading, isError, refetch } = useQuery(['posts'], fetchPosts, {
      //cache data for 5 minutes

      cacheTime:1000 * 60 * 5,
      staleTime: 1000 * 60,
    });



    if(isLoading) {
        return <div>Loading...</div>;
    } 

    if(isError) {
        return <div>Error: {error.message}</div>;
    }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent
