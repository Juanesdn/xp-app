import { createStackNavigator, createAppContainer } from "react-navigation";
import AccountScreen from "./src/screens/AccountScreen";
import Splash from "./src/screens/Splash";

const navigator = createStackNavigator(
  {
    Accounts: AccountScreen,
    Splash: Splash
  },
  {
    initialRouteName: "Splash",
    header: null,
    headerMode: "none"
  }
);

export default createAppContainer(navigator);
