import axios from 'axios';
import {useEffect, useState} from 'react';
import {PostTypes, commentTypes, userTypes} from '../../../types/types';

export const usePostDetails = (post: PostTypes) => {
  const [comments, setComments] = useState<commentTypes[] | []>([]);
  const [user, setUser] = useState<userTypes | {}>({});
  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/posts/${post.id}/comments`)
      .then(response => {
        setComments(response.data);
      })
      .catch(_ => {});

    axios
      .get(`https://gorest.co.in/public/v2/users/${post.user_id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(_ => {});
  }, [post]);
  return {comments, user};
};
