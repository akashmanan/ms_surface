import React, {useState} from 'react';
import {Text} from 'react-native';
import {Box, Buttons, Choice} from '@components';
import {theme} from '@utils';
import styles from '../styles';

const HeaderTitle = ({title, dimensions: {width, height}, style}) => {
  return (
    <Box style={style}>
      <Buttons
        title={title}
        buttonStyle={styles.headerTitleButton}
        buttonTextStyle={styles.headerTitleText(width, height)}
      />
    </Box>
  );
};

const RenderListHeader = ({width, height}) => {
  return (
    <Box style={styles.listHeader(width, height)}>
      <HeaderTitle
        title={'Insp #'}
        dimensions={{width, height}}
        style={styles.headerTitle(width, height, '13%')}
      />
      <HeaderTitle
        title={'Inspection Title'}
        dimensions={{width, height}}
        style={styles.headerTitle(width, height, '37%')}
      />
      <HeaderTitle
        title={'Status'}
        dimensions={{width, height}}
        style={styles.headerTitle(width, height, '12%')}
      />
      <HeaderTitle
        title={'Due Date'}
        dimensions={{width, height}}
        style={styles.headerTitle(width, height, '12.6%')}
      />
      <HeaderTitle
        title={'Property'}
        dimensions={{width, height}}
        style={styles.headerTitle(width, height, '14.4%')}
      />
    </Box>
  );
};

const RenderList = ({
  item: {id, inspectionName, status, dueDate},
  width,
  height,
  onSelectInspections,
}) => {
  const [state, setState] = useState({
    isChecked: false,
  });

  let statusBackground = 'none';
  let statusText = theme.colors.black;
  let property = inspectionName?.split(',')?.[1];

  let setCheckboxValue = inspectionId => {
    setState(prev => ({...prev, isChecked: !state.isChecked}));
    onSelectInspections(inspectionId);
  };

  if (status === 'InProgress') {
    statusBackground = theme.colors.inProgressBg;
    statusText = theme.colors.inProgressText;
  } else if (status === 'Resolved') {
    statusBackground = theme.colors.inProgressBg;
    statusText = theme.colors.inProgressText;
  } else if (status === 'Open' || status === 'Expired') {
    statusBackground = theme.colors.openBg;
    statusText = theme.colors.openText;
  }

  return (
    <Box style={styles.listContainer(width, height)}>
      <Box style={styles.listCategoryContainer(width, height, '13%')}>
        <Choice
          bordered
          variant={'checkbox'}
          isChecked={state.isChecked}
          setCheckboxValue={() => setCheckboxValue(id)}
        />
        <Text style={styles.tableText(width, height)}>{id || ''}</Text>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '37%')}>
        <Text style={styles.tableText(width, height)}>
          {inspectionName || ''}
        </Text>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '13%')}>
        <Box style={styles.statusContainer(width, height, statusBackground)}>
          <Text
            style={styles.tableText(
              width,
              height,
              statusBackground,
              statusText,
              12,
              2,
            )}>
            {status || ''}
          </Text>
        </Box>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '13%')}>
        <Text style={styles.tableText(width, height)}>{dueDate || ''}</Text>
      </Box>
      <Box style={styles.listCategoryContainer(width, height, '13%')}>
        <Text style={styles.tableText(width, height)}>{property || ''}</Text>
      </Box>
    </Box>
  );
};

const RenderEmptyList = ({width, height}) => {
  return (
    <Box style={styles.listEmptyContainer(width, height)}>
      <Text style={styles.tableText(width, height)}>{'No Records Found'}</Text>
    </Box>
  );
};

export {RenderListHeader, RenderList, RenderEmptyList};
