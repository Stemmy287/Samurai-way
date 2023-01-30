import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthVC, required} from "../../utils/validators/validators";
import {FormControlsTextarea} from "../common/FormControls/FormControlsTextarea";

export type DialogsFormType = {
    addMessage: string
}

let maxLengthFifty = maxLengthVC(50)

export const DialogsForm: FC<InjectedFormProps<DialogsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'addMessage'} component={FormControlsTextarea} validate={[required, maxLengthFifty]} placeholder={'add new message'}></Field>
            <button>add</button>
        </form>
    );
};

export const DialogsFormRedux = reduxForm<DialogsFormType>({form: 'addMessageForm'})(DialogsForm)

