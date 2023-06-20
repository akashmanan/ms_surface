import React, {useState} from 'react';
import {Platform, useWindowDimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NativeButton, Image, Input, Choice, Box, Text} from '@components';
import {login} from '@services/api';
import {theme} from '@theme';
import styles from './styles';

const Login = () => {
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();
  const {isLoading, errorMsg} = useSelector(state => state.authReducer);
  const [state, setState] = useState({
    email: '',
    password: '',
    isChecked: false,
    showPassword: false,
    disabled: true,
    isRaidoSelected: false,
    radioValue: '',
  });

  const onPressSignIn = () => {
    login(state.email, state.password, dispatch);
  };

  const onChangeEmail = text => {
    setState(prev => ({...prev, email: text}));
  };

  const onChangePassword = text => {
    setState(prev => ({...prev, password: text}));
  };

  const setShowPassword = () => {
    setState(prev => ({...prev, showPassword: !state.showPassword}));
  };

  let setCheckboxValue = () => {
    setState(prev => ({...prev, isChecked: !state.isChecked}));
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.imgContainer}>
        <Image
          type="offline"
          resizeMode={'stretch'}
          path={require('@assets/images/loginBanner.png')}
          style={styles.bannerImage}
        />
      </Box>
      <Box style={styles.loginForm(width, height)}>
        {Platform.OS === 'windows' && (
          <Box style={styles.iconContainer(width, height)}>
            <Image
              type="offline"
              resizeMode={'contain'}
              path={require('@assets/images/facilgoIcon.png')}
            />
          </Box>
        )}

        <Box style={styles.loginFormContainer(width, height)}>
          <Text
            fontSize={33}
            fontColor={theme.colors.loginHeading}
            fontFamily={theme.fonts.openSansBold}
            textAlign={'center'}
            style={styles.heading(width, height)}>
            Log in
          </Text>
          <Text
            fontSize={19}
            fontColor={theme.colors.labelText}
            fontFamily={theme.fonts.openSansRegular}
            style={styles.labelText(width, height)}>
            Email
          </Text>
          <Input
            placeholder="Email Address"
            placeholderTextColor={theme.colors.inputPlaceholder}
            style={styles.input(width, height)}
            onChangeText={onChangeEmail}
          />
          <Text
            fontSize={19}
            fontColor={theme.colors.labelText}
            fontFamily={theme.fonts.openSansRegular}
            style={styles.labelText(width, height)}>
            Password
          </Text>
          <Input
            icon={'password'}
            placeholder="Password"
            placeholderTextColor={theme.colors.inputPlaceholder}
            secureTextEntry={!state.showPassword}
            setShowPassword={setShowPassword}
            showPassword={state.showPassword}
            style={styles.input(width, height)}
            onChangeText={onChangePassword}
            bottomText={errorMsg}
            isError={true}
          />
          <Box style={styles.bottomText(width, height)}>
            <Box style={styles.rememberView(width, height)}>
              <Choice
                rounded
                variant={'checkbox'}
                title={'Remember me?'}
                isChecked={state.isChecked}
                setCheckboxValue={setCheckboxValue}
                textStyle={styles.bottomButtonText(
                  width,
                  height,
                  16,
                  theme.colors.rememberMe,
                )}
              />
            </Box>
            <NativeButton
              title={'Forgot Password?'}
              onPress={() => {}}
              buttonTextStyle={styles.bottomButtonText(
                width,
                height,
                14,
                theme.colors.bottomText,
              )}
            />
          </Box>
          <NativeButton
            variant={'primary'}
            buttonStyle={styles.buttonStyle(width, height)}
            textStyle={styles.textStyle(width, height)}
            title={'Log In'}
            onPress={onPressSignIn}
            disabled={!state.email || !state.password}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </Box>
  );
};

export {Login};
