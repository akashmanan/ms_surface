import React, {useState} from 'react';
import {Text} from 'react-native';
import {Box, Button, Checkbox} from '@components';
import styles from '../styles';

const mockInspections = [
  {
    id: 100001,
    title: 'XYZ Capital- Zed commons-Zelda 2*2 950',
    status: 'In progress',
    date: '4/10/2023',
    property: 'Zed Commons',
  },
  {
    id: 100002,
    title: 'XYZ Capital- Zed commons-Zelda 2*2 950',
    status: 'Resolved',
    date: '3/31/2023',
    property: 'Zed Commons',
  },
];

const HeaderTitle = ({title, style}) => {
  return (
    <Box style={style}>
      <Button
        title={title}
        buttonStyle={styles.headerTitleButton}
        textStyle={styles.headerTitleText}
      />
    </Box>
  );
};

const RenderListHeader = ({width, height}) => {
  return (
    <Box style={styles.listHeader(width, height)}>
      <HeaderTitle
        title={'Insp #'}
        style={styles.headerTitle(width, height, '15%')}
      />
      <HeaderTitle
        title={'Inspection Title'}
        style={styles.headerTitle(width, height, '40%')}
      />
      <HeaderTitle
        title={'Status'}
        style={styles.headerTitle(width, height, '15%')}
      />
      <HeaderTitle
        title={'Due Date'}
        style={styles.headerTitle(width, height, '15%')}
      />
      <HeaderTitle
        title={'Property'}
        style={styles.headerTitle(width, height, '15%')}
      />
    </Box>
  );
};

const RenderList = ({
  item: {id, title, status, date, property},
  width,
  height,
}) => {
  const [state, setState] = useState({
    isChecked: false,
  });

  let setCheckboxValue = () => {
    setState(prev => ({...prev, isChecked: !state.isChecked}));
  };

  return (
    <Box style={styles.listContainer(width, height)}>
      <Box style={styles.listCategoryContainer(width, height, '15%')}>
        <Checkbox
          variant={'checkbox'}
          isChecked={state.isChecked}
          setCheckboxValue={setCheckboxValue}
        />
        <Text>{id}</Text>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '40%')}>
        <Text>{title}</Text>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '15%')}>
        <Text>{status}</Text>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '15%')}>
        <Text>{date}</Text>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '15%')}>
        <Text>{property}</Text>
      </Box>
    </Box>
  );
};

export {RenderListHeader, RenderList, mockInspections};
