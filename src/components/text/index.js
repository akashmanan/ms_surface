import React from 'react';
import {Text as CustomText, useWindowDimensions} from 'react-native';
import {theme, s, vs, ms} from '@utils';

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
  key,
  numberOfLines,
  textStyle,
}) => {
  const {width, height} = useWindowDimensions();
  let style = {
    ...(fontSize ? {fontSize} : {fontSize: ms(16, width)}),
    ...(fontColor ? {color: fontColor} : {color: theme.colors.black}),
    ...(fontFamily ? {fontFamily} : {fontFamily: theme.fonts.poppinsBold}),
    ...(letterSpacing ? {letterSpacing} : {}),
    ...(textAlign ? {textAlign} : {}),
    ...(textDecorationLine ? {textDecorationLine} : {}),
    ...(lineHeight ? {lineHeight} : {}),
    ...(fontWeight ? {fontWeight} : {}),
  };

  return (
    <CustomText numberOfLines={numberOfLines} style={[style, textStyle]}>
      {children}
    </CustomText>
  );
};

const Caption = props => {
  const {width, height} = useWindowDimensions();
  return (
    <Text
      fontSize={props.fontSize ? props.fontSize : ms(17, width)}
      fontColor={props.fontColor ? props.fontColor : theme.colors.caption}
      letterSpacing={0}
      fontFamily={theme.fonts.poppinsMedium}
      lineHeight={props.lineHeight ? props.lineHeight : vs(25, height)}
      textAlign={props.textAlign ? props.textAlign : 'left'}
      textStyle={props.textStyle}>
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
  textStyle,
}) => {
  return (
    <Text
      fontSize={fontSize ? fontSize : ms(25)}
      fontColor={fontColor ? fontColor : theme.colors.heading}
      letterSpacing={letterSpacing ? letterSpacing : s(0)}
      fontFamily={fontFamily ? fontFamily : theme.fonts.poppinsSemiBold}
      fontWeight={fontWeight ? fontWeight : fontWeight}
      lineHeight={lineHeight ? lineHeight : 0}
      textAlign={textAlign ? textAlign : 'left'}
      textStyle={textStyle}>
      {children}
    </Text>
  );
};

Text.defaultProps = {
  color: theme.colors.black,
  fontFamily: theme.fonts.openSansRegular,
};

export {Caption, HeadingText, Text};
