import { StateCreator } from "zustand"

type User = {
    userName: string,
    fullName: string,
    age: number,
    address: string
}

type UserActions = {
    setAddress: (address: string) => void
}

export type UserSlice = User & UserActions

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (set) => ({
    address: '',
    fullName: '',
    age: 0,
    userName: '',
    setAddress: (address: string) => set(state => {state.address = address})
})