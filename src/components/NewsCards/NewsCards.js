// default
import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

// custom
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './stylesNewsCards';


const NewsCards = ({ articles }) => {
    const classes = useStyles();

    return (
        <Grow in>
            <Grid className={classes.container} container alignItem="stretch" spacing={3}>
                {
                    articles.map((article, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <NewsCard article={article} index={index} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grow>
    )
}

export default NewsCards;
