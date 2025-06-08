import { useCallback, useEffect, useState } from 'react';

import type { UserSortParam } from '../api';

type UseShareUsersLinkProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sortParam: UserSortParam;
  setSortParam: React.Dispatch<React.SetStateAction<UserSortParam>>;
}

/**
 * 
 * @param props 
 */

export const useShareUsersLink = (props: UseShareUsersLinkProps) => {
  const [listen, setListen] = useState(false);

  useEffect(() => {
    if (listen) {
      const params = new URLSearchParams();
      params.set('sortBy', props.sortParam.sortBy ?? '');
      params.set('sortOrder', props.sortParam.sortOrder ?? '');
      params.set('page', props.page.toString());
      params.set('rowsPerPage', props.rowsPerPage.toString());
      params.set('search', props.search);
      window.history.pushState(null, '', `?${params.toString()}`);
    }
  }, [listen, props]);

  const queryRehydrationListener = useCallback(() => {
    setListen(true);
    const params = new URLSearchParams(window.location.search);
    const sortBy = params.get('sortBy');
    const sortOrder = params.get('sortOrder');
    const page = params.get('page');
    const rowsPerPage = params.get('rowsPerPage');
    const search = params.get('search');

    if (sortBy) {
      props.setSortParam({
        sortBy,
        sortOrder: sortOrder ?? 'asc',
      } as UserSortParam);
    }
    if (page) {
      props.setPage(Number(page));
    }
    if (rowsPerPage) {
      props.setRowsPerPage(Number(rowsPerPage));
    }
    if (search) {
      props.setSearch(search);
    }
  }, [props]);

  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener('load', queryRehydrationListener, { signal: controller.signal });
    return () => controller.abort();
  }, [queryRehydrationListener]);
}
