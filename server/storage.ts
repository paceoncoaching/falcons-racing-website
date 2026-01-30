import { db } from "./db";
import {
  riders, events, results, sponsors, messages,
  type Rider, type InsertRider,
  type Event, type InsertEvent,
  type Result, type InsertResult,
  type Sponsor, type InsertSponsor,
  type Message, type InsertMessage
} from "@shared/schema";
import { eq, desc, asc } from "drizzle-orm";

export interface IStorage {
  // Riders
  getRiders(): Promise<Rider[]>;
  getRider(id: number): Promise<Rider | undefined>;
  createRider(rider: InsertRider): Promise<Rider>;

  // Events
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;

  // Results
  getResults(): Promise<Result[]>;
  createResult(result: InsertResult): Promise<Result>;

  // Sponsors
  getSponsors(): Promise<Sponsor[]>;
  createSponsor(sponsor: InsertSponsor): Promise<Sponsor>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  // Riders
  async getRiders(): Promise<Rider[]> {
    return await db.select().from(riders).orderBy(asc(riders.id));
  }

  async getRider(id: number): Promise<Rider | undefined> {
    const [rider] = await db.select().from(riders).where(eq(riders.id, id));
    return rider;
  }

  async createRider(rider: InsertRider): Promise<Rider> {
    const [newRider] = await db.insert(riders).values(rider).returning();
    return newRider;
  }

  // Events
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.date));
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }

  // Results
  async getResults(): Promise<Result[]> {
    return await db.select().from(results).orderBy(desc(results.date));
  }

  async createResult(result: InsertResult): Promise<Result> {
    const [newResult] = await db.insert(results).values(result).returning();
    return newResult;
  }

  // Sponsors
  async getSponsors(): Promise<Sponsor[]> {
    return await db.select().from(sponsors);
  }

  async createSponsor(sponsor: InsertSponsor): Promise<Sponsor> {
    const [newSponsor] = await db.insert(sponsors).values(sponsor).returning();
    return newSponsor;
  }

  // Messages
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
