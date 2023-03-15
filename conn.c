#include <stdio.h>
#include <stdlib.h>
#include <mysql/mysql.h>

#define MAX_rand 10000

typedef struct {
  const int port;
  const char* db;
  const char* host;
  const char* user;
  const char* table;
  const char* password;
} db_config;

db_config CONFIG = {
  .db = "IFC",
  .port = 3306,
  .user = "root",
  .host = "localhost",
  .password = "20020000",
  .table = "vendas_com_indices"
};

char* returnCreateDatabaseString() {
  char* query = malloc(100);
  sprintf(query, "CREATE DATABASE %s;", CONFIG.db);
  return query;
}

MYSQL* conn() {
  char* query = returnCreateDatabaseString();
  MYSQL* conn = mysql_init(NULL);
  int status = 0;

  conn = mysql_init(NULL);
  if (conn == NULL) {
    fprintf(stderr, "Erro ao inicializar a conexão: %s\n", mysql_error(conn));
    exit(1);
  }

  if (mysql_real_connect(
    conn,
    CONFIG.host,
    CONFIG.user,
    CONFIG.password,
    NULL,
    CONFIG.port,
    NULL,
    0) == NULL) {
    fprintf(stderr, "Erro ao se conectar: %s\n", mysql_error(conn));
    mysql_close(conn);
    exit(1);
  }

  status = mysql_query(conn, query);
  if (status != 0) {
    fprintf(stderr, "Erro ao criar a database: %s\n", mysql_error(conn));
    if (mysql_error(conn) == "Can't create database 'IFC'; database exists") {
      printf("iqual");
    }
    mysql_close(conn);
    exit(1);
  }
  else {
    printf("Database criada com sucesso!\n");
  }

  /* if (mysql_real_connect(
    conn,
    CONFIG.host,
    CONFIG.user,
    CONFIG.password,
    CONFIG.db,
    CONFIG.port,
    NULL,
    0) == NULL) {
    fprintf(stderr, "Erro ao se conectar: %s\n", mysql_error(conn));
    mysql_close(conn);
    exit(EXIT_FAILURE);
  } */

  printf("Conexão estabelecida com sucesso\n");

  free(query);
  return conn;
}

int main() {
  conn();
}