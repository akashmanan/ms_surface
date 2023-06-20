import React, {useEffect, useState} from 'react';
import {FlatList, useWindowDimensions, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Box,
  Heading,
  BottomBar,
  NativeButton,
  Dropdown,
  Input,
  TopTabBar,
} from '@components';
import {theme} from '@theme';
import {inspectionListing} from '@services/api';
import {
  RenderListHeader,
  RenderList,
  RenderEmptyList,
  status,
  propertyData,
  customerData,
} from './widgets';
import styles from './styles';

const InspectionListing = () => {
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();
  const navigaiton = useNavigation();
  const {inspectionList} = useSelector(state => state.inspectionListReducer);

  const [state, setState] = useState({
    inspectionData: inspectionList,
    defaultStatus: 'Status',
    defaultProperty: 'Property',
    defaultCustomer: 'Customer',
    expandedStatus: false,
    expandedProperty: false,
    expandedCustomer: false,
    selectedStatus: [],
    selectedProperty: [],
    selectedCustomer: [],
    selectedItems: [],
  });

  useEffect(() => {
    inspectionListing(1, dispatch);
  }, []);

  useEffect(() => {
    setState(prev => ({...prev, inspectionData: inspectionList}));
  }, [inspectionList]);

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

  const setExpandValue = item => {
    setState(prev => ({...prev, [item]: !state[item]}));
  };

  const onPressStatus = (selectedValue, item) => {
    let filteredData;
    if (!state[item]?.includes(selectedValue)) {
      setState(prev => ({
        ...prev,
        [item]: [...state[item], selectedValue],
      }));
    } else {
      filteredData = state[item]?.filter(value => value !== selectedValue);
      setState(prev => ({
        ...prev,
        [item]: filteredData,
      }));
    }
  };

  const onSearchInspection = text => {
    let filteredData = inspectionList.filter(item => {
      if (!text) {
        return inspectionList;
      }
      return String(item.id)?.includes(text) || null;
    });
    setState(prev => ({...prev, inspectionData: filteredData}));
  };

  let isCreateQuoteDisable =
    state.selectedItems?.length === 0 || state.selectedItems?.length > 1
      ? true
      : false;

  let isCopyInspectionDisable =
    state.selectedItems?.length === 0 ? true : false;

  return (
    <>
      <TopTabBar />
      <Box style={styles.container(width, height)}>
        <Heading
          heading={'Inspection'}
          buttonTitle={'Create Inspection'}
          onPress={onCreateInspection}
        />
        <Box style={styles.input(width, height)}>
          <Input
            icon={'search'}
            onChangeText={onSearchInspection}
            placeholder="Inspection#/Account#/ title"
            containerStyle={styles.dropdownContainer('24%')}
          />

          <Dropdown
            input
            checkbox
            placeholder={'Find Customer'}
            data={customerData}
            selectedData={state.selectedCustomer}
            expanded={state.expandedCustomer}
            defaultText={state.defaultCustomer}
            style={styles.dropdownContainer('16%')}
            onPressListItem={item => onPressStatus(item, 'selectedCustomer')}
            setExpandValue={() => setExpandValue('expandedCustomer')}
          />

          <Dropdown
            input
            checkbox
            placeholder={'Find Property...'}
            data={propertyData}
            selectedData={state.selectedProperty}
            onPressListItem={item => onPressStatus(item, 'selectedProperty')}
            expanded={state.expandedProperty}
            defaultText={state.defaultProperty}
            style={styles.dropdownContainer('16%')}
            setExpandValue={() => setExpandValue('expandedProperty')}
          />

          <Dropdown
            checkbox
            status
            data={status}
            selectedData={state.selectedStatus}
            onPressListItem={item => onPressStatus(item, 'selectedStatus')}
            expanded={state.expandedStatus}
            defaultText={state.defaultStatus}
            style={styles.dropdownContainer('16%')}
            setExpandValue={() => setExpandValue('expandedStatus')}
          />
        </Box>
        <ScrollView style={styles.list} horizontal>
          <FlatList
            data={state.inspectionData}
            extraData={state.inspectionData}
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
            contentContainerStyle={styles.contentContainerStyle(width, height)}
          />
        </ScrollView>
      </Box>
      <BottomBar style={styles.bottomBar(width, height)}>
        <NativeButton
          title={'Copy Inspection'}
          variant={'outline'}
          onPress={() => {}}
          disabled={isCopyInspectionDisable}
          buttonStyle={styles.button(width, height)}
          buttonTextStyle={styles.buttonText(width, height)}
        />
        <NativeButton
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
