import React from 'react';
import styled from 'styled-components';

const Comment = ({data}: {data: any}) => {
    return (
        <CommentWrapper>
            <Content>
                <p className = 'approach'>Approach <span>{data.type}</span></p>
                <p className = 'body'>{data.description}</p>
            </Content>
        </CommentWrapper>
    )
}

export default Comment;

const CommentWrapper = styled.div`
margin-top: 20px;
background: #4E4F57;
border-radius: 10px;
width: 100%;
color: white;

.approach {
    display: inline-block;

    span {
        color: #744EFF;
    }
}

.time {
    display: inline-block;
    margin-left: 5px;
    opacity: .3;
}




`;

const Content = styled.div`
padding: 1rem;
`