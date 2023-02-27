import React, {FC} from 'react';
import {WrappedFieldProps} from "redux-form/lib/Field";
import s from './formControls.module.scss'
import {Field} from "redux-form";

export const FormControlsTextarea: FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const FormControlsInput: FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
                <input {...input} {...props}/>
            {hasError && <span >{meta.error}</span>}
        </div>
    );
};

export const createField = <D, >(name: string, component: FC<D>, restProps?: FormPropsType, text?: string) => {
    return (
        <div className={s.fieldContainer}>
            <Field component={component} name={name} {...restProps}/> <span className={s.rememberMe}>{text}</span>
        </div>
    )

}

type FormPropsType = {
    type?: string
    validate?: Array<Function>
    placeholder?: string
}






