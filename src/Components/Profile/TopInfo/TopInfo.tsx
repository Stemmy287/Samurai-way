import React from 'react';
import s from './TopInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";

type TopInfoTypeProps = {
    profile: ProfileType | null
}

const TopInfo = (props: TopInfoTypeProps) => {
    console.log(props.profile)
    if (!props.profile) {
        return  <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
                <div><b>{props.profile.fullName}</b></div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default TopInfo