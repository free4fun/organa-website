import React from 'react';
import BlogPost from './BlogPost';
import { BlogPost as BlogPostType } from '../../types/blog.types';
import Section from '../common/Section';

interface BlogSectionProps {
  title: string;
  subtitle?: string;
  posts: BlogPostType[];
}

const BlogSection: React.FC<BlogSectionProps> = ({
  title,
  subtitle,
  posts
}) => {
  return (
    <Section
      title={title}
      subtitle={subtitle}
      className="section-default border-0 my-5"
    >
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <BlogPost {...post} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col text-center">
          <a href="/blog" className="btn btn-primary btn-lg mt-4">
            View All Posts
          </a>
        </div>
      </div>
    </Section>
  );
};

export default BlogSection;