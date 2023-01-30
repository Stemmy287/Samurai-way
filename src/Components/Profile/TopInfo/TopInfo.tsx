import React, {FC} from 'react';
import {ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ava from '../../../assets/images/149071.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHook";

type TopInfoTypeProps = {
    profile: ProfileType | null
    status: string | null
    updateStatus: (title: string | null) => void
}

const TopInfo: FC<TopInfoTypeProps> = ({
                                           profile,
                                           status,
                                           updateStatus
                                       }) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large ? profile.photos.large : ava}/>
                <div><b>{profile.fullName}</b></div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default TopInfo