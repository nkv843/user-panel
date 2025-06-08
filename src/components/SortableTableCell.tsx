import { useCallback, useRef } from 'react';
import { TableSortLabel, TableCell, Stack } from '@mui/material';
import SouthSharpIcon from '@mui/icons-material/SouthSharp';

type SortableTableCellProps = React.ComponentProps<typeof TableSortLabel> & {
  sortLabelProps?: Omit<React.ComponentProps<typeof TableSortLabel>, 'children'>;
  onSort: TableSortCallback;
}

export type TableSortCallback = (nextDirection: 'asc' | 'desc') => void;

export const SortableTableCell = ({
  onSort, onClick, sortLabelProps, children, ...props
}: SortableTableCellProps) => {
  const directionRef = useRef<'asc' | 'desc'>('asc');

  const onLabelClick = useCallback<NonNullable<SortableTableCellProps['onClick']>>((e) => {
    const nextDirection = directionRef.current === 'desc' ? 'asc' : 'desc';
    onSort(nextDirection);
    directionRef.current = nextDirection;
    onClick?.(e);
  }, [onSort, onClick]);

  return (
    <TableCell {...props} sx={{ fontWeight: 700, ...props.sx }}>
      <Stack justifyContent='flex-start' direction='row'>
        {children}
        <TableSortLabel
          IconComponent={SouthSharpIcon}
          direction={directionRef.current}
          onClick={onLabelClick}
          {...sortLabelProps}
        />
      </Stack>
    </TableCell>
  );
};
