# Review Mining Spreadsheet Structure

## Create This in Google Sheets / Excel / Airtable

---

## SHEET 1: Raw Reviews

| Column | Type | Example | Purpose |
|--------|------|---------|---------|
| ID | Auto-number | 1, 2, 3... | Unique identifier |
| App | Dropdown | burnair, XCTrack, Meteo-Parapente | Which app |
| Platform | Dropdown | iOS, Android, Web, Reddit, YouTube | Where found |
| Source | Text | App Store, r/freeflight, YouTube comments | Specific source |
| Date | Date | 2025-03-15 | When posted |
| Rating | Number | 1-5 (or blank for forums) | Star rating |
| Username | Text | FlyingPilot42 | User handle |
| User Type | Dropdown | XC, Recreational, Instructor, Competitor, Unknown | Pilot segment |
| Review Title | Text | "Used to be great" | Title if available |
| Full Quote | Long text | "[entire review verbatim]" | Complete text |
| Key Extract | Text | "Price too high, accuracy declining" | Summary |
| Primary Theme | Dropdown | Weather, Pricing, Features, Usability, Technical | Main topic |
| Secondary Theme | Dropdown | [same options] | Secondary topic |
| Sentiment | Dropdown | Pain, Gain, Unmet Need, Switching Trigger | Type of feedback |
| Emotional Intensity | Dropdown | High, Medium, Low | How strongly felt |
| Severity | Dropdown | Critical, Major, Minor | Impact level |
| Specific Feature | Text | "Thermal maps", "Wind layers" | Feature mentioned |
| Competitor Mentioned | Text | XCTrack, burnair, etc. | Comparison made |
| Price Point Mentioned | Text | "$15/month", "too expensive" | Pricing reference |
| Action for Gleitcast | Text | "Must have thermal maps", "Avoid complex UI" | Takeaway |
| Tags | Multi-select | #weather_accuracy, #pricing, #thermal_forecast | All applicable tags |
| Priority | Dropdown | P0 (Critical), P1 (High), P2 (Medium), P3 (Low) | Importance |
| Status | Dropdown | New, Reviewed, Categorized, Actioned | Processing stage |
| Notes | Long text | [any additional context] | Research notes |

---

## SHEET 2: Theme Summary

| Theme | Total Mentions | Apps Affected | Avg Severity | Sample Quote | Priority |
|-------|----------------|---------------|--------------|--------------|----------|
| Weather Accuracy - Wind | 47 | burnair, Windy, XCTrack | Critical | "[best quote]" | P0 |
| Weather Accuracy - Thermals | 32 | burnair, FlySkyHy | High | "[best quote]" | P0 |
| Pricing - Too Expensive | 28 | burnair, Meteo-Parapente | High | "[best quote]" | P1 |
| Missing - Airspace Warnings | 24 | burnair, XCTrack | Medium | "[best quote]" | P1 |
| Usability - Complex UI | 19 | Meteo-Parapente, Gaggle | Medium | "[best quote]" | P2 |
| Technical - Battery Drain | 15 | XCTrack, Gaggle | Medium | "[best quote]" | P2 |
| Gain - Thermal Maps | 42 | burnair, FlySkyHy | N/A | "[best quote]" | Must-have |
| [continue...] |

---

## SHEET 3: App Comparison Matrix

