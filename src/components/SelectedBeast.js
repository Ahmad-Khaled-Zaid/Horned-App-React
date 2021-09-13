import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header>
            <Modal.Title>Horned Beasts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Text>{this.props.beastSelect.title}</Card.Text>
            <Card.Img
              variant="top"
              src={this.props.beastSelect.image_url}
              alt={this.props.beastSelect.title}
            />
            <Card.Text>{this.props.beastSelect.description}</Card.Text>

            <Card.Text>

              Number of Horns: {this.props.beastSelect.horns}
            </Card.Text>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
