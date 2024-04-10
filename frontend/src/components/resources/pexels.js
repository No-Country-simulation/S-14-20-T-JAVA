
import { createClient } from 'pexels';

const client = createClient('kXjh4hyuM6hRDlZGG1abZfFUKq96oOtAWpm1H2xJq2ZCUwuyljqmEG6X');
const query = 'Nature';


client.photos.search({ query, per_page: 10 }).then(photos => {
    console.log(photos);
    const photo = photos.photos[0]
    photo
    const image = photo.map(photo => {
        id = photo.id
        src = photo.src.large
    })
    console.log(image)
});