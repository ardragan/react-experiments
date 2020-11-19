import React from 'react';
import PropTypes from 'prop-types';
import {Trash} from 'react-bootstrap-icons';
import styled from 'styled-components';

Post.propTypes = {
    post: PropTypes.object,
};

const TitleItem = styled.div`
    font-weight: bold;
`;

const ContentItem = styled.div`
    color: blue;
`;

function Post({post}) {
    return (
        <div className="list-group-item">
            <div className="container fluid">
                <TitleItem className="row">{post.title}</TitleItem>
                <div className="row no-gutters">
                    <ContentItem className="col-8">
                        {post.content}
                    </ContentItem>
                    <div className="col-4">
                        <Trash className="float-right" icon="trash-alt" color="red"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
