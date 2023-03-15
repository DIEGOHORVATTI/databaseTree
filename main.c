#include <stdio.h>
#include <stdlib.h>
#include <mysql/mysql.h>

// rm -rf ./main && gcc -o main main.c -lmysqlclient && ./main

int main() {
    MYSQL *conn = mysql_init(NULL);
    if (conn == NULL) {
        fprintf(stderr, "Erro ao iniciar a conexão: %s\n", mysql_error(conn));
        exit(1);
    }
    if (mysql_real_connect(conn, "localhost", "root", "20020000", "IFC", 3306, NULL, 0) == NULL) {
        fprintf(stderr, "Erro ao se conectar: %s\n", mysql_error(conn));
        mysql_close(conn);
        exit(1);
    }
    printf("conexão ok\n");

    char *query = "INSERT INTO vendas (id_venda, data_venda, id_produto, id_cliente, valor_total, bitmap_idx_produtos, bitmap_idx_clientes) VALUES "
                  "(1, '2022-01-01', 1, 1, 100.00, 0x01, 0x01),"
                  "(2, '2022-01-02', 2, 2, 200.00, 0x02, 0x02),"
                  "(3, '2022-01-03', 3, 3, 300.00, 0x04, 0x04),"
                  "(4, '2022-01-04', 4, 4, 400.00, 0x08, 0x08),"
                  "(5, '2022-01-05', 5, 5, 500.00, 0x10, 0x10),"
                  "(6, '2022-01-06', 6, 6, 600.00, 0x20, 0x20),"
                  "(7, '2022-01-07', 7, 7, 700.00, 0x40, 0x40),"
                  "(8, '2022-01-08', 8, 8, 800.00, 0x80, 0x80),"
                  "(9, '2022-01-09', 9, 9, 900.00, 0x100, 0x100),"
                  "(10, '2022-01-10', 10, 10, 1000.00, 0x200, 0x200);";

    if (mysql_query(conn, query) != 0) {
        fprintf(stderr, "Erro ao inserir os dados: %s\n", mysql_error(conn));
        mysql_close(conn);
        exit(1);
    }
    printf("inserção de dados com sucesso\n");
    
    mysql_close(conn);
    return 0;
}
