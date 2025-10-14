import { TokenName } from "@/types/types";
import { Connection, PublicKey } from "@solana/web3.js";
import { create } from "zustand";

export type SingleToken<T extends TokenName> = {
  tokenName: T | null;
  tokenImage: string;
  balance: number;
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
  updateBalance: (publicKey: string, balance: number) => void;
  connWebSocket: (tokenPublicKey: string, connection: Connection) => void;
};

export const useAccountStore = create<AccountStore>((set, get) => ({
  accounts: [],
  currentAccountIndex: 0,
  addAccount: (newAccount, accountIndex?) =>
    set((state) => ({
      accounts: [...state.accounts, newAccount],
      currentAccountIndex: accountIndex,
    })),
  setAccount: (newAccounts, accountIndex) =>
    set(() => ({
      accounts: newAccounts,
      currentAccountIndex: accountIndex,
    })),
  updateBalance: (publicKey, balance) =>
    set((state) => ({
      accounts: state.accounts.map((account) => ({
        ...account,
        tokens: account.tokens.map((token) => (token.publicKey === publicKey ? { ...token, balance } : token)),
      })),
    })),
  connWebSocket: (tokenPubKey, connection) => {
    const pubkey = new PublicKey(tokenPubKey);
    connection.onAccountChange(pubkey, (accountInfo) => {
      const balance = accountInfo.lamports / 1e9;
      get().updateBalance(tokenPubKey, balance);
    });
  },
}));

type SingleInputStore = {
  currentInput: string | null;
  setCurrentInput: (input: string | null) => void;
};

export const useSingleInputStore = create<SingleInputStore>((set) => ({
  currentInput: "",
  setCurrentInput: (input) =>
    set((state) => ({
      currentInput: input,
    })),
}));

type SelectedAccountDetails = {
  selectedAccount: Account;
  selectedToken: SingleToken<TokenName>;
  setSelectedAccountDetails: (account: Account) => void;
  setSelectedToken: (token: SingleToken<TokenName>) => void;
};

export const useSelectedAccountDetails = create<SelectedAccountDetails>((set) => ({
  selectedAccount: { accountName: "", accountNumber: -1, tokens: [{ balance: -1, publicKey: "", tokenImage: "", tokenName: null }] },
  selectedToken: { balance: -1, publicKey: "", tokenImage: "", tokenName: null },
  setSelectedAccountDetails: (account) =>
    set(() => ({
      selectedAccount: account,
    })),
  setSelectedToken: (token) =>
    set(() => ({
      selectedToken: token,
    })),
}));
