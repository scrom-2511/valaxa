import Import_Watch from "@/components/Import_Watch";
import { useRouter } from "expo-router";
import React from "react";

const ImportKeyOption = () => {
  const router = useRouter();
  return (
    <Import_Watch title="Import Private Key" placeholder="Enter your public key:" buttonText="IMPORT ACCOUNT" onPress={()=>{}}/>
  );
};

export default ImportKeyOption;
