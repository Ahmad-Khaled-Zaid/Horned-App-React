import React from "react";
import HornedBeasts from "./HornedBeasts";
import HornedData from "../assets/data.json";
import HornForm from "./HornForm";
import Row from "react-bootstrap/Row";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: HornedData,
    };
  }

  update = (data1) => {
    this.setState({ data: data1 });
    console.log("data",data1 );
  };
  render() {
    const { data } = this.state;
   
    return (
      <main>
        <HornForm newCallBack={this.update} />

        <Row >
          {data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                desc={item.description}
                image_url={item.image_url}
                horns={item.horns}
                alt={item.keyword}
                showModal={this.props.showModal}
                handleClose={this.props.handleClose}
              />
            );
          })}
        </Row>
      </main>
    );
  }
}

export default Main;
