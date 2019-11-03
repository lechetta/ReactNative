import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import login from './src/pages/login';

const AppNavigator = createStackNavigator({

  'PagLogin': {
    screen: login,
    navigationOptions: {
      headerTransparent: 'false'
    }

  },


})

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

