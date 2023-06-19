import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '@theme';
import {s, vs, ms} from '@thirdParty/screenSize';
import {Image, Buttons, Button} from '@components';

const SideBar = ({items, title, subTitle, onPressClose}) => {
  const {width, height} = useWindowDimensions();
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.item}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            type={'offline'}
            path={require('@assets/images/facilgoIcon.png')}
            resizeMode={'contain'}
          />
          <View style={{paddingHorizontal: 10}}>
            <Text numberOfLines={2} style={styles.itemText}>
              {item.title}
            </Text>
            <View style={styles.skuView}>
              <Text numberOfLines={2} style={styles.skuText}>
                {`SKU: ${item.sku}`}
              </Text>
              <Text
                numberOfLines={2}
                style={styles.skuText}>{`${item.type}`}</Text>
            </View>
            <Text
              numberOfLines={2}
              style={styles.priceText}>{`Price: ${item.price}`}</Text>
          </View>
          <Buttons
            title={'Add'}
            variant={'outline'}
            onPress={() => {}}
            buttonStyle={styles.addButton(width, height)}
            buttonTextStyle={styles.addButtonText(width, height)}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.shadowView}>
          <View style={styles.titleView}>
            <Text numberOfLines={3} style={styles.titleText}>
              {title}
              <Text style={styles.subTitleText}>{subTitle}</Text>
            </Text>
            <Button onPress={onPressClose}>
              <Ionicons
                name="close"
                color={theme.colors.black}
                size={ms(24, width)}
              />
            </Button>
          </View>
          <FlatList data={items} renderItem={renderItem} />
          <View style={styles.skuView}>
            <Buttons
              title={'Cancel'}
              variant={'outline'}
              onPress={() => {}}
              buttonStyle={styles.button(width, height)}
              buttonTextStyle={styles.buttonText(width, height)}
            />
            <Buttons
              title={'Done'}
              variant={'primary'}
              onPress={() => {}}
              buttonStyle={styles.button(width, height)}
              buttonTextStyle={styles.buttonText(width, height)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 0,
    width: '100%',
    backgroundColor: theme.colors.bottomBarBorder,
  },
  content: {
    flexDirection: 'row',
    columnGap: 20,
  },
  innerContainer: {
    width: '36%',
  },
  shadowView: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: '2%',
    backgroundColor: theme.colors.sideBarBg,
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  itemText: {
    fontSize: 15,
    fontFamily: theme.fonts.latoBold,
    color: theme.colors.black,
    fontWeight: '700',
  },
  skuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skuText: {
    fontSize: 15,
    fontFamily: theme.fonts.latoBold,
    color: theme.colors.black,
    fontStyle: 'italic',
  },
  priceText: {
    fontSize: 23,
    fontFamily: theme.fonts.latoBold,
    color: theme.colors.primaryButton,
    fontWeight: '500',
  },
  titleView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: '7%',
    paddingRight: '4%',
  },
  titleText: {
    fontSize: 21,
    color: 'rgba(37, 40, 43, 1)',
  },
  subTitleText: {
    fontSize: 24,
    color: 'rgba(45, 45, 45, 1)',
  },
  image: {
    width: 93,
    height: 82,
    alignSelf: 'center',
  },
  dropdownContainer: {
    width: '65%',
  },
  addButton: (w, h) => ({
    width: s(100, w),
    height: vs(20, h),
    alignSelf: 'flex-end',
  }),
  addButtonText: (w, h) => ({
    fontSize: ms(16, w),
    fontFamily: theme.fonts.latoRegular,
  }),
  button: (w, h) => ({
    width: s(200, w),
    height: vs(20, h),
  }),
  buttonText: (w, h) => ({
    fontSize: ms(16, w),
    fontFamily: theme.fonts.latoRegular,
  }),
});

export {SideBar};
