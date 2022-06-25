export interface Select {
  value: string;
  label: string;
}

interface ReqData {
  title: string;
  catVal: Select;
  relVal: Select;
  searchPace: string;
}

export default ReqData;
