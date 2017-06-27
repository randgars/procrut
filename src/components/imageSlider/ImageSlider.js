import React from 'react';
import './imageslider.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  handleImageLoad(event) {
    
    window.console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: 'http://www.velorider.ru/bicycles/Trek/img/trek-3700.jpg'
      },
      {
        original: 'https://imgd.biker-boarder.de/detail_oxp1/92916-49-vorab.jpg'
      },
      {
        original: 'http://www.huh.fi/cat/images/BH2016/DA876.jpg'
      }
    ];

    return (
      <ImageGallery
        slideDuration={700}
        showThumbnails={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay={false}
        items={images}
        slideInterval={3000}
        onImageLoad={this.handleImageLoad}
      />
    );
  }
}

ImageSlider.displayName = 'ImageSlider';
ImageSlider.propTypes = {};
ImageSlider.defaultProps = {};

export default ImageSlider;
