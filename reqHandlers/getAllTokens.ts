import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { GetProgramAccountsFilter } from "@solana/web3.js";
import { solanaConnection } from "./solanaConnectionProvider";
export const getTokenAccounts = async (wallet: string) => {
  const filters: GetProgramAccountsFilter[] = [
    {
      dataSize: 165,
    },
    {
      memcmp: {
        offset: 32,
        bytes: wallet,
      },
    },
  ];
  const accounts = await solanaConnection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, { filters: filters });
  return accounts;
}