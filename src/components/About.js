import React from 'react';
import './About.css';
export default function About(props) {
  
  const containerClass = props.mode === 'dark' ? 'dark-mode' : '';
  return (
    <div className={`container ${containerClass}`}>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="d-block w-100" style={{ padding: '20px' }}>
              <h3>Analyze Your Text</h3>
              <p>This application offers a robust text analysis feature that provides instant feedback on your input. With a detailed summary of word count, character count, and the ability to preview your formatted text, you can easily gauge the structure and length of your content. The tool is designed to help users refine their writing, ensuring clarity and precision in every document they create.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="d-block w-100" style={{ padding: '20px' }}>
              <h3>Free to Use</h3>
              <p>This text manipulation tool is completely free to use, with no hidden charges or subscription fees. It’s accessible to everyone, providing essential text processing features without any cost barriers. Whether you’re a student, professional, or hobbyist, you can take full advantage of all the functionalities this application has to offer at no expense.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100" style={{ padding: '20px' }}>
              <h3>Browser Compatible</h3>
              <p>Built with modern web technologies, this application is fully compatible with all major web browsers. Whether you’re using Chrome, Firefox, Safari, or Edge, you can expect seamless performance and responsiveness. The tool is also optimized for mobile browsers, allowing you to edit and analyze text on the go without any loss of functionality or user experience.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}


