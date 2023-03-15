#!/bin/bash

main=$1
clear
rm -rf ./$main
gcc -o $main $main.c -lmysqlclient -ljson-c
./$main
rm -rf ./$main