#!/bin/sh
cat ./private/database/init.sql | heroku pg:psql
#cat ./private/database/populate.sql | heroku pg:psql
