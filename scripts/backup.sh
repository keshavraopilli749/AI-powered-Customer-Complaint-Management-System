#!/bin/bash
# backup.sh - Utility to backup the PostgreSQL database

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="db_backup_$TIMESTAMP.sql"

echo "Creating database backup: $BACKUP_FILE"

docker exec -t qms_postgres pg_dumpall -c -U postgres > "$BACKUP_FILE"

echo "Backup completed successfully!"
