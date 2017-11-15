export const formatPosts = data => data.map(post => (
  {
    name: post.name,
    username: post.username,
    content: post.content.replace(/<[^>]*>/g, '')
  }
));

export const formatPost = (response, postData) => {
  const { user } = postData;

  return {
    name: user.name,
    username: user.username,
    content: response.content
  };
};

export const postSorter = (a, b) => (
  new Date(b.createdAt) - new Date(a.createdAt)
);
