export enum TokenName {
  solana = "Solana",
  bitcoin = "Bitcoin",
  ethereum = "Ethereum",
}

export enum WalletImgLocation {
  solana = "/images/solana-logo.png",
  ethereum = "/images/ethereum-logo.png",
  bitcoin = "/images/bitcoin-logo.png",
}

export enum CoinAddress {
  solana = "11111111111111111111111111111111",
  ethereum = "0x0000000000000000000000000000000000000000",
  bitcoin = "bitcoin"
}

export type lifiToken = {
  chainId?: number;
  address?: string;
  symbol?: string;
  name?: string;
  decimals?: number;
  priceUSD?: string;
  coinKey?: string;
  logoURI?: string;
};