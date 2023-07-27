import { useQuery } from "@tanstack/react-query";
import React, { createContext, useCallback, useEffect, useState } from "react";

import { localStorageKeys } from "../config/localStorageKeys";
import { usersService } from "../services/usersService";
import { toast } from "react-hot-toast";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN)

    return !!storedAccessToken
  })

  const { isError } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken)

    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false)
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error("Sessão expirada")
      signout()
    }
  }, [isError, signout])

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
