import { TokenName } from "@/types/types";
import { create } from "zustand";

export type SingleToken<T extends TokenName> = {
  tokenName: T;
  tokenImage: string;
  amount: number;
  publicKey: string;
};

export type Account = {
  accountName: string;
  accountNumber: number;
  tokens: SingleToken<TokenName>[];
};

export type AccountStore = {
  accounts: Account[];
  addAccount: (newAccount: Account) => void;
  setAccount: (newAccounts: Account[]) => void;
};

export const useAccountStore = create<AccountStore>((set) => ({
  accounts: [],
  addAccount: (newAccount: Account) =>
    set((state) => ({
      accounts: [...state.accounts, newAccount],
    })),
  setAccount: (newAccounts: Account[]) =>
    set(() => ({
      accounts: newAccounts,
    })),
}));

type SingleInputStore = {
  currentInput: string
  setCurrentInput: (input:string) => void;
}

export const useSingleInputStore = create<SingleInputStore>((set)=>({
  currentInput:"",
  setCurrentInput: (input)=> set((state)=>({
    currentInput: input
  }))
}))
