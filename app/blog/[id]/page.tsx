"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Pagebar from "../../components/Pagebar/Pagebar";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../../types/type";
import "./singleBlog.css";

export default function SingleBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const current = data.find((item: BlogPost) => String(item.id) === id);
        setBlog(current);

        // Get related blogs (excluding current one)
        const related = data
          .filter((item: BlogPost) => String(item.id) !== id)
          .slice(0, 3); // Show 3 related
        setRelatedBlogs(related);
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Pagebar />
      <div className="single-blog container">
        <div className="single-blog-image">
          <Image
            src={blog.image}
            width={800}
            height={450}
            alt={blog.title}
            unoptimized
            className="single-blog-banner"
          />
        </div>

        <div className="single-blog-content">
          <h1 className="single-blog-title">{blog.title}</h1>
          <p className="single-blog-desc">{blog.description}</p>

          <div className="single-blog-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod sapien nec magna tincidunt, non commodo velit convallis.
              Vivamus porta, nunc non vestibulum tincidunt, sem sem fermentum
              est, sit amet cursus urna justo sit amet velit.
            </p>
            <p>
              Proin luctus felis at arcu volutpat gravida. In dapibus vel velit
              vel ultricies. Phasellus sit amet enim tincidunt, tempor est sit
              amet, malesuada ipsum. Aliquam erat volutpat. Duis egestas augue
              vel tincidunt bibendum.
            </p>
          </div>
        </div>
      </div>

      <div className="related-blogs container">
        <h2 className="related-heading">You Might Also Like</h2>
        <div className="related-blog-list">
          {relatedBlogs.map((related) => (
            <div key={related.id}>
              <Link href={`/blog/${related.id}`} className="related-blog-card">
                <Image
                  src={related.image}
                  alt={related.title}
                  width={300}
                  height={200}
                  unoptimized
                  className="related-blog-image"
                />
              </Link>
              <h4>{related.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
