import { docxItemConfig } from "../reducers/Docx/interface";
import { GetUserData } from "./../reducers/GetUserData/interface";
import { fomrRegUser } from "./../reducers/RegUser/interface";
import { GetAllDocxAT, GetUserAT, RegUserAT } from "./types";

export interface IreguserSuccess {
  type: RegUserAT.HANLDE_SUCCESS;
  payload: {
    data: fomrRegUser[];
  };
}

export interface IreguserSubmit {
  type: RegUserAT.HANDLE_SUBMIT;
  payload: {
    values: fomrRegUser;
  };
}

export interface IreguserChange {
  type: RegUserAT.HANDLE_CHANGE;
  payload: {
    value: string;
    name: string;
    files: FileList | null;
  };
}

export type RegUserAction = IreguserSuccess | IreguserSubmit | IreguserChange;

// get user data

export interface IgetUserData {
  type: GetUserAT.GETUSER_SUCCESS;
  payload: {
    data: GetUserData[];
  };
}

export type GetUserAction = IgetUserData;

// get all docx

export interface IGetAllDocx {
  type: GetAllDocxAT.GETDOCX_SUCCESS;
  payload: {
    data: docxItemConfig[];
  };
}

export type DocxAction = IGetAllDocx;
