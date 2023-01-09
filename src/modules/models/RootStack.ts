import { StackScreenProps } from '@react-navigation/stack';

import { AppointmentProps } from '../../components/Appointment';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  AppointmentDetails: {
    guildSelected: AppointmentProps;
  };
  AppointmentCreate: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;
