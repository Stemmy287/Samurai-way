import React from 'react';
import {ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ava from '../../../assets/images/149071.png'

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
                <img src={props.profile.photos.large ? props.profile.photos.large : ava }/>
                <div><b>{props.profile.fullName}</b></div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default TopInfo