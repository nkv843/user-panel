import { DialogContent, Stack } from '@mui/material';
import type { FC } from 'react';
import type { User } from './api';
import {
  UserHeader,
  ContactInfoSection,
  CareerEducationSection,
  PersonalInfoSection,
  BankingInfoSection,
} from './components';

type UserPopupProps = {
  user: User;
}

export const UserPopup: FC<UserPopupProps> = ({ user }) => (
  <>
    <UserHeader user={user} />
    <DialogContent>
      <Stack spacing={3}>
        <ContactInfoSection user={user} />
        <CareerEducationSection user={user} />
        <PersonalInfoSection user={user} />
        <BankingInfoSection user={user} />
      </Stack>
    </DialogContent>
  </>
);