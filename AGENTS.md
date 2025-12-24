# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Music Toolbox** - A kitchensink-style desktop application for macOS that provides various utilities for music production workflows.

## Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| **Framework** | Tauri | Desktop app framework, small bundle (~10MB), native WebView |
| **Frontend** | Solid | Lightweight, reactive, React-like syntax |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Components** | Kobalte | Headless/unstyled, accessible, WAI-ARIA compliant |
| **Storage** | SQLite | For storing chord progressions, drum sets, metadata |
| **Structure** | Monorepo | Separate frontend/backend packages |

## Development Guidelines

### Current Focus

**Only Feature 1 (Ableton File Reader) is in scope.** Do not implement future features until Feature 1 is validated and complete. See GitHub issues for current work.

### Non-Requirements

- No web deployment (macOS desktop only)
- No real-time audio playback/processing
- No audio synthesis
- No strict performance requirements

### Project Structure (Target)

```
music/
├── apps/
│   └── desktop/          # Tauri app
│       ├── src/          # Solid frontend
│       └── src-tauri/    # Rust backend
├── packages/             # Shared packages (if needed)
├── CLAUDE.md
├── REQUIREMENTS.md
└── README.md
```

## Resources

- [Tauri Documentation](https://tauri.app/)
- [SolidJS Documentation](https://www.solidjs.com/)
- [Kobalte Documentation](https://kobalte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## Commands

*To be added after project setup*
