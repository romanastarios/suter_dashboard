# Suter Technologies - Automated Tests Dashboard

A clean, TestRail-inspired dashboard for viewing automated test results.

## Quick Start

1. **Run local server:**

   ```bash
   python3 -m http.server 8001
   ```

2. **Open browser:**
   Navigate to `http://localhost:8001`

3. **Login:**
   Password: `12345`

## How It Works

### Adding Test Results

Simply drop your artifact folder into the `/artifacts` directory. The dashboard will automatically discover and display all tests.

**Folder Structure:**

```bash
artifacts/
  ├── test_name_02_01_2026_16_47_59/
  │   ├── test_result.json
  │   ├── screenshots/
  │   │   ├── 01-step.png
  │   │   └── 02-step.png
  │   └── videos/
  │       └── recording.webm
```

**test_result.json Format:**

```json
{
  "overall_status": "pass",
  "duration": "45s",
  "started_at": "2026-01-02 16:47:59",
  "steps": [
    {
      "step": "Login page loaded",
      "status": "pass",
      "screenshot": "screenshots/01-step.png"
    }
  ]
}
```

### Workflow

**For Local Development:**
1. Drop entire artifact folder (with timestamp) into `/artifacts`
2. Refresh dashboard - tests appear automatically
3. No manual file copying or configuration needed

**For GitHub Pages Deployment:**
1. Drop artifact folders into `/artifacts`
2. Generate artifacts index:
   ```bash
   node generate-artifacts-index.js
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update test results"
   git push
   ```
4. GitHub Pages will automatically update

### Features

- ✅ Auto-discovery from artifact folders
- ✅ Handles dynamic timestamp folders
- ✅ Light/Dark mode toggle
- ✅ Clean, minimal UI
- ✅ Expandable test details
- ✅ Screenshot links
- ✅ Video playback with fullscreen
- ✅ Manifest integration (shows "Not Tested" for missing tests)
- ✅ GitHub Pages compatible

## Deployment

This dashboard is deployed at: https://romanastarios.github.io/suter_dashboard/

The `artifacts-index.json` file is required for GitHub Pages to work since static hosting doesn't support directory listing.
