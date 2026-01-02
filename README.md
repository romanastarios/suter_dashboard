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

1. Drop entire artifact folder (with timestamp) into `/artifacts`
2. Refresh dashboard - tests appear automatically
3. No manual file copying or configuration needed

### Features

- ✅ Auto-discovery from artifact folders
- ✅ Handles dynamic timestamp folders
- ✅ Light/Dark mode toggle
- ✅ Clean, minimal UI
- ✅ Expandable test details
- ✅ Screenshot links
- ✅ Local caching

## Erase Data

Click "Erase" button and enter password: `6560`
