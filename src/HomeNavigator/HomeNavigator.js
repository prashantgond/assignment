import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from '../components/SearchPage';
import Login from '../components/Login';

const HomeNavigator = createStackNavigator(
    {
        Login: Login,
        SearchPage:SearchPage,
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(HomeNavigator);