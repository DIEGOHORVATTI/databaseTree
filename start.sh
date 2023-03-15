#!/bin/bash

main=$1
clear
rm -rf ./$main
gcc -o $main $main.c -lmysqlclient
./$main
rm -rf ./$main