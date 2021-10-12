import React, { useCallback, useEffect } from 'react';
import Spinner from '../Spinner';
import Button from '@material-ui/core/Button';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import Story from '../Story/Story';
import classes from './StoriesList.module.css';
import { getStories } from '../../api-helper';
import useHttp from '../../hooks/use-http';
const StoriesList = (props) => {
  const { onFetchStories } = props;
  const { sendRequest: get, error, isLoading } = useHttp();
  const loadStories = useCallback(() => {
    const transformStories = (storiesObj) => {
      const loadedStories = [];
      for (const key in storiesObj) {
        let story = storiesObj[key];
        loadedStories.push({ id: key, ...story });
      }
      loadedStories.reverse();
      onFetchStories(loadedStories);
    };
    getStories(get, transformStories);
  }, [get, onFetchStories]);
  useEffect(() => {
    loadStories();
  }, [loadStories]);

  let content;
  if (props.stories.length > 0) {
    content = (
      <>
        <h2>Stories Wall</h2>
        <ul className={classes['stories-list']}>
          {props.stories.map((story) => (
            <Story
              key={story.id}
              title={story.title}
              author={story.author}
              description={story.description}
              image={story.image}
            />
          ))}
        </ul>
      </>
    );
  }
  if (props.stories.length === 0) {
    content = <p>Wall is empty!</p>;
  }
  if (error) {
    content = (
      <div>
        <p>{error}</p>
        <Button
          startIcon={<SentimentDissatisfiedIcon />}
          variant="contained"
          color="primary"
          onClick={() => loadStories()}
        >
          Try again
        </Button>
      </div>
    );
  }
  if (isLoading) {
    content = <Spinner />;
  }

  return content;
};

export default StoriesList;
