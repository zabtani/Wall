import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Typography } from '@material-ui/core';
import classes from './Story.module.css';

function Story(props) {
  return (
    <Card className={props.preview ? classes.previewStory : classes.story}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h2" component="h2">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h3" component="h3">
          By {props.author}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Story;
