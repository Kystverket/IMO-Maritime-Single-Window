#!/bin/ksh

while read -r FLAGCODE COUNTRYNAME; do
	find ./flags -type f -iname "*${COUNTRYNAME}*" | xargs -n10 -I file mv file "./flags/${FLAGCODE}.png"
done < flag_country.txt
