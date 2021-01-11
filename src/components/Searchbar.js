import { Component } from 'react';
import s from './styles.module.css'
import PropTypes from 'prop-types'

export default class Searchbar extends Component {
  state = {
    imageName: '',
  }

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
<header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
    <button type="submit" className={s.SearchFormButton} >
      <span className={s.SearchFormButtonLabel} >Search</span>
    </button>

    <input
      className={s.SearchFormInput}
      type="text"
      name='imageName'
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.imageName}
      onChange={this.handleNameChange}
    />
  </form>
</header> 
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

