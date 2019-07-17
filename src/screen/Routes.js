import {createStackNavigator, createDrawerNavigator} from "react-navigation";
import {Easing,Animated} from "react-native";

import Home from "./Home";
import SlideMenu from '../slideMenu/SlideMenu';
import IndiaHome from '../screen/IndiaHome';
import Details from '../screen/Details';
import AdminPost from '../screen/AdminPost';
import AdminPanel from '../screen/AdminPannel';
import Story from '../screen/Story';
import Profile from '../screen/Profile';

const transitionConfig = () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(10)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
  
        const thisSceneIndex = scene.index;
        const width = layout.initWidth;
  
        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0]
        });
  
        return { transform: [{ translateX }] };
      }
    };
  };

const AppNavigator = createStackNavigator(
  {

    Home: { screen: Home },
    SlideMenu: { screen: SlideMenu},
    IndiaHome: { screen: IndiaHome},
    Details: { screen: Details},
    AdminPanel: { screen: AdminPanel},
    AdminPost: { screen: AdminPost},
    Story : { screen: Story},
    Profile : { screen: Profile},
  },
  {
    transitionConfig
  }
);
const Drawer = createDrawerNavigator(
  {
    AppNavigator: { screen: AppNavigator }
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 200
  }
);
export default Drawer;