import React from 'react';
import {Carousel, Caption, Item} from 'react-bootstrap'

function Slider() {
  return (
//     <div className="slider-main">
//     <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
//         <ol className="carousel-indicators">
//            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner" role="listbox">
//            <div className="carousel-item active">
//               <div className="carousel-caption d-none d-md-block">
//                  <h3>Добро пожаловать в женский коммитет</h3>
//                  <p>Это первая и самая крупная женская организация</p>
//               </div>
//            </div>
//            <div className="carousel-item">
//               <div className="carousel-caption d-none d-md-block">
//                  <h3>Best Consulting Services.</h3>
//                  <p>A Great Theme For Business Consulting</p>
//               </div>
//            </div> 
//            <div className="carousel-item" >
//               <div className="carousel-caption d-none d-md-block">
//                  <h3>Welcome to Zonebiz</h3>
//                  <p>A Great Theme For Business Consulting</p>
//               </div>
//            </div> 
//         </div>
//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//         </a>
//     </div>
// </div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/images/slider-01.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Best Consulting Services.</h3>
      <p>A Great Theme For Business Consulting</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/images/slider-02.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Best Consulting Services.</h3>
      <p>A Great Theme For Business Consulting</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/images/slider-03.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Best Consulting Services.</h3>
      <p>A Great Theme For Business Consulting</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Slider;
