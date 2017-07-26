import BlogPage from 'components/BlogPage';
import MainLayout from 'components/layouts/MainLayout';
import BlogPost from 'components/BlogPost';
import {postsPath} from 'helpers/routes';

const Index = {
    path: '/',
    component: BlogPage
};

const PostRoute = {
    path: postsPath(),
    component: BlogPost
};

export default {
    component: MainLayout,
    childRoutes: [
        Index,
        PostRoute
    ]
};
