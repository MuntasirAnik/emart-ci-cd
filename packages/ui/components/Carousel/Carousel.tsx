import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "100px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ProductCarousel: React.FC = () => (
  // <Carousel autoplay>
  //   <div>
  //     <img className="h-24" src="/carousel/g-01.jpg" alt="" />
  //   </div>
  //   <div>
  //     <img className="" src="/carousel/g-02.jpg" alt="" />
  //   </div>
  //   <div>
  //     <img className="" src="/carousel/g-03.jpg" alt="" />
  //   </div>
  //   <div>
  //     <img className="" src="/carousel/g-04.jpg" alt="" />
  //   </div>
  // </Carousel>
  <Carousel autoplay>
    <div>
      <img className="h-24" src="/carousel/g-01.jpg" alt="" />
    </div>
    <div>
      <img className="" src="/carousel/g-02.jpg" alt="" />
    </div>
    <div>
      <img className="" src="/carousel/g-03.jpg" alt="" />
    </div>
    <div>
      <img className="" src="/carousel/g-04.jpg" alt="" />
    </div>
  </Carousel>
);

export default ProductCarousel;
