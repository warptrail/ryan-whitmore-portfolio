import React from 'react';

// Blog Content Data
import { WorkBlog } from './BlogData';

import { BlogContainer } from './BlogSectionElements';

const BlogSection = () => {
  return (
    <BlogContainer>
      <h2>{WorkBlog}</h2>
    </BlogContainer>
  );
};

export default BlogSection;
