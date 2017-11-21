import BlogList from '../components/widgets/blog/BlogList';
import {connect} from 'react-redux';

const stateToProps = (state) => ({
    blogItems: state.posts.entries
});

export default connect(stateToProps)(BlogList);
