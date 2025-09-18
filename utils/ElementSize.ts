import { Platform } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"

export const fontSize = (widthGreaterThan1000: boolean, val:number) => {
    if(Platform.OS === "web" && !widthGreaterThan1000){
        return RFPercentage(val-0.1)
    } else{
        return RFPercentage(val)
    }
}