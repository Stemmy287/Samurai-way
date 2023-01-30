import s from './MyPosts.module.css';
import React, {memo} from 'react';
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";
import {FormMyPostsRedux, FormMyPostsType} from "./FormMyPosts";

const MyPosts = memo((props: MyPostsPropsType) => {

    let post = props.posts.map((el, index) => <Post key={index} message={el.message}
                                                                   likeCounter={el.likeCounter}/>)

    const AddNewPost = (value: FormMyPostsType) => {
        props.addPost(value.addNewPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <FormMyPostsRedux onSubmit={AddNewPost}/>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
})

export default MyPosts;