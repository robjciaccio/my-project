const useBottomNavOptions = () => {
  const screenOptions = {};
};

// import React from 'react';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import Issue from '@assets/icons/svg/Issue';
// import Job from '@assets/icons/svg/Job';
// import Notification from '@assets/icons/svg/Notification';
// import Setting from '@assets/icons/svg/Setting';
// import {useTheme} from '@hooks';
// import {t} from '@translations';

// type TabBarIcon = {
//   color: string;
//   size: number;
// };

// const useBottomNavigatorOptions = () => {
//   const {theme} = useTheme();
//   const insets = useSafeAreaInsets();

//   const screenOptions = {
//     headerShown: false,
//     tabBarInactiveTintColor: theme.colors.text.secondary,
//     tabBarActiveTintColor: theme.colors.primary,
//     tabBarStyle: {
//       backgroundColor: theme.colors.background.tertiary,
//       paddingBottom: insets.bottom ?? 3,
//       paddingTop: 10,
//       borderTopWidth: 0,
//     },
//   };

//   const jobOptions = {
//     tabBarLabel: t('jobs'),
//     tabBarIcon: ({color, size}: TabBarIcon) => (
//       <Job width={size} height={size} fill={color} />
//     ),
//   };

//   const issueOptions = {
//     tabBarLabel: t('issues'),
//     tabBarIcon: ({color, size}: TabBarIcon) => (
//       <Issue width={size} height={size} fill={color} />
//     ),
//   };

//   const notificationOptions = {
//     tabBarLabel: t('notifications'),
//     tabBarIcon: ({color, size}: TabBarIcon) => (
//       <Notification width={size} height={size} fill={color} />
//     ),
//   };

//   const settingOptions = {
//     tabBarLabel: t('settings'),
//     tabBarIcon: ({color, size}: TabBarIcon) => (
//       <Setting width={size} height={size} fill={color} />
//     ),
//   };

//   return {
//     screenOptions,
//     jobOptions,
//     issueOptions,
//     notificationOptions,
//     settingOptions,
//   };
// };

// export default useBottomNavigatorOptions;
