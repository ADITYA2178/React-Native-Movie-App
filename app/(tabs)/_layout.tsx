import React from "react";
import { Tabs } from "expo-router";


const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
          name="index"
          options={{ headerShown: false }} />
        <Tabs.Screen
          name="movie/[id]"
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name="onboarding"
          options={{ headerShown: false }}
        />  
    </Tabs>
  );
};

export default _layout;