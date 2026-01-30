import { z } from 'zod';
import { 
  insertRiderSchema, 
  insertEventSchema, 
  insertResultSchema, 
  insertSponsorSchema, 
  insertMessageSchema,
  riders,
  events,
  results,
  sponsors,
  messages
} from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  riders: {
    list: {
      method: 'GET' as const,
      path: '/api/riders',
      responses: {
        200: z.array(z.custom<typeof riders.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/riders/:id',
      responses: {
        200: z.custom<typeof riders.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    }
  },
  events: {
    list: {
      method: 'GET' as const,
      path: '/api/events',
      responses: {
        200: z.array(z.custom<typeof events.$inferSelect>()),
      },
    },
  },
  results: {
    list: {
      method: 'GET' as const,
      path: '/api/results',
      responses: {
        200: z.array(z.custom<typeof results.$inferSelect>()),
      },
    },
  },
  sponsors: {
    list: {
      method: 'GET' as const,
      path: '/api/sponsors',
      responses: {
        200: z.array(z.custom<typeof sponsors.$inferSelect>()),
      },
    },
  },
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertMessageSchema,
      responses: {
        201: z.custom<typeof messages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
