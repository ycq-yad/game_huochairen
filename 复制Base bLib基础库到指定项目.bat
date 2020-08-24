if exist .\bLib rd /s /q .\bLib
if not exist .\bLib md .\bLib
xcopy ..\laya_baseP_ts\bLib .\.\bLib /s /e
REM remove txt dir
if exist .\bLib\txt\ del /f /s /q .\bLib\txt\*.*
if exist .\bLib\txt\ rd /s /q .\bLib\txt

echo copy ok!
pause
