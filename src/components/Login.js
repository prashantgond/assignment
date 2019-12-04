import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Commonstyles from '../style/Style';
import { connect } from 'react-redux';
import { doLogin } from '../redux/actions/action';

class Login extends Component {

    static navigationOptions = ({
        header: null
    })

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }


    handleLogin = () => {
        const { userName, password } = this.state;
        this.props.initiateLogin(userName, password);
        this.props.navigation.navigate('SearchPage')
    }

    render() {
        return (
            <View >
                <View style={{ justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={Commonstyles.textStyle}>
                        {'LOGIN'}
                    </Text>
                </View>

                <View style={Commonstyles.container}>
                    <TextInput
                        style={Commonstyles.textInput}
                        placeholder={'UserName'}
                        onChangeText={(name) => this.setState({ userName: name })}
                    />
                </View>
                <View style={Commonstyles.container}>
                    <TextInput
                        style={Commonstyles.textInput}
                        placeholder={'Password'}
                        onChangeText={(pass) => this.setState({ password: pass })}
                    />
                </View>
                <TouchableOpacity style={[Commonstyles.buttonStyle, { alignSelf: 'center' }]}
                    onPress={() => this.handleLogin()}
                >
                    <Text style={Commonstyles.textStyle}>
                        {'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initiateLogin: (username, password) => {
            dispatch(doLogin(username, password))
        }
    }
}

const mapStateToProps = state => {
    return {
        loginSuccess: state.starWarReducer.loginSuccess,
        loginFailed: state.starWarReducer.loginFailed
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);