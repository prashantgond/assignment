import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Commonstyles from '../style/Style';

class ErrorMsg extends Component {
    render() {
        return (
            <View style={{ height: 20, width: 200, position: 'absolute', bottom: -15, right: 0, elevation: 3 }}>
                <View style={{ flex: 1.5, justifyContent: 'center', backgroundColor: 'red' }}>
                    <View style={{ flex: 1, backgroundColor: '#000', marginTop: 3 }}>
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>
                            {this.props.Message}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default ErrorMsg;