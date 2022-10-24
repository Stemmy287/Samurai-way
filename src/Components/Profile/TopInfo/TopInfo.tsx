import React from 'react';
import s from './TopInfo.module.css'

type TopInfoTypeProps = {
    topImg: string
    info: string
}

const TopInfo = (props: TopInfoTypeProps) => {
    return (
        <div>
            <div>
                <img src={props.topImg}/>
            </div>
            <div className={s.info}>
                {props.info}
            </div>
        </div>
    )
}

export default TopInfo