import React from 'react';
import $ from 'jquery';
import Gallery from './Gallery.jsx';
import Carousel from './Carousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    };
  }

  // componentDidMount() {
  //   $.get('/api/images')
  //     .done((data) => {
  //       console.log(this.state.images)
  //       this.setState({ images: data });
  //     })
  //     .fail(() => {
  //       console.log('Error from get request!')
  //     })
  // }

  render() {
    return (
      <div>
        <Gallery images={this.state.images} />
        <Carousel />
      </div>
    )
  }
}

export default App;




