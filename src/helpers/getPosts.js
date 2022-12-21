const getPosts = async () => {
  
  const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
  const res = await fetch(url);
  const posts = await res.json();

  return posts;
};

export default getPosts;
