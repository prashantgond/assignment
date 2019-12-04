import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

const Commonstyles = StyleSheet.create({

    container: {
        width: 350,
        height: 60,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        marginVertical:10,
        alignSelf: 'center',
    },
    textInput: {
        fontSize: 14,
        color: '#000',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        flex: 8,
    },
    textInputLabel: {
        position: 'absolute',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        color: '#000',
        fontSize: 11,
    },
    errorStyle: {
        borderColor: "red",
        borderWidth: 1,
    },
    buttonStyle: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems:'center',
        width: "80%",
        height: 60,
    },
    textStyle: {
        fontSize: 15,
        color: '#000',
        textAlign:'center'
    }
})

export default Commonstyles;