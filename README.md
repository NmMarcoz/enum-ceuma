**Autor**: Marcos Nogueira
**Faculdade**: Universidade CEUMA, Turno Vespertino.
**Curso**: Engenharia de Computação
**Período**: Quinto Período
# Exemplo prático de uso do tipo ENUM em databases.
Site simples para explicar e demonstrar a utilidade de ENUMS, que estão presentes tanto em linguagens, quanto banco de dados.

## Tecnologias Utilizadas
Esse projeto foi feito com:
- vite
- ExpressJs
- React
- Typescript
- DrizzleORM
- bunJS

## Instruções para preparação do ambiente
### 1 - Configurando o ambiente
- O projeto utiliza o runtime BunJs, para javascript/typescript.
Caso não o tenha, basta [instalar neste site](https://bun.sh/).
- Recomendo  ter instalado o NODE também.
- Após instalado, rode o seguinte comando no terminal:
```bash
bun install
```
-  Dessa forma, todas as dependências serão instaladas.
> IMPORTANTE
>> Caso não execute o comando acima, o projeto não irá funcionar.

### 2 -  Configuração das variáveis de ambiente
- No arquivo (**.env**) de ambiente, apenas um valor é presente -> DATABASE_URL.
- Crie um arquivo .env na raiz do projeto e bote a variavel **DATABASE_URL** citada no formato especificado abaixo.

```javascript
DATABASE_URL=mysql://USER:SENHA@HOST:PORT/NOME_DO_SCHEMA
```


### 3 - Configurando o banco
- É importante criar o schema primeiro. O nome pode ser qualquer um, apenas crie e deixe-o vazio. Utilize o mysql workbench para isto. Lembre-se de botar na variavel de ambiente o nome do esquema que **você escolheu**.
- Após ter o schema criado, volte no visual code, ou em qualquer outro editor, e rode seguinte comando no terminal (estando na pasta raiz do projeto):
```bash
  npx drizzle-kit push
```
- Caso tudo dê certo você poderá observar no terminal as alterações no banco de dados.

### 4 - Rodando o site
- Com tudo configurado, precisamos rodar o projeto agora:
- Certifique-se de ter as portas 5173 e 3000 livres.
- Primeiro, vamos iniciar a API, pois ela que usa a ORM para poder acessar o banco de dados. Basta digitar:
```bash
bun server
```
- Com a api rodando, basta iniciar o site agora. Execute:
```bash
bun dev
```
- Você verá a porta e a url de conexão no terminal, basta abrir no navegador e tá tudo certo.
- De início não haverá nenhuma opção para selecionar o tamanho da camisa, utilize o script sql, da raiz do projeto, para popular o banco.