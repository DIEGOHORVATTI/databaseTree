#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <mysql/mysql.h>
#include "./conn.c"

#define MAX_rand 10000

int main() {
  MYSQL* CONN = conn();

  if (mysql_query(CONN, "CREATE TABLE vendas_com_indices \
            ( \
                id_venda INT PRIMARY KEY, \
                data_venda DATE, \
                id_produto INT, \
                id_cliente INT, \
                valor_total DECIMAL(10, 2), \
                bitmap_idx_produtos VARBINARY(1024), \
                bitmap_idx_clientes VARBINARY(1024) \
            ); \
        ")
      )
  {
    fprintf(stderr, "Erro ao criar a tabela: %s\n", mysql_error(CONN));
    mysql_close(CONN);
    return 1;
  }

  if (mysql_query(CONN, "CREATE INDEX idx_bitmap_produtos ON vendas_com_indices(bitmap_idx_produtos);"))
  {
    fprintf(stderr, "Erro ao criar o índice: %s\n", mysql_error(CONN));
    mysql_close(CONN);
    return 1;
  }

  if (mysql_query(CONN, "CREATE INDEX bitmap_idx_clientes ON vendas_com_indices(bitmap_idx_clientes);"))
  {
    fprintf(stderr, "Erro ao criar o índice: %s\n", mysql_error(CONN));
    mysql_close(CONN);
    return 1;
  }

  mysql_close(CONN);
  return 0;
}