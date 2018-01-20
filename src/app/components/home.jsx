import React from "react";
import {connect} from 'react-redux';

class Home extends React.Component {

  onFirstButtonClick = () => {
    store.dispatch({
      type: 'MAIN',
      message: 'New message'
    })
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>

        <button onClick={this.onFirstButtonClick}>Main Reducer</button>

        <div>{this.props.main}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    main: state.main.message,
    second: state.second.message
  }
};

Home = connect(mapStateToProps)(Home)

export default Home