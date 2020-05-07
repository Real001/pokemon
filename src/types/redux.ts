export type reduxAction<T> = {
  type: string;
  payload: T;
};
