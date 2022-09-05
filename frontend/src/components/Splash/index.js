import { useSelector } from "react-redux";
import { useState } from "react";
import { getCurrentUser } from '../../store/sessionReducer';
import { Redirect } from 'react-router-dom';
import './index.scss'

const Splash = () => {

  const [currentImg, setCurrentImg] = useState(1);

  const sessionUser = useSelector(getCurrentUser);

  if (sessionUser) return <Redirect to="/pets" />;


  // const splashImg = () => {
  //   switch (currentImg) {
  //     case 1:
  //       return <img src='assets/images/img1.jpg' alt="dogs"/>
  //     case 2:
  //       return <img src='assets/images/img2.jpg'alt="dogs2"/>
  //     case 3:
  //       return <img src='assets/images/img3.jpg' alt="dogs3"/>
  //   }
  // }

  // const startCarousel = async() => {
  //   const delay = (duration) => {
  //     return new Promise((resolve) => {
  //       setTimeout(resolve, duration);
  //     });
  //   } 
  //   await delay(2000);
  //   let nextImg = currentImg === 3 ? 1 : currentImg + 1
  //   setCurrentImg(nextImg)

  // }

  // startCarousel();


  return(
    <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>
  )
}


export default Splash;