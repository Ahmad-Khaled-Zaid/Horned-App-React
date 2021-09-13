import React from "react";
import Form from "react-bootstrap/Form";
import Horned from "../assets/data.json";
class HornForm extends React.Component {
  constructor(props) {
    super(props);
  }
  HornSelect = (event) => {
    let value = parseInt(event.target.value);
    let newArr;
    newArr = Horned.filter((element) => {
      if (element.horns === value) {
        return value;
      } else if (value === 0) {
        return Horned;
      }
    });
    this.props.newCallBack(newArr);
  };
  render() {
    return (
      <div>
        <Form >
          <Form.Label>Choose the Number Of Hornes</Form.Label>

          <Form.Control as="select" onChange={this.HornSelect}>
            <option value="0"> Number Of Hornes </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="100"> 100 </option>
          </Form.Control>
        </Form>
      </div>
    );
  }
}

export default HornForm;
