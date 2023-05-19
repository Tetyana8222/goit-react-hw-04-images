import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Form, SearchField, SearchButton } from './SearchBar.styled';
import { FiSearch } from 'react-icons/fi';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };
  handleQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Search field is empty');
      this.setState({ searchQuery: '' });
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FiSearch style={{ marginRight: 8 }} />
          </SearchButton>
          <SearchField
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
          />
        </Form>
      </Header>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
