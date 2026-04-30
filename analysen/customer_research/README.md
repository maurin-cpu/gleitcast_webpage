# Customer Research - Paragliding Pilot Pain Points

**Purpose:** Systematic collection and analysis of paragliding pilot pain points, needs, and language from Reddit, forums, and communities to inform product development and marketing strategy.

**Status:** Framework Ready - Awaiting Manual Data Collection

---

## Directory Structure

```
customer_research/
├── README.md                           ← This file
├── raw_quotes/                         ← YAML files for each quote extracted
│   ├── _TEMPLATE.yaml                  ← Copy this for each new quote
│   ├── _EXAMPLE_001_tool_overload.yaml ← Example: Multi-app frustration
│   ├── _EXAMPLE_002_beginner_fear.yaml ← Example: Beginner anxiety
│   ├── _EXAMPLE_003_swiss_foehn.yaml   ← Example: Swiss föhn problem
│   ├── quote_001.yaml                  ← Your actual quotes go here
│   ├── quote_002.yaml
│   └── ...
├── analysis/                           ← Analysis documents
│   ├── theme_clustering.md             ← Group quotes by theme
│   ├── segment_profiles.md             ← Beginner/Intermediate/Expert/Swiss
│   ├── jobs_to_be_done.md              ← JTBD framework
│   └── messaging_guide.md              ← Voice-of-customer language
└── interviews/                         ← Interview transcripts
    ├── interview_001.md
    └── ...
```

---

## Quick Start Guide

### Step 1: Read the Research Guide
Location: `analysen/paragliding-pilot-pain-points-research-guide.md`

This comprehensive guide includes:
- Search query templates
- Extraction methodology
- Theme classification guide
- Analysis framework

### Step 2: Start Collecting Quotes

1. **Run a search query** (from the guide)
   Example: `site:reddit.com/r/paragliding "weather" "app" OR "forecast"`

