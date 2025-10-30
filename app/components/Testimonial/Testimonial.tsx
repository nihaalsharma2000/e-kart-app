"use client"
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Review } from "../../types/type";
import Image from "next/image";
import './Testimonila.css'
import { FormatQuote, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
function Testimonial() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrows:<KeyboardArrowLeft />,
    nextArrows:<KeyboardArrowRight/>,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };
  return (
    <div className="testimonial-wrapper container">
      <div>
        <h1 className="testimonial-heading">Our Best Customers</h1>
      </div>
      <div className="carousel-wrappre">
        <Slider {...settings}>
          {reviews.map((review:Review) => (
            <div className="reviewcard" key={review.id}>
            <div><FormatQuote fontSize="large"/></div>
              <div className="reviewtext-card"><p>{review.reviewText}</p></div>
              <div className="profile">
                <Image src={review.profileImage} height={70} width={70} alt="dumm" unoptimized className="profilephoto"/>
                <div className="comments">
                    <h4>{review.name}</h4>
                    <p>{review.comment}</p>
                    <h5>{review.rating}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
