# 07_Deployment QA Report

Date: **2026-07-19**

## Production site

- 72 files present in `06_App`, including `.nojekyll`
- Runtime baseline matches ReGift AI Studio v7.5.0
- JavaScript syntax checks passed
- JSON parsing passed for app config, office data, Sprite atlas and web manifest
- SHA-256 verification passed for every production-site file
- No nested ZIP, `.DS_Store` or `Thumbs.db` found
- No common API-key or private-key pattern found

## HTTP deployment simulation

- Local static HTTP server returned `200 OK` for the site root
- All 30 Service Worker core URLs returned `200 OK`
- Relative paths remain compatible with a GitHub Pages project subpath
- PWA scope and start URL remain relative to the deployed site

## GitHub Pages workflow

- YAML parsing passed
- Workflow targets the frozen `./06_App` folder
- Required `contents: read`, `pages: write` and `id-token: write` permissions are present
- GitHub Pages `github-pages` environment is configured
- Official static Pages action sequence is used
- Push to `main` and manual workflow execution are supported

## Result

**DEPLOYMENT QA PASS**
