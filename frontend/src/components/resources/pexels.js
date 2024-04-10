import { createClient } from 'pexels';

const client = createClient('kXjh4hyuM6hRDlZGG1abZfFUKq96oOtAWpm1H2xJq2ZCUwuyljqmEG6X');

const fetchPhotos = async (query = 'Nature', perPage = 10) => {
  try {
    const response = await client.photos.search({ query, per_page: perPage });
    return response.photos;
  } catch (error) {
    console.error('Error fetching photos from Pexels:', error);
    throw error;
  }
};

export default fetchPhotos;