import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CadPessoa from './src/pages/CadPessoa';

const AppNavigator = createStackNavigator({

  'PagCadPessoa': {
    screen: CadPessoa,
    navigationOptions: {
      headerTransparent: 'false'
    }

  },


})

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
