import React from "react";
import {connect} from 'react-redux';
import namesAPI from 'Controllers/nameDays';

class About extends React.Component {

  componentWillMount() {
    if(typeof this.props.name  == 'undefined') {
      namesAPI.getCurrent()
    }
  } 

  render() {
    return (
      <div>
        <h3>ABOUT</h3>
        <p>
          {this.props.name}
          <br/>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, quod!
        </p> 
      </div>
    )
  }
}

const mapStateToProps = state => state.names;

About = connect(mapStateToProps)(About)

export default About