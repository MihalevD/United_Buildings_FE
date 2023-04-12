import styled from '@emotion/styled';
import Spacings from '../../tokens/Spacings';

export type BasicBoxProps = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullPadding?: boolean;
  spacing?: string;
  align?: 'center' | 'flex-start' | 'flex-end' | 'normal';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  alignText?: 'center' | 'left' | 'right';
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  onClick?: (event?: any) => void;
};

const FlexboxStyles = `
  display: flex;
`;

type Paddings = {
  (
    padding?: string | boolean,
    spacing?: string,
    fullPadding?: boolean,
    fallback?: string,
  ): string;
};

const determinePadding: Paddings = (
  padding,
  spacing,
  fullPadding,
  fallback,
) => {
  const defaultValue = '0';

  if (typeof padding === 'string') {
    return padding || defaultValue;
  }

  if (padding || fullPadding) {
    return spacing || fallback || defaultValue;
  }

  return defaultValue;
};

export default styled.div<BasicBoxProps>`
  ${FlexboxStyles}
  flex-direction: ${({direction}) => direction || `row`};
  text-align: ${({alignText}) => !!alignText && `${alignText}`};
  justify-content: ${({justify}) => !!justify && `${justify}`};
  align-items: ${({align}) => !!align && `${align}`};
  padding: ${({spacing}) => !!spacing && `${spacing}`};
  padding-left: ${({left, spacing, fullPadding}) =>
    determinePadding(left, spacing, fullPadding, Spacings.small)};
  padding-right: ${({right, spacing, fullPadding}) =>
    determinePadding(right, spacing, fullPadding, Spacings.small)};
  padding-top: ${({top, spacing, fullPadding}) =>
    determinePadding(top, spacing, fullPadding, Spacings.small)};
  padding-bottom: ${({bottom, spacing, fullPadding}) =>
    determinePadding(bottom, spacing, fullPadding, Spacings.small)};
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'fit-content')};
  height: ${({fullHeight}) => (fullHeight ? '100%' : 'fit-content')};
`;