2. **Open relevant threads**
   - Read full context (don't just grab one comment)
   - Look for specific, actionable insights
   - Prioritize recent posts (2024-2026)

3. **Extract quotes using template**
   ```bash
   # Copy template for each quote
   cp raw_quotes/_TEMPLATE.yaml raw_quotes/quote_001.yaml
   ```

4. **Fill in all fields**
   - Source info (platform, URL, date)
   - Verbatim quote (exact words)
   - Context (what prompted it)
   - Theme tags (be generous - tag everything relevant)
   - Customer profile (experience level, location, etc.)
   - Key insights (pain intensity, WTP, etc.)

5. **Save and continue**
   - Aim for 200+ quotes total
   - 50+ from Swiss/Alpine pilots
   - 30+ from beginners
   - Cover all major themes

### Step 3: Examples to Learn From

Study the example quotes:
- `_EXAMPLE_001_tool_overload.yaml` - Shows a "gold" quote with clear pain + numbers
- `_EXAMPLE_002_beginner_fear.yaml` - Shows emotional/safety-focused pain point
- `_EXAMPLE_003_swiss_foehn.yaml` - Shows Swiss-specific market insight

Notice:
- How specific details make quotes valuable
- How analyst notes connect findings to product/marketing
- How theme tags allow cross-referencing later

### Step 4: Organize by Theme (After 50+ Quotes)

Create theme clusters:
```bash
# In analysis/ directory
# Create theme_clustering.md
# Group quotes: All #pain_point quotes together, etc.
```

### Step 5: Synthesize Insights (After 100+ Quotes)

Update the synthesis document:
- `analysen/paragliding-pilot-pain-points-synthesis.md`
- Replace "inferred" pain points with real data
- Add verbatim quotes to support each theme
- Update frequency/intensity rankings based on actual findings

---

## Target Metrics

### Quantity Goals
- [ ] 200+ total quotes
- [ ] 50+ Swiss/Alpine specific
- [ ] 30+ beginner segment
- [ ] 20+ mentioning specific competitors
- [ ] 15+ mentioning pricing/WTP

### Quality Goals
- [ ] Diverse experience levels (beginner/intermediate/expert)
- [ ] Both positive (what works) and negative (what doesn't)
- [ ] Specific and actionable (not vague)
- [ ] Recent (2024-2026)
- [ ] Authentic voice (real pilots, not marketing)

### Theme Coverage
- [ ] Tool overload / multiple apps
- [ ] Conflicting forecasts
- [ ] Beginner confusion
- [ ] Swiss/Alpine weather complexity
- [ ] Forecast inaccuracy
- [ ] Decision support needs
- [ ] Pricing concerns
- [ ] Platform limitations
- [ ] Learning/education needs
- [ ] Community integration

---

## Priority Search Targets

### Week 1: Foundation
1. r/paragliding - Top posts (all time + past year)
2. r/paragliding - "Weather app" search
3. r/paragliding - "Forecast" search
4. ParaglidingForum.com - Browse weather discussions
5. Extract 50 quotes

### Week 2: Deep Dive
1. r/paragliding - "Beginner" posts
2. r/paragliding - "Switzerland" OR "Alps" posts
3. r/paragliding - App comparison threads
4. ParaglidingForum.com - Interlaken/Swiss threads
5. Extract 50 more quotes (100 total)

### Week 3: Swiss Focus
1. German-language forums (thermik.li, para-forum.ch)
2. Swiss-specific discussions (föhn, valley winds)
3. MeteoSwiss vs. international app discussions
4. burnair user feedback
5. Extract 50 Swiss quotes (150 total)

### Week 4: Specialized
1. Competitor mentions (Paraglidable, XCTrack, etc.)
2. Pricing/subscription discussions
3. AI/technology adoption attitudes
4. Safety incident reports (weather-related)
5. Extract remaining quotes to 200+

---

## Search Query Cheat Sheet

### Quick Searches (Copy/Paste)

**General Pain Points:**
```
site:reddit.com/r/paragliding "weather" "frustrat" OR "annoying" OR "hate"
site:reddit.com/r/paragliding "too many apps"
site:reddit.com/r/paragliding "which app" OR "best app"
```

**Beginner Struggles:**
```
site:reddit.com/r/paragliding "beginner" "weather"
site:reddit.com/r/paragliding "new pilot" "scared" OR "nervous"
site:reddit.com/r/paragliding "how to read" "forecast"
```

**Swiss/Alpine:**
```
site:reddit.com/r/paragliding "Switzerland" OR "Interlaken"
site:reddit.com/r/paragliding "föhn" OR "foehn"
site:reddit.com/r/paragliding "Alps" OR "Alpine"
```

**Competitors:**
```
site:reddit.com/r/paragliding "burnair"
site:reddit.com/r/paragliding "Paraglidable"
site:reddit.com/r/paragliding "XCTrack"
site:reddit.com/r/paragliding "Windy"
```

---

## Analysis Workflow

### After 50 Quotes
- Review for patterns
- Identify most common themes
- Note any surprises/unexpected insights
- Adjust search strategy if needed

### After 100 Quotes
- Create preliminary theme clusters
- Draft segment profiles (beginner/intermediate/expert)
- Identify top 10 pain points (ranked by frequency + intensity)
- Share findings with team for early feedback

### After 200 Quotes
- Finalize thematic analysis
- Complete segment profiles
- Build JTBD framework
- Create messaging guide
- Write final report
- Update product/marketing strategy

---

## Quality Control Checklist

Before saving a quote, verify:
- [ ] Verbatim quote is accurate (copy/paste, not paraphrased)
- [ ] Source URL is included
- [ ] Date is approximate at minimum
- [ ] At least 2-3 theme tags applied
- [ ] Customer profile filled in (even if "unclear")
- [ ] Key insights section has useful observations
- [ ] Analyst notes explain why this quote matters

---

## Tips for Effective Research

### Finding Gold Quotes
Look for:
- **Specific numbers:** "I check 5 apps", "45 minutes", "€120"
- **Emotional language:** "frustrated", "terrified", "exhausted"
- **Stories:** "Last week I...", "Almost had an accident..."
- **Exact workflows:** "First I check X, then Y, then Z..."
- **Comparisons:** "App X is better than Y because..."
- **Feature requests:** "I wish...", "Would be great if..."

### Red Flags (Low-Quality Quotes)
Avoid:
- Vague complaints: "Weather apps suck"
- No context: Single-sentence comment without thread context
- Marketing speak: Sounds like a promotional post
- Off-topic: Not related to weather/planning pain points
- Ancient: Pre-2020 (tech/apps have changed significantly)

### Context is Everything
Always:
- Read the full thread, not just one comment
- Note if many people agree (upvotes, replies)
- Capture opposing viewpoints in same thread
- Include what prompted the discussion
- Link related quotes together

### Translation Best Practices
For German/Swiss German quotes:
- Keep original language in `verbatim_quote`
- Add English translation in `translation` field
- Note Swiss German vs. High German differences
- Preserve emotional tone in translation
- Flag idiomatic expressions that don't translate well

---

## Integration with Strategy

### How This Research Will Be Used

**Product Development:**
- Feature prioritization (pain intensity × frequency)
- UX design (beginner vs. expert needs)
- AI training focus (Swiss data, föhn detection, etc.)

**Marketing:**
- Positioning statements (use their language)
- Landing page copy (verbatim quotes)
- Segment messaging (beginner vs. expert)
- Ad creative (pain → solution)

**Pricing:**
- Willingness-to-pay signals
- Freemium tier definition
- Competitive price positioning

**Partnerships:**
- Swiss club outreach (address their specific needs)
- Flight school B2B (beginner education angle)
- Data partnerships (MeteoSwiss, KK7)

---

## Team Collaboration

### Sharing Findings
- Weekly summary to team (top insights)
- Slack #customer-research channel
- Monthly presentation on patterns/themes

### Quote Review Sessions
- Peer review every 50 quotes
- Challenge assumptions
- Identify blind spots
- Ensure objective analysis

---

## Next Steps Checklist

- [ ] Read full research guide
- [ ] Study example quotes
- [ ] Set up search workflow (browser bookmarks, etc.)
- [ ] Extract first 10 quotes (practice)
- [ ] Team review of first 10 (quality check)
- [ ] Scale to 50 quotes (Week 1 goal)
- [ ] Preliminary pattern analysis
- [ ] Continue to 200+ quotes
- [ ] Synthesize findings
- [ ] Present to team
- [ ] Update product/marketing strategy

---

**Questions?**
Refer to:
- Full research guide: `analysen/paragliding-pilot-pain-points-research-guide.md`
- Synthesis framework: `analysen/paragliding-pilot-pain-points-synthesis.md`
- Example quotes: `customer_research/raw_quotes/_EXAMPLE_*.yaml`

**Last Updated:** April 17, 2026
**Status:** Ready to Start Manual Data Collection
**Owner:** [Research Lead]

---

END OF README
