import { searchSanity, searchShopify } from '@/helpers/api-util';

async function handler(req, res) {
  if (req.method !== "POST") {
      res.status(405).end(); // Method Not Allowed
      return;
  }

  const userSearch = req.body.userSearch; // Assuming you're passing search as a query parameter
  console.log(userSearch);


    try{
      const userSearch = req.body.userSearch; // Assuming you're passing search as a query parameter
      
      if (!userSearch) {
        res.status(400).json({ error: 'Search query is missing' });
        return;
      }
      
      const sanityResults = await searchSanity(userSearch);
      const shopifyResults = await searchShopify(userSearch);

      console.log(shopifyResults);
      
      
      if(sanityResults || shopifyResults){
        const combinedResults = [...sanityResults, ...shopifyResults]
        res.status(200).json(combinedResults);
      }
    }catch(error){
      console.log('Error fetching response:', error)
    }
}

export default handler;
