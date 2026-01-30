import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === RIDERS ===
export const riders = pgTable("riders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'Elite', 'Development', 'Alumni/Mentor'
  specialization: text("specialization").notNull(), // e.g., 'Sprinter', 'Climber'
  bio: text("bio").notNull(),
  achievements: text("achievements").array(),
  imageUrl: text("image_url").notNull(),
  instagram: text("instagram"),
  strava: text("strava"),
});

export const insertRiderSchema = createInsertSchema(riders).omit({ id: true });
export type Rider = typeof riders.$inferSelect;
export type InsertRider = z.infer<typeof insertRiderSchema>;

// === EVENTS ===
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // 'Race', 'Community Ride', 'Social'
  imageUrl: text("image_url"),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;

// === RESULTS / NEWS ===
export const results = pgTable("results", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: timestamp("date").notNull(),
  description: text("description").notNull(),
  category: text("category"), // 'Podium', 'Race Report', 'Milestone'
  imageUrl: text("image_url"),
});

export const insertResultSchema = createInsertSchema(results).omit({ id: true });
export type Result = typeof results.$inferSelect;
export type InsertResult = z.infer<typeof insertResultSchema>;

// === SPONSORS ===
export const sponsors = pgTable("sponsors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tier: text("tier").notNull(), // 'Title', 'Gold', 'Silver', 'Partner'
  logoUrl: text("logo_url").notNull(),
  websiteUrl: text("website_url"),
  description: text("description"),
});

export const insertSponsorSchema = createInsertSchema(sponsors).omit({ id: true });
export type Sponsor = typeof sponsors.$inferSelect;
export type InsertSponsor = z.infer<typeof insertSponsorSchema>;

// === CONTACT / MESSAGES ===
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(), // 'Sponsorship', 'Join Team', 'General'
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
