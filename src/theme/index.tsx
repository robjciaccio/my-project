import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import colors from '../config/colors';

export enum ThemeModeNames {
  light = 'light',
  dark = 'dark',
  automatic = 'automatic',
}

export type Theme = {
  name: string;
  colors: {
    background: string;
    border: string;
    button: string;
    whiteText: string;
  };
};

const commons = {
  fontSize: {
    mini: 11,
    extraSmall: 12,
    small: 14,
    medium: 16,
    mediumLarge: 18,
    large: 22,
    extraLarge: 30,
  },
};

export const darkTheme: Theme = {
  name: ThemeModeNames.dark,
  colors: {
    background: colors.darkBlue,
    border: colors.lightGreen,
    button: colors.darkBlue,
    whiteText: colors.white,
  },
  ...commons,
};
