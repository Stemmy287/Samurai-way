import React from 'react';
import {addPostCreator, changeNewPostCreator, postDateType, ProfilePageType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppReduxType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: postDateType[]
}

type mapDispatchToProps = {
    addPost: (newText: string) => void,
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state: AppReduxType): mapStateToPropsType => {
    return {
        posts: state.profilePage.postDate,
    }

}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: (newText: string) => {
            dispatch(addPostCreator(newText))
        }
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)