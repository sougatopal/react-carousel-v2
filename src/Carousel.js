import React from "react";

import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";

const ImgArray = [
  "https://media.kohlsimg.com/is/image/kohls/2950743_New_White?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp",
  "https://media.kohlsimg.com/is/image/kohls/2950743_ALT?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0,",
  "https://media.kohlsimg.com/is/image/kohls/2950743_ALT2?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0",
  "https://media.kohlsimg.com/is/image/kohls/2950743_Black_White_Stripe_ALT9?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0",
  "https://media.kohlsimg.com/is/image/kohls/2950743_Blue_Thin_Stripe_ALT17?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0",
  "https://media.kohlsimg.com/is/image/kohls/2950743_White_Black_Dot_ALT9?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0"
];

export default function Carousel(props) {
  // const [marginStyle, setmarginStyle] = React.useState({
  //   marginLeft: 0
  // });
  const [imgIndex, setimgIndex] = React.useState(0);

  const ImgLastIndex = ImgArray.length - 1;
  const prev = () => {
    console.log("prev clicked");
    if (imgIndex !== 0) {
      setimgIndex(imgIndex - 1);
    } else {
      setimgIndex(ImgLastIndex);
    }
  };
  const next = () => {
    console.log("next clicked");
    if (imgIndex !== ImgLastIndex) {
      setimgIndex(imgIndex + 1);
    } else {
      setimgIndex(0);
    }
  };

  const marginStyle = {
    marginLeft: imgIndex * -300
  };

  return (
    <div className="carousel-container">
      <Arrow onClick={prev} direction="prev" glyph="&#9664;" />
      <div className="carousel" style={marginStyle}>
        {ImgArray.map((elem, index) => {
          return <ImageSlide src={elem} key={index} />;
        })}
      </div>

      <Arrow onClick={next} direction="next" glyph="&#9654;" />
    </div>
  );
}
