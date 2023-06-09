export const apiUrl = 'https://jsonplaceholder.typicode.com';

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