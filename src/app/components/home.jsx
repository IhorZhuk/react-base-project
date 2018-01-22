import React from "react";
import {connect} from 'react-redux';
import namesAPI from 'Controllers/nameDays';

class Home extends React.Component {

  componentWillMount() {
    if(typeof this.props.name  == 'undefined') {
      namesAPI.getCurrent()
    }
  }

  renderData() {
    return (
      <div className="jumbotron">
        <p className="lead">Today is nameday of:</p>
        <h1 className="display-5">{this.props.name}</h1>
      </div>
    )
  }

  render() {
    if (this.props.isLoading) {
      return <div>is loading ....</div>

    } else if (this.props.name) {
      return this.renderData()
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = state => state.names;

Home = connect(mapStateToProps)(Home)

export default Home