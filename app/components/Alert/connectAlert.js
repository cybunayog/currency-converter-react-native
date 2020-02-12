import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = WrappedContent => {
  class ConnectedAlert extends Component {
    render() {
      return (
        <WrappedContent
          {...this.props}
          alertWithType={this.context.alertWithType}
          alert={this.context.alert}
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
