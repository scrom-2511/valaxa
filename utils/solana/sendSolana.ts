import { Connection, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, Signer, SystemProgram, Transaction } from "@solana/web3.js";
import { base58_to_binary } from "base58-js";

export const sendSolana = async (fromPubkey: string, toPubkey: string, sol: number, secretKey: string, companyPublicKey: string) => {
  const conn = new Connection("https://api.devnet.solana.com", "confirmed");
  const finalFromPubKey = new PublicKey(base58_to_binary(fromPubkey));
  const finalToPubKey = new PublicKey(base58_to_binary(toPubkey));
  const finalSecretKey = base58_to_binary(secretKey);
  const finalCompanyPublicKey = new PublicKey(base58_to_binary(companyPublicKey));
  console.log(finalSecretKey);
  const transferTransaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: finalFromPubKey,
      toPubkey: finalToPubKey,
      lamports: LAMPORTS_PER_SOL * 3,
    }),
    SystemProgram.transfer({
      fromPubkey: finalFromPubKey,
      toPubkey: finalCompanyPublicKey, // change this to env
      lamports: LAMPORTS_PER_SOL * 3,
    }),
  );
  const signer: Signer = { publicKey: finalFromPubKey, secretKey: finalSecretKey };
  const signature = await sendAndConfirmTransaction(conn, transferTransaction, [signer]);
  console.log("Transaction Signature:", signature);
};
