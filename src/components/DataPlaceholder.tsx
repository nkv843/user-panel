import type { FC } from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { Replay } from '@mui/icons-material';
import { useAppTranslations } from '../assets';

type DataPlaceholderProps<T extends object = object> = React.ComponentProps<typeof Box> & {
  isFetching?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  isUninitialized?: boolean;
  error?: T;
  refetch?: () => void;
  noData?: boolean;
  ErrorPlaceholder?: FC<{ error?: T; refetch?: () => void }>;
  LoadingPlaceholder?: FC;
  NoDataPlaceholder?: FC;
  SuccessPlaceholder?: FC;
  UninitializedPlaceholder?: FC;
};

const DataPlaceholder = <T extends object = object>({
  error,
  refetch,
  isError,
  ErrorPlaceholder,
  isFetching,
  isLoading,
  LoadingPlaceholder,
  isSuccess,
  SuccessPlaceholder,
  isUninitialized,
  UninitializedPlaceholder,
  noData,
  NoDataPlaceholder,
  ...props
}: DataPlaceholderProps<T>) => (
  <Box
    display="flex"
    data-testid="data-placeholder"
    justifyContent="center"
    alignItems="center"
    height="100%"
    {...props}
  >
    {isUninitialized && UninitializedPlaceholder && (
      <UninitializedPlaceholder />
    )}
    {(isFetching || isLoading) && !isError && LoadingPlaceholder && (
      <LoadingPlaceholder />
    )}
    {isError && ErrorPlaceholder && (
      <ErrorPlaceholder error={error} refetch={refetch} />
    )}
    {noData && isSuccess && NoDataPlaceholder && <NoDataPlaceholder />}
    {isSuccess && !noData && SuccessPlaceholder && <SuccessPlaceholder />}
  </Box>
);

const DefaultErrorPlaceholder: DataPlaceholderProps['ErrorPlaceholder'] = ({ refetch }) => {
  const { t } = useAppTranslations();
  return refetch ? (
    <Stack
      data-testid="data-placeholder-error"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      height="100%"
      sx={{ cursor: 'pointer' }}
      onClick={refetch}
    >
      <Typography
        color="textSecondary"
        variant="h4"
        fontWeight='bold'
      >
        {t('dataPlaceholder.error.message.retry')}
      </Typography>
      <Replay color='action' fontSize='large' />
    </Stack>
  ) : (
    <Stack
      data-testid="data-placeholder-error"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography
        color="textSecondary"
        variant="h4"
        fontWeight='bold'
      >
        {t('dataPlaceholder.error.message.noRetry')}
      </Typography>
    </Stack>
  );
};

const DefaultNoDataPlaceholder: FC = () => {
  const { t } = useAppTranslations();
  return (
    <Typography
      variant="h4"
      data-testid="data-placeholder-no-data"
      fontWeight='bold'
      color='textSecondary'
    >
      {t('dataPlaceholder.noData.message')}
    </Typography>
  );
};

const DefaultSuccessPlaceholder: FC = () => {
  const { t } = useAppTranslations();
  return (
    <Typography
      variant="h4"
      data-testid="data-placeholder-success"
      fontWeight='bold'
      color='textSecondary'
    >
      {t('dataPlaceholder.success.message')}
    </Typography>
  );
};

const DefaultUninitializedPlaceholder: FC = () => {
  const { t } = useAppTranslations();
  return (
    <Typography
      variant="h4"
      data-testid="data-placeholder-uninitialized"
      fontWeight='bold'
      color='textSecondary'
    >
      {t('dataPlaceholder.uninitialized.message')}
    </Typography>
  );
};

DataPlaceholder.DefaultErrorPlaceholder = DefaultErrorPlaceholder;
DataPlaceholder.DefaultLoadingPlaceholder = CircularProgress;
DataPlaceholder.DefaultNoDataPlaceholder = DefaultNoDataPlaceholder;
DataPlaceholder.DefaultSuccessPlaceholder = DefaultSuccessPlaceholder;
DataPlaceholder.DefaultUninitializedPlaceholder = DefaultUninitializedPlaceholder;

export { DataPlaceholder };
