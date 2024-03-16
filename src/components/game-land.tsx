export const GameLand = () => {
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
