---
titel: "Flight weather in your AI chat: connecting Wingcast to Claude, ChatGPT or Gemini"
slug: mcp
ziel_url: /wetterkunde/mcp
ziel_keyword: "flight weather ai chat"
neben_keywords:
  - "wingcast mcp server"
  - "paragliding weather chatgpt"
  - "paragliding weather claude"
  - "paragliding weather gemini"
  - "ask ai about flying weather"
typ: anleitung
hub: /wetterkunde
sprache: en
status: published
veroeffentlicht: 2026-09-27
autor: "Maurin (Founder & Pilot, Wingcast)"
stand: 2026-09-27
meta_title: "Flight weather in your AI chat — Wingcast with Claude, ChatGPT, Gemini"
meta_description: "Connect Wingcast to your AI chat and ask about the flying weather at 494 Swiss launch sites in ordinary conversation. Setup takes a minute and costs nothing."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
---

# Flight weather in your AI chat: connecting Wingcast to Claude, ChatGPT or Gemini

> **TL;DR** — You can connect Wingcast to your AI chat. After that you ask about the flying weather in ordinary conversation and the assistant fetches the numbers itself: **494 Swiss launch sites, three days, flight hours 06:00–17:00**, with wind, gusts, winds aloft, thermals, cloud base, thunderstorms and foehn. Setup takes a minute and **costs nothing**. With Claude it works on a free account, with ChatGPT you need a paid plan, and in the Gemini app it is US-only for now.

The Wingcast app answers one question well: where does it work this week. What it cannot answer is your question. "What can I reach from Bern tomorrow within 45 minutes of driving, if I leave out the strong gusts?" Questions like that are personal, and adding a slider for every one of them produces a cockpit, not an app.

So you can now ask for the data directly in a chat. The assistant you are already talking to fetches the same forecast numbers the app builds its cast from, and works out your variant.

---

## What you can ask

**"Where is there a launch window of at least three hours on Monday?"** You get the big picture across all regions first, then the individual sites. On Monday, 28 September 2026, it was 482 of 494 launch sites with a window, and no foehn.

**"Which launch sites can I reach from Lucerne in 40 minutes by car?"** It works out real driving time, not a straight-line circle. Back come the site, the region, the altitude and the launch direction.

**"What does the day look like at Niederhorn, hour by hour?"** The whole day from 06:00 to 17:00 with wind, direction, gusts, climb rate, cloud base, cloud cover, rain and thunderstorm risk. Exactly what a single value never tells you: whether the gusts are building, or whether 14:00 was the outlier.

**"How strong is the wind above the launch site?"** The wind aloft, from launch altitude up to around 3500 metres above it, for every hour. If it says 12 km/h at launch and 45 km/h two thousand metres higher, you see it.

**"Will there be foehn in Valais tomorrow?"** The pressure difference between the north and south side per flight hour, plus the wind at ridge level. Which direction is critical at your site is on file and gets read along with it.

**"What do I need to know about this launch site?"** Altitude, launch direction, slope aspect, terrain type and the stored remarks on flying and safety.

**"Compare the three days for my five local mountains."** The assistant can go through every launch site of a day at once and build your own shortlist from it. That is the part no app can decide for you in advance.

<figure class="fig-wide">
  <p class="fig-kicker">Mocked up · real figures from 27 Sept 2026</p>
  <p class="fig-titel">How a conversation runs</p>
