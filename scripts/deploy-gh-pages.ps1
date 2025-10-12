param(
  [string]$Branch = "gh-pages",
  [string]$Prefix = "static"
)

$ErrorActionPreference = 'Stop'

Write-Host "Deploying subtree '$Prefix' to branch '$Branch'..." -ForegroundColor Cyan

# Ensure we're in a git repo
$null = git rev-parse --is-inside-work-tree 2>$null

# Fetch latest refs
git fetch origin --prune

# Split subtree and push commit directly (no temp branches)
$hash = git subtree split --prefix $Prefix HEAD
if (-not $hash) { throw "subtree split failed" }
git push -f origin "$hash`:$Branch"

Write-Host "Done. View at https://github.com/$(git config --get remote.origin.url | ForEach-Object { $_ -replace 'https://github.com/', '' -replace '.git$', '' })/tree/$Branch" -ForegroundColor Green
