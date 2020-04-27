import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { CSVLink } from "react-csv";
import ModalForm from "../Components/Modals/Modal";
import DataTable from "../Components/Tables/DataTable";

class Database extends Component {
  state = { items: [] };

  getItems() {
    fetch("http://localhost:8096/api/students")
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch((err) => console.log(err));
  }

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(
      (data) => data._id === item._id
    );
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1),
    ];
    this.setState({ items: newArray });
  };

  deleteItemFromState = (id) => {
    const { items } = this.state;
    const updatedItems = items.filter((item) => item._id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {
    this.getItems();
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{ float: "left", marginRight: "10px" }}
              className="btn btn-primary"
              data={this.state.items}
            >
              Download CSV
            </CSVLink>
            <ModalForm
              buttonLabel="Add Item"
              addItemToState={this.addItemToState}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Database;
