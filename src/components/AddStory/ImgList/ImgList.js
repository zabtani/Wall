import React, { useEffect, useState, useRef } from 'react';
import classes from './ImgList.module.css';
import Spinner from '../../Spinner';
import { getRandomImgs } from '../../../api-helper';
import { Button, ImageList, ImageListItem, TextField } from '@material-ui/core';

function ImgList(props) {
  const searchRef = useRef();
  const [loaded, setLoaded] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [searchInputShown, setSearchInputShown] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const { onImageChoice } = props;
  const changeImgHandler = async (term) => {
    setOnSearch(true);
    setImgs([]);
    setLoaded([]);
    const imgs = await getRandomImgs(term);
    setImgs(imgs);
    setOnSearch(false);
  };
  useEffect(() => {
    props.searchTerm && changeImgHandler(props.searchTerm);
    onImageChoice(null);
  }, [props.searchTerm, onImageChoice]);

  const chooseImgHandler = (img) => {
    props.onImageChoice(img);
  };
  const onImgLoadHandler = (id) => {
    setLoaded((prevLoaded) => {
      return [...prevLoaded, id];
    });
  };

  const onSearchHandler = () => {
    changeImgHandler(searchRef.current.value);
    setSearchInputShown(false);
  };
  const primaryButtonProps = { variant: 'contained', color: 'primary' };
  const secButtonProps = { variant: 'contained', color: 'secondary' };
  return (
    <div className={classes.optionalImgsCon} style={{ display: props.display }}>
      <div className={classes.searchBox}>
        {searchInputShown ? (
          <TextField
            inputRef={searchRef}
            variant="outlined"
            label="search term.."
          />
        ) : (
          <span className={classes.searchBoxText}>
            results based on title. donts like it? <br />
          </span>
        )}
        <div className={classes.buttonCon}>
          {!searchInputShown ? (
            <Button
              {...primaryButtonProps}
              onClick={() => setSearchInputShown(true)}
            >
              click to search
            </Button>
          ) : (
            <>
              <Button {...primaryButtonProps} onClick={() => onSearchHandler()}>
                search
              </Button>
              <Button
                {...secButtonProps}
                onClick={() => setSearchInputShown(false)}
              >
                cancel
              </Button>
            </>
          )}
        </div>
      </div>

      {imgs.length > 0 ? (
        <ImageList
          rowHeight={160}
          className={classes.optionalImgs}
          cols={props.screenWidth > 650 ? 5 : 2}
        >
          {imgs.map((img) => {
            const isChosen = props.chosenImg && props.chosenImg === img.id;
            const imgClassName = isChosen ? classes.chosenImg : '';
            return (
              <ImageListItem className={imgClassName} key={img.id} cols={1}>
                <img
                  onClick={() => chooseImgHandler(img)}
                  style={{
                    display: loaded.includes(img.id) ? 'block' : 'none',
                  }}
                  onLoad={() => onImgLoadHandler(img.id)}
                  src={img.url}
                  alt={'gallery img'}
                />
                {!loaded.includes(img.id) && <Spinner />}
              </ImageListItem>
            );
          })}
        </ImageList>
      ) : onSearch ? (
        'searching'
      ) : (
        'couldent find optional images for your story title.'
      )}
    </div>
  );
}

export default ImgList;
