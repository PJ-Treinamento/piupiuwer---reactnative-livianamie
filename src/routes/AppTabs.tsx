import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import FeedPage from "../pages/FeedPage";
import ProfilePage from "../pages/ProfilePage";
import NotificationsPage from "../pages/NotificationsPage";
import MessagesPage from "../pages/MessagesPage";

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 70,
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
        inactiveBackgroundColor: "white",
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
      <Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="bell" size={size} color={color} />;
          },
        }}
        name="NotificationsPage"
        component={NotificationsPage}
      />
      <Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="inbox" size={size} color={color} />;
          },
        }}
        name="MessagesPage"
        component={MessagesPage}
      />
      <Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
        name="ProfilePage"
        component={ProfilePage}
      />
    </Navigator>
  );
}

export default AppTabs;
