"use client"
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import './Blog.css'
import { BlogPost } from "../../types/type";
import api from "@/customHooks/useAxios";

function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resdata = async () => {
      try {
        const resp = await api.get<BlogPost[]>("/api/blog");
        setBlogs(resp.data || []);
      } catch (err: any) {
        setError(err?.message ?? "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    resdata();
  }, []);

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
      {loading ? <p>Loading...</p> : null}
      {error ? <p style={{color:'red'}}>{error}</p> : null}
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {blogs.map((blog:BlogPost) => (
            <div className="blogcard" key={blog._id}>
                <Image src={`http://localhost:5001${blog.blog_image}`} height={240} width={350} alt="dummy" unoptimized className="blogimage"/>
                <div className="blog-content">
                <h4>{blog.blog_title}</h4>
                <p>{blog.blog_description}</p>
                <button className="learnmorebtn">Learn More</button>
                </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Blog;
