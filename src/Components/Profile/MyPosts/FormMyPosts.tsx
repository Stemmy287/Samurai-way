import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControlsTextarea} from "../../common/FormControls/FormControlsTextarea";
import {maxLengthVC, required} from "../../../utils/validators/validators";

export type FormMyPostsType = {
    addNewPost: string
}

let maxLengthTen = maxLengthVC(10)

const FormMyPosts: FC<InjectedFormProps<FormMyPostsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'addNewPost'} component={FormControlsTextarea} validate={[required, maxLengthTen]}></Field>
            <button>Add</button>
        </form>
    );
};

export const FormMyPostsRedux = reduxForm<FormMyPostsType>({form: 'addNewPosts'})(FormMyPosts)

