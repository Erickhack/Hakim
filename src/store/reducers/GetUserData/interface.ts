interface otherData {}

export interface configState<T> {
  item: T[];
  error: null | string;
  loading: boolean;
  otherData: otherData | null;
}

export interface GetUserData {
  fullName: string;
  email: string;
  numberPhone: string;
  job: string;
  position: string;
  ranks: string;
  report: string;
}
