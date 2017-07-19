import React, {PropTypes} from 'react';

import _ from 'lodash';

import Image from './elements/Image';
import TextBox from './elements/TextBox';
import MetaInfo from './elements/MetaInfo';
import Like from './elements/Like';
import Title from './elements/Title';

import {Grid} from 'semantic-ui-react';

class BlogItem extends React.Component {
    render() {
        const {image, description, metaInfo, title, like, index} = this.props;
        return (
            React.createElement(
                Grid,
                {
                    centered: true,
                    columns: 3
                },
                React.createElement(
                    Grid.Column,
                    {
                        computer: 4,
                        tablet: 8,
                        mobile: 15
                    },
                    React.createElement(Image, {
                        src: image.src,
                        alt: image.alt,
                        width: '100%',
                        height: '100%'
                    })
                ),
                React.createElement(
                    Grid.Column,
                    {
                        computer: 12,
                        tablet: 8,
                        mobile: 15
                    },
                    React.createElement(Title, {title, index}),
                    React.createElement(TextBox, {description}),
                    React.createElement(MetaInfo, {
                        author: metaInfo.author,
                        created: metaInfo.created,
                        modified: metaInfo.modified
                    }),
                    React.createElement(Like, {likes: metaInfo.likes, like})
                )
            )
        );
    }
}

BlogItem.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    title: Title.propTypes.title,
    description: TextBox.propTypes.description,
    metaInfo: PropTypes.shape(
        _.assign({}, MetaInfo.propTypes, _.pick(Like.propTypes, ['likes']))
    ),
    like: Like.propTypes.like
};

BlogItem.defaultProps = {
    _id: '676hjh67',
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
