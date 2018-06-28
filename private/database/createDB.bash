#!/bin/sh
cat ./private/database/init.sql | heroku pg:psql
