import React, { Component } from 'react';
import { View, TextInput, FlatList, Text, Alert } from 'react-native';
import Commonstyles from '../style/Style';
import { connect } from 'react-redux';
import { getPlanetData, updatePlanet } from '../redux/actions/action';

class SearchPage extends Component {
    
    constructor(props) {
        super(props);
        this.isSearch = false;
        this.timeOut = 0;
        this.searchCount = 0;
    }

    renderList = (rowData) => {
        let size = 15
        if (this.isSearch) {
            size = rowData.population && rowData.population > 1000 ? 25 : 15
        }

        return (
            <View style={{ height: 40, justifyContent: 'center' }}>
                <Text style={{ fontSize: size, textAlign: 'center' }}>
                    {rowData.name}
                </Text>
            </View>
        )
    }

    componentDidMount = () => {
        this.props.getPlanet();
        setInterval(this.count, 1000);
    }

    count = () => {
        if (this.timeOut > 60) {
            this.timeOut = 0;
            this.searchCount = 0;
        }
        this.timeOut++;
    }

    handleChange = (text) => {
        const { planetData, adminName } = this.props;

        if (this.searchCount <= 15 || adminName == 'Luke Skywalker') {
            if (text) {
                let filteredData = planetData.filter((item) => {
                    return item.name.toLowerCase().includes(text.toLowerCase());
                })
                this.isSearch = true;
                this.searchCount++;
                this.props.updatePlanet(filteredData);
            } else {
                this.isSearch = false;
                this.props.updatePlanet(planetData);
            }
        }
        else {
            Alert.alert('You exceed maximum Search limit.')
        }
    }

    render() {
        const { filteredPlanet } = this.props;
        return (
            <View>
                <View style={Commonstyles.viewInputStyle}>
                    <TextInput
                        style={Commonstyles.inputStyle}
                        placeholder={"Search Name"}
                        placeholderTextColor="gray"
                        onChangeText={(value) => this.handleChange(value)}
                        returnKeyType={'done'}
                    />
                </View>
                <FlatList
                    data={filteredPlanet}
                    renderItem={({ item }) => this.renderList(item)}
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPlanet: () => {
            dispatch(getPlanetData())
        },
        updatePlanet: (data) => {
            dispatch(updatePlanet(data))
        }
    }
}

const mapStateToProps = state => {
    return {
        planetData: state.starWarReducer.planetData,
        filteredPlanet: state.starWarReducer.filteredPlanet,
        adminName: state.starWarReducer.adminName
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);