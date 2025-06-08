import { Avatar, Box, Typography, Chip, Stack } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { FC } from 'react';
import { useAppTranslations } from '../../../assets';
import type { User } from '../api';

type UserHeaderProps = {
  user: User;
}

const styles: Record<string, SxProps<Theme>> = {
  avatar: {
    width: 80,
    height: 80,
    border: '3px solid',
    boxShadow: 2,
  },
  container: ({ palette }) => ({
    background: `linear-gradient(120deg, ${palette.primary.dark} 0%, ${palette.primary.main} 100%)`,
    color: 'primary.contrastText',
  }),
};

const getInitials = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

export const UserHeader: FC<UserHeaderProps> = ({ user }) => {
  const { t } = useAppTranslations();

  return (
    <Box sx={styles.container} p={3}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={user.image} sx={styles.avatar}>
          {getInitials(user.firstName, user.lastName)}
        </Avatar>
        <Stack>
          <Typography variant="h4" fontWeight="bold">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            @{user.username}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
            <Chip color="info" label={user.gender} size="small" />
            <Chip color="info" label={`${user.age} ${t('users.ageYears')}`} size="small" />
            <Chip color="info" label={user.role} size="small" />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};