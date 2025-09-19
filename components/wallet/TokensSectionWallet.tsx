import React from 'react'
import { Image, Text, View } from 'react-native'

const TokensSectionWallet = () => {
  return (
    <View className="flex-col">
            <Text className="text-text text-xl font-bold pt-10 mb-5">
              TOKENS
            </Text>
            <View className="bg-bgMedium flex-row h-32 w-full rounded-2xl items-center justify-between px-10">
              <View className="flex-row items-center gap-5">
                {/* <Image></Image> */}
                <View className="h-10 w-10 bg-text rounded-md"></View>
                <Text className="text-text text-lg">
                  Token Name
                </Text>
              </View>
              <View>
                <Image></Image>
                <View className="h-10 w-10 bg-text rounded-md"></View>
              </View>
            </View>
          </View>
  )
}

export default TokensSectionWallet