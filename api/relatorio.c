#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <json-c/json.h>
#include "./testTime.c"

#define MAX_LEN 256

void createDatabaseElement(double value, char* element, json_object* obj) {
  char output[MAX_LEN];
  sprintf(output, "%.2f", value);
  json_object_object_add(obj, element, json_object_new_string(output));
}

int main() {
  double results[10];
  for (int i = 0; i < 10; i++) {
    results[i] = get_query_time();
  }

  double sum = 0;
  for (int i = 0; i < 10; i++) {
    sum += results[i];
  }

  double average = sum / 10;

  json_object* json;
  FILE* fp;
  fp = fopen("./data.json", "r+");
  if (fp == NULL) {
    json = json_object_new_object();
  }
  else {
    char buffer[MAX_LEN];
    size_t len = fread(buffer, 1, MAX_LEN, fp);
    fclose(fp);

    if (len == 0) {
      json = json_object_new_object();
    }
    else {
      json = json_tokener_parse(buffer);
      if (json == NULL) {
        printf("Não foi possível parsear o arquivo JSON.\n");
        exit(1);
      }
    }
  }

  createDatabaseElement(average, "resultFinal", json);

  fp = fopen("./data.json", "w");
  if (fp == NULL) {
    printf("Não foi possível abrir o arquivo JSON.\n");
    exit(1);
  }

  fprintf(fp, "%s", json_object_to_json_string(json));

  fclose(fp);
  json_object_put(json);

  return 0;
}
