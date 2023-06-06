import React from 'react';
import {Text as CustomText, useWindowDimensions} from 'react-native';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';

const Text = ({
  children,
  fontSize,
  fontColor,
  fontFamily,
  letterSpacing,
  textAlign,
  textDecorationLine,
  lineHeight,
  fontWeight,
  numberOfLines,
  fontStyle,
  style,
}) => {
  const {width, height} = useWindowDimensions();
  let styles = {
    ...(fontSize ? {fontSize: ms(fontSize, width)} : {fontSize: ms(16, width)}),
    ...(fontColor ? {color: fontColor} : {color: theme.colors.black}),
    ...(fontFamily ? {fontFamily} : {fontFamily: theme.fonts.poppinsBold}),
    ...(letterSpacing ? {letterSpacing: s(letterSpacing, width)} : {}),
    ...(textAlign ? {textAlign} : {}),
    ...(textDecorationLine ? {textDecorationLine} : {}),
    ...(lineHeight ? {lineHeight: vs(lineHeight, height)} : {}),
    ...(fontWeight ? {fontWeight} : {}),
    ...(fontStyle ? {fontStyle} : {}),
  };

  return (
    <CustomText numberOfLines={numberOfLines} style={[styles, style]}>
      {children}
    </CustomText>
  );
};

const Caption = props => {
  return (
    <Text
      fontSize={props.fontSize ? props.fontSize : 17}
      fontColor={props.fontColor ? props.fontColor : theme.colors.caption}
      letterSpacing={0}
      fontFamily={theme.fonts.poppinsMedium}
      lineHeight={props.lineHeight ? props.lineHeight : 25}
      textAlign={props.textAlign ? props.textAlign : 'left'}
      style={props.style}>
      {props.children}
    </Text>
  );
};

const HeadingText = ({
  children,
  fontColor,
  fontFamily,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  style,
}) => {
  return (
    <Text
      fontSize={fontSize ? fontSize : Platform.OS === 'windows' ? 31 : 26}
      fontColor={fontColor ? fontColor : theme.colors.heading}
      letterSpacing={letterSpacing ? letterSpacing : 0}
      fontFamily={fontFamily ? fontFamily : theme.fonts.poppinsSemiBold}
      fontWeight={fontWeight ? fontWeight : fontWeight}
      lineHeight={lineHeight ? lineHeight : 0}
      textAlign={textAlign ? textAlign : 'left'}
      style={style}>
      {children}
    </Text>
  );
};

Text.defaultProps = {
  color: theme.colors.black,
  fontFamily: theme.fonts.openSansRegular,
};

export {Caption, HeadingText, Text};