| Feature / Aspect | burnair | XCTrack | Meteo-Parapente | FlySkyHy | Gaggle | where2fly | Windy | Paragliding Map | Paraglidable |
|------------------|---------|---------|-----------------|----------|--------|-----------|-------|-----------------|--------------|
| **Platform** | iOS, Android | Android | iOS, Android | iOS | iOS, Android | iOS | iOS, Android | iOS, Android | ? |
| **Price** | $15/mo | Free | €8/mo | $10/mo | Free | $5/mo | €20/yr premium | Free | ? |
| **Rating (iOS)** | 4.2 | N/A | 4.5 | 3.8 | 4.1 | 4.3 | 4.7 | 3.9 | N/A |
| **Rating (Android)** | 4.0 | 4.6 | 4.4 | N/A | 3.9 | N/A | 4.6 | 4.0 | N/A |
| **Total Reviews** | 2,400 | 8,200 | 1,800 | 450 | 1,200 | 800 | 145,000 | 900 | ? |
| **Weather Accuracy** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ? |
| **Thermal Forecast** | ✅ Loved | ✅ Good | ✅ Best | ✅ Good | ❌ No | ❌ No | ❌ No | ❌ No | ? |
| **Wind Layers** | ✅ Good | ✅ Basic | ✅ Advanced | ✅ Basic | ✅ Basic | ❌ No | ✅ Best | ✅ Basic | ? |
| **Airspace** | ❌ Requested | ✅ Good | ❌ No | ✅ Good | ❌ No | ✅ Best | ❌ No | ✅ Basic | ? |
| **Route Planning** | ✅ Basic | ✅ Advanced | ❌ No | ✅ Good | ❌ No | ✅ Good | ❌ No | ✅ Basic | ? |
| **Live Tracking** | ✅ Good | ✅ Best | ❌ No | ✅ Basic | ✅ Good | ❌ No | ❌ No | ❌ No | ? |
| **Offline Mode** | ✅ Good | ✅ Best | ⚠️ Buggy | ✅ Good | ⚠️ Limited | ✅ Good | ⚠️ Limited | ⚠️ Limited | ? |
| **Social Features** | ✅ Good | ⚠️ Basic | ❌ No | ⚠️ Basic | ✅ Good | ❌ No | ❌ No | ❌ No | ? |
| **UI/UX Quality** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ? |
| **Learning Curve** | Medium | High | High | Low | Medium | Low | Low | Medium | ? |
| **Battery Impact** | Medium | High | Low | Medium | High | Low | Medium | Medium | ? |
| **Top Praise** | Thermal maps | Feature-rich | Accurate | Simple | Live tracking | Airspace | UI/UX | Coverage | ? |
| **Top Complaint** | Too expensive | Battery drain | Confusing UI | Limited features | Unreliable | iOS only | Not para-specific | Outdated | ? |
| **Switching To** | XCTrack | - | burnair | burnair | XCTrack | - | Meteo-Parapente | burnair | ? |
| **Switching From** | - | burnair, Gaggle | Windy | - | burnair | - | - | - | ? |

Legend:
- ✅ = Has feature (praised)
- ⚠️ = Has feature (criticized)
- ❌ = Missing feature
- ⭐ 1-5 = Quality rating based on reviews
- ? = Need to research

---

## SHEET 4: Pain Points Inventory

| Pain Point | Frequency | Apps Affected | Severity | User Impact | Sample Quotes (3 best) | Gleitcast Action |
|------------|-----------|---------------|----------|-------------|----------------------|----------------|
| Wind speed inaccurate | 47 | burnair (15), Windy (12), XCTrack (10), Others (10) | CRITICAL | Safety risk, early landing | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | Multi-source validation, confidence scores |
| Price too high | 28 | burnair (18), Meteo-Parapente (10) | HIGH | Churn, switch to free | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | Competitive pricing, clear value prop |
| Missing airspace warnings | 24 | burnair (12), XCTrack (8), Others (4) | HIGH | Safety, legal risk | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | Must-have feature, real-time alerts |
| Complex interface | 19 | Meteo-Parapente (12), Gaggle (7) | MEDIUM | Poor onboarding, abandonment | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | Simple UX, clear hierarchy |
| [continue...] |

---

## SHEET 5: Loved Features Inventory

| Feature | Praise Count | Apps With Feature | Quality Leader | Why Users Love It | Sample Quotes (3 best) | Gleitcast Priority |
|---------|--------------|-------------------|----------------|-------------------|----------------------|------------------|
| Thermal maps | 42 | burnair (28), FlySkyHy (10), Others (4) | burnair | Visual, intuitive, accurate | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | P0 - Must have |
| Wind layers | 38 | Windy (20), burnair (10), Others (8) | Windy | Detailed, animated, useful | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | P0 - Must have |
| Live tracking | 32 | XCTrack (15), Gaggle (10), Others (7) | XCTrack | Safety, social, competition | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | P1 - High priority |
| Airspace alerts | 27 | where2fly (18), FlySkyHy (9) | where2fly | Safety, legal, confidence | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | P0 - Must have |
| [continue...] |

---

## SHEET 6: Unmet Needs Inventory

| Need / Request | Request Count | Apps Requested In | Current Gap | Why Users Want It | Sample Quotes (3 best) | Opportunity Size |
|----------------|---------------|-------------------|-------------|-------------------|----------------------|------------------|
| AI forecast explanation | 15 | burnair (6), Meteo-Parapente (5), XCTrack (4) | No app has this | Hard to interpret complex data | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | HIGH - Unique differentiator |
| NOTAMs integration | 12 | where2fly (5), burnair (4), Others (3) | Only partial in some apps | Safety, complete picture | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | MEDIUM - Safety feature |
| Multi-model comparison | 10 | Meteo-Parapente (4), burnair (3), Others (3) | Windy has basic version | Confidence in forecast | 1. "[quote]"<br>2. "[quote]"<br>3. "[quote]" | HIGH - Accuracy improvement |
| [continue...] |

