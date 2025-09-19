import SingleInput from "@/components/SingleInput";
import { useRouter } from "expo-router";
import React from "react";

const ImportKeyOption = () => {
  const router = useRouter();
  return (
    <SingleInput title="Import Private Key" placeholder="Enter your public key:" buttonText="IMPORT ACCOUNT" onPress={()=>{}}/>
  );
};

export default ImportKeyOption;
