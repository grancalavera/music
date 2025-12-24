# Music Toolbox - Requirements

A kitchensink-style toolbox for working with music production tasks on macOS.

## Overview

A desktop application for macOS that provides various utilities for music production workflows. Not intended for web deployment.

## Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| **Framework** | Tauri | Desktop app framework, small bundle (~10MB), native WebView |
| **Frontend** | Solid | Lightweight, reactive, React-like syntax |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Components** | Kobalte | Headless/unstyled, accessible, WAI-ARIA compliant |
| **Storage** | SQLite | For storing chord progressions, drum sets, metadata |
| **Structure** | Monorepo | Separate frontend/backend packages |

## Core Capabilities

- File system access (read/write)
- SQLite storage for persistent data
- Search functionality for stored items
- Drag-and-drop file handling

## Current Scope

**IMPORTANT:** Only Feature 1 is in scope for initial development. Features 2, 3, and beyond are future work and should NOT be implemented until Feature 1 is validated and complete.

---

## Feature 1: Ableton File Reader (CURRENT - Implement This First)

Parse Ableton Live `.als` files and display a human-readable summary.

**Functionality:**
- Drag & drop `.als` file onto the app
- Parse the XML (Ableton files are gzipped XML)
- Display a markdown-formatted summary:
  - Tempo, time signature
  - Track names and types (audio/MIDI)
  - Plugins used
  - Sample file references

**Purpose:** Validate the tech stack with a focused, achievable feature.

**Acceptance Criteria:**
- [ ] Can drag and drop an `.als` file onto the app
- [ ] File is decompressed (gzip) and parsed as XML
- [ ] Summary is displayed in a readable format
- [ ] App runs as a native macOS desktop application

---

## Future Features (DO NOT IMPLEMENT YET)

> **WARNING:** The following features are for future development only. Do not begin work on these until Feature 1 is complete and validated.

### Feature 2: Roland SP-404 / P-6 Drum Pack Creator

*Status: NOT STARTED - Blocked on Feature 1 completion*

Create drum machine packs for Roland samplers.

**Functionality:**
- Organize existing WAV files into set directories
- Generate metadata files (Roland text format) describing:
  - Duration
  - Other sample properties
- Batch processing of multiple samples

### Feature 3: Chord Progression Tool

*Status: NOT STARTED - Blocked on Feature 1 completion*

Find chords and chord progressions, export as MIDI for use in Ableton.

**Functionality:**
- Browse/search chord progressions
- Store favorite progressions in SQLite
- Export as standard MIDI files
- Import into DAWs (Ableton, etc.)

### Feature N: Additional Features (TBD)

The "kitchensink" nature means new utilities can be added as needed.

## Non-Requirements

- No web deployment
- No real-time audio playback/processing
- No audio synthesis
- No strict performance requirements

## Technical Notes

### Ableton .als File Format

- Files are gzipped XML
- Need to decompress before parsing
- XML structure contains project metadata, tracks, devices, etc.

### Roland Metadata Format

- Text-based format (details TBD based on actual device documentation)
- Describes sample properties for the sampler

## Development Approach

1. Start with Ableton File Reader to validate the stack
2. Build out storage layer with SQLite
3. Add features incrementally based on need

## Resources

- [Tauri Documentation](https://tauri.app/)
- [SolidJS Documentation](https://www.solidjs.com/)
- [Kobalte Documentation](https://kobalte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
