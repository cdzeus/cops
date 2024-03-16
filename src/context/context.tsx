import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const context = createContext({
  isActive: true,
  updateIsActive: () => {},
  currentPosition: "center-bottom",
  updateCurrentPosition: (name: string) => {},
});
export const ContextProvider = ({ children }: Props) => {
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
