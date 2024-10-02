import { Store } from "@/types/store";
import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import { immer } from "zustand/middleware/immer";


export const useStore = create<Store>()(
    immer((...a) => ({
    ...createUserSlice(...a)
}))
);