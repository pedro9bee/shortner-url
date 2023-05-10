#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER admin;
    CREATE DATABASE cocus;
    GRANT ALL PRIVILEGES ON DATABASE cocus TO admin;
    CREATE DATABASE rhadmin;
    GRANT ALL PRIVILEGES ON DATABASE rhadmin TO admin;
EOSQL