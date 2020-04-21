import React, {useState} from 'react';
import style from './Form.module.css';

const Form = () => {
  const [userId, setUserId] = useState(null); //find your id (all numerical) here : https://codeofaninja.com/tools/find-instagram-user-id
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const instagramBaseUrl = 'https://www.instagram.com/graphql/query/';
  const followingQuery = `?query_hash=58712303d941c6855d4e888c5f0cd22f&variables=%7B%22id%22%3A%22${userId}%22%2C%22first%22%3A24%7D`;
  const followersQuery = `query_hash=37479f2b8209594dde7facb0d904896a&variables=%7B%22id%22%3A%22${userId}%22%2C%22first%22%3A24%7D`;
  const mediasQuery = `?query_hash=f2405b236d85e8296cf30347c9f08c2a&variables=%7B%22id%22%3A%22${userId}%22%2C%22first%22%3A12%7D`;

  const getData = async () => {
    if (userId === null) {
      return false;
    }

    setLoading(true);

    const responseFollowers = await fetch(`${instagramBaseUrl}${followersQuery}`);

    if (responseFollowers) {
      const responseFollowing = await fetch(`${instagramBaseUrl}${followingQuery}`);

      if (responseFollowing) {
        const responseMedias = await fetch(`${instagramBaseUrl}${mediasQuery}`);

        if (responseMedias) {
          console.log('Followers', responseFollowers);
          console.log('Following', responseFollowing);
          console.log('Medias', responseMedias);
        }
      }
    }

  };

  return (
    <div>
      <button type='button' onClick={getData}>
        Submit
      </button>
    </div>
  );
}

export default Form;