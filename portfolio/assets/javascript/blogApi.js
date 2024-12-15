const API_URL = 'https://blogappbackend-mu.vercel.app/api/blogs'; // Replace with your backend URL

// Fetch Blogs
async function fetchBlogs() {
  try {
    const token = 'your-auth-token'; // Replace with your JWT token
    const response = await fetch(API_URL, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const blogs = await response.json();
    // displayBlogs(blogs);
    console.log(blogs)
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('blogs').innerHTML = '<p>Failed to load blogs.</p>';
  }
}

// Display Blogs
// function displayBlogs(blogs) {
//   const container = document.getElementById('blogs');
//   container.innerHTML = ''; // Clear existing content

//   blogs.forEach(blog => {
//     const blogCard = document.createElement('div');
//     blogCard.className = 'blog-card';

//     const featuredImage = blog.featuredImage
//       ? `<img src="${blog.featuredImage}" alt="${blog.featuredImageAltTxt || 'Blog Image'}">`
//       : '';

//     blogCard.innerHTML = `
//       ${featuredImage}
//       <h2>${blog.metaTitle || 'Untitled Blog'}</h2>
//       <p>${blog.metaDescription || 'No description available.'}</p>
//       <p><strong>Author:</strong> ${blog.author || 'Anonymous'}</p>
//       <p><strong>Created At:</strong> ${new Date(blog.createdAt).toLocaleDateString()}</p>
//     `;

//     container.appendChild(blogCard);
//   });
// }

// Initialize
fetchBlogs();