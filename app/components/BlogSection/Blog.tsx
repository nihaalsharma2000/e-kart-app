"use client"
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import './Blog.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { BlogPost } from "../../types/type";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const settings = {
    infinite: false,
    dots:true,
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
    <div className="blog-wrapper container">
      <div>
        <h1 className="blog-heading">News from the blog</h1>
      </div>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {blogs.map((blog:BlogPost) => (
            <div className="blogcard" key={blog.id}>
                <Image src={blog.image} height={240} width={400} alt="dummy" unoptimized className="blogimage"/>
                <div className="blog-content">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <button className="learnmorebtn">{blog.buttonText}</button>
                </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Blog;
