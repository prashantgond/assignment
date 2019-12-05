import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Commonstyles from '../style/Style';
import { connect } from 'react-redux';
import { doLogin, loginSucess } from '../redux/actions/action';
import ErrorMsg from './ErrorMsg';

class Login extends Component {

    static navigationOptions = ({
        header: null
    })

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            validateUserId: false,
            validatepassword: false,
            isLoading: false
        }
    }


    handleLogin = () => {
        const { userName, password } = this.state;

        if (userName == '') {
            this.setState({ validateUserId: true })
        }
        else if (password == '') {
            this.setState({ validatepassword: true })
        }
        else if (userName && password) {
            this.setState({
                validateUserId: false,
                validatepassword: false,
                // isLoading: true
            }, () => {
                this.props.initiateLogin(userName, password);
            })
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.loginSuccess == true) {
            props.navigation.navigate('SearchPage');
            props.loginStatus(false);
                return {
                    // isLoading: false,
                    userName: '',
                    password:''
            };
        }
    }

    render() {
        const { validateUserId, validatepassword, userName, password, isLoading } = this.state;
        const { loginFailed, loginSuccess } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={[Commonstyles.textStyle, { fontSize: 20, fontWeight: 'bold' }]}>
                        {'LOGIN'}
                    </Text>
                </View>

                <View style={{ flex: 3 }}>

                    <View style={Commonstyles.viewInputStyle}>
                        <TextInput
                            style={Commonstyles.inputStyle}
                            placeholder={"UserName"}
                            placeholderTextColor="gray"
                            value={userName}
                            onChangeText={(value) => this.setState({ userName: value })}
                            onSubmitEditing={() => this.passwordTextInput.focus()}
                            returnKeyType={'next'}
                        />
                        {(validateUserId && !userName) ? <ErrorMsg Message={'Please Enter UserId'} /> : null}
                    </View>

                    <View style={Commonstyles.viewInputStyle}>
                        <TextInput
                            style={Commonstyles.inputStyle}
                            placeholder={"password"}
                            placeholderTextColor="gray"
                            value={password}
                            onChangeText={(value) => this.setState({ password: value })}
                            ref={(input) => { this.passwordTextInput = input; }}
                            returnKeyType={'done'}
                        />
                        {(validatepassword && !password) ? <ErrorMsg Message={'Please Enter Password'} /> : null}
                    </View>

                    {(loginFailed && loginSuccess == false) ?
                        <Text style={[Commonstyles.textStyle, { color: 'red', paddingTop: 10 }]}>
                            {'Please check User Id and Password'}
                        </Text>
                        :
                        null}
                </View>

                <View style={{ flex: 3 }}>
                    <TouchableOpacity style={[Commonstyles.buttonStyle, { alignSelf: 'center' }]}
                        onPress={() => this.handleLogin()}
                    >
                        <Text style={Commonstyles.textStyle}>
                            {'Next'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* {(isLoading) ? <ActivityIndicator size="large" color="#0000ff" /> : null} */}
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initiateLogin: (username, password) => {
            dispatch(doLogin(username, password))
        },
        loginStatus: (data) => {
            dispatch(loginSucess(data))
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