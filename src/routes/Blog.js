import BlogPage from 'components/BlogPage';
import MainLayout from 'components/layouts/MainLayout';
import Post from 'components/Post';
import {postsPath} from 'helpers/routes';

const Index = {
    path: '/',
    component: BlogPage
};

const PostRoute = {
    path: postsPath(),
    component: Post
};

export default {
    component: MainLayout,
    childRoutes: [
        Index,
        PostRoute
    ]
};
