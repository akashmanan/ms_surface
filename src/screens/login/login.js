import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Image, InputText} from '../../components';
import theme from '@utils/theme';
import styles from './styles';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          type="offline"
          resizeMode={'stretch'}
          path={require('../../assets/loginBanner.png')}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.loginForm}>
        <View style={styles.iconContainer}>
          <Image
            type="offline"
            resizeMode={'contain'}
            path={require('../../assets/facilgoIcon.png')}
          />
        </View>
        <View style={styles.loginFormContainer}>
          <Text style={styles.heading}>Log in</Text>
          <Text style={styles.labelText}>Email</Text>
          <InputText
            placeholder="Email Address"
            color={theme.colors.inputText}
            backgroundColor={theme.colors.inputBackground}
          />
          <Text style={styles.labelText}>Password</Text>
          <InputText
            placeholder="Password"
            secureTextEntry={!showPassword}
            icon={true}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            color={theme.colors.inputText}
            backgroundColor={theme.colors.inputBackground}
          />
          <View style={styles.bottomText}>
            <Button
              varient={'plain'}
              title={'Remember me?'}
              onPress={() => {}}
            />
            <Button
              varient={'plain'}
              title={'Forgot Password ?'}
              onPress={() => {}}
            />
          </View>
          <Button
            varient={'primary'}
            title={'Sign in'}
            extraStyle={styles.button}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
