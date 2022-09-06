import { useSelector } from "react-redux";
import { useState } from "react";
import { getCurrentUser } from '../../store/sessionReducer';
import { Redirect } from 'react-router-dom';
import Carousel from "react-elastic-carousel"
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
    <>
    
    </>
  )
}


export default Splash;