import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import HomeNavigator from './HomeNavigator/HomeNavigator';
import configureStore from './redux/store';

const store = configureStore()

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <HomeNavigator />
            </SafeAreaView>
        </Provider>
    );
}

export default App;