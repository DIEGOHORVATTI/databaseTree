#!/bin/bash

rm -rf ./main
gcc -o main main.c -lmysqlclient
./main
rm -rf ./main