import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";

// Events
export function useEvents() {
  return useQuery({
    queryKey: [api.events.list.path],
    queryFn: async () => {
      const res = await fetch(api.events.list.path);
      if (!res.ok) throw new Error("Failed to fetch events");
      return api.events.list.responses[200].parse(await res.json());
    },
  });
}

// Results
export function useResults() {
  return useQuery({
    queryKey: [api.results.list.path],
    queryFn: async () => {
      const res = await fetch(api.results.list.path);
      if (!res.ok) throw new Error("Failed to fetch results");
      return api.results.list.responses[200].parse(await res.json());
    },
  });
}

// Sponsors
export function useSponsors() {
  return useQuery({
    queryKey: [api.sponsors.list.path],
    queryFn: async () => {
      const res = await fetch(api.sponsors.list.path);
      if (!res.ok) throw new Error("Failed to fetch sponsors");
      return api.sponsors.list.responses[200].parse(await res.json());
    },
  });
}

// Contact
export function useContactForm() {
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to send message");
      }
      
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
