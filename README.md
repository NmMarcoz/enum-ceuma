# Exemplo prático de uso do tipo ENUM em databases.
Site simples para explicar e demonstrar a utilidade de ENUMS, que estão presentes tanto em linguagens, quanto banco de dados.

## Tecnologias Utilizadas
Esse projeto foi feito com:
- vite
- React
- Typescript
- DrizzleORM
- bunJS

## Instruções para preparação do ambiente
### 1 - Configurando o ambiente
- O projeto utiliza o runtime BunJs, para javascript/typescript.
Caso não o tenha, basta [instalar neste site](https://bun.sh/).
- Após instalado, rode o seguinte comando no terminal:
```bash
bun install
```
-  Dessa forma, todas as dependências serão instaladas.

### 2 -  Configuração das variáveis de ambiente
- Crie um arquivo .env na raiz do projeto e bote a variavel citada acima no formato especificado abaixo.
- No arquivo (**.env**) de ambiente, apenas um valor é presente -> DATABASE_URL.
- Este deve estar no formato: mysql://USER:SENHA@HOST:PORT/NOME_DO_SCHEMA
```.env
DATABASE_URL=mysql://USER:SENHA@HOST:PORT/NOME_DO_SCHEMA
```


### 3 - Configurando o banco
- É importante criar o schema primeiro. O nome pode ser qualquer um, apenas crie e deixe-o vazio. Utilize o mysql workbench para isto.
- Após ter o schema criado, volte no visual code e rode seguinte comando no terminal:
```bash
  npx drizzle-kit push
```
- Caso tudo dê certo você poderá observar no terminal as alterações no banco de dados.

### 4 - Rodando o site
- Com tudo configurado, basta executar o comando no terminal:
```bash
bun dev
```
- Você verá a porta e a url de conexão no terminal, basta abrir no navegador e tá tudo certo.
- De início não haverá nenhuma opção para selecionar o tamanho da camisa, popule o banco com uma das seguintes opções:
- pequena
- grande
- extra grande