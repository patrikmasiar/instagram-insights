import React, {useState} from 'react';
import style from './Form.module.css';

const Form = () => {
  const [userId, setUserId] = useState(null); //find your id (all numerical) here : https://codeofaninja.com/tools/find-instagram-user-id
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
      return false;
    }

    setLoading(true);

    fetch(`${instagramBaseUrl}${followersQuery}`)
    .then(res => res.json())
    .then(
      (result) => {
       setFollowersData(result.data.user.edge_followed_by.count)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setLoading(false);
        setError(error)
      }
    );

    fetch(`${instagramBaseUrl}${followingQuery}`)
    .then(res => res.json())
    .then(
      (result) => {
       setFollowingData(result.data.user.edge_follow.count)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setLoading(false);
        setError(error)
      }
    );

    fetch(`${instagramBaseUrl}${mediasQuery}`)
    .then(res => res.json())
    .then(
      (result) => {
       setMediaData(result.data.user.edge_owner_to_timeline_media)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setLoading(false);
        setError(error)
      }
    );

    setLoading(false);
  };

  console.log(followersData)
  console.log(followingData)
  console.log(mediaData)

  return (
    <div>
      {isError !== false && <div>Error, please try again</div>}
      <button type='button' onClick={getData}>
        Submit
      </button>
    </div>
  );
}

export default Form;