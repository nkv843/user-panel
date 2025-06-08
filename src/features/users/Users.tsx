import { useState } from 'react';
import type { FC } from 'react';
import { Paper, Stack, OutlinedInput, Dialog, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { Search } from '@mui/icons-material';

import { DataPlaceholder } from '../../components';
import { useAppTranslations } from '../../assets';
import { useDebouncedState } from '../../utils';

import { useGetUsersQuery, type User, type UserSortParam } from './api';
import { useShareUsersLink } from './hooks';
import { UserTable } from './components';
import { UserPopup } from './UserPopup';

const styles: Record<string, SxProps<Theme>> = {
  searchInput: {
    backgroundColor: 'background.paper',
  },
  headerSection: ({ palette }) => ({
    background: `linear-gradient(135deg, ${palette.primary.dark} 0%, ${palette.primary.main} 100%)`,
    padding: 3,
    color: 'primary.contrastText',
  }),
}

export const Users: FC = () => {
  const { t } = useAppTranslations();
  const [debouncedSearch, [search, setSearch]] = useDebouncedState('', 500);
  const [sortParam, setSortParam] = useState<UserSortParam>({ sortBy: 'firstName', sortOrder: 'asc' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [selectedUser, setSelectedUser] = useState<User>();

  useShareUsersLink({
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    search,
    setSearch,
    sortParam,
    setSortParam,
  })

  const { data, ...queryState } = useGetUsersQuery({
    sortBy: sortParam.sortBy,
    sortOrder: sortParam.sortOrder,
    limit: rowsPerPage,
    skip: page * rowsPerPage,
    search: debouncedSearch,
  }, { refetchOnMountOrArgChange: true });

  return (
    <Stack spacing={3} p={3} maxWidth='xl' mx='auto'>
      <Paper sx={styles.headerSection} elevation={3}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {t('users.title')}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {t('users.subtitle')}
        </Typography>
        <OutlinedInput
          fullWidth
          startAdornment={<Search sx={{ mr: 1, color: 'primary.main' }} />}
          placeholder={t('users.searchPlaceholder')}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          sx={styles.searchInput}
        />
      </Paper>

      <Paper elevation={3}>
        {data?.users?.length ? (
          <UserTable
            data={data}
            onRowClick={setSelectedUser}
            setSortParam={setSortParam}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        ) : (
          <DataPlaceholder
            {...queryState}
            p={4}
            noData={!data?.users?.length}
            ErrorPlaceholder={DataPlaceholder.DefaultErrorPlaceholder}
            LoadingPlaceholder={DataPlaceholder.DefaultLoadingPlaceholder}
            NoDataPlaceholder={DataPlaceholder.DefaultNoDataPlaceholder}
          />
        )}
      </Paper>
      <Dialog open={!!selectedUser} onClose={() => setSelectedUser(undefined)}>
        {selectedUser ? (
          <UserPopup user={selectedUser} />
        ) : null}
      </Dialog>
    </Stack>
  );
};
