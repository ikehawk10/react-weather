import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      zip: '',
      errorMessage: 'Please enter a 5-digit zip code'
    };
  }

  getValidationState = () => {
    const length = this.state.zip.length;
    if (length === 5) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange = e => {
    this.setState({ zip: e.target.value });
  }

  handleSubmit = e => {
    this.props.submitForm(this.state.zip)
    e.preventDefault();
  }

  render() {
    const errorMessage = this.state.errorMessage;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Zip Code</ControlLabel>
          <FormControl
            type="text"
            maxLength={5}
            value={this.state.value}
            placeholder="Ex. 78741"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>{errorMessage}</HelpBlock>
          <button type="submit" className="btn btn-success">Search</button>
        </FormGroup>
      </form>
    );
  }
}

export default SearchBar;