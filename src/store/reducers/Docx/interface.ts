export interface docxInitConfig<T> {
  items: T[];
  loading: boolean;
  error: null | string;
  otherDate: any;
}

export interface docxItemConfig {
  fileName: string;
  position: string;
}
