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
  currentAccountIndex: number;
  addAccount: (newAccount: Account, accountIndex: number) => void;
  setAccount: (newAccounts: Account[], accountIndex: number) => void;
};

export const useAccountStore = create<AccountStore>((set) => ({
  accounts: [],
  currentAccountIndex: 0,
  addAccount: (newAccount, accountIndex?) =>
    set((state) => ({
      accounts: [...state.accounts, newAccount],
      currentAccountIndex: accountIndex
    })),
  setAccount: (newAccounts, accountIndex) =>
    set(() => ({
      accounts: newAccounts,
      currentAccountIndex: accountIndex
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

type SelectedAccountDetails = {
  selectedAccountName: string | null,
  selectedAccountNumber: number,
  selectedToken: TokenName | null,
  setSelectedAccountDetails: (selectedAccountName?: string | null, selectedAccountNumber?: number, selectedToken?: TokenName | null) => void
}

export const useSelectedAccountDetails = create<SelectedAccountDetails>((set)=>({
  selectedAccountName: null,
  selectedAccountNumber: -1,
  selectedToken: null,
  setSelectedAccountDetails: (selectedAccountName, selectedAccountNumber, selectedToken) => set(()=>({
    selectedAccountName, selectedAccountNumber, selectedToken
  }))
}))