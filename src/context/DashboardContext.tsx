import { createContext, useContext, useState, ReactNode } from "react";

interface DashboardContextType {
  selectedPlanet: string;
  setSelectedPlanet: (planet: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlanet, setSelectedPlanet] = useState("All Factories");

  return (
    <DashboardContext.Provider value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
