export const apiUrl = 'https://jsonplaceholder.typicode.com';

export const checkReponse = res => {
  return res.status === 200 ? res : res.then((err) => Promise.reject(err));
};

export function sortPosts(posts, sortDirection) {
    const sortedPosts = [...posts];
  
    sortedPosts.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  
    return sortedPosts;
}