---

## SHEET 7: Pricing Analysis

| App | Price Model | Price Points | Mentioned "Too Expensive" | Mentioned "Worth It" | Free Alternative Mentioned | Price Elasticity |
|-----|-------------|--------------|---------------------------|---------------------|----------------------------|------------------|
| burnair | Subscription | $15/mo, $150/yr | 18 times | 8 times | XCTrack (12), Windy (6) | HIGH sensitivity |
| Meteo-Parapente | Subscription | €8/mo, €70/yr | 10 times | 15 times | Windy (3) | MEDIUM sensitivity |
| XCTrack | Freemium | Free + donations | 0 times | 25 times | N/A | Benchmark for "fair" |
| Windy | Freemium | Free, €20/yr premium | 2 times | 8 times | N/A | LOW sensitivity |
| FlySkyHy | One-time | $10 one-time | 3 times | 5 times | XCTrack (2) | MEDIUM sensitivity |
| [continue...] |

**Insights:**
- Subscription fatigue is real (mentioned X times)
- $15/month appears to be ceiling for single-purpose app
- Free alternatives (XCTrack, Windy) set price expectations
- Users willing to pay for accuracy + safety features
- One-time purchase preferred over subscription by some

---

## SHEET 8: Switching Patterns

| From App | To App | Frequency | Primary Reason | Trigger Quote | Timing |
|----------|--------|-----------|----------------|---------------|--------|
| burnair | XCTrack | 12 | Price too high | "[quote]" | After price increase |
| Windy | Meteo-Parapente | 8 | Need para-specific | "[quote]" | After bad flight |
| Gaggle | XCTrack | 6 | More features | "[quote]" | Season start |
| burnair | Meteo-Parapente | 5 | Better accuracy | "[quote]" | After forecast fail |
| [continue...] |

**Patterns:**
- Most switches FROM: burnair (price) and Gaggle (reliability)
- Most switches TO: XCTrack (free + features) and Meteo-Parapente (accuracy)
- Triggers: Price changes, forecast failures, new features in competitor
- Timing: Start/end of season, after incidents, after app updates

---

## SHEET 9: User Segments

| Segment | % of Reviews | Top Needs | Price Sensitivity | Preferred Features | Sample Quote |
|---------|--------------|-----------|-------------------|-------------------|--------------|
| XC Pilots | 35% | Accuracy, thermals, route planning | LOW (will pay for quality) | Thermal maps, wind aloft, route planning | "[quote]" |
| Recreational | 40% | Simplicity, safety, go/no-go | MEDIUM | Simple forecast, safety alerts, local spots | "[quote]" |
| Instructors | 8% | Reliability, conservative forecasts | LOW (business expense) | Student-friendly, shareable, conservative | "[quote]" |
| Competitors | 12% | Real-time, live tracking, performance | LOW (competitive edge) | Live tracking, scoring, tactical weather | "[quote]" |
| Travelers | 5% | Global coverage, offline, discovery | MEDIUM | Offline mode, spot database, multi-region | "[quote]" |

**Strategy:**
- Primary target: Recreational (40%) + XC (35%) = 75% of market
- Must-serve: Instructors (influencers) and Competitors (advocates)
- Features should prioritize Recreational + XC needs
- Pricing should align with Recreational sensitivity

---

## SHEET 10: Action Items for Gleitcast

| Priority | Category | Action Item | Based On | Evidence | Owner | Status |
|----------|----------|-------------|----------|----------|-------|--------|
| P0 | Feature | Build thermal forecast maps | 42 praise mentions for burnair | Sheet 5, Row 1 | Product | Not started |
| P0 | Feature | Multi-source weather validation | 47 complaints about wind accuracy | Sheet 4, Row 1 | Engineering | Not started |
| P0 | Feature | Airspace warnings + alerts | 24 "missing feature" requests | Sheet 6, Row 2 | Product | Not started |
| P0 | Safety | Conservative wind predictions | 47 safety-critical complaints | Sheet 4, Row 1 | Data Science | Not started |
| P1 | UX | Simple, clear interface | 19 complaints about complexity | Sheet 4, Row 4 | Design | Not started |
| P1 | Pricing | Competitive pricing strategy | 28 "too expensive" complaints | Sheet 7 | Business | Not started |
| P1 | Feature | Live tracking for safety | 32 praise mentions | Sheet 5, Row 3 | Product | Not started |
| P2 | Feature | Route planning tools | 15 requests | Sheet 6 | Product | Backlog |
| [continue...] |

---

## FORMULAS TO ADD

### In Theme Summary Sheet:
```excel
=COUNTIF('Raw Reviews'!L:L, "Weather Accuracy")
```
Counts how many reviews mention each theme.

