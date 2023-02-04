import axios, { AxiosInstance } from "axios";
import { AxiosClientOptions } from "./types";

export const getAxiosClient = (apiKey: string, options: AxiosClientOptions | null): AxiosInstance => {
  const axiosClient = axios.create({
    baseURL: options?.baseUrl || window.location.origin,
    timeout: 20000,
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
  });

  return axiosClient;
};