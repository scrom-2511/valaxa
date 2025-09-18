import Import_Watch from "@/components/Import_Watch";
import { useRouter } from "expo-router";
import React from "react";

const WatchAccountOption = () => {
  const router = useRouter();
  return (
    <Import_Watch title="Watch An Account" placeholder="Enter the public key:" buttonText="WATCH ACCOUNT" onPress={()=>{}}/>
  );
};

export default WatchAccountOption;
