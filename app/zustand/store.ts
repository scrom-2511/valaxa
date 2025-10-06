import { TokenName } from "@/types/types";
import { create } from "zustand";

export type SingleToken<T extends TokenName> = {
  tokenName: T | null;
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
  currentInput: string | null;
  setCurrentInput: (input:string | null) => void;
}

export const useSingleInputStore = create<SingleInputStore>((set)=>({
  currentInput:"",
  setCurrentInput: (input)=> set((state)=>({
    currentInput: input
  }))
}))

type SelectedAccountDetails = {
  selectedAccount: Account
  selectedToken: SingleToken<TokenName>
  setSelectedAccountDetails: (account:Account) => void
  setSelectedToken: (token: SingleToken<TokenName>) => void
}

export const useSelectedAccountDetails = create<SelectedAccountDetails>((set)=>({
  selectedAccount: {accountName:"", accountNumber: -1, tokens: [{amount: -1, publicKey: "", tokenImage:"", tokenName: null}]},
  selectedToken: {amount: -1, publicKey: "", tokenImage:"", tokenName: null},
  setSelectedAccountDetails: (account) => set(()=>({
    selectedAccount: account
  })),
  setSelectedToken: (token) => set(()=>({
    selectedToken: token
  }))
}))