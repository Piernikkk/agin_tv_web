import { TUser } from "@/lib/types/TUser";
import { createContext } from "react";

export const UserContext = createContext<TUser | null>(null);