@REM Helper script to tear down and rebuild the docker environment
docker compose stop
docker compose rm
docker compose create --build
docker compose start