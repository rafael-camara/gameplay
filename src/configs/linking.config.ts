import { LinkingOptions } from '@react-navigation/native';

import { RootStackParamList } from '../modules/models/RootStack';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      Home: 'home',
      SignIn: 'sign-in',
      AppointmentDetails: 'appointment-details',
      AppointmentCreate: 'appointment-create',
    },
  },
};
