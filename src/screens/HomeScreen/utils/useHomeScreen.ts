import {useEffect, useRef, useState} from 'react';
import {PostTypes} from '../../../types/types';
import {FlatList} from 'react-native';
import axios from 'axios';

export const useHomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=20`)
      .then(response => {
        console.log('resp', response);
        const data = response.data;
        if (data?.length === 0) {
          setHasMore(false);
        } else {
          if (data?.length > 0) {
            setPosts(prevPosts => [...prevPosts, ...data]);
          }
        }
        setLoading(false);
      })
      .catch(_ => {
        setLoading(false);
      });
  }, [page]);
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };
  return {posts, flatListRef, handleLoadMore, loading, page};
};
