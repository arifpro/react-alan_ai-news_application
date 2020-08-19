import React, { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
require('dotenv').config()

const alanKey0 = process.env.REACT_APP_ALAN_KEY;
console.log(alanKey0);
const alanKey = 'b86efccc5b881fe5c3b6157ceddd47572e956eca572e1d8b807a3e2338fdd0dc/stage';

// give me the news from cnn/bbc-news

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          console.log(articles);
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;