import React, {Component} from 'react';

import {Button, Text} from 'native-base';

export default class RunInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
  }
  render() {
    let value = this.state.value ? this.state.value : '-';
    return (
      <Button onPress={() => {}}>
        <Text>{this.props.title}</Text>
        <Text>{value}</Text>
      </Button>
    );
  }
}
