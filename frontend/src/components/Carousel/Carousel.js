import React, { useState, useRef, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Carousel.css'


const delay = 2500;


const Carousel = ({ slides }) => {


  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, slides.length]);

  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slides.map((data, index) => {
            return (
              <div className="slide" key={index}>
                <img src={data.image} alt="slide" />
              </div>
            );
          })}
        </div>

        <div className="slideshowDots">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

  // const [current, setCurrent] = useState(0)
  
  // if(!Array.isArray(slides) || slides.length <= 0) return null
  
  // const prevSlide = () => {
  //   setCurrent(current === 0 ? slides.length-1 : current -1)
  // }

  // const nextSlide = () => {
  //   setCurrent(current === slides.length-1 ? 0 : current + 1)
  // }
  
  // return (
  //   <div className='slider'>
  //     <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} className='left'/>
  //     <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide} className='right'/>
  //     {slides.map((slide, index) => {
  //       return (
  //         <div
  //           key={index}
  //           className={index === current ? 'slide active' : 'slide'}
  //         >
  //           { index === current && <img src={slide.image} alt='slide'/> }
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
// }

export default Carousel
