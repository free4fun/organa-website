import React from 'react';

interface RecentPost {
  title: string;
  date: string;
  link: string;
}

const FooterPosts: React.FC = () => {
  const recentPosts: RecentPost[] = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "November 6, 2024",
      link: "#"
    },
    {
      title: "Consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      date: "November 6, 2024",
      link: "#"
    },
    {
      title: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
      date: "November 6, 2024",
      link: "#"
    }
  ];

  return (
    <div className="col-lg-3">
      <h4 className="font-weight-bold text-3">RECENT POSTS</h4>
      <ul className="simple-post-list">
        {recentPosts.map((post, index) => (
          <li key={index}>
            <div className="post-info">
              <a href={post.link}>{post.title}</a>
              <div className="post-meta">
                {post.date}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPosts;