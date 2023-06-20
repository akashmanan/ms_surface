import React from 'react';
import {FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '@theme';
import {ms} from '@thirdParty/screenSize';
import {
  Image,
  NativeButton,
  Button,
  Box,
  Input,
  Text,
  SideBar,
} from '@components';
import styles from '../styles';

const RenderSearchTabBar = ({
  onPressClose,
  state,
  width,
  height,
  lineItems,
}) => {
  const renderItem = ({item, index}) => {
    return (
      <Box style={styles.itemContainer(width, height)}>
        <Image
          style={styles.image}
          type={'offline'}
          path={require('@assets/images/facilgoIcon.png')}
          resizeMode={'contain'}
        />

        <Box style={styles.itemTextContainer}>
          <Text fontSize={16} fontFamily={theme.fonts.openSansBold}>
            {'WHIRPOOL OEM ICEMAKER REPLACES ECKMFEZ2'}
          </Text>
          <Text>{'SKU: #4903084'}</Text>
          <Text>{'EA'}</Text>
          <Text>{'Price: $104.99'}</Text>
        </Box>

        <NativeButton
          variant={'outline'}
          title={'Add'}
          buttonStyle={styles.addButton(width, height)}
        />
      </Box>
    );
  };

  return (
    <SideBar
      onPressClose={onPressClose}
      onItemSelected={() => {}}
      title={'Results for'}
      subTitle={
        "\"WHIRPOOL OEM ICEMAKER REPLACES ECKMFEZ2 Silver 2' 11.75'' x 6' 7.5\""
      }>
      <>
        <Box style={styles.inputFilterContainer(width, height)}>
          <Input
            icon={'search'}
            placeholder={'Search'}
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputStyle}
          />
          <Button onPress={() => {}} style={styles.filterButton(width, height)}>
            <Feather
              name="filter"
              color={theme.colors.primaryButton}
              size={ms(16, width)}
            />
            <Text fontSize={16} fontColor={theme.colors.primaryButton}>
              {'Filter'}
            </Text>
          </Button>
        </Box>

        <FlatList
          data={lineItems}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
        />
      </>
    </SideBar>
  );
};

export {InspectionDetailsHeader} from './header';
export {tabData, lineItems} from './mock';
export {RenderSearchTabBar};
