import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingRiders = await storage.getRiders();
  if (existingRiders.length === 0) {
    // Seed Riders
    await storage.createRider({
      name: "Leighton Cook",
      category: "Elite",
      specialization: "Rouleur/ All Rounder",
      bio: "Leighton spent four months in Europe during the 2025 season, securing wins in Spain and Belgium. He gained valuable experience racing at a professional level, competing in numerous Belgian Pro Kermesses against World Tour riders. In March 2026, Leighton will return to Europe to race for UCI Continental team Atom 6 Bikes – Cycleur de Luxe – Auto Stroo. Alongside his racing career, Leighton coached at the Western Australian Institute of Sport for several years. He is passionate about mentoring junior West Australian cyclists.",
      imageUrl: "/assets/M_FPM_LeightonCook_2_1769693385694.webp",
      instagram: "https://www.instagram.com/leighton.cook/",
      strava: "https://www.strava.com/athletes/14134394"
    });
    await storage.createRider({
      name: "Stephen Hall",
      category: "Elite",
      specialization: "All Rounder / Sprinter",
      bio: "Stephen stands out as a dynamic all-rounder, excelling in both track and road disciplines. His professional cycling career spans over a decade and he has achieved the highest results both domestically and internationally. On the track he has been Australian Champion, UCI top-4 in. scratch, multiple six-day race wins. On the road he has won stages and various other formats in the USA, Australia, and other locations.",
      imageUrl: "/assets/DSCF2239_1769694005540.jpg",
      instagram: "https://www.instagram.com/stephenhallracing/",
      strava: "https://www.strava.com/athletes/1025990"
    });
    await storage.createRider({
      name: "Reece Harris",
      category: "Elite",
      specialization: "All Rounder",
      bio: "Reece competes both as a triathlete and cyclist. He coaches a lot of emerging triathletes supporting the next wave of up and coming elite athletes. He won the Australian national Fondo cycling championships in 2025. In 2023 and 2024 he was the open / elite WA triathlete of the year. He is passionate about helping other young athletes on their development journeys.",
      imageUrl: "/assets/M_FPM_ReeceHarris_1_1769693385694.webp",
      instagram: "https://www.instagram.com/reece_harris9/",
      strava: "https://www.strava.com/athletes/3015928"
    });
    await storage.createRider({
      name: "Tristan Nash",
      category: "Elite",
      specialization: "Climber/Puncheur",
      bio: "Tristan discovered his passion for cycling early, riding to school daily and racing laps around the verge. After starting competitive racing at 15, he joined Unicorn Racing in 2021 and tackled WA’s Tour of Margaret River. In 2025 Tristan claimed his first Elite National Championship and represented Australia in Europe and was recently named Australian Cyclo-Cross Athlete of the year. In 2026 Tristian is aiming for big results on the road while mentoring younger riders. Off the bike, Tristan volunteers to grow cyclocross in WA and restores cars to fund his racing dreams.",
      imageUrl: "/assets/M_FPM_TristanNash_1_1769693385693.webp",
      instagram: "https://www.instagram.com/tristan.nashh/",
      strava: "https://www.strava.com/athletes/44772638"
    });
    await storage.createRider({
      name: "Toby Price",
      category: "U23",
      specialization: "Puncheur",
      bio: "Toby has raced at the national junior level in cyclocross and is eager to continue his development both on and off the bike. He has already enjoyed a successful summer, regularly featuring at the front of Perth criteriums and road races, often in the thick of the action. We are excited to welcome Toby as one of our Development Riders for 2026",
      imageUrl: "/assets/M_FPM_TobyPrice_2_1769693385693.webp",
      instagram: "https://www.instagram.com/tobyprice430/",
      strava: "https://www.strava.com/athletes/51548260"
    });
    await storage.createRider({
      name: "Oliver Stenning",
      category: "Elite",
      specialization: "Time Trialist",
      bio: "Oli Stenning has consistently delivered strong performances at national and Oceania championships. Career highlights include a silver medal in the Oceania Individual Time Trial Championships (2024) and a top 10 finish at the Australian National Time Trial Championships (2025). Oli also brings valuable experience racing at the UCI level across Asia and Europe. Oli combines his elite racing experience with a passion for developing young talent through his coaching business. Oli is a dedicated ambassador for the sport and an ideal member of Falcons Racing.",
      imageUrl: "/assets/M_FPM_OliverStenning_1_1769693385693.webp",
      instagram: "https://www.instagram.com/olistenning/",
      strava: "https://www.strava.com/athletes/13725264"
    });
    await storage.createRider({
      name: "Patryk Szczypkowski",
      category: "U19",
      specialization: "Puncheur / Climber",
      bio: "Pat discovered cycling through a talent identification program on the track five years ago which quickly led him to road racing. Since then, he has competed in multiple Track National Championships, earning podium finishes at the national level. In 2026, Patryk is aiming for strong results at Australia Road Nationals before heading over to race in Europe. Known as a punchy rider with a growing love for climbing, he is motivated by racing hard and jumping on the local Perth group rides.",
      imageUrl: "/assets/M_FPM_PatrykSzczypkowski_1_1769693385693.webp",
      instagram: "https://www.instagram.com/patrykszczypkowski/",
      strava: "https://www.strava.com/athletes/96893633"
    });
    await storage.createRider({
      name: "Nick Thompson",
      category: "Elite",
      specialization: "All Rounder",
      bio: "Nick achieved an impressive 4th place in the Ironman Pro Series for the 2025 season and secured 7th at the Ironman World Championships in Nice, France. In addition to his Ironman career, Nick competes in local Perth and domestic cycling events.",
      imageUrl: "/assets/M_FPM_NickThompson_1_1769693385693.webp",
      instagram: "https://www.instagram.com/nick_thompson00/",
      strava: "https://www.strava.com/athletes/14485231"
    });
    await storage.createRider({
      name: "Austin Webb",
      category: "Elite",
      specialization: "All Rounder",
      bio: "Austin has been racing both domestically and internationally for several years. He has competed in the National Championships invarious disciplines and earned several strong results at this level.",
      imageUrl: "/assets/M_FPM_AustinWebb_1_1769693385692.webp",
      instagram: "https://www.instagram.com/austin_webb_2000/",
      strava: "https://www.strava.com/athletes/43649071"
    });
    await storage.createRider({
      name: "Connor Wright",
      category: "U19",
      specialization: "Climber",
      bio: "Bio coming soon",
      imageUrl: "/assets/DSCF2476_1769694191312.jpg",
      instagram: "https://www.instagram.com/c.wright8/",
      strava: "https://www.strava.com/athletes/50718641"
    });

    // Seed Events
    await storage.createEvent({
      title: "Melbourne to Warrnambool",
      date: new Date("2026-02-14"),
      location: "Melbourne, VIC",
      description: "Australia’s oldest and longest one day road cycling race.",
      type: "Race",
      imageUrl: "/assets/DSCF2459_1769686504213.jpg"
    });
    await storage.createEvent({
      title: "Spirit of Tasmania Cycling Tour",
      date: new Date("2026-02-19"),
      location: "Launceston, TAS",
      description: "One of the oldest and most prestigious national cycling tours in Australia, first raced in 1930.",
      type: "Race",
      imageUrl: "/assets/DSCF2459_1769686504213.jpg"
    });
    await storage.createEvent({
      title: "Harbour City GP",
      date: new Date("2026-03-06"),
      location: "Sydney, NSW",
      description: "Elite road cycling returns to the Harbour City back for the first time since 2013.",
      type: "Race",
      imageUrl: "/assets/DSCF2459_1769686504213.jpg"
    });
    await storage.createEvent({
      title: "Squadron Energy Grafton to Inverell Cycle Classic",
      date: new Date("2026-03-14"),
      location: "Grafton, NSW",
      description: "First held in 1961, the race has gained a reputation for its difficult terrain and grueling distance.",
      type: "Race",
      imageUrl: "/assets/DSCF2459_1769686504213.jpg"
    });
    await storage.createEvent({
      title: "Q Tour",
      date: new Date("2026-03-20"),
      location: "Moreton Bay, QLD",
      description: "The season finale of the ProVelo Super League.",
      type: "Race",
      imageUrl: "/assets/DSCF2459_1769686504213.jpg"
    });

    // Seed Results
    await storage.createResult({
      title: "Overall Victory at Tour of Margaret River",
      date: new Date("2025-11-03"),
      description: "Falcons Pedal Mafia Racing Team secures the overall team classification win after a grueling 3-day tour.",
      category: "Podium",
      imageUrl: "/assets/DSCF2245_1769686504214.jpg"
    });

    // Seed Sponsors
    await storage.createSponsor({
      name: "Pedal Mafia",
      tier: "Title",
      logoUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=687&auto=format&fit=crop", // Placeholder
      websiteUrl: "https://pedalmafia.cc",
      description: "Premium cycling apparel."
    });
    await storage.createSponsor({
      name: "Falcons",
      tier: "Title",
      logoUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=687&auto=format&fit=crop", // Placeholder
      websiteUrl: "#",
      description: "Team Title Sponsor"
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedDatabase().catch(console.error);

  // Riders
  app.get(api.riders.list.path, async (req, res) => {
    const riders = await storage.getRiders();
    res.json(riders);
  });

  app.get(api.riders.get.path, async (req, res) => {
    const rider = await storage.getRider(Number(req.params.id));
    if (!rider) return res.status(404).json({ message: "Rider not found" });
    res.json(rider);
  });

  // Events
  app.get(api.events.list.path, async (req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  // Results
  app.get(api.results.list.path, async (req, res) => {
    const results = await storage.getResults();
    res.json(results);
  });

  // Sponsors
  app.get(api.sponsors.list.path, async (req, res) => {
    const sponsors = await storage.getSponsors();
    res.json(sponsors);
  });

  // Contact
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
