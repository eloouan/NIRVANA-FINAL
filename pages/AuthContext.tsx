import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLogged: boolean;
  isAdmin: boolean;
  userId:  number;
  setisLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setisAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setuserId: React.Dispatch<React.SetStateAction<number>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogged, setisLogged] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [userId, setuserId] = useState<number>(0);

  return (
    <AuthContext.Provider value={{ isLogged, isAdmin, userId, setisLogged , setisAdmin,setuserId}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
const AuthContextDefaultExport: React.FC = () => {
  return null;
};

export default AuthContextDefaultExport;