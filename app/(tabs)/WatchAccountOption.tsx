import SingleInput from "@/components/SingleInput";
import { useRouter } from "expo-router";
import React from "react";

const WatchAccountOption = () => {
  const router = useRouter();
  return (
    <SingleInput title="Watch An Account" placeholder="Enter the public key:" buttonText="WATCH ACCOUNT" onPress={()=>{}}/>
  );
};

export default WatchAccountOption;
