/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Pagebar from "../components/Pagebar/Pagebar";
import "./blog.css";
import Image from "next/image";
import { BlogPost } from "../types/type";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter()
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <Pagebar />
      <div className="blogpage-wrapper container">
        {blogs.map((blog: BlogPost) => (
          <div className="blogpage-card" key={blog.id}>
            <div className="blogpageimage">
              <Link href={`/blog/${blog.id}`}>
                <Image
                  src={blog.image}
                  height={300}
                  width={480}
                  alt="dummy"
                  unoptimized
                  className="blogimage"
                />
              </Link>
            </div>
            <div className="blogpage-content">
              <a onClick={()=>router.push(`/blog`)}>Tips</a>
              <h4 onClick={()=>router.push(`/blog/${blog.id}`)}>{blog.title}</h4>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