<div class="chat-window">
<p class="chat-bar">Your AI chat</p>
<div class="chat-body">
<p class="chat-ask">Flying tomorrow out of Interlaken?</p>
<p class="chat-tool">wingcast · searched launch sites</p>
<div class="chat-reply">
<p>Checked 48 launch sites within 25 km. 47 have a launch window; one drops out because the wind direction never fits. The three with the strongest thermals:</p>
<ul class="chat-data">
<li><b>Eisee</b><span>2100 m · SE</span><span>06:00–18:00</span><span class="v-key">Wind 1→5</span><span class="v-strong">Gusts 19 ↗</span><span>Top 2876 m</span></li>
<li><b>Klein Tschuggen</b><span>2240 m · NW</span><span>06:00–18:00</span><span class="v-key">Wind 1→7 ↗</span><span class="v-strong">Gusts 14 ↗</span><span>Top 2975 m</span></li>
<li><b>Schilthorn</b><span>2853 m · SW</span><span>06:00–18:00</span><span class="v-key">Wind 1→4</span><span class="v-strong">Gusts 18 ↗</span><span>Top 3691 m</span></li>
</ul>
<p>No rain, no foehn. Climb rates up to 1.8 m/s. Gusts build everywhere towards the evening.</p>
</div>
<p class="chat-ask">And what is the wind like above Eisee?</p>
<p class="chat-tool">wingcast · fetched wind aloft</p>
<div class="chat-reply">
<p>Eisee, Monday 12:00, launch at 2100 m:</p>
<ul class="chat-data">
<li><b>Launch · 2100 m</b><span class="v-key">5 km/h</span><span>from SE</span></li>
<li><b>3000 m · +900</b><span class="v-key">14 km/h</span><span>from SE</span></li>
<li><b>3500 m · +1400</b><span class="v-key">14 km/h</span><span>from SE</span></li>
<li><b>4000 m · +1900</b><span class="v-key">12 km/h</span><span>from S</span></li>
</ul>
<p>No jump higher up. At 15:00 almost the same values, with the direction backing to south.</p>
<p class="chat-foot">Forecast as of 27 Sept, 05:02 · model ICON-CH2. A forecast — no substitute for your own assessment on site.</p>
</div>
</div>
</div>
  <figcaption>The questions follow the style of real user questions: short, with a place and a day, then a follow-up. The figures are the server's unedited answer, forecast of 27 Sept 2026. The chat window itself is a mock-up.</figcaption>
</figure>

---

## Setting it up

All you need is this address:

```
https://app.wingcast.ch/mcp
```

No account with us, no password, no sign-in.

**In Claude.** Settings → Connectors → add a custom connector. Name it `wingcast`, paste the address above, save. This works on a **free account** too, though there you are limited to a single custom connector. Pro, Max, Team and Enterprise allow several. On Team and Enterprise accounts an owner has to approve the connector for the organisation first, after which each member connects individually.

**In ChatGPT.** Settings → Apps & Connectors → switch on developer mode, then add a custom connector with the same address. For this you need a **paid plan**: Plus, Pro, Business, Enterprise or Edu. Free accounts have no custom connectors. In company accounts an administrator may have disabled developer mode on top of that, which is the most common reason the switch does not appear at all.

**In Gemini.** Settings → Connected Apps → under "Custom apps", add a custom app and paste the address. No paid plan is needed, but four other conditions are: you must be **18 or over and in the US**, use a **personal** Google account — a work or school account will not do — and keep activity saving switched on. Outside the US the feature is therefore not usable at the moment. In Gemini Enterprise an administrator sets the server up for the organisation instead.

<figure class="fig-wide">
  <p class="fig-kicker">One-off · about a minute</p>
  <p class="fig-titel">Three steps, near-identical in all three apps</p>
<div class="setup">
<div class="setup-address">
<p>The address you paste everywhere</p>
<code>https://app.wingcast.ch/mcp</code>
</div>
<div class="setup-cols">
<div class="setup-col">
<h4>In Claude</h4>
<p class="setup-plan is-free">Free account is enough · 1 connector</p>
<ol>
<li>Settings<span>open Connectors</span></li>
<li>Add a custom connector<span>name it wingcast</span></li>
<li>Paste the address<span>and save</span></li>
</ol>
<p class="setup-note">Pro, Max, Team and Enterprise allow several connectors.</p>
</div>
<div class="setup-col">
<h4>In ChatGPT</h4>
<p class="setup-plan is-paid">Paid plan required · Plus and up</p>
<ol>
<li>Settings<span>open Apps & Connectors</span></li>
<li>Developer mode<span>switch it on</span></li>
<li>Paste the address<span>and save</span></li>
</ol>
<p class="setup-note">Free accounts have no custom connectors.</p>
</div>
<div class="setup-col">
<h4>In Gemini</h4>
<p class="setup-plan is-limited">US-only for now · personal account</p>
<ol>
<li>Settings<span>open Connected Apps</span></li>
<li>Add a custom app<span>under "Custom apps"</span></li>
<li>Paste the address<span>and save</span></li>
</ol>
<p class="setup-note">No plan needed, but 18+, US, a personal account and activity saving on.</p>
</div>
</div>
</div>
  <figcaption>The steps are the same everywhere. What differs is who gets the feature at all.</figcaption>
