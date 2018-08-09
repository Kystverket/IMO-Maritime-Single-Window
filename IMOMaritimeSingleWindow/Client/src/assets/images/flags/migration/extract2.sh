#!/bin/bash

#this script depends on a html table converter to be run prior to execution

#separate country names
cat countrycodes.txt | cut -f2 -d"|" > countrynames.txt
#separate flag codes
cat countrycodes.txt | cut -f3 -d"|" | tr [:upper:] [:lower:] > flagcodes.txt
#combine these fields
paste ./countrynames.txt ./flagcodes.txt > ./country_flag.txt
paste ./flagcodes.txt ./countrynames.txt > ./flag_country.txt