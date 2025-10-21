import { TokenName } from "@/types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type SingleToken = {
  tokenName: TokenName | null | string;
  tokenImage: string;
  balance: number;
  publicKey: string;
  tokenAddress: string;
  isDerivedToken: boolean;
  chain: TokenName | null;
  usdValue: number;
  symbol: string | null;
};

export type Account = {
  accountName: string;
  accountNumber: number;
  tokens: SingleToken[];
};

export type AccountStore = {
  accounts: Account[];
  currentAccountIndex: number;
  addAccount: (newAccount: Account) => void;
  setAccount: (newAccounts: Account[], accountIndex: number) => void;
  addTokens: (accountNumber: number, tokens: SingleToken[]) => void;
};

export const useAccountStore = create<AccountStore>()(
  persist(
    (set, get) => ({
      accounts: [],
      currentAccountIndex: 0,
      addAccount: (newAccount) =>
        set((state) => ({
          accounts: [...state.accounts, newAccount],
          currentAccountIndex: state.currentAccountIndex + 1,
        })),
      setAccount: (newAccounts, accountIndex) =>
        set(() => ({
          accounts: newAccounts,
          currentAccountIndex: accountIndex,
        })),
      addTokens: (accountNumber, tokens) =>
        set((state) => ({
          accounts: state.accounts.map((account) =>
            account.accountNumber === accountNumber ? { ...account, tokens: [...account.tokens, ...tokens] } : account,
          ),
        })),
    }),
    {
      name: "account-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        accounts: state.accounts,
        currentAccountIndex: state.currentAccountIndex,
      }),
    },
  ),
);

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
  selectedToken: SingleToken;
  totalUsdValue: number;
  setSelectedAccountDetails: (account: Account) => void;
  setSelectedToken: (token: SingleToken) => void;
  updateBalance: (publicKey: string, balance: number) => void;
  updateUsdValue: (publicKey: string, usdValue: number) => void;
};

export const useSelectedAccountDetails = create<SelectedAccountDetails>((set) => ({
  selectedAccount: {
    accountName: "",
    accountNumber: -1,
    tokens: [{ balance: -1, publicKey: "", tokenImage: "", tokenName: null, tokenAddress: "", chain: null, isDerivedToken: false, usdValue: -1, symbol: null }],
  },
  selectedToken: {
    balance: -1,
    publicKey: "",
    tokenImage: "",
    tokenName: null,
    tokenAddress: "",
    chain: null,
    isDerivedToken: false,
    usdValue: -1,
    symbol: null
  },
  totalUsdValue: -1,
  setSelectedAccountDetails: (account) =>
    set(() => ({
      selectedAccount: account,
    })),
  setSelectedToken: (token) =>
    set(() => ({
      selectedToken: token,
    })),
  updateBalance: (publicKey, balance) =>
    set((state) => {
      const updatedAccount = {
        ...state.selectedAccount,
        tokens: state.selectedAccount.tokens.map((token) => (token.publicKey === publicKey ? { ...token, balance } : token)),
      };

      const totalUsdValue = updatedAccount.tokens.reduce((sum, token) => sum + token.balance * token.usdValue, 0);

      return { selectedAccount: updatedAccount, totalUsdValue };
    }),

  updateUsdValue: (publicKey, usdValue) =>
    set((state) => {
      const updatedAccount = {
        ...state.selectedAccount,
        tokens: state.selectedAccount.tokens.map((token) => (token.publicKey === publicKey ? { ...token, usdValue } : token)),
      };

      const totalUsdValue = updatedAccount.tokens.reduce((sum, token) => sum + token.balance * token.usdValue, 0);

      return { selectedAccount: updatedAccount, totalUsdValue };
    }),
}));
