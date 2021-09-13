import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0

    };

  }
  increaseHorneVotes = () => {
    this.setState({
      votes: this.state.votes + 1

    });


    this.props.showModal(this.props.title);

  }




  render() {


    return (
      <div>

        <Card style={{ width: '30rem', border: 'solid',  }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.increaseHorneVotes} alt={this.props.alt} />
          <Card.Body>
            <Card.Title>The Title is {this.props.title}</Card.Title>
            <Card.Text>
              number of horns {this.props.horns}
            </Card.Text>
            <Card.Text>
              description:{this.props.desc}
            </Card.Text>
            <Card.Text>
               votes : {this.state.votes} 💓

            </Card.Text>
            <Button onClick={this.increaseHorneVotes}>show more information</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default HornedBeasts;
