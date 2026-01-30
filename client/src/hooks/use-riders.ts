import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useRiders() {
  return useQuery({
    queryKey: [api.riders.list.path],
    queryFn: async () => {
      const res = await fetch(api.riders.list.path);
      if (!res.ok) throw new Error("Failed to fetch riders");
      return api.riders.list.responses[200].parse(await res.json());
    },
  });
}

export function useRider(id: number) {
  return useQuery({
    queryKey: [api.riders.get.path, id],
    queryFn: async () => {
      const res = await fetch(api.riders.get.path.replace(':id', String(id)));
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch rider");
      return api.riders.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
