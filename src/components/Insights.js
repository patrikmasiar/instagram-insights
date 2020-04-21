import React from 'react';
import style from './Insights.module.css';
import ReactExport from "react-data-export";
import moment from 'moment';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Insights = ({data = null, isLoading = false}) => {
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
      engagementRatio: engagementRatio,
    }
  }

  const getExcelDataSet = () => {
    if (!!data && data.mediaData) {
      if (!isLoading) {
        return [
          {
            date: moment(new Date()).format('DD/MM/YYYY'),
            followers: data.followersData,
            following: data.followingData,
            mediaCount: getEngagement().mediaCount,
            totalComments: getEngagement().totalComments,
            totalLikes: getEngagement().totalLikes,
            engagementRatio: Math.round((getEngagement().engagementRatio + Number.EPSILON) * 100 ) / 100
          }
        ]
      }
    }
  };

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
          {Math.round((getEngagement().engagementRatio + Number.EPSILON) * 100 ) / 100}
        </span>
      </div>

      {(!!data && data.followersData && !isLoading) && (
        <div className={style.downloadWrapper}>
          <ExcelFile
            filename={`IG-insights-${moment(new Date()).format('YYYY-MM-DD')}`}
            element={<button
              type="button"
              className={style.downloadButton}
            >
                Export data to XLSX
              </button>
            }>
              <ExcelSheet data={getExcelDataSet()} name={`${moment(new Date()).format('YYYY-MM-DD')}`}>
                  <ExcelColumn label="Date" value="date"/>
                  <ExcelColumn label="Followers" value="followers"/>
                  <ExcelColumn label="Following" value="following"/>
                  <ExcelColumn label="Media count" value="mediaCount"/>
                  <ExcelColumn label="Total comments" value="totalComments"/>
                  <ExcelColumn label="Total likes" value="totalLikes"/>
                  <ExcelColumn label="Engagement ratio" value="engagementRatio"/>
              </ExcelSheet>
          </ExcelFile>
        </div>
      )}
    </div>
  )
};

export default Insights;