// default
import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';

// custom
import useStyles from './stylesNewsCard';
import newsImage from '../../img/news.jpg';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage}, index, activeArticle }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = ref => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElRefs(refs => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if (index === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [index, activeArticle, elRefs])

    return (
        <Card ref={elRefs[index]} className={classNames(classes.card, activeArticle === index ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || newsImage} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{index + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
