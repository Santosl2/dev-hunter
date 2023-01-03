import { useQuery } from "@tanstack/react-query";

import { getUserLocation } from "@/shared/services/requests/user";

const ONE_HOUR_CACHE_TIME = 1000 * 60 * 60; // 1 hour

export function useUserLocation() {
  return useQuery({
    queryKey: ["userLocation"],
    queryFn: getUserLocation,
    cacheTime: ONE_HOUR_CACHE_TIME,
    staleTime: ONE_HOUR_CACHE_TIME,
  });
}
