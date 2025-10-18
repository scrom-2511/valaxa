import { getTokenAccounts } from "@/reqHandlers/getAllTokens";
import { useQuery } from "@tanstack/react-query";

export const useSolanaSplTokens = (solanaPubKey: string) => {
    return useQuery({queryKey: ["solanaSplTokens", solanaPubKey], queryFn: ()=> getTokenAccounts(solanaPubKey), enabled: !!solanaPubKey, staleTime: 30000, refetchOnWindowFocus: true})
}