### In App Comparison:
```excel
=AVERAGEIF('Raw Reviews'!B:B, "burnair", 'Raw Reviews'!F:F)
```
Average rating for each app.

### In Pain Points:
```excel
=COUNTIFS('Raw Reviews'!L:L, "Weather", 'Raw Reviews'!M:M, "Pain")
```
Count pain points by theme.

### Priority Score:
```excel
=Frequency * Severity_Weight
```
Where: Critical=3, High=2, Medium=1, Low=0.5

---

## PIVOT TABLES TO CREATE

### 1. Pain by App
- Rows: App Name
- Columns: Pain Category
- Values: Count
- Shows which apps have which pains

### 2. Features by Rating
- Rows: Feature Mentioned
- Columns: Star Rating
- Values: Count
- Shows which features correlate with high/low ratings

### 3. Themes Over Time
- Rows: Month Posted
- Columns: Theme
- Values: Count
- Shows trending issues

### 4. Sentiment by Segment
- Rows: User Type
- Columns: Sentiment
- Values: Count
- Shows which segments have which pains/gains

---

## CHARTS TO CREATE

### 1. Theme Distribution (Pie Chart)
- Shows % of reviews by theme
- Identifies biggest topic areas

### 2. App Rating Comparison (Bar Chart)
- X-axis: Apps
- Y-axis: Avg Rating
- Shows competitive positioning

### 3. Pain Frequency (Horizontal Bar)
- X-axis: Frequency
- Y-axis: Pain Point
- Shows top 10 pains

### 4. Feature Request Heatmap
- X-axis: Apps
- Y-axis: Requested Features
- Color: Frequency
- Shows feature gaps by app

### 5. Price Sensitivity (Scatter)
- X-axis: Price
- Y-axis: "Worth It" %
- Size: Review Volume
- Shows price-value relationship

### 6. Switching Flow (Sankey Diagram)
- From App → To App
- Width: Frequency
- Shows competitive dynamics

---

## CONDITIONAL FORMATTING

### Raw Reviews Sheet:
- **Rating column:** Red (1-2), Yellow (3), Green (4-5)
- **Severity column:** Red (Critical), Orange (Major), Yellow (Minor)
- **Priority column:** Red (P0), Orange (P1), Yellow (P2), Green (P3)
- **Sentiment column:** Red (Pain), Green (Gain), Blue (Unmet Need), Purple (Switching)

### Theme Summary:
- **Total Mentions:** Color scale (red to green based on frequency)
- **Severity:** Same as above

---

## DATA VALIDATION DROPDOWNS

Set up dropdowns for consistent data entry:

**App:**
- burnair
- Paragliding Map
- XCTrack
- FlySkyHy
- Gaggle
- Meteo-Parapente
- where2fly
- Windy
- Paraglidable

**Platform:**
- iOS (App Store)
- Android (Google Play)
- Reddit
- YouTube
- Forum
- Blog
- Other

**User Type:**
- XC Pilot
- Recreational
- Instructor
- Competitor
- Traveler
- Unknown

**Theme:**
- Weather Accuracy
- Pricing & Value
- Features & Functionality
- Usability & UX
- Technical Performance
- Social & Community
- Safety & Reliability
- Support & Service

**Sentiment:**
- Pain
- Gain
- Unmet Need
- Switching Trigger

**Severity:**
- Critical
- Major
- Minor

**Priority:**
- P0 (Must-have)
- P1 (High)
- P2 (Medium)
- P3 (Low)

---

## USAGE WORKFLOW

### Daily Research:
1. Find review/comment
2. Add row to "Raw Reviews" sheet
3. Fill in all columns
4. Tag appropriately
5. Extract key quote

### Weekly Review:
1. Update pivot tables
2. Review theme summary (auto-updates via formulas)
3. Identify new patterns
4. Update action items

### Final Analysis:
1. Export insights from all sheets
2. Create presentation/report
3. Share with team
4. Update product roadmap

---

## EXPORT FORMATS

### For Presentations:
- Export charts as images
- Copy key quote tables
- Use pivot table summaries

### For Product Team:
- Sheet 10 (Action Items) as CSV
- Sheet 3 (App Comparison) as image
- Sheet 4 (Pain Points) prioritized list

### For Design Team:
- Usability pain points filtered view
- UX praise examples
- User segment needs

### For Business Team:
- Pricing analysis (Sheet 7)
- Competitive positioning (Sheet 3)
- Market opportunity (Sheet 6)

---

This spreadsheet structure gives you a systematic way to organize hundreds of quotes and extract actionable insights. Start filling in data and watch the patterns emerge!
