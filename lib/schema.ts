import { z } from "zod";
import { REGIONS } from "./regions";

const validRegionIds = REGIONS.map((r) => r.id) as [string, ...string[]];

export const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, "E-Mail ist erforderlich")
    .email("Bitte gib eine gültige E-Mail-Adresse ein"),
  firstName: z.string().max(60).optional().or(z.literal("")),
  regions: z
    .array(z.enum(validRegionIds))
    .min(1, "Wähle mindestens eine Region"),
  experience: z
    .enum(["anfaenger", "hobby", "xc"])
    .optional()
    .or(z.literal("")),
  feedbackOptIn: z.boolean().optional(),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
