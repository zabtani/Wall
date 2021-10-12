import React, { useState, useEffect, useCallback } from 'react';
import StoriesList from './components/StoriesList/StoriesList';
import AddStory from './components/AddStory/AddStory';
import classes from './App.module.css';
function App() {
  const [stories, setStories] = useState([]);
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  const [error, setError] = useState(null);

  const updateDimensions = () => {
    setClientWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const onAddStoryHandler = (story) => {
    setStories((prevStories) => {
      return [story, ...prevStories];
    });
  };
  const onFetchStoriesHandler = useCallback((stories) => {
    setStories(stories);
  }, []);
  return (
    <React.Fragment>
      <section>
        {error ? (
          <p className={classes.formError}>{error}</p>
        ) : (
          <h1>Wall to all </h1>
        )}
      </section>
      <section>
        <AddStory
          screenWidth={clientWidth}
          onError={setError}
          onAddStory={onAddStoryHandler}
        />
      </section>
      <section>
        <StoriesList onFetchStories={onFetchStoriesHandler} stories={stories} />
      </section>
    </React.Fragment>
  );
}
export default App;
