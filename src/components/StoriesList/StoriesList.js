import React from 'react';

import Story from '../Story/Story';
import classes from './StoriesList.module.css';

const StoriesList = (props) => {
  return (
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
  );
};

export default StoriesList;
