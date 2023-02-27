import React, {FC} from 'react';

type ContactPropsType = {
  contactTitle: string
  contactValue: string | null
}

export const Contact:FC<ContactPropsType> = ({
  contactTitle,
  contactValue
                                             }) => {
  return (
    <div style={{paddingLeft: '10px'}}>
        <b>{contactTitle}</b> : {contactValue}
    </div>
  );
};

