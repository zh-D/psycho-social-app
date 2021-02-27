interface Data {
  title: string[];
  description: string;
}

export interface CommonFactoryProps {
  width: string;
  height: string;
  bgc: string;
  data: Data;
  children: JSX.Element;
}
