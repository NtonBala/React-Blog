import {connect} from 'react-redux';
import BlogPost from '../components/BlogPost';

const stateToProps = (state) => ({
    blogItem: state.post.entry
});

export default connect(stateToProps)(BlogPost);
