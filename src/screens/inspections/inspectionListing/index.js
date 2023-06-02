import React, {useEffect, useState} from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {Box, ScreenName} from '@components';
import {RenderListHeader, RenderList, mockInspections} from './widgets';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {inspectionListing} from '@services/api';

const InspectionListing = () => {
  const {width, height} = useWindowDimensions();
  const navigaiton = useNavigation();
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    inspectionListing(1, dispatch);
  }, []);

  const navigateToCreateInspeciton = () => {
    navigaiton.navigate('CreateInspection');
  };

  return (
    <Box style={styles.container(width, height)}>
      <ScreenName
        screenTitle={'Inspection'}
        buttonTitle={'Create Inspection'}
        onPress={navigateToCreateInspeciton}
      />
      <Box style={styles.list}>
        <FlatList
          data={mockInspections}
          renderItem={props => (
            <RenderList {...props} width={width} height={height} />
          )}
          ListHeaderComponent={props => (
            <RenderListHeader {...props} width={width} height={height} />
          )}
        />
      </Box>
    </Box>
  );
};

export {InspectionListing};
