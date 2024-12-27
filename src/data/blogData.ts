import { BlogPost } from '../types/blog.types';

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "This is a standard blog post",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "10 Jan 2024",
    image: "/img/blog/post-1.jpg",
    author: {
      name: "John Doe",
      avatar: "/img/team/team-1.jpg"
    },
    category: "Technology",
    tags: ["Web Design", "HTML5", "CSS3"],
    comments: 3,
    link: "/blog/post-1"
  },
  {
    id: "2",
    title: "Another interesting post",
    excerpt: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus...",
    date: "15 Jan 2024",
    image: "/img/blog/post-2.jpg",
    author: {
      name: "Jane Smith",
      avatar: "/img/team/team-2.jpg"
    },
    category: "Business",
    tags: ["Marketing", "Strategy"],
    comments: 5,
    link: "/blog/post-2"
  }
];