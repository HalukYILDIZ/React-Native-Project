import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
    };
  }
  //_interval: any;
  onStart = () => {
    this._interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      });
    }, 1000);
  };
  onPause = () => {
    clearInterval(this._interval);
  };
  onReset = () => {
    this.setState({
      second: 0,
    });
    clearInterval(this._interval);
  };
  renderStartButton = () => {
    return <Button title="Start" onPress={this.onStart} />;
  };
  renderPauseButton = () => {
    return <Button title="Pause" onPress={this.onPause} />;
  };
  renderResetButton = () => {
    return <Button title="Reset" onPress={this.onReset} />;
  };

  render() {
    return (
      <View style={styles.container}>
        // <Text style={styles.secondText}>{this.state.second}</Text>
        //{' '}
        <View style={styles.buttonWrapper}>
          {this.renderStartButton()}
          {this.renderPauseButton()}
          {this.renderResetButton()}
          //{' '}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondText: {
    fontSize: 25,
  },
});
