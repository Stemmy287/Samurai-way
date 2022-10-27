import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import {postDateType} from "../../../redux/state";



type MyPostsPropsType = {
    postDate: postDateType[]
}


const MyPosts = (props: MyPostsPropsType) => {

    let post = props.postDate.map((el, index) => <Post key={index}  message={el.message} likeCounter={el.likeCounter}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;