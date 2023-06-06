import React, {useEffect} from 'react';
import {FlatList, useWindowDimensions, ScrollView} from 'react-native';
import {Box, Heading, BottomBar} from '@components';
import {RenderListHeader, RenderList} from './widgets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {inspectionListing} from '@services/api';
import styles from './styles';

const InspectionListing = () => {
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();
  const navigaiton = useNavigation();

  const {inspectionList} = useSelector(state => state.inspectionListReducer);

  useEffect(() => {
    inspectionListing(1, dispatch);
  }, []);

  const navigateToCreateInspeciton = () => {
    navigaiton.navigate('CreateInspection');
  };

  return (
    <>
      <Box style={styles.container(width, height)}>
        <Heading
          screenTitle={'Inspection'}
          buttonTitle={'Create Inspection'}
          onPress={navigateToCreateInspeciton}
        />
        <ScrollView style={styles.list} horizontal>
          <FlatList
            data={inspectionList}
            ListHeaderComponent={props => (
              <RenderListHeader {...props} width={width} height={height} />
            )}
            renderItem={props => (
              <RenderList {...props} width={width} height={height} />
            )}
          />
        </ScrollView>
      </Box>
      <BottomBar
        primaryButton={'Create Quote'}
        outlineButton={'Copy Inspection'}
      />
    </>
  );
};

export {InspectionListing};
