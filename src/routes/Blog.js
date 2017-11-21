import MainLayout from 'components/layouts/MainLayout';
import {postsPath} from 'helpers/routes';
import {fetchPosts} from '../actions/Posts';
import {fetchPost} from '../actions/Post';
import BlogPage from '../components/BlogPage';
import PostContainer from '../containers/PostContainer';

const Index = {
    path: '/',
    component: BlogPage,
    prepareData: (store) => {
        store.dispatch(fetchPosts());
    }
};

const PostRoute = {
    path: postsPath(),
    component: PostContainer,
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
