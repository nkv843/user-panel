import { Typography, Paper, Stack } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import type { FC } from 'react';
import { useAppTranslations } from '../../../assets';
import type { User } from '../api';

type ContactInfoSectionProps = {
  user: User;
}

const formatAddress = (address: User['address']) => {
  return `${address.address}, ${address.city}, ${address.state} ${address.postalCode}`;
};

export const ContactInfoSection: FC<ContactInfoSectionProps> = ({ user }) => {
  const { t } = useAppTranslations();

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" color="primary.main">
          {t('userDetail.contactInfo.title')}
        </Typography>
        <Stack spacing={2}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center" flex={1}>
              <Email color="action" />
              <Stack>
                <Typography variant="body2" color="text.secondary">
                  {t('userDetail.contactInfo.email')}
                </Typography>
                <Typography>{user.email}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" flex={1}>
              <Phone color="action" />
              <Stack>
                <Typography variant="body2" color="text.secondary">
                  {t('userDetail.contactInfo.phone')}
                </Typography>
                <Typography>{user.phone}</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="flex-start">
            <LocationOn color="action" style={{ marginTop: 4 }} />
            <Stack>
              <Typography variant="body2" color="text.secondary">
                {t('userDetail.contactInfo.address')}
              </Typography>
              <Typography>{formatAddress(user.address)}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};