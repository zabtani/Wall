import React, { useEffect, useState, useRef } from 'react';
import classes from './ImgList.module.css';
import Spinner from '../../Spinner';
import { getRandomImgs } from '../../../api-helper';
import { Button, ImageList, ImageListItem, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
function ImgList(props) {
  const searchRef = useRef();
  const [loaded, setLoaded] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [searchInputShown, setSearchInputShown] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const { onImageChoice } = props;
  const gotResults = imgs.length > 0;
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
    const searchValue = searchRef.current.value;
    if (searchValue) {
      changeImgHandler(searchValue);
      onImageChoice(null);
      setSearchInputShown(false);
    }
  };
  const primaryButtonProps = { variant: 'contained', color: 'primary' };
  const secButtonProps = { variant: 'contained', color: 'secondary' };
  return (
    <div className={classes.optionalImgsCon} style={{ display: props.display }}>
      <div className={classes.searchBox}>
        {searchInputShown && (
          <TextField
            inputRef={searchRef}
            type="search"
            variant="outlined"
            label="search term.."
          />
        )}
        {gotResults && !searchInputShown && (
          <span className={classes.imgsListText}>
            Dont like this results? <br />
          </span>
        )}
        <div className={classes.buttonCon}>
          {!searchInputShown ? (
            <Button
              startIcon={<SearchIcon />}
              {...primaryButtonProps}
              onClick={() => setSearchInputShown(true)}
            >
              Click to search
            </Button>
          ) : (
            <>
              <Button {...primaryButtonProps} onClick={() => onSearchHandler()}>
                Search
              </Button>
              <Button
                {...secButtonProps}
                onClick={() => setSearchInputShown(false)}
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>

      {gotResults ? (
        <ImageList
          rowHeight={props.screenWidth > 650 ? 260 : 160}
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
      ) : (
        <span className={classes.imgsListText}>
          {onSearch ? 'Searching...' : 'couldent find optional images.'}
        </span>
      )}
    </div>
  );
}

export default ImgList;
