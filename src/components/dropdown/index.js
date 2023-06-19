import React from 'react';
import {
  Easing,
  Animated,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Text, Choice, Input} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {getStatusStyle} from '@utils/utils';
import {theme} from '@theme';

const RenderDropdownOption = ({
  status,
  width,
  title,
  height,
  checkbox,
  selectedData,
  onPressListItem,
}) => {
  let statusStyle = getStatusStyle(title);

  let statusContainerStyle = status
    ? {
        width: '64%',
        height: vs(20, height),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: statusStyle?.backgroundColor,
      }
    : {};

  return (
    <TouchableOpacity
      onPress={() => onPressListItem(title)}
      style={styles.iconContainer(width, height)}>
      {checkbox && (
        <Box style={{width: '10%'}}>
          <Choice
            variant={'checkbox'}
            isChecked={selectedData?.includes(title)}
            setCheckboxValue={() => onPressListItem(title)}
          />
        </Box>
      )}
      <Box style={{width: '80%', ...statusContainerStyle}}>
        <Text
          numberOfLines={2}
          fontSize={12}
          textAlign={'left'}
          fontColor={status ? statusStyle.color : theme.colors.dropdownText}>
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

const Dropdown = ({
  data,
  input,
  style,
  status,
  expanded,
  checkbox,
  bottomText,
  defaultText,
  placeholder,
  selectedData,
  dropdownTitle,
  setExpandValue,
  onPressListItem,
}) => {
  const {width, height} = useWindowDimensions();
  const spinValue = new Animated.Value(0);

  React.useEffect(() => {
    if (expanded) {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(spinValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [expanded]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  return (
    <Box style={[style]}>
      {dropdownTitle && (
        <Text
          fontSize={14}
          paddingBottom={14}
          fontColor={theme.colors.labelText}
          style={styles.dropdownTitle(width, height)}>
          {dropdownTitle}
        </Text>
      )}
      <Box>
        <TouchableOpacity
          style={styles.container(width, height, style?.height)}
          onPress={setExpandValue}>
          <Text
            fontSize={14}
            fontFamily={theme.fonts.latoRegular}
            fontColor={theme.colors.dropdownSelectedText}>
            {defaultText}
          </Text>
          <Animated.View style={{transform: [{rotate: spin}]}}>
            <Ionicons
              name={'caret-down'}
              color={theme.colors.dropdownSelectedText}
              size={ms(18, height)}
            />
          </Animated.View>
        </TouchableOpacity>
        {expanded && (
          <Box style={styles.dropdownList(width, height, style?.height)}>
            {input && (
              <Input
                icon={'search'}
                placeholder={placeholder}
                containerStyle={styles.containerStyle(width, height)}
                style={styles.inputStyle}
              />
            )}
            <ScrollView style={{maxHeight: vs(300, height)}}>
              {data?.map((item, index) => (
                <RenderDropdownOption
                  key={index}
                  width={width}
                  status={status}
                  title={item?.title}
                  checkbox={checkbox}
                  selectedData={selectedData}
                  onPressListItem={onPressListItem}
                />
              ))}
            </ScrollView>
          </Box>
        )}
      </Box>
      <Text
        fontSize={12}
        fontStyle={'italic'}
        fontFamily={theme.fonts.latoRegular}
        fontColor={theme.colors.bottomText}
        style={styles.bottomText(width, height)}>
        {bottomText}
      </Text>
    </Box>
  );
};

export {Dropdown};

const styles = StyleSheet.create({
  container: (w, h, style = 48) => ({
    borderWidth: 1,
    minHeight: vs(style, h),
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(21, w),
    paddingVertical: vs(10, h),
    borderColor: theme.colors.dropdownBorder,
    backgroundColor: theme.colors.white,
    zIndex: 1,
  }),
  dropdownList: (w, h, style = 48) => ({
    position: 'absolute',
    top: vs(style, h),
    width: '100%',
    elevation: 10,
    zIndex: 1,
    borderWidth: 1,
    borderColor: theme.colors.dropdownBorder,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: theme.colors.white,
  }),
  dropdownTitle: (w, h) => ({
    paddingBottom: vs(14, h),
  }),
  bottomText: (w, h) => ({
    paddingTop: vs(9, h),
    zIndex: -1,
  }),
  iconContainer: (w, h) => ({
    flexDirection: 'row',
    columnGap: s(8, w),
    alignItems: 'center',
    marginHorizontal: s(21, w),
    paddingVertical: vs(14, h),
    flexWrap: 'wrap',
  }),
  containerStyle: (w, h) => ({
    width: '94%',
    alignSelf: 'center',
    marginVertical: vs(10, h),
  }),
  inputStyle: {
    borderColor: theme.colors.dropdownBorder,
  },
});
