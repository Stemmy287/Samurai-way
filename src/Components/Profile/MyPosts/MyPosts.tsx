import s from './MyPosts.module.css';
import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {ActionType, postDateType, profilePageType} from "../../../redux/store";
import {addPostCreator, changeNewPostCreator} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    posts: postDateType[]
    newPostText: string
    addPost: () => void
    changeNewPost: (text: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let post = props.posts.map((el, index) => <Post key={index} message={el.message}
                                                                   likeCounter={el.likeCounter}/>)
    const onclickHandler = () => {
        props.addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPost(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onclickHandler}>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;