import React from 'react';

// Blog Content Data
import { WorkBlog, pirateArray } from './BlogData';

import {
  BlogContainer,
  BlogH2,
  BlogContent,
  BlogP
} from './BlogSectionElements';

const BlogSection = () => {
  console.log(pirateArray);
  return (
    <BlogContainer>
      <BlogH2>{WorkBlog}</BlogH2>
      <BlogContent>
        {pirateArray.map((p, i) => (
          <BlogP key={`pirate-${i}`}>{p}</BlogP>
        ))}
      </BlogContent>
    </BlogContainer>
  );
};

export default BlogSection;
