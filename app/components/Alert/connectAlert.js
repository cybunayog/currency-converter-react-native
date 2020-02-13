import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = WrappedContent => {
  class ConnectedAlert extends Component {
    render() {
      const {alertWithType, alert} = this.context;
      return (
        <WrappedContent
          {...this.props}
          alertWithType={alertWithType}
          alert={alert}
        />
      );
    }
  }

  ConnectedAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  };

  return hoistNonReactStatic(ConnectedAlert, WrappedContent);
};

export default connectAlert;
