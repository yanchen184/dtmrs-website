# Video Compression Script
# Usage: .\compress-videos.ps1 [mode]
# Mode 1: Standard (720p, 2.5Mbps) - Recommended
# Mode 2: High Compression (480p, 1.5Mbps) - Smallest size
# Mode 3: WebM Format (720p, VP9) - Best web performance

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("1", "2", "3")]
    [string]$mode = "1"
)

$inputDir = "public/assets/videos"
$outputDir = "public/assets/videos/compressed"

# Create output directory
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

# Get all video files
$videos = Get-ChildItem -Path $inputDir -Filter "*.mp4"

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Video Compression Tool" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Found $($videos.Count) video files" -ForegroundColor Green
Write-Host "Compression mode: $mode" -ForegroundColor Yellow
Write-Host ""

foreach ($video in $videos) {
    $inputFile = $video.FullName
    $fileName = $video.BaseName

    Write-Host "Processing: $($video.Name)" -ForegroundColor Cyan
    Write-Host "Original size: $([math]::Round($video.Length / 1MB, 2)) MB" -ForegroundColor Yellow

    switch ($mode) {
        "1" {
            # Mode 1: Standard compression (720p, H.264, 2.5Mbps)
            $outputFile = Join-Path $outputDir "$fileName-720p.mp4"
            Write-Host "Settings: 1280x720, 2.5Mbps, H.264" -ForegroundColor Green

            & ffmpeg -i $inputFile `
                -vf "scale=1280:720" `
                -c:v libx264 `
                -preset slow `
                -crf 23 `
                -b:v 2.5M `
                -maxrate 3M `
                -bufsize 5M `
                -c:a aac `
                -b:a 128k `
                -y `
                $outputFile 2>&1 | Out-Null
        }
        "2" {
            # Mode 2: High compression (480p, H.264, 1.5Mbps)
            $outputFile = Join-Path $outputDir "$fileName-480p.mp4"
            Write-Host "Settings: 854x480, 1.5Mbps, H.264" -ForegroundColor Green

            & ffmpeg -i $inputFile `
                -vf "scale=854:480" `
                -c:v libx264 `
                -preset slow `
                -crf 28 `
                -b:v 1.5M `
                -maxrate 2M `
                -bufsize 3M `
                -c:a aac `
                -b:a 96k `
                -y `
                $outputFile 2>&1 | Out-Null
        }
        "3" {
            # Mode 3: WebM format (720p, VP9)
            $outputFile = Join-Path $outputDir "$fileName-720p.webm"
            Write-Host "Settings: 1280x720, VP9, WebM" -ForegroundColor Green

            & ffmpeg -i $inputFile `
                -vf "scale=1280:720" `
                -c:v libvpx-vp9 `
                -b:v 2M `
                -maxrate 2.5M `
                -bufsize 4M `
                -crf 30 `
                -c:a libopus `
                -b:a 96k `
                -y `
                $outputFile 2>&1 | Out-Null
        }
    }

    if (Test-Path $outputFile) {
        $compressedSize = (Get-Item $outputFile).Length
        $compressionRatio = [math]::Round((1 - ($compressedSize / $video.Length)) * 100, 2)

        Write-Host "SUCCESS!" -ForegroundColor Green
        Write-Host "   Compressed size: $([math]::Round($compressedSize / 1MB, 2)) MB" -ForegroundColor Green
        Write-Host "   Compression ratio: $compressionRatio%" -ForegroundColor Green
        Write-Host "   Output: $outputFile" -ForegroundColor Cyan
    } else {
        Write-Host "FAILED!" -ForegroundColor Red
    }

    Write-Host ""
}

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Compression Complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Check compressed video quality" -ForegroundColor White
Write-Host "2. If satisfied, replace original files" -ForegroundColor White
Write-Host "3. Delete compressed folder" -ForegroundColor White
Write-Host ""
Write-Host "Replace command:" -ForegroundColor Yellow
Write-Host 'Move-Item -Path "public/assets/videos/compressed/*" -Destination "public/assets/videos/" -Force' -ForegroundColor Cyan
Write-Host 'Remove-Item -Path "public/assets/videos/compressed" -Recurse' -ForegroundColor Cyan
