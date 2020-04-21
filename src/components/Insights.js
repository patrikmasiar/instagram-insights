import React from 'react';
import style from './Insights.module.css';

const Insights = ({data = null}) => {
  const getEngagement = () => {
    let totalComments = 0;
    let totalLikes = 0;
    let engagementRatio = 0;

    if (!!data && data.mediaData) {
      

      for (var i = 0; i < 12; i++) {
        totalComments += parseInt(data.mediaData.edges[i].node.edge_media_to_comment.count);
      };

      for (var l = 0; l < 12; l++) {
        totalLikes += parseInt(data.mediaData.edges[l].node.edge_media_preview_like.count);
      };

      if (!!data && data.followersData) {
        engagementRatio = (((totalLikes + totalComments)) / data.followersData) / 12;
      }

    }

    return {
      mediaCount: data.mediaData ? parseInt(data.mediaData.count) : 0,
      totalComments: totalComments,
      totalLikes: totalLikes,
      engagementRatio: engagementRatio
    }
  }

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

      <div className={style.row}>
        <span className={style.name}>
          Media count
        </span>
        <span className={style.value}>
          {getEngagement().mediaCount}
        </span>
      </div>

      <div className={style.row}>
        <span className={style.name}>
          Total comments
        </span>
        <span className={style.value}>
          {getEngagement().totalComments}
        </span>
      </div>

      <div className={style.row}>
        <span className={style.name}>
          Total likes
        </span>
        <span className={style.value}>
          {getEngagement().totalLikes}
        </span>
      </div>

      <div className={style.row}>
        <span className={style.name}>
          Engagement ratio
        </span>
        <span className={style.value}>
          {getEngagement().engagementRatio}
        </span>
      </div>

    </div>
  )
};

export default Insights;