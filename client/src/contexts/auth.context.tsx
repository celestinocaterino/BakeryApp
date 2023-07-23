import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_INFO } from '../constants/config';
import { logout } from '../utils/auth.utils';
import { getLocalSession, getLocalStorage } from '../utils/storage.utils';

interface AuthContextData {
  profileData: any;
  // eslint-disable-next-line no-unused-vars
  setProfileData: (profileData: any) => void;
  signOut: () => void;
}

const AuthContext = createContext<Partial<AuthContextData>>({});

const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigate();
  const userDataFromStorage = getLocalStorage(USER_INFO) || getLocalSession(USER_INFO);
  const [profileData, setProfileData] = useState<any>(userDataFromStorage ?? undefined);

  const signOut = () => {
    logout();
    navigation('/');
  };

  return (
    <AuthContext.Provider value={{ profileData, setProfileData, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, ProfileProvider };
