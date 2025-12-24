# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

**Music Toolbox** - A kitchensink-style desktop application for macOS that provides various utilities for music production workflows.

## Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| **Framework** | Tauri | Desktop app framework, small bundle (~10MB), native WebView |
| **Frontend** | Solid | Lightweight, reactive, React-like syntax |
| **Build Tool** | Vite | Frontend build tool / dev server |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Components** | Kobalte | Headless/unstyled, accessible, WAI-ARIA compliant |
| **Storage** | SQLite | For storing chord progressions, drum sets, metadata (can be added later) |

## Development Guidelines

### Current Focus

**Only Feature 1 (Ableton File Reader) is in scope.** Do not implement future features until Feature 1 is validated and complete. See GitHub issues for current work.

### Non-Requirements

- No web deployment (macOS desktop only)
- No real-time audio playback/processing
- No audio synthesis
- No strict performance requirements

### Project Structure

Uses Tauri's default conventions:

```
music/
├── src/              # Solid frontend
├── src-tauri/        # Rust backend
├── package.json
├── vite.config.ts
├── AGENTS.md
└── README.md
```

## Commands

```bash
pnpm tauri dev     # Launch Tauri app in development mode
pnpm tauri build   # Build production app
```

## Resources

- [Tauri Documentation](https://tauri.app/)
- [Tauri Project Structure](https://tauri.app/start/project-structure/)
- [SolidJS Documentation](https://www.solidjs.com/)
- [Kobalte Documentation](https://kobalte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
