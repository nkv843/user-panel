import type { FC } from 'react'
import { Box, Table, TableContainer, TablePagination } from '@mui/material'

import type { User, Users, UserSortParam } from '../api'

import { UserTableHead } from './UserTableHead'
import { UserTableBody } from './UserTableBody'

type UserTableProps = {
  data: Users;
  setSortParam: React.Dispatch<React.SetStateAction<UserSortParam>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  onRowClick: (user: User) => void;
}

export const UserTable: FC<UserTableProps> = ({
  setSortParam, data, page, rowsPerPage, setPage, setRowsPerPage, onRowClick,
}) => (
  <>
    <TableContainer>
      <Table stickyHeader>
        <UserTableHead setSortParam={setSortParam} />
        <UserTableBody users={data.users} onRowClick={onRowClick} />
      </Table>
    </TableContainer>
    <TablePagination
      component={Box}
      count={data.total}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 20]}
      onPageChange={(_, page) => setPage(page)}
      onRowsPerPageChange={(e) => setRowsPerPage(Number(e.target.value))}
    />
  </>
);