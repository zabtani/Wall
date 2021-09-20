import React, { useState, useCallback, useEffect } from 'react';
import Spinner from './components/Spinner';
import StoriesList from './components/StoriesList/StoriesList';
import AddStory from './components/AddStory/AddStory';
import './App.css';
function App() {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setClientWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let content;
  const fetchStoriesHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://react-http-de690-default-rtdb.firebaseio.com/stories.json'
      );

      const data = await response.json();
      let loadedStories = [];
      for (const key in data) {
        let story = data[key];
        loadedStories.push({ id: key, ...story });
      }

      setStories(loadedStories.reverse());
    } catch (error) {
      setError('Failed to reach the server');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchStoriesHandler();
  }, [fetchStoriesHandler]);

  const addStoryHandler = async (story) => {
    try {
      await fetch(
        'https://react-http-de690-default-rtdb.firebaseio.com/stories.json',
        {
          method: 'POST',
          body: JSON.stringify(story),
          'Content-Type': 'application/json',
        }
      );

      fetchStoriesHandler();
    } catch (error) {
      setError('Failed to save movie on server');
    }
  };
  if (stories.length > 0) {
    content = (
      <>
        <h2>Users Stories</h2>
        <StoriesList stories={stories} />
      </>
    );
  }
  if (stories.length === 0) {
    content = <p>Wall is empty!</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <Spinner />;
  }
  return (
    <React.Fragment>
      <section>
        <h1>Wall to all </h1>
      </section>
      <section>
        <AddStory screenWidth={clientWidth} onAddStory={addStoryHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
export default App;
