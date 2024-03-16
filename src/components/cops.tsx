import clsx from "clsx";
import Wrapper from "@/components/nossr";

interface Props {
  position?: string;
  isActive?: boolean;
  onChangeIsActive?: () => void;
}

export const Cops = ({ position, onChangeIsActive }: Props) => {
  return (
    <Wrapper>
      <div
        className={clsx(
          "absolute w-6 h-6 flex justify-center items-center rounded-full  hover:scale-125 border-cops-border shadow-cops-hover hover: transition-all duration-300 z-40 shadow-md border border-1 " +
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
