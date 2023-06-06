import React, {useEffect, useState} from 'react';
import {FlatList, useWindowDimensions, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {inspectionListing} from '@services/api';
import {Box, Heading, BottomBar, Buttons} from '@components';
import {theme} from '@theme';
import {RenderListHeader, RenderList, RenderEmptyList} from './widgets';
import styles from './styles';

const InspectionListing = () => {
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();
  const navigaiton = useNavigation();
  const {inspectionList} = useSelector(state => state.inspectionListReducer);

  const [state, setState] = useState({
    selectedItems: [],
  });

  useEffect(() => {
    inspectionListing(1, dispatch);
  }, []);

  const onCreateInspection = () => {
    navigaiton.navigate('CreateInspection');
  };

  const onSelectInspections = inspectionId => {
    let filteredData;
    if (!state?.selectedItems?.includes(inspectionId)) {
      setState(prev => ({
        ...prev,
        selectedItems: [...state?.selectedItems, inspectionId],
      }));
    } else {
      filteredData = state.selectedItems?.filter(item => item !== inspectionId);
      setState(prev => ({
        ...prev,
        selectedItems: filteredData,
      }));
    }
  };

  let isCreateQuoteDisable =
    state.selectedItems?.length === 0 || state.selectedItems?.length > 1
      ? true
      : false;

  let isCopyInspectionDisable =
    state.selectedItems?.length === 0 ? true : false;

  return (
    <>
      <Box style={styles.container(width, height)}>
        <Heading
          heading={'Inspection'}
          buttonTitle={'Create Inspection'}
          onPress={onCreateInspection}
        />
        <ScrollView style={styles.list} horizontal>
          <FlatList
            data={inspectionList}
            ListHeaderComponent={props => (
              <RenderListHeader {...props} width={width} height={height} />
            )}
            renderItem={props => (
              <RenderList
                {...props}
                width={width}
                height={height}
                onSelectInspections={onSelectInspections}
              />
            )}
            ListEmptyComponent={props => (
              <RenderEmptyList {...props} width={width} height={height} />
            )}
          />
        </ScrollView>
      </Box>
      <BottomBar style={styles.bottomBar(width, height)}>
        <Buttons
          title={'Copy Inspection'}
          variant={'outline'}
          onPress={() => {}}
          disabled={isCopyInspectionDisable}
          buttonStyle={styles.button(width, height)}
          buttonTextStyle={styles.buttonText(width, height)}
        />
        <Buttons
          title={'Create Quote'}
          variant={'primary'}
          onPress={() => {}}
          disabled={isCreateQuoteDisable}
          buttonStyle={styles.button(width, height, theme.colors.primaryButton)}
          buttonTextStyle={styles.buttonText(width, height)}
        />
      </BottomBar>
    </>
  );
};

export {InspectionListing};
