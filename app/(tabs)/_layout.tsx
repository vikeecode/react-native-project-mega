import { Tabs } from "expo-router";
import IconsTabs from "@/compoents/tabsicon-design/iconsTabs";
import { tabs } from "@/constants/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { use } from "react";
import { colors, components } from "@/constants/theme";

const tabbar = components.tabBar;
const TabLout = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabbar.horizontalInset),
          height: tabbar.height,
          marginHorizontal: tabbar.horizontalInset,
          borderRadius: tabbar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabbar.height / 2 - tabbar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabbar.iconFrame,
          height: tabbar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <IconsTabs focused={focused} icon={tab.icons} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLout;
