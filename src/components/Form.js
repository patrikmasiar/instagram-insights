import React, {useState} from 'react';
import style from './Form.module.css';
import axios from 'axios';

const Form = () => {
  const [userId, setUserId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [followersData, setFollowersData] = useState(null);
  const [followingData, setFollowingData] = useState(null);
  const [mediaData, setMediaData] = useState(null);

  const instagramBaseUrl = 'https://www.instagram.com/graphql/query/';
  const followingQuery = `?query_hash=58712303d941c6855d4e888c5f0cd22f&variables=%7B%22id%22%3A%22${userId}%22%2C%22first%22%3A24%7D`;
  const followersQuery = `?query_hash=37479f2b8209594dde7facb0d904896a&variables=%7B%22id%22%3A%22${userId}%22%2C%22first%22%3A24%7D`;
  const mediasQuery = `?query_hash=f2405b236d85e8296cf30347c9f08c2a&variables=%7B%22id%22%3A%22${userId}%22%2C%22first%22%3A12%7D`;

  const getData = async () => {
    if (userId === null) {
      alert('Insert User ID, please.');
      return false;
    }

    setLoading(true);

    const followersResponse = await axios.get(`${instagramBaseUrl}${followersQuery}`);

    if (followersResponse && followersResponse.data.status === 'ok') {
      setFollowersData(followersResponse.data.data.user.edge_followed_by.count)

      const followingResponse = await axios.get(`${instagramBaseUrl}${followingQuery}`);

      if (followingResponse && followingResponse.data.status === 'ok') {
        setFollowingData(followingResponse.data.data.user.edge_follow.count)

        const mediaResponse = await axios.get(`${instagramBaseUrl}${mediasQuery}`);

        if (mediaResponse && mediaResponse.data.status === 'ok') {
          setMediaData(mediaResponse.data.data.user.edge_owner_to_timeline_media)
        }
      }
    }

    setLoading(false);
  };

  return (
    <div className={style.wrapper}>
      {isError !== false && <div>Error, please try again</div>}
      <span className={style.label}>
        User ID <a href="https://codeofaninja.com/tools/find-instagram-user-id" target="_blank"><i>generate here</i></a>
      </span>
      <input
        type='text'
        required={true}
        value={userId === null ? '' : userId}
        onChange={e => setUserId(e.target.value)}
        className={style.input}
        placeholder="User ID ..."
      />
      <button type='button' onClick={getData} className={style.button}>
        Submit
      </button>
    </div>
  );
}

export default Form;