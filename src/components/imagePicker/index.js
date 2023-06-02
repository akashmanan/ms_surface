import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = ({type, success}) => {
  let options = {
    presentationStyle: 'fullScreen',
    selectionLimit: 1,
    mediaType: 'photo',
  };
  if (type == 'camera') {
    launchCamera(options)
      .then(image => {
        success(image);
      })
      .catch(e => {
        console.log('catch error in image', e);
        return e;
      });
  } else {
    launchImageLibrary(options)
      .then(image => {
        success(image);
      })
      .catch(e => {
        console.log('catch error in image component', e);
        return e;
      });
  }
};

export {ImagePicker};
