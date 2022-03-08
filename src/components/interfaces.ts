import { JsxChild } from "typescript";

export interface routs {
  path: string;
  layout: JsxChild;
}

export enum urls {
  main = "/main",
  regUsers = "/regiserUser",
  booklet = "/booklet",
  loginAdmin = "",
}
