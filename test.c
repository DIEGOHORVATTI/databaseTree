#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <mysql/mysql.h>
#include "./conn.c"

#define MAX_rand 10000

int main()
{
    MYSQL* CONN = conn();

    clock_t start = clock();
    if (mysql_query(CONN, "select * from vendas_com_indices where id_venda = 9999") != 0) {
        fprintf(stderr, "Erro ao executar a consulta: %s\n", mysql_error(CONN));
        mysql_close(CONN);
        exit(1);
    }
    clock_t end = clock();

    MYSQL_RES* result = mysql_store_result(CONN);
    if (result == NULL) {
        fprintf(stderr, "Erro ao armazenar resultado da consulta: %s\n", mysql_error(CONN));
        mysql_close(CONN);
        exit(1);
    }

    MYSQL_ROW row = mysql_fetch_row(result);
    if (row == NULL) {
        fprintf(stderr, "Nenhum resultado encontrado.\n");
        mysql_free_result(result);
        mysql_close(CONN);
        exit(1);
    }

    printf("Valor encontrado: %s\n", row[0]);

    double timeSpentMS = (double)(end - start) * 1000.0 / CLOCKS_PER_SEC;
    printf("Tempo de execução: %.2f mile segundos\n", timeSpentMS);

    mysql_close(CONN);
    mysql_free_result(result);
    return 0;
}