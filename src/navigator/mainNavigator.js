import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen314594Navigator from '../features/BlankScreen314594/navigator';
import BlankScreen214571Navigator from '../features/BlankScreen214571/navigator';
import BlankScreen114570Navigator from '../features/BlankScreen114570/navigator';
import BlankScreen014329Navigator from '../features/BlankScreen014329/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen314594: { screen: BlankScreen314594Navigator },
BlankScreen214571: { screen: BlankScreen214571Navigator },
BlankScreen114570: { screen: BlankScreen114570Navigator },
BlankScreen014329: { screen: BlankScreen014329Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
