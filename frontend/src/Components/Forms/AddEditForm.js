import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddEditForm extends React.Component {
  state = {
    id: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: null,
    gpa: null,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormAdd = (e) => {
    e.preventDefault();
    fetch("http://localhost:8096/api/students", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        phone: this.state.phone,
        street1: this.state.street1,
        street2: this.state.street2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        gpa: this.state.gpa,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          this.props.addItemToState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  submitFormEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8096/api/students/`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        phone: this.state.phone,
        street1: this.state.street1,
        street2: this.state.street2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        gpa: this.state.gpa,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const {
        fname,
        lname,
        email,
        phone,
        street1,
        street2,
        city,
        state,
        zip,
        gpa,
      } = this.props.item;
      this.setState({
        fname,
        lname,
        email,
        phone,
        street1,
        street2,
        city,
        state,
        zip,
        gpa,
      });
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}
      >
        {/* React cannot handle null so if a value is null make it a "" */}
        <FormGroup>
          <Label for="fname">First Name</Label>
          <Input
            type="text"
            name="fname"
            id="fname"
            onChange={this.onChange}
            value={this.state.fname === null ? "" : this.state.fname}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lname">Last Name</Label>
          <Input
            type="text"
            name="lname"
            id="lname"
            onChange={this.onChange}
            value={this.state.lname === null ? "" : this.state.lname}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={this.onChange}
            value={this.state.email === null ? "" : this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            onChange={this.onChange}
            value={this.state.phone === null ? "" : this.state.phone}
            placeholder="ex. 555-555-5555"
          />
        </FormGroup>
        <FormGroup>
          <Label for="street1">Street1</Label>
          <Input
            type="text"
            name="street1"
            id="street1"
            onChange={this.onChange}
            value={this.state.street1 === null ? "" : this.state.street1}
          />
        </FormGroup>
        <FormGroup>
          <Label for="street2">Street2</Label>
          <Input
            type="text"
            name="street2"
            id="street2"
            onChange={this.onChange}
            value={this.state.street2 === null ? "" : this.state.street2}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            onChange={this.onChange}
            value={this.state.city === null ? "" : this.state.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            id="state"
            onChange={this.onChange}
            value={this.state.state === null ? "" : this.state.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="zip">Zip</Label>
          <Input
            type="text"
            name="zip"
            id="zip"
            onChange={this.onChange}
            value={this.state.zip === null ? "" : this.state.zip}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gpa">GPA</Label>
          <Input
            type="text"
            name="gpa"
            id="gpa"
            onChange={this.onChange}
            value={this.state.gpa === null ? "" : this.state.gpa}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm;
