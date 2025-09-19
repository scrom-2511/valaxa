import React from "react";
import { View } from "react-native";
import CardOverview from "../CardOverview";

const TopCardsYourAccounts = () => {
  return (
    <View className="flex-row flex-wrap gap-5 p-5">
      <CardOverview></CardOverview>
      <CardOverview></CardOverview>
      <CardOverview></CardOverview>
      <CardOverview></CardOverview>
    </View>
  );
};

export default TopCardsYourAccounts;
