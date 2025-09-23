import { TokenName } from "@/types/types";
import { create } from "zustand";

// export type Wallet = {
//   walletName: string;
//   walletNumber: number;
//   tokens: Token[];
// };

// export type WalletStore = {
//   wallets: Wallet[];
//   addWallet: (newWallet: Wallet) => void;
//   setWallet: (tokens: Wallet[]) => void;
// };

// export const useWalletStore = create<WalletStore>((set) => ({
//   wallets: [],
//   addWallet: (newWallet: Wallet) =>
//     set((state) => ({
//       wallets: [...state.wallets, newWallet],
//     })),
//   setWallet: (tokens: Wallet[]) =>
//     set(() => ({
//       wallets: tokens,
//     })),
// }));

export type SingleToken<T extends TokenName> = {
  tokenName: T;
  tokenImage: string;
  amount: number;
  publicKey: string;
};

export type Account = {
  accountName: string;
  accountNumer: number;
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
