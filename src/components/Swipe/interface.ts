export interface StaticChildProps {
  arr: number[];
}

export interface RadiochildProps {
  arr: number[];
  radioValue: string;
  onRadioValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
