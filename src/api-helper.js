import { createApi } from 'unsplash-js';
import { UNSPLASH_API_KEY } from './api-config';
const unsplash = createApi({
  accessKey: UNSPLASH_API_KEY,
});

export const getRandomImgs = async (searchTerm) => {
  let result = [];
  try {
    const imgsData = await unsplash.search.getPhotos({
      query: searchTerm,
    });
    imgsData.response.results.forEach((img) => {
      result.push({ id: img.id, url: img.urls.regular });
    });
  } catch (e) {
    console.log(e);
  }
  return result;
};
