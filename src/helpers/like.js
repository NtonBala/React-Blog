import _ from 'lodash';
import update from 'immutability-helper';

export const updateItemsMetaInfo = (blogItems, metaInfo, setNewState, _id) => {
    const index = _.findIndex(blogItems, {_id});

    const newBlogItems = update(
        blogItems,
        {[index]: {$merge: {metaInfo}}}
    );

    setNewState(newBlogItems);
};

export const updateItemMetaInfo = (blogItem, metaInfo, setNewState) => {
    const newBlogItem = update(
        blogItem,
        {$merge: {metaInfo}}
    );

    setNewState(newBlogItem);
};
