import React from 'react';
import {addPostCreator, changeNewPostCreator, postDateType, ProfilePageType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppReduxType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: postDateType[]
    newPostText: string
}

type mapDispatchToProps = {
    addPost: () => void,
    changeNewPost: (text: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state: AppReduxType): mapStateToPropsType => {
    return {
        posts: state.profilePage.postDate,
        newPostText : state.profilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        changeNewPost: (text: string) => {
            dispatch(changeNewPostCreator(text))
        }
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)