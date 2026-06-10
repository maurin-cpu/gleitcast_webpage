# Page-Specific Overrides

Hier liegen seitenspezifische Abweichungen vom `MASTER.md`. Jede Datei hier **überschreibt** die Master-Regeln für eine konkrete Page.

## Anlegen einer neuen Override-Datei

```
design-system/pages/<page-slug>.md
```

Beispiele:
- `landing.md` — Marketing-Landing (wingcast.ch)
- `briefing.md` — interaktive Briefing-Vorschau
- `dashboard.md` — App-Dashboard (Spot-Liste)
- `onboarding.md` — Erst-Anmeldung

## Workflow beim Bauen einer Page

1. **Lies zuerst** `design-system/MASTER.md`
2. Prüfe, ob `design-system/pages/<page>.md` existiert
3. Falls ja: Page-Regeln **priorisieren**, Master als Fallback
4. Falls nein: Master exklusiv

## Wann Override, wann nicht?

**Override anlegen**, wenn die Page eine **bewusste Abweichung** vom Master hat (z. B. Landing-Hero darf Display-Schrift 80 px statt 64 px verwenden, weil Above-the-Fold).

**Kein Override**, wenn es nur Standard-Komponenten in Standard-Kombination sind — dann reicht der Master.
