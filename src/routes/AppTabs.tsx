import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import FeedPage from "../pages/FeedPage";

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
          borderTopColor: '#7C00F3',
          borderTopWidth: 2
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 25,
          height: 25,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#7C00F3",
        activeTintColor: "#7C00F3",
      }}
    >
      <Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
        name="FeedPage"
        component={FeedPage}
      />
    </Navigator>
  );
}

export default AppTabs;
