import s from './Post.module.scss';
import React from 'react';

type PostPropsType = {
    message: string
    likeCounter: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img alt='' src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"/>
            {props.message}
            <div>
                <span>like {props.likeCounter}</span>
            </div>
        </div>
    );
}

export default Post;