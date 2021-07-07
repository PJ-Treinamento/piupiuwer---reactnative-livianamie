import React, {
  useCallback,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { IUser } from "../models";

import api from "../services/api";

interface LoginData {
  email: string;
  password: string;
}

interface AuthState {
  user: IUser;
  token: string;
}

interface AuthContextData {
  user: IUser;
  token: string;
  error: boolean;
  loading: boolean;
  login(user: LoginData): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const token = await AsyncStorage.getItem("@Piupiuwer:token");
      const user = await AsyncStorage.getItem("@Piupiuwer:user");

      if (user && token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUserData({ token, user: JSON.parse(user) });
      }
    };

    loadData();
  }, []);

  const login = useCallback(async (data: LoginData) => {
    setLoading(true);
    try {
      const response = await api.post("/sessions/login", data);
      const token = response.data.token;
      const user = response.data.user;

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        await AsyncStorage.setItem("@Piupiuwer:token", token);
        await AsyncStorage.setItem("@Piupiuwer:user", JSON.stringify(user));

        setUserData({ token: token, user: user });
      }
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }, []);

  const logout = () => {
    AsyncStorage.removeItem('@Piupiuwer:user');
    AsyncStorage.removeItem('@Piupiuwer:token');

    setUserData({} as AuthState);
  };

  return (
    <AuthContext.Provider
      value={{
        user: userData.user,
        token: userData.token,
        error: error,
        loading: loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};
