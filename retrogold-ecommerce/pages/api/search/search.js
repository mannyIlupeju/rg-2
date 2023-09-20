import { getFilteredProducts, getFilteredBlogs } from '@/helpers/api-util';

async function handler(req, res) {
  if (req.method !== 'GET') {
      res.status(405).end(); // Method Not Allowed
      return;
  }

    const userSearch = req.query.search; // Assuming you're passing search as a query parameter
    if (!userSearch) {
      res.status(400).json({ error: 'Search query is missing' });
      return;
    }

    try {
      const blogs = await getFilteredBlogs(userSearch);
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching blogs.' });
    }
    
  
}

export default handler;
