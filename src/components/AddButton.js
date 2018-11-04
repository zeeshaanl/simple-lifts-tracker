import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.props.handleAddClick}>
                    + {this.props.text}
                </Button>
            </div>
        );
    }
}

AddButton.propTypes = {
    text: PropTypes.string,
    handleAddClick: PropTypes.func
};

export default AddButton;