export interface BaseItem {
  name: string;
  url: string;
}

export interface State<T> {
  data: T;
  isLoading: boolean;
  error: Error | null;
}
