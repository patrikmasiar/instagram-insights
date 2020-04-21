import React from 'react';
import style from './Insights.module.css';

const Insights = ({data = null}) => {

  return (
    <div className={style.wrapper}>
      <div className={style.row}>
        <span className={style.name}>
          Followers
        </span>
        <span className={style.value}>
          {data && data.followersData ? data.followersData : 0}
        </span>
      </div>

      <div className={style.row}>
        <span className={style.name}>
          Following
        </span>
        <span className={style.value}>
          {data && data.followingData ? data.followingData : 0}
        </span>
      </div>
    </div>
  )
};

export default Insights;