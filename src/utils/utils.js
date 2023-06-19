import {theme} from '@theme';

let getStatusStyle = status => {
  if (status === 'InProgress' || status === 'In progress') {
    return {
      backgroundColor: theme.colors.inProgressBg,
      color: theme.colors.inProgressText,
    };
  } else if (status === 'Resolved') {
    return {
      backgroundColor: theme.colors.inProgressBg,
      color: theme.colors.inProgressText,
    };
  } else if (status === 'Open' || status === 'Expired') {
    return {
      backgroundColor: theme.colors.openBg,
      color: theme.colors.openText,
    };
  } else if (status === 'Completed') {
    return {
      backgroundColor: theme.colors.completedBg,
      color: theme.colors.completedText,
    };
  } else if (status === 'Cancelled') {
    return {
      backgroundColor: theme.colors.openBg,
      color: theme.colors.openText,
    };
  } else {
    return {
      backgroundColor: 'none',
      color: 'none',
    };
  }
};

export {getStatusStyle};
