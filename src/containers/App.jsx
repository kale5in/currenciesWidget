import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';

class App extends Component {
  render() {
    const { currency } = this.props;

    return (
      <div>
        <MainSection currency={currency} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    currency: state.currency
  };
}

export default connect(mapState)(App);
