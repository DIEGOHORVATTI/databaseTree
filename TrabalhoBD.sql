/*markdown
Como podemos usar múltiplas chaves e hashing dinâmico com índices de mapas de bits em SQL para otimizar a busca de informações em uma base de dados de vendas de uma loja?
*/

/*markdown
Criando a tabela de vendas com múltiplas chaves e índices de mapa de bits
*/

CREATE TABLE vendas_com_indices (
  id_venda INT PRIMARY KEY,
  data_venda DATE,
  id_produto INT,
  id_cliente INT,
  valor_total DECIMAL(10, 2),
  bitmap_idx_produtos VARBINARY(1024),
  bitmap_idx_clientes VARBINARY(1024)
);

/*markdown
Criando índice de mapa de bits para a coluna bitmap_idx_produtos
CREATE INDEX idx_bitmap_produtos ON vendas(bitmap_idx_produtos)
*/

CREATE INDEX idx_bitmap_produtos ON vendas_com_indices(bitmap_idx_produtos);

/*markdown
Criando índice de mapa de bits para a coluna bitmap_idx_clientes
CREATE INDEX idx_bitmap_clientes ON vendas(bitmap_idx_clientes)
*/

CREATE INDEX idx_bitmap_clientes ON vendas_com_indices(bitmap_idx_clientes);

/*markdown
Inserindo dados fictícios na tabela de vendas com a linguagem C
*/

CREATE TABLE vendas_sem_indices (
  id_venda INT PRIMARY KEY,
  data_venda DATE,
  id_produto INT,
  id_cliente INT,
  valor_total DECIMAL(10, 2),
  bitmap_idx_produtos VARBINARY(1024),
  bitmap_idx_clientes VARBINARY(1024)
);