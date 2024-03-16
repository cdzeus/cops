import { PositionType } from "@/types/position-type";

export const position: PositionType = [
  {
    id: 11,
    name: "center",
    placement: "",
    sideOf: [
      { name: "center-top", placement: "top-[133px] left-[180px]" },
      { name: "center-bottom", placement: "bottom-[133px] left-[180px]" },
      { name: "center-right", placement: "top-[180px] right-[133px]" },
      { name: "center-left", placement: "top-[180px] left-[133px]" },
    ],
  },
  {
    id: 12,
    name: "center-top",
    placement: "top-[133px] left-[180px]",
    sideOf: [
      { name: "center", placement: "" },
      { name: "center-right", placement: "top-[180px] right-[133px]" },
      { name: "center-left", placement: "top-[180px] left-[133px]" },
      { name: "top-bottom", placement: "top-10 left-[180px]" },
    ],
  },
  {
    id: 13,
    name: "center-bottom",
    placement: "bottom-[133px] left-[180px]",
    sideOf: [
      { name: "center", placement: "" },
      { name: "center-left", placement: "top-[180px] left-[133px]" },
      { name: "center-right", placement: "top-[180px] right-[133px]" },
      { name: "bottom-top", placement: "bottom-[41px] left-[180px]" },
    ],
  },
  {
    id: 14,
    name: "center-right",
    placement: "top-[180px] right-[133px]",
    sideOf: [
      { name: "center", placement: "" },
      { name: "center-top", placement: "top-[133px] left-[180px]" },
      { name: "center-bottom", placement: "bottom-[133px] left-[180px]" },
      { name: "right-left", placement: "top-[180px] right-10" },
    ],
  },
  {
    id: 15,
    name: "center-left",
    placement: "top-[180px] left-[133px]",
    sideOf: [
      { name: "center", placement: "" },
      { name: "center-top", placement: "top-[133px] left-[180px]" },
      { name: "center-bottom", placement: "bottom-[133px] left-[180px]" },
      { name: "left-right", placement: "top-[180px] right-80" },
    ],
  },

  {
    id: 21,
    name: "top-top",
    placement: "-top-3 left-[180px]",
    sideOf: [
      { name: "top-bottom", placement: "top-10 left-[180px]" },
      { name: "top-right", placement: "-top-[5px] left-[228px]" },
      { name: "top-left", placement: "-top-[5px] left-[133px]" },
    ],
  },
  {
    id: 22,
    name: "top-bottom",
    placement: "top-10 left-[180px]",
    sideOf: [
      { name: "center-top", placement: "top-[133px] left-[180px]" },
      { name: "top-top", placement: "-top-3 left-[180px]" },
      { name: "top-left", placement: "-top-[5px] left-[133px]" },
      { name: "top-right", placement: "-top-[5px] left-[228px]" },
    ],
  },
  {
    id: 23,
    name: "top-left",
    placement: "-top-[5px] left-[133px]",
    sideOf: [
      { name: "top-top", placement: "-top-3 left-[180px]" },
      { name: "top-bottom", placement: "top-10 left-[180px]" },
      { name: "left-top", placement: "top-[133px] right-[366px]" },
    ],
  },
  {
    id: 24,
    name: "top-right",
    placement: "-top-[5px] left-[228px]",
    sideOf: [
      { name: "right-top", placement: "top-[133px] -right-[6px]" },
      { name: "top-bottom", placement: "top-10 left-[180px]" },
      { name: "top-top", placement: "-top-3 left-[180px]" },
    ],
  },

  {
    id: 31,
    name: "left-top",
    placement: "top-[133px] right-[366px]",
    sideOf: [
      { name: "top-left", placement: "-top-[5px] left-[133px]" },
      { name: "left-left", placement: "top-[180px] right-[372px]" },
      { name: "left-right", placement: "top-[180px] right-80" },
    ],
  },
  {
    id: 32,
    name: "left-bottom",
    placement: "top-[228px] right-[366px]",
    sideOf: [
      { name: "bottom-left", placement: "-bottom-[4px] left-[132px]" },
      { name: "left-left", placement: "top-[180px] right-[372px]" },
      { name: "left-right", placement: "top-[180px] right-80" },
    ],
  },
  {
    id: 33,
    name: "left-left",
    placement: "top-[180px] right-[372px]",
    sideOf: [
      { name: "left-bottom", placement: "top-[228px] right-[366px]" },
      { name: "left-top", placement: "top-[133px] right-[366px]" },
      { name: "left-right", placement: "top-[180px] right-80" },
    ],
  },
  {
    id: 34,
    name: "left-right",
    placement: "top-[180px] right-80",
    sideOf: [
      { name: "left-bottom", placement: "top-[228px] right-[366px]" },
      { name: "left-top", placement: "top-[133px] right-[366px]" },
      { name: "left-left", placement: "top-[180px] right-[372px]" },
      { name: "center-left", placement: "top-[180px] left-[133px]" },
    ],
  },

  {
    id: 41,
    name: "bottom-top",
    placement: "bottom-[41px] left-[180px]",
    sideOf: [
      { name: "bottom-left", placement: "-bottom-[4px] left-[132px]" },
      { name: "bottom-bottom", placement: "-bottom-3 left-[180px]" },
      { name: "bottom-right", placement: "-bottom-[4px] left-[227px]" },
      { name: "center-bottom", placement: "bottom-[133px] left-[180px]" },
    ],
  },
  {
    id: 42,
    name: "bottom-bottom",
    placement: "-bottom-3 left-[180px]",
    sideOf: [
      { name: "bottom-left", placement: "-bottom-[4px] left-[132px]" },
      { name: "bottom-right", placement: "-bottom-[4px] left-[227px]" },
      { name: "bottom-top", placement: "bottom-[41px] left-[180px]" },
    ],
  },
  {
    id: 43,
    name: "bottom-left",
    placement: "-bottom-[4px] left-[132px]",
    sideOf: [
      { name: "bottom-bottom", placement: "-bottom-3 left-[180px]" },
      { name: "bottom-top", placement: "bottom-[41px] left-[180px]" },
      { name: "left-bottom", placement: "top-[228px] right-[366px]" },
    ],
  },
  {
    id: 44,
    name: "bottom-right",
    placement: "-bottom-[4px] left-[227px]",
    sideOf: [
      { name: "bottom-bottom", placement: "-bottom-3 left-[180px]" },
      { name: "bottom-top", placement: "bottom-[41px] left-[180px]" },
      { name: "right-bottom", placement: "top-[229px] -right-[6px]" },
    ],
  },

  {
    id: 51,
    name: "right-top",
    placement: "top-[133px] -right-[6px]",
    sideOf: [
      { name: "right-right", placement: "top-[180px] -right-3" },
      { name: "right-left", placement: "top-[180px] right-10" },
      { name: "top-right", placement: "-top-[5px] left-[228px]" },
    ],
  },
  {
    id: 52,
    name: "right-bottom",
    placement: "top-[229px] -right-[6px]",
    sideOf: [
      { name: "right-right", placement: "top-[180px] -right-3" },
      { name: "right-left", placement: "top-[180px] right-10" },
      { name: "bottom-right", placement: "-bottom-[4px] left-[227px]" },
    ],
  },
  {
    id: 53,
    name: "right-left",
    placement: "top-[180px] right-10",
    sideOf: [
      { name: "right-right", placement: "top-[180px] -right-3" },
      { name: "right-top", placement: "top-[133px] -right-[6px]" },
      { name: "right-bottom", placement: "top-[229px] -right-[6px]" },
      { name: "center-right", placement: "top-[180px] right-[133px]" },
    ],
  },
  {
    id: 54,
    name: "right-right",
    placement: "top-[180px] -right-3",
    sideOf: [
      { name: "right-top", placement: "top-[133px] -right-[6px]" },
      { name: "right-left", placement: "top-[180px] right-10" },
      { name: "right-bottom", placement: "top-[229px] -right-[6px]" },
    ],
  },
];
