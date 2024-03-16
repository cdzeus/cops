import clsx from "clsx";
import { createContext, useContext, useState } from "react";
import Wrapper from "@/components/nossr";
import { PositionType, SideOfType } from "@/types/position-type";
import { v4 as uuidv4 } from "uuid";

interface Props {
  children: React.ReactNode;
}

const context = createContext({
  isActive: true,
  updateIsActive: () => {},
  currentPosition: "bottom-bottom",
  updateCurrentPosition: (name: string) => {},
});

const ContextProvider = ({ children }: Props) => {
  const [isActive, setIsActive] = useState(true);
  const [currentPosition, setCurrentPosition] = useState("center");

  const updateIsActive = () => {
    isActive && setIsActive(false);
  };
  const updateCurrentPosition = (name: string) => {
    setCurrentPosition(name);
  };

  return (
    <context.Provider
      value={{
        isActive,
        currentPosition,
        updateCurrentPosition,
        updateIsActive,
      }}
    >
      {" "}
      {children}
    </context.Provider>
  );
};

export default function Home() {
  return (
    <>
      <ContextProvider>
        <div className="pl-8 sm:pl-[180px] md:pl-[300px] lg:pl-[370px] xl:pl-[480px] pt-36 bg-gray-400 h-screen">
          <div className="relative">
            <div className="absolute">
              <GameLand />
            </div>
            <div className="absolute">
              <PlayBoard />
            </div>
          </div>
        </div>
      </ContextProvider>
    </>
  );
}

const GameLand = () => {
  return (
    <div className="relative w-96 h-96 flex justify-center items-center bg-white opacity-80 bg-opacity-70 rounded-full border border-1 border-primary overflow-hidden">
      <div className="absolute z-20 h-full w-[1px] border border-1 border-primary top-0 " />
      <div className="absolute z-20 w-full h-[1px] border border-1 border-primary top-1/2" />

      <div className="absolute w-24 h-24  left-[143px] -top-11 rounded-full border border-primary border-1 z-10" />
      <div className="absolute w-24 h-24  left-[143px] -bottom-11 rounded-full border border-1 border-primary z-10" />

      <div className="absolute w-24 h-24  top-[144px] -left-11 rounded-full border border-1 border-primary z-10" />
      <div className="absolute w-24 h-24  top-[144px] -right-11 rounded-full border border-1 border-primary z-10" />

      <div className="absolute w-24 h-24 rounded-full border border-1 border-primary z-10" />
    </div>
  );
};

const PlayBoard = () => {
  return (
    <div className="relative w-96 h-96  bg-opacity-25 z-30 flex justify-center items-center">
      {/** THIEF */}
      <ThiefInitialPosition />
      {/** COPS */}
      <CopsInitialPosition />
    </div>
  );
};

interface ThiefProps {
  position?: string;
  isActive?: boolean;
  action?: () => void;
  current: string;
}

const Thief = ({ position, isActive, current, action }: ThiefProps) => {
  const [thiefState, setThiefState] = useState(false);
  const { updateIsActive, updateCurrentPosition } = useContext(context);

  const handleClick = () => {
    updateIsActive();
    updateCurrentPosition(current);
    setThiefState((current) => !current);
  };

  return (
    <div
      onClick={handleClick}
      onMouseDown={action}
      className={clsx(
        "absolute w-6 h-6 flex justify-center items-center rounded-full  hover:scale-125 transition-all duration-300 z-40 " +
          position,
        isActive
          ? "shadow-md border border-1 border-alert-danger shadow-hover-danger"
          : thiefState
          ? "shadow-md border border-1 border-alert-danger shadow-hover-danger"
          : ""
      )}
    >
      <div
        className={clsx(
          "w-4 h-4 rounded-full transition-all duration-300",
          isActive
            ? " shadow-sm bg-alert-danger shadow-alert-danger"
            : thiefState
            ? " shadow-sm bg-alert-danger shadow-alert-danger"
            : "bg-primary-300 bg-opacity-75"
        )}
      />
    </div>
  );
};

interface CopsProps {
  position?: string;
  isActive?: boolean;
  onChangeIsActive?: () => void;
}

const Cops = ({ position, onChangeIsActive }: CopsProps) => {
  return (
    <Wrapper>
      <div
        className={clsx(
          "absolute w-6 h-6 flex justify-center items-center rounded-full  hover:scale-125 border-cops-border shadow-cops-hover hover: transition-all duration-300 z-40 shadow-md border border-1 ",
          position
        )}
      >
        <div
          className={clsx(
            "w-4 h-4 rounded-full transition-all duration-300 shadow-sm bg-cops-blue shadow-cops-border"
          )}
        />
      </div>
    </Wrapper>
  );
};

const getRandomElements = (
  array: PositionType,
  nbElements: number,
  current: string
) => {
  if (nbElements <= array.length) {
    const copyArray = [...array];
    const ArrayWithoutThiefInitialPosition = copyArray.filter(
      (newArray) => newArray.name !== current
    );
    const shuffledArray = ArrayWithoutThiefInitialPosition.sort(
      () => Math.random() - 0.5
    );

    return shuffledArray.slice(0, nbElements);
  } else {
    throw new Error("Length of elements out of bounds");
  }
};

const PositionThief = (currentPosition: string) => {
  return position.filter((thief) => thief.name === currentPosition);
};

const PositionCops = () => {};

const CopsInitialPosition = () => {
  const copsPosition = RandomCops();
  return (
    <>
      {copsPosition.map((cops) => (
        <Cops key={uuidv4()} position={`${cops.placement}`} />
      ))}
    </>
  );
};

const ThiefInitialPosition = () => {
  const { isActive, currentPosition } = useContext(context);
  const currentThief = PositionThief(currentPosition);
  const othersThief: SideOfType = currentThief[0].sideOf;

  return (
    <>
      {othersThief.map((item) => (
        <Thief
          current={item.name}
          key={uuidv4()}
          action={() => console.log("clicked action")}
          position={`${item.placement}`}
        />
      ))}
      {currentThief !== null && (
        <Thief
          current={currentThief[0].name}
          key={uuidv4()}
          action={() => console.log(currentThief[0].id)}
          isActive={isActive}
          position={`${currentThief[0].placement}`}
        />
      )}
    </>
  );
};

const RandomCops = () => {
  const { currentPosition } = useContext(context);
  return getRandomElements(position, 3, currentPosition);
};

const BestCopNear = () => {
  const { currentPosition } = useContext(context);
  const positionThief = PositionThief(currentPosition);
};

const position: PositionType = [
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
