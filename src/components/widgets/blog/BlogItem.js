import React, {PropTypes} from 'react';
import _ from 'lodash';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
import MetaInfo from './elements/MetaInfo';
import Like from './elements/Like';
import Title from './elements/Title';
import {Grid} from 'semantic-ui-react';

const BlogItem = ({image, description, metaInfo, title, _id, like}) => (
    <Grid centered={true} columns={3}>
        <Grid.Column
            computer={4}
            tablet={8}
            mobile={15}
        >
            <Image
                src={image.src}
                alt={image.alt}
                width='100%'
                height='100%'
            />
        </Grid.Column>
        <Grid.Column
            computer={12}
            tablet={8}
            mobile={15}
        >
            <Title title={title} _id={_id}/>
            <TextBox description={description}/>
            <MetaInfo
                author={metaInfo.author}
                created={metaInfo.created}
                modified={metaInfo.modified}
            />
            <Like
                likes={metaInfo.likes}
                like={like}
            />
        </Grid.Column>
    </Grid>
);

BlogItem.propTypes = {
    _id: Title.propTypes._id,
    image: PropTypes.shape({
        src: Image.propTypes.src,
        alt: Image.propTypes.alt
    }),
    title: Title.propTypes.title,
    description: TextBox.propTypes.description,
    metaInfo: PropTypes.shape(
        _.assign({}, MetaInfo.propTypes, _.pick(Like.propTypes, ['likes']))
    ),
    like: Like.propTypes.like
};

BlogItem.defaultProps = {
    _id: Title.defaultProps._id,
    image: Image.defaultProps,
    title: Title.defaultProps.title,
    description: TextBox.defaultProps.description,
    metaInfo: _.assign(
        {},
        MetaInfo.defaultProps,
        _.pick(Like.defaultProps, ['likes'])
    ),
    like: Like.defaultProps.like
};

export default BlogItem;
