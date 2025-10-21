import { Account, useAccountStore } from "@/app/zustand/store";
import { getTokenAccounts } from "@/reqHandlers/getAllTokens";
import { getBalanceSolana } from "@/reqHandlers/getBalance";
import { CoinAddress, CoinSymbol, TokenName, WalletImgLocation } from "@/types/types";

export const createAccount = async (pubKey: string) => {
  const { accounts, setAccount, addAccount, addTokens, currentAccountIndex } = useAccountStore.getState();
  if (pubKey.startsWith("0x")) {
    // handle EVM addresses later
    return;
  } else {
    const accountBalance = await getBalanceSolana(pubKey);
    const accountIndexToReplaceWith = accounts.findIndex((account) => account.accountNumber === currentAccountIndex);

    if (accountIndexToReplaceWith === -1 || typeof accountBalance !== "number") return;

    const accountToReplace: Account = {
      ...accounts[accountIndexToReplaceWith],
      tokens: [
        {
          balance: accountBalance,
          publicKey: pubKey,
          tokenImage: WalletImgLocation.solana,
          tokenName: TokenName.solana,
          chain: TokenName.solana,
          isDerivedToken: false,
          usdValue: -1,
          tokenAddress: CoinAddress.solana,
          symbol: CoinSymbol.solana,
        },
      ],
    };

    const updatedAccounts = [...accounts];
    updatedAccounts[accountIndexToReplaceWith] = accountToReplace;

    setAccount(updatedAccounts, currentAccountIndex);

    const splTokensData = await getTokenAccounts(pubKey);
    if (splTokensData) {
      addTokens(currentAccountIndex, splTokensData);
    }
  }
};
