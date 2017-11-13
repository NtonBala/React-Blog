import BlogPage from 'components/BlogPage';
import MainLayout from 'components/layouts/MainLayout';
import BlogPost from 'components/BlogPost';
import {postsPath} from 'helpers/routes';
import {fetchPosts} from '../actions/Posts';
import {fetchPost} from '../actions/Post';

const Index = {
    path: '/',
    component: BlogPage,
    prepareData: (store) => {
        store.dispatch(fetchPosts());
    }
};

const PostRoute = {
    path: postsPath(),
    component: BlogPost,
    prepareData: (store, query, params) => {
        store.dispatch(fetchPost(params.post_id));
    }
};

export default {
    component: MainLayout,
    childRoutes: [
        Index,
        PostRoute
    ]
};
