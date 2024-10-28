export type ButtonProps = {
  buttonTitle: string;
  isLoading?: boolean;
  longPressAction?: () => number | null;
  size?: 'large' | 'small';
  testId: string;
  onPress?: () => void | null;
  accessibilityLabel: string;
};
