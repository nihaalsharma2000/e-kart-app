"use client"
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import './Blog.css'
import { BlogPost } from "../../types/type";
import useFetch from "../../customHooks/useFetch";

function Blog() {
  const [blogs, setBlogs] = useState([]);

    const { fetchData } = useFetch();
    useEffect(() => {
      const resdata = async () => {
        const data = await fetchData("/data/blogs.json");
        setBlogs(data);
      };
      resdata();
    }, [fetchData]);

  const settings = {
    infinite: true,
    dots:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
                <Image src={blog.image} height={240} width={350} alt="dummy" unoptimized className="blogimage"/>
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
