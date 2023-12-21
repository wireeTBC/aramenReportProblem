// utils/auth.ts
import jwt from "jsonwebtoken";

export const isTokenValid = (token: string): boolean => {
  try {
    const jwtPayload = JSON.parse(window.atob(token.split(".")[1]));
    const expirationDate = new Date(jwtPayload.exp * 1000);
    console.log(new Date() < expirationDate);
    return new Date() < expirationDate;
  } catch (error) {
    return false;
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || "";
  }
};

export const isAuthenticated = () => {
  const token = getToken();
  return token !== null;
};
