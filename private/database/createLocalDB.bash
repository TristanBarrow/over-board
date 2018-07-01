#!/bin/sh
psql --file=./private/database/init.sql --dbname=overboard
psql --file=./private/database/populate.sql --dbname=overboard
