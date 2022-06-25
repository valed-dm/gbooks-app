import { Select } from "./ReqData";

export interface InputData {
  title: string;
  catVal: Select;
  relVal: Select;
  allowSearch: boolean;
  startSearch: boolean;
  searchPace: string;
}
