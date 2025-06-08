import { Typography, Paper, Stack } from '@mui/material';
import type { FC } from 'react';
import { useAppTranslations } from '../../../assets';
import type { User } from '../api';

type PersonalInfoSectionProps = {
  user: User;
}

export const PersonalInfoSection: FC<PersonalInfoSectionProps> = ({ user }) => {
  const { t } = useAppTranslations();

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" color="primary.main">
          {t('userDetail.personalInfo.title')}
        </Typography>

        <Stack spacing={2}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Stack flex={1}>
              <Typography variant="body2" color="text.secondary">
                {t('userDetail.personalInfo.dateOfBirth')}
              </Typography>
              <Typography>{new Date(user.birthDate).toLocaleDateString()}</Typography>
            </Stack>
            <Stack flex={1}>
              <Typography variant="body2" color="text.secondary">
                {t('userDetail.personalInfo.bloodGroup')}
              </Typography>
              <Typography>{user.bloodGroup}</Typography>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Stack flex={1}>
              <Typography variant="body2" color="text.secondary">
                {t('userDetail.personalInfo.heightWeight')}
              </Typography>
              <Typography>{user.height} cm / {user.weight} kg</Typography>
            </Stack>
            <Stack flex={1}>
              <Typography variant="body2" color="text.secondary">
                {t('userDetail.personalInfo.eyeColor')}
              </Typography>
              <Typography>{user.eyeColor}</Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="body2" color="text.secondary">
              {t('userDetail.personalInfo.hair')}
            </Typography>
            <Typography>{user.hair.color} • {user.hair.type}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};