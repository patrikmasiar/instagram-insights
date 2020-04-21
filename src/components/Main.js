import React from 'react';
import style from './Main.module.css';
import Form from './Form';

const IG_LOGO = require('../images/instagram-logo.jpeg');

const Main = () => {
  return (
    <div className={style.wrapper}>
      <img src={IG_LOGO} alt='Instagram logo' className={style.igLogo} />
      <span className={style.title}>
        Instagram insights
      </span>
      <span className={style.subtitle}>
        by <a href="" target="_blank">Masso dev.</a>
      </span>
      <Form />
    </div>
  )
};

export default Main;