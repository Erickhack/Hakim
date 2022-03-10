interface otherData {
  editPost: fomrRegUser | null;
}

export interface configState<T> {
  item: T[];
  error: string | null;
  loading: boolean;
  otherDate: otherData | null;
}

export interface fomrRegUser {
  fullName: string;
  email: string;
  numberPhone: string;
  job: string;
  position: string;
  ranks: string;
  report: string;
  rezume: File | null;
}
