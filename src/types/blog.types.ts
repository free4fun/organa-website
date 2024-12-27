export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    author: {
      name: string;
      avatar?: string;
    };
    category: string;
    tags: string[];
    comments: number;
    link: string;
  }
  
  export interface BlogCategory {
    id: string;
    name: string;
    slug: string;
    count: number;
  }