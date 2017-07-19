import _ from 'lodash';
import update from 'immutability-helper';

export const getNewBlogItems = (blogItems, _id) => {
    const index = _.findIndex(blogItems, {_id});

    const newBlogItems = update(
        blogItems,
        {[index]: {metaInfo: {likes: {$apply: x => x + 1}}}}
    );

    return newBlogItems;
};
