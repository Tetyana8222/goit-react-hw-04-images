import React, { useState, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Spinner from './Loader/Loader';

import LoadMoreButton from './Button/Button';
import fetchApi from '../components/service/ApiService';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [showBtnLoadMore, setShowBtnLoadMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchApi(searchQuery, page)
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, page]);

  const handleSubmitForm = query => {
    if (searchQuery === query) {
      return;
    }
    setImages([]);
    setPage(1);
    setLoading(true);
    setSearchQuery(query);
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmitForm} />
      <ToastContainer autoClose={2000} position="top-center" />
      {loading && <Spinner />}
      {error && (
        <h1 style={{ color: 'red', textAlign: 'center' }}>{error.message}</h1>
      )}
      <ImageGallery images={images} />
      {images.length > 0 && images.length !== totalHits && (
        <LoadMoreButton onClick={loadMore} />
      )}
    </Container>
  );
};
