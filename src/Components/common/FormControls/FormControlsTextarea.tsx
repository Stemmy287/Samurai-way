import React, {FC} from 'react';
import {WrappedFieldProps} from "redux-form/lib/Field";
import s from './formControls.module.css'
import {required} from "../../../utils/validators/validators";
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
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const createField = <D, >(name: string, component: FC<D>, restProps?: FormPropsType, text?: string) => {
    return (
        <div>
            <Field component={component} name={name} {...restProps}/> {text}
        </div>
    )

}

type FormPropsType = {
    type?: string
    validate?: Array<Function>
    placeholder?: string
}






