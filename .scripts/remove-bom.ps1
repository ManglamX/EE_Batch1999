# ...existing code...
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Get-ChildItem -Path (Join-Path $root 'src') -Recurse -Include *.tsx,*.ts | ForEach-Object {
    $p = $_.FullName
    try {
        $bytes = [System.IO.File]::ReadAllBytes($p)
        if ( ($bytes.Length -ge 3) -and ($bytes[0] -eq 0xEF) -and ($bytes[1] -eq 0xBB) -and ($bytes[2] -eq 0xBF) ) {
            $new = $bytes[3..($bytes.Length - 1)]
            [System.IO.File]::WriteAllBytes($p, $new)
            Write-Output "Removed BOM: $p"
        }
    } catch {
        Write-Error "Failed: $p -> $_"
    }
}
# ...existing code...