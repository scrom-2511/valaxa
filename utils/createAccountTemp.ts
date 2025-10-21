import { Account, useAccountStore, useSingleInputStore } from "@/app/zustand/store";

export const createAccountTemp = () => {
  const { currentInput } = useSingleInputStore.getState();
  const { currentAccountIndex, addAccount } = useAccountStore.getState();

  const account: Account = {
    accountName: currentInput ?? "",
    accountNumber: currentAccountIndex + 1,
    tokens: [],
  };

  addAccount(account);
};