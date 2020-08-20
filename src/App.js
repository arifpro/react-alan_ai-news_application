// default
import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

// custom
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './stylesApp';

const alanLogoSrc = 'https://alan.app/voice/images/previews/preview.jpg';
require('dotenv').config()


const alanKey0 = process.env.REACT_APP_ALAN_KEY;
console.log(alanKey0);
const alanKey = 'b86efccc5b881fe5c3b6157ceddd47572e956eca572e1d8b807a3e2338fdd0dc/stage';

// give me the news from cnn/bbc-news

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        } else if (command === 'highlight') {
          setActiveArticle(prevActiveArticle => prevActiveArticle + 1);
        }
      }
    })
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={alanLogoSrc} alt="Alan Logo" className={classes.alanLogo} />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;