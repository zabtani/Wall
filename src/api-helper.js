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

export const getStories = (getFunc, transformFunc) => {
  getFunc(
    {
      url: 'https://react-http-de690-default-rtdb.firebaseio.com/stories.json',
    },
    transformFunc
  );
};

export const postStory = (postFunc, createFunc, story) => {
  postFunc(
    {
      url: 'https://react-http-de690-default-rtdb.firebaseio.com/stories.json',
      method: 'POST',
      body: story,
      headers: {
        'Content-Type': 'application/json',
      },
    },
    createFunc.bind(null, story)
  );
};
