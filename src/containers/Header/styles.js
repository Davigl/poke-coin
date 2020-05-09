import * as Animatable from 'react-native-animatable';

import styled from 'styled-components/native';

import { fadeIn } from '~/assets/styles/animations';

export const Wrapper = styled.View`
  flex: 1;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  background-color: #09091E;
`;

export const AnimatableWrapper = styled(Animatable.View).attrs((props) => ({
  animation: props.animation,
}))``;

export const Text = styled(Animatable.Text).attrs((props) => ({
  animation: props.animation,
  duration: props.duration,
  easing: 'ease-in'
}))`
  font-family: Poppins;
  font-size: 13px;
  color: #fff;
`;

export const Title = styled.Text`
  font-family: PoppinsBold;
  font-size: 40px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  height: 63px;
  width: 270px;
  padding: 22px 64px 22px 64px;
  margin-top: 22px;
  background-color: #4545e5;
  align-items: center;
`;

export const Card = styled(Animatable.View).attrs(() => ({
  animation: 'slideInUp',
  direction: 'alternate',
  duration: 2500
}))`
  height: 60%;
  width: 90%;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const InfoCard = styled.View`
  height: 50%;
  width: 100%;
  background-color: #333;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
