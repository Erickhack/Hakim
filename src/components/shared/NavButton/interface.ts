interface SubElemLink {
  elem: string;
  link?: string;
}

export interface navElem {
  elem: string;
  subElem: SubElemLink[];
  link?: string;
}
