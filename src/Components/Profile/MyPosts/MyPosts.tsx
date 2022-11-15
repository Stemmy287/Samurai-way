import s from './MyPosts.module.css';
import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {ActionType, profilePageType} from "../../../redux/state";
import {addPostCreator, changeNewPostCreator} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionType) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let post = props.profilePage.postDate.map((el, index) => <Post key={index} message={el.message}
                                                                   likeCounter={el.likeCounter}/>)
    const onclickHandler = () => {
        props.dispatch(addPostCreator())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewPostCreator(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={props.profilePage.newPostText}></textarea>
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