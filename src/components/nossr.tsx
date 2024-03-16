import dynamic from "next/dynamic";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default dynamic(() => Promise.resolve(Wrapper), { ssr: false });
