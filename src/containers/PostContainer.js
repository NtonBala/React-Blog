import {connect} from 'react-redux';
import BlogPost from '../components/BlogPost';
import {incrementLikes} from '../actions/Post';

const stateToProps = (state) => ({
    blogItem: state.post.entry,
    isRequesting: state.post.isRequesting,
    error: state.post.error
});

const actionsToProps = (dispatch, ownProps) => ({
    like: () => dispatch(incrementLikes(ownProps.params.post_id))
});

export default connect(stateToProps, actionsToProps())(BlogPost);
