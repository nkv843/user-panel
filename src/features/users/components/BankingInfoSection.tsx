import { Typography, Paper, Stack } from '@mui/material';
import type { SxProps } from '@mui/material';
import type { FC } from 'react';
import { useAppTranslations } from '../../../assets';
import type { User } from '../api';

type BankingInfoSectionProps = {
  user: User;
}

const styles: Record<string, SxProps> = {
  ibanText: {
    fontFamily: 'monospace',
    wordBreak: 'break-all',
  },
};

export const BankingInfoSection: FC<BankingInfoSectionProps> = ({ user }) => {
  const { t } = useAppTranslations();

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" color="primary.main">
          {t('userDetail.bankingInfo.title')}
        </Typography>

        <Stack spacing={2}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Stack flex={1}>
              <Typography variant="body2" color="text.secondary">{t('userDetail.bankingInfo.cardType')}</Typography>
              <Typography>{user.bank.cardType}</Typography>
            </Stack>
            <Stack flex={1}>
              <Typography variant="body2" color="text.secondary">{t('userDetail.bankingInfo.currency')}</Typography>
              <Typography>{user.bank.currency}</Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="body2" color="text.secondary">{t('userDetail.bankingInfo.iban')}</Typography>
            <Typography sx={styles.ibanText}>{user.bank.iban}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
