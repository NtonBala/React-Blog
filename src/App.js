import React from 'react';

import BlogPage from 'components/BlogPage';

import {blogItems} from 'constants/static/blogItems';

const App = () => (
    <BlogPage blogItems={blogItems} />
);

export default App;
