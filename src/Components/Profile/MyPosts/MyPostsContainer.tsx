import React from 'react';
import {addPostCreator, changeNewPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/reduxStore";


type MyPostsPropsType = {
    store: ReduxStoreType
}


export const MyPostsContainer = (props: MyPostsPropsType) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    const changeNewPost = (text: string) => {
        props.store.dispatch(changeNewPostCreator(text))
    }

    return (<MyPosts addPost={addPost} changeNewPost={changeNewPost} posts={state.profilePage.postDate} newPostText={state.profilePage.newPostText}/>);
}