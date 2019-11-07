import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import cadastro from './src/pages/cadastro';

const AppNavigator = createStackNavigator({

  'PagCadastro': {
    screen: cadastro,
    navigationOptions: {
      headerTransparent: 'false'
    }

  },


})

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

