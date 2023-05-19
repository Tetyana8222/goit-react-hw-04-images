import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { Container } from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Spinner from './Loader/Loader';
import Modal from './Modal/Modal';
import LoadMoreButton from './Button/Button';
import fetchApi from '../components/service/ApiService';
// import ErrorView from './SearchError';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    status: 'idle',
    totalHits: null,
    showModal: false,
    modalPicture: '',
    loading: false,
    showBtnLoadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const imageData = await fetchApi(searchQuery, page);
        this.totalHits = imageData.total;
        const imagesHits = imageData.hits;
        if (!imagesHits.length) {
          toast.warning(
            'No results for your search, please try something else.'
          );
        }
        this.setState(({ images }) => ({
          images: [...images, ...imagesHits],
          status: 'resolved',
          showBtnLoadMore: true,
        }));
      } catch (error) {
        toast.error(`Sorry something went wrong. ${error.message}`);
        this.setState({ status: 'rejected' });
      }
    }
  }
  handleSubmitForm = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.resetState();
    this.setState({ searchQuery });
  };

  handleSelectedImage = (largeImageUrl, tags) => {
    this.setState({
      selectedImage: largeImageUrl,
      alt: tags,
    });
  };
  resetState = () => {
    this.setState({
      searchQuery: '',
      images: [],
      page: 1,

      alt: null,
      status: 'idle',
      error: null,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  openModal = () => {
    this.setState({
      showModal: true,
    });
  };
  updateImglink = imgLink => {
    this.setState({ modalPicture: imgLink });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status, error } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmitForm} />
        <ToastContainer autoClose={2000} position="top-center" />
        {status === 'pending' && <Spinner />}
        {error && (
          <h1 style={{ color: 'red', textAlign: 'center' }}>{error.message}</h1>
        )}
        {images.length !== [] && (
          <ImageGallery
            images={this.state.images}
            openModal={this.openModal}
            updateImglink={this.updateImglink}
          />
        )}
        {images.length > 0 && images.length !== this.totalHits && (
          <LoadMoreButton onClick={this.loadMore} />
        )}
        {this.state.showModal && (
          <Modal onClose={this.closeModal} img={this.state.modalPicture} />
        )}
      </Container>
    );
  }
}
