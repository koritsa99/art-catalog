import { RootState } from "../store";

export const getUser = (state: RootState) => state.auth.user;
export const getLoading = (state: RootState) => state.auth.loading;
export const getError = (state: RootState) => state.auth.error;
