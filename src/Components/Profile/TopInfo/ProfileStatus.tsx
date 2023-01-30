import {ChangeEvent, Component} from "react";

type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (title: string | null) => void
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    offEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            {this.state.editMode ? <input onChange={this.onChangeHandler} autoFocus onBlur={this.offEditMode} value={this.state.status ? this.state.status : ''}/> : <span onDoubleClick={this.onEditMode}>{this.props.status ? this.props.status : 'Type your new status'}</span>}
        </div>
    }
}