</figure>

Then simply start asking. The first time, the chat will ask your permission to fetch the data.

**If you build things:** it is an open MCP server over Streamable HTTP at that same address, with no token and no OAuth. Twelve tools, from the regional overview to the wind profile aloft. In Claude Code, `claude mcp add --transport http wingcast https://app.wingcast.ch/mcp` is enough; in the Gemini CLI it is `gemini mcp add --transport http wingcast https://app.wingcast.ch/mcp`.

---

## When it does not work

**ChatGPT has no switch for custom connectors at all.** Then one of three things applies: you are on a free account, developer mode is still off, or an administrator has disabled it in a company account. The last is the most common and can only be sorted out internally.

**Claude says you already have a connector.** A free account allows exactly one. Either remove the existing one or move to Pro or Max.

**You cannot find "Custom apps" in Gemini.** For now the feature exists only for users aged 18 or over in the US with a personal Google account. It does not appear with a work or school account, nor with activity saving switched off.

**Nothing happens on a Team or Enterprise account.** There an owner has to approve the connector for the organisation first. After that, each member connects individually.

**The assistant answers without naming any numbers.** Then it probably never fetched the data. Watch for a sign in the chat that a tool was called, and otherwise ask directly: "Fetch the data from wingcast." When in doubt ask for the forecast timestamp — if no time comes back, the answer is not from us.

**The travel-time search returns nothing.** Searching by travel time needs a routing service. If that is unreachable the assistant says so instead of guessing drive times from straight-line distance. Ask again in a few minutes, or give a radius in kilometres instead.

**The figures look stale.** The forecast is computed once a day in the early morning. Ask for the forecast timestamp and the assistant will give you the time and the age.

If none of that helps, drop us a line saying where it gets stuck: [info@wingcast.ch](mailto:info@wingcast.ch?subject=Wingcast%20MCP).

---

## What does not happen here

The chat does **not tell you whether you can fly**. Wingcast rates no day and clears nothing. You get numbers and figures computed from them, such as launch windows, trends and threshold crossings — the same things you would read off a meteogram, just sorted faster.

It looks **three days** ahead, the area is **Switzerland**, and the forecast is computed **once a day in the early morning**. Ask and the chat will always tell you how old it is. So an afternoon question is answered from a morning run.

One more thing: a language model can summarise numbers wrongly. When in doubt, ask for the actual values rather than for a verdict. The rule is the same as for any meteogram — the forecast does not replace your own assessment on site.

---

## Frequently asked questions

**What does this cost?**
Nothing. Access to the Wingcast data is open and needs neither an account nor a password.

**Do I need a paid plan with the AI provider?**
Not with Claude, where a free account covers one custom connector. With ChatGPT you do, custom connectors start at Plus. Gemini needs no plan, but the feature is for now limited to users aged 18 or over in the US with a personal Google account.

**Which weather data is behind it?**
Open-Meteo (CC BY 4.0) with the ICON-CH1 and ICON-CH2 models from MeteoSwiss, plus ICON-D2 and ICON-EU from the German weather service.

**How many launch sites are included?**
494 launch sites in Switzerland, across three days and the flight hours from 06:00 to 17:00.

**Do I need the Wingcast app for this?**
No. It works independently of the app, even though the same forecast data sits behind both.

**Will the assistant tell me whether I can fly?**
No. Wingcast rates nothing and clears nothing. You get the numbers; the decision stays with you.

---

## Sources

- Custom connectors in Claude: [Claude Help Center](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)
- Developer mode in ChatGPT: [OpenAI Help Center](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)
- Custom apps in Gemini: [Google Help Center](https://support.google.com/gemini/answer/17209137)
- Weather data: [Open-Meteo](https://open-meteo.com) (CC BY 4.0), models ICON-CH1/CH2 (MeteoSwiss), ICON-D2/ICON-EU (DWD)

---

*Wingcast builds a daily cast for the days ahead from the same data — launch sites, windows, trends, at a glance. [Open the app](https://app.wingcast.ch).*
