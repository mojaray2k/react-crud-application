import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";

class DataTable extends Component {
  deleteItem = (id) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch("http://localhost:8096/api/students", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json())
        .then((item) => {
          this.props.deleteItemFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item._id}>
          <th scope="row">{item.fname}</th>
          <td>{item.lname}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.street1}</td>
          <td>{item.street2}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.zip}</td>
          {/* <td>{item.gpa}</td> */}
          <td>
            <div style={{ width: "110px" }}>
              <ModalForm
                buttonLabel="Edit"
                item={item}
                updateState={this.props.updateState}
              />{" "}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>
                Del
              </Button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Stree1</th>
            <th>Street2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    );
  }
}

export default DataTable;
