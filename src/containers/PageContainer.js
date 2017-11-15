import {connect} from 'react-redux';
import BlogPage from '../components/BlogPage';
import {flowRight} from 'lodash/util';
import {incrementLikes} from '../actions/Posts';

const stateToProps = (state) => ({
    blogItems: state.posts.entries,
    isRequesting: state.posts.isRequesting,
    error: state.posts.error
});

const actionsToProps = (dispatch) => ({
    like: flowRight(dispatch, incrementLikes)
});

export default connect(stateToProps, actionsToProps)(BlogPage);
