import type { FC } from 'react'
import { Avatar, TableBody, TableCell, TableRow } from '@mui/material'
import type { SxProps } from '@mui/material'
import type { User } from '../api'

type UserTableBodyProps = {
  users: User[]
  onRowClick: (user: User) => void
}

const styles: Record<string, SxProps> = {
  row: {
    '&:hover': { backgroundColor: 'action.hover' },
    '&:active': { backgroundColor: 'action.selected' },
    cursor: 'pointer',
  },
}

export const UserTableBody: FC<UserTableBodyProps> = ({ users, onRowClick }) => (
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id} sx={styles.row} onClick={() => onRowClick(user)}>
        <TableCell>
          <Avatar src={user.image} />
        </TableCell>
        <TableCell>{user.firstName}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell>{user.address.city}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);