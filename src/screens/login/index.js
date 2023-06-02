import React, {useState} from 'react';
import {Text, Platform, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../../services/api';
import {Button, Image, Input, Checkbox, Box} from '@components';
import styles from './styles';

const Login = props => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const [state, setState] = useState({
    email: '',
    password: '',
    isChecked: false,
    showPassword: false,
    disabled: true,
    isChecked: false,
    isRaidoSelected: false,
    radioValue: '',
  });

  const dispatch = useDispatch();

  const onPressSignIn = () => {
    login(state.email, state.password, dispatch).then(res => {
      props.navigation.navigate('InspectionListing');
    });
  };

  const onChangeEmail = text => {
    if (text) {
      setState(prev => ({...prev, email: text, disabled: false}));
    }
  };

  const onChangePassword = text => {
    if (text) {
      setState(prev => ({...prev, password: text, disabled: false}));
    }
  };

  const setShowPassword = () => {
    setState(prev => ({...prev, showPassword: !state.showPassword}));
  };
  let {showPassword, image} = state;

  let setCheckboxValue = () => {
    setState(prev => ({...prev, isChecked: !state.isChecked}));
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.imgContainer}>
        <Image
          type="offline"
          resizeMode={'stretch'}
          path={require('@assets/loginBanner.png')}
          style={styles.bannerImage}
        />
      </Box>
      <Box style={styles.loginForm(width, height)}>
        {Platform.OS === 'windows' && (
          <Box style={styles.iconContainer(width, height)}>
            <Image
              type="offline"
              resizeMode={'contain'}
              path={require('@assets/facilgoIcon.png')}
            />
          </Box>
        )}

        <Box style={styles.loginFormContainer(width, height)}>
          <Text style={styles.heading(width, height)}>Log in</Text>
          <Text style={styles.labelText(width, height)}>Email</Text>
          <Input
            placeholder="Email Address"
            extraStyle={styles.input(width, height)}
            onChangeText={onChangeEmail}
          />
          <Text style={styles.labelText(width, height)}>Password</Text>
          <Input
            placeholder="Password"
            secureTextEntry={!state.showPassword}
            icon={true}
            setShowPassword={setShowPassword}
            showPassword={state.showPassword}
            extraStyle={styles.input(width, height)}
            onChangeText={onChangePassword}
          />
          <Box style={styles.bottomText(width, height)}>
            <Box style={styles.rememberView(width, height)}>
              <Checkbox
                variant={'checkbox'}
                title={'Remember me?'}
                isChecked={state.isChecked}
                setCheckboxValue={setCheckboxValue}
              />
            </Box>
            <Button title={'Forgot Password?'} onPress={() => {}} />
          </Box>
          <Button
            variant={'primary'}
            buttonStyle={styles.buttonStyle(width, height)}
            textStyle={styles.textStyle(width, height)}
            title={'Log In'}
            onPress={onPressSignIn}
          />
        </Box>
      </Box>
    </Box>
  );
};

export {Login};
