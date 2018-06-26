#!/bin/sh

PAGE="http://www.nationsonline.org/oneworld/country_code_list.htm"
curl $PAGE > ./page.htm
#get flagcodes
cat page.htm | grep -hEo '>([[:space:]]*)([A-Z]{2})</td>' | grep -hEo '([A-Z]{2})' | tr [:upper:] [:lower:] > flagcodes.txt

COUNTRIESPATTERN='((([[:space:]])*)[[:alpha:]]+(([[:space:]])*)(,)*)*'
#get country names
cat ./page.htm | grep -hE '<td class="abs">([A-Z]*)' | grep -hEo ">($COUNTRIESPATTERN)<" | grep -hEo $COUNTRIESPATTERN > ./countrynames.txt
#combine these fields
paste ./countrynames.txt ./flagcodes.txt > ./country_flag.txt
paste ./flagcodes.txt ./countrynames.txt > ./flag_country.txt