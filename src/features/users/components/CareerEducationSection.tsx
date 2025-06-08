import { Typography, Paper, Stack } from '@mui/material';
import { School, Work } from '@mui/icons-material';
import type { FC } from 'react';
import { useAppTranslations } from '../../../assets';
import type { User } from '../api';

type CareerEducationSectionProps = {
  user: User;
}

export const CareerEducationSection: FC<CareerEducationSectionProps> = ({ user }) => {
  const { t } = useAppTranslations();

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" color="primary.main">{t('userDetail.careerEducation.title')}</Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center" flex={1}>
            <Work color="action" />
            <Stack flex={1}>
              <Typography variant="body2" color="text.secondary">
                {t('userDetail.careerEducation.company')}
              </Typography>
              <Typography fontWeight="medium">{user.company.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.company.title} • {user.company.department}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" flex={1}>
            <School color="action" />
            <Stack>
              <Typography variant="body2" color="text.secondary">
                {t('userDetail.careerEducation.university')}
              </Typography>
              <Typography>{user.university}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};