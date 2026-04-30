"use server";

import { subscribeSchema } from "@/lib/schema";

export type SubscribeState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

export async function subscribeAction(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const raw = {
    email: String(formData.get("email") ?? "").trim(),
    firstName: String(formData.get("firstName") ?? "").trim(),
    regions: formData.getAll("regions").map(String),
    experience: String(formData.get("experience") ?? ""),
    feedbackOptIn: formData.get("feedbackOptIn") === "on",
  };

  const parsed = subscribeSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Bitte korrigiere die markierten Felder.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const apiUrl = process.env.FLYCHAT_API_URL;
  const apiKey = process.env.FLYCHAT_API_KEY;

  if (!apiUrl) {
    console.log("[subscribe] No FLYCHAT_API_URL set — dev fallback:", parsed.data);
    return {
      status: "success",
      message:
        "Danke! Bitte bestätige in deiner Mailbox — du bekommst eine Bestätigungs-Mail.",
    };
  }

  try {
    const res = await fetch(`${apiUrl.replace(/\/$/, "")}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[subscribe] Backend error:", res.status, text);
      return {
        status: "error",
        message:
          "Hoppla, das hat nicht geklappt. Bitte versuch es in einem Moment nochmal.",
      };
    }

    return {
      status: "success",
      message:
        "Danke! Bitte bestätige in deiner Mailbox — du bekommst gleich eine Bestätigungs-Mail.",
    };
  } catch (err) {
    console.error("[subscribe] Network error:", err);
    return {
      status: "error",
      message:
        "Verbindung zum Backend fehlgeschlagen. Bitte versuch es nochmal.",
    };
  }
}
