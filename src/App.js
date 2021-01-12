import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'


export default class App extends Component {
  state= {
    imageName: '',
  }

  handleFormSubmit = (imageName) => {
    this.setState({ imageName});
  };



  render() {
  return (
    <div className="App">
      <Searchbar onSubmit={this.handleFormSubmit} />
      <ImageGallery imageName={this.state.imageName}/>
     
    </div>
  );
  }
}




