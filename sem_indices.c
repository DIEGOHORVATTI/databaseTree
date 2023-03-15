#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <mysql/mysql.h>

#define MAX_rand 10000

#define localhost "localhost"
#define port 3306

#define password "20020000"
#define user "root"

#define db "IFC"
#define table_sem_indices "vendas_sem_indices"

int main() {
    MYSQL *conn = mysql_init(NULL);
    if (conn == NULL) {
        fprintf(stderr, "Erro ao iniciar a conexão: %s\n", mysql_error(conn));
        exit(1);
    }
    if (mysql_real_connect(conn, localhost, user, password, db, port, NULL, 0) == NULL) {
        fprintf(stderr, "Erro ao se conectar: %s\n", mysql_error(conn));
        mysql_close(conn);
        exit(1);
    }
    printf("Conexão estabelecida com sucesso\n");

    char *queries[MAX_rand];
    for (int i = 0; i < MAX_rand; i++) {
        char query[500];
        snprintf(query, 500, "INSERT INTO %s (id_venda, data_venda, id_produto, id_cliente, valor_total, bitmap_idx_produtos, bitmap_idx_clientes) VALUES (%d, '2022-01-01', %d, %d, %f, 0x01, 0x01);", table_sem_indices, i+1, i+1, i+1, (i+1)*100.0);
        queries[i] = strdup(query);
    }

    printf("Inserindo %d linhas...\n", MAX_rand);
    for (int i = 0; i < MAX_rand; i++) {
        if (mysql_query(conn, queries[i]) != 0) {
            fprintf(stderr, "Erro ao inserir os dados na linha %d: %s\n", i+1, mysql_error(conn));
            mysql_close(conn);
            exit(1);
        }
    }

    printf("Inserção de dados com sucesso\n");

    mysql_close(conn);
    return 0;
}
