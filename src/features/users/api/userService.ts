import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { WithSlice } from '@reduxjs/toolkit';

import { addAppMiddleware, appReducer, type AppMiddleware } from '../../../store';

type NestedKeys<T, K extends keyof T = keyof T> = K extends string | number
  ? T[K] extends object
  ? `${K}.${NestedKeys<T[K]>}`
  : K
  : never;

const userService = createApi({
  reducerPath: 'userService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (build) => ({
    getUsers: build.query<Users, (UserPaginationParams & UserSortParam & { search?: string })>({
      query: (args) => ({
        url: 'users/search',
        method: 'GET',
        params: {
          skip: args.skip,
          limit: args.limit,
          sortBy: args.sortBy,
          sortOrder: args.sortOrder,
          q: args.search,
        }
      }),
    }),
  }),
})

declare module '../../../store/store' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LazyLoadedSlices extends WithSlice<typeof userService> { }
}

appReducer.inject(userService);
addAppMiddleware(userService.middleware as AppMiddleware);

export const { useGetUsersQuery, useLazyGetUsersQuery } = userService;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  }
  role: string;
}

export type UserSortBy = NestedKeys<User>;
export type UserSortOrder = 'asc' | 'desc';
export type UserSortParam = {
  sortBy?: UserSortBy;
  sortOrder?: UserSortOrder;
}
export type UserPaginationParams = {
  skip?: number;
  limit?: number;
}

export type Users = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
