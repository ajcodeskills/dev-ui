import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

interface IDeviceContextProps {
  children: React.ReactElement;
}
export const DeviceTypeContext = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
});

const DeviceContextProvider = ({ children }: IDeviceContextProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  return (
    <DeviceTypeContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

const useDeviceType = () => {
  return useContext(DeviceTypeContext);
};
export { DeviceContextProvider, useDeviceType };
