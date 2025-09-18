import OperationsCard from "@/components/OperationsCard";
import { fontSize } from "@/utils/ElementSize";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Platform, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const Wallet = () => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;

  const xml = `
<svg width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fe453e">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z" 
      stroke="#fe453e" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
`;

  const swapXml = `<svg width="45px" height="45px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fe453e" stroke-width="0.0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.93a.75.75 0 0 1 1.177-.617l4.432 3.069a.75.75 0 0 1 0 1.233l-4.432 3.069A.75.75 0 0 1 16 10.067V8H4a1 1 0 0 1 0-2h12V3.93zm-9.177 9.383A.75.75 0 0 1 8 13.93V16h12a1 1 0 1 1 0 2H8v2.067a.75.75 0 0 1-1.177.617l-4.432-3.069a.75.75 0 0 1 0-1.233l4.432-3.069z" fill="#fe453e"></path></g></svg>`;

  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : " items-strech"}>
        <View className={isWeb ? "w-full max-w-[1000px] h-full px-10" : "flex-1 px-10"}>
          <Text className="text-text font-robotoBold mt-5" style={{ fontSize: widthGreaterThan1000 ? 24 : RFPercentage(2) }}>
            PORTFOLIO OVERVIEW
          </Text>

          {/* Main Balance Card */}
          <View className="flex-row flex-wrap gap-5 mt-5">
            <LinearGradient
              colors={["#2a2e32", "#212529"]}
              className="h-48 flex-auto min-w-[40%] justify-center items-center px-7"
              style={{ borderRadius: 16 }}
            >
              <Text className="text-textMuted font-roboto pb-1" style={{ fontSize: widthGreaterThan1000 ? 14 : RFPercentage(1.3) }}>
                TOTAL BALANCE
              </Text>
              <Text className="text-text font-poppinsBold" style={{ fontSize: widthGreaterThan1000 ? 50 : RFPercentage(5) }}>
                $98769
              </Text>
            </LinearGradient>
          </View>

          {/* Operations Section */}
          <View className="flex-row pt-5 gap-5">
            <OperationsCard xml={xml} rotate="-90deg" OperationNmae="SEND"/>
            <OperationsCard xml={xml} rotate="90deg" OperationNmae="RECEIVE"/>
            <OperationsCard xml={swapXml} OperationNmae="SWAP"/>
          </View>

          {/* Tokens Section */}
          <View className="flex-col">
            <Text className="text-text text-xl font-bold pt-10 mb-5" style={{ fontSize: widthGreaterThan1000 ? 18 : RFPercentage(1.8) }}>
              TOKENS
            </Text>
            <View className="bg-bgMedium flex-row h-32 w-full rounded-2xl items-center justify-between px-10">
              <View className="flex-row items-center gap-5">
                {/* <Image></Image> */}
                <View className="h-10 w-10 bg-text rounded-md"></View>
                <Text className="text-text text-lg" style={{ fontSize: widthGreaterThan1000 ? 18 : fontSize(widthGreaterThan1000, 1.6) }}>Token Name</Text>
              </View>
              <View>
                <Image></Image>
                <View className="h-10 w-10 bg-text rounded-md"></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
