import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  comments: number;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  image,
  author,
  comments,
  link
}) => {
  return (
    <article className="post post-short">
      <div className="post-date">
        <span className="day">{date.split(' ')[0]}</span>
        <span className="month">{date.split(' ')[1]}</span>
      </div>
      <div className="post-content">
        <h2 className="font-weight-semibold text-5 line-height-4 mb-2">
          <a href={link}>{title}</a>
        </h2>
        <p>{excerpt}</p>
        <div className="post-meta">
          <span>
            <i className="far fa-user"></i> By <a href="#">{author}</a>
          </span>
          <span>
            <i className="far fa-comments"></i>
            <a href="#">{comments} Comments</a>
          </span>
          <span className="d-block d-sm-inline-block float-sm-end mt-3 mt-sm-0">
            <a href={link} className="btn btn-xs btn-light text-1 text-uppercase">
              Read More
            </a>
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;