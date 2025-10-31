/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import "./blog.css";
import Image from "next/image";
import { BlogPost } from "../types/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useFetch from "../customHooks/useFetch";

function page() {
  const router = useRouter()
  const [blogs, setBlogs] = useState([]);

    const { fetchData } = useFetch();
    useEffect(() => {
      const resdata = async () => {
        const data = await fetchData("data/blogs.json");
        setBlogs(data);
      };
      resdata();
    }, [fetchData]);
  
  return (
    <div>
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
