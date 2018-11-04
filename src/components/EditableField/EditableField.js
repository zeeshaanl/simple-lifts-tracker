import React, { Component } from 'react';
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from 'prop-types';

class EditableField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValue: ''
        }
    }
    render() {
        return <FormControl>
            <Input
                id="name-simple"
                value={this.state.fieldValue}
                onChange={this.handleChange}
                onKeyDown={(event) => event.keyCode === 13 && this.saveField()}
                onBlur={this.saveField}
            />
        </FormControl>;
    }

    saveField = () => {
        this.props.saveFieldFunction(this.state.fieldValue);
    }

    handleChange = event => {
        this.setState({ fieldValue: event.target.value });
    }
}

EditableField.propTypes = {
    saveFieldFunction: PropTypes.func
}

export default EditableField;