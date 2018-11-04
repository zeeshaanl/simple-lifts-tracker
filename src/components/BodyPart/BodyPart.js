import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from '../AddButton';
import EditableField from '../EditableField/EditableField';

class BodyPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editName: this.props.isEditNameState,
            bodyPartName: '',
            isEditWorkoutState: false
        }
    }
    render() {
        const { isEditNameState, name, addNewWorkout } = this.props;
        return (<div>
            <h3>
                {
                    isEditNameState ?
                        <EditableField saveFieldFunction={this.addNewBodyPart} /> :
                        name
                }
            </h3>
            <h4>
                {/* isEditWorkoutState ? 
                    <EditableField saveFieldFunction /> */}
            </h4>
            {!isEditNameState && <AddButton text="Add workout" onClick={() => addNewWorkout(name, 'workout name goes here')} />}
        </div >);
    }

    handleChange = event => {
        this.setState({ bodyPartName: event.target.value });
    }

    addNewBodyPart = (bodyPartName) => {
        this.props.addNewBodyPart(bodyPartName);
        this.setState({
            bodyPartName: ''
        })
    }
}

BodyPart.propTypes = {
    isEditNameState: PropTypes.bool,
    storeNewBodyPart: PropTypes.func,
    name: PropTypes.string
};

export default BodyPart;