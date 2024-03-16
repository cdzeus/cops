export type PositionType = {
  id: number;
  name: string;
  placement: string;
  sideOf: { name: string; placement: string }[];
}[];

export type SideOfType = { name: string; placement: string }[];
