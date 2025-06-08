import { type FC } from 'react';
import { TableRow, TableCell, TableHead } from '@mui/material';

import { SortableTableCell, type TableSortCallback } from '../../../components';
import { useAppTranslations } from '../../../assets';

import { type UserSortParam } from '../api';

type UserTableHeadProps = {
  setSortParam: React.Dispatch<React.SetStateAction<UserSortParam>>;
}

export const UserTableHead: FC<UserTableHeadProps> = ({ setSortParam }) => {
  const { t } = useAppTranslations()

  const onSortCbFactory = (
    sortBy: UserSortParam['sortBy'],
  ): TableSortCallback => (sortOrder) => setSortParam({ sortBy, sortOrder });

  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <SortableTableCell onSort={onSortCbFactory('firstName')}>
          {t('users.tableHead.firstName')}
        </SortableTableCell>
        <SortableTableCell onSort={onSortCbFactory('lastName')}>
          {t('users.tableHead.lastName')}
        </SortableTableCell>
        <SortableTableCell onSort={onSortCbFactory('email')}>
          {t('users.tableHead.email')}
        </SortableTableCell>
        <SortableTableCell onSort={onSortCbFactory('phone')}>
          {t('users.tableHead.phone')}
        </SortableTableCell>
        <SortableTableCell onSort={onSortCbFactory('address.city')}>
          {t('users.tableHead.city')}
        </SortableTableCell>
      </TableRow>
    </TableHead>
  )
};
