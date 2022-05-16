import React, { useEffect, useState } from 'react'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons"
import "./carousel.css"


const Carousel = ({ image }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }

  }, [index, image])
  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);

    return () => {
      clearInterval(slider)
    }
  },[index])
  return (
    <div className="section">
      <div className="section-center">
        {image.map((images, indexImg) => {
          let position = "nextSlide";
          if (indexImg === index) {
            position = "activeSlide";
          }

          if (
            indexImg === index - 1 ||
            (index === 0 && indexImg === image.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={indexImg}>
              <img src={images} alt="banner_images" className="banner-img" />
            </article>
          );
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          {" "}
          <ArrowBackIos />
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          {" "}
          <ArrowForwardIos />
        </p>
      </div>
    </div>
  );
}

export default Carousel






//  <img
//         src="https://cms-contents.pharmeasy.in/banner/ebc0b3f5f5c-MEDI40_Dweb.jpg?dim=1440x0&dpr=1&q=100"
//         alt="img"
//       />
//       <img
//         src="https://cms-contents.pharmeasy.in/banner/c4f97ea0e9c-Entry_Dweb.jpg?dim=1440x0&dpr=1&q=100"
//         alt="img1"
//       />
//       <img
//         src="https://cms-contents.pharmeasy.in/banner/b9b34dbc96d-GETCSH_DWEB.jpg?dim=1440x0&dpr=1&q=100"
//         alt="img"
//       />
//       <img
//         src="https://cms-contents.pharmeasy.in/banner/292c6ecfc13-psp_dweb_may.jpg?dim=1440x0&dpr=1&q=100"
//         alt="img"
//       />
//       <img
//         src="https://cms-contents.pharmeasy.in/banner/b287e359a6f-Dweb.jpg?dim=1440x0&dpr=1&q=100"
//         alt="img"
//       />
