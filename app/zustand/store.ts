import { create } from "zustand";
import { TokenName } from "../types";
type Token = {
    tokenName: TokenName;
    tokenImage: string;
    amount: number;
    publicKey: number;
};

type WalletStore = {
  walletName: string;
  walletNumber: number;
  tokens: Token[];
  addToken: (newToken: Token) => void;
  setToken: (tokens: Token[]) => void;
};

export const useWalletStore = create<WalletStore>((set)=>({
    walletName: "",
    walletNumber: -1,
    tokens: [],
    addToken: (newToken: Token) => set((state)=>({
        tokens: [...state.tokens, newToken]
    })),
    setToken: (tokens: Token[]) => set(()=>({
        tokens: tokens
    }))
}))

type Account = {
    accountName: string;
    accountNumer: number;
}
type AccountStore = {
    accounts: Account[];
    addAccount: (newAccount: Account) => void;
    setAccount: (newAccounts: Account[]) => void;
}

export const useAccountStore = create<AccountStore>((set)=>({
    accounts: [],
    addAccount: (newAccount:Account) => set((state)=>({
        accounts: [...state.accounts, newAccount]
    })),
    setAccount: (newAccounts: Account[]) => set(()=>({
        accounts: newAccounts
    }))
}))