import { create } from "zustand";

type FullNameState = {
  fullName: string | null;
  setFullName: (name: string) => void;
};

export const useFullNameStore = create<FullNameState>((set: any) => ({
  fullName: '',
  setFullName: (name: any) => {
    localStorage.setItem("fullname", name); // save to localStorage
    set({ fullName: name }); // update state
  },
}));
