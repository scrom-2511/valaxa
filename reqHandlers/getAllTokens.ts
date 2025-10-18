import { SingleToken } from "@/app/zustand/store";
import { TokenName } from "@/types/types";
import axios from "axios";
export const getTokenAccounts = async (solanaPublicKey: string) => {
  const response = await axios.post(
    'https://mainnet.helius-rpc.com/?api-key=9108538b-db95-4ca8-ae6b-5e086c6e4429',
    {
      jsonrpc: '2.0',
      id: 'getSplTokens',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: solanaPublicKey,
        options: {
          showFungible: true,
        },
      },
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const data = response.data;

  const splTokens: SingleToken[] = data.result.items
  .filter((item: any) => item.interface === "FungibleToken" && item.token_info)
  .map((item: any): SingleToken => {
    const name = item.content?.metadata?.name ?? null;
    const image = item.content?.links?.image ||
                  item.content?.files?.[0]?.uri || "";
    const decimals = item.token_info?.decimals ?? 0;
    const rawBalance = item.token_info?.balance ?? 0;
    const balance = rawBalance / Math.pow(10, decimals);
    const publicKey = item.token_info?.token_accounts?.[0]?.address ?? "";
    const tokenAddress = item.id;
    const usdValue = item.token_info?.price_info?.price_per_token ?? 0;

    return {
      tokenName: name,
      tokenImage: image,
      balance,
      publicKey,
      tokenAddress,
      chain: TokenName.solana,
      isDerivedToken: true,
      usdValue
    };
  });
  console.log(splTokens)
  return splTokens;
}