<p align="center"> 
<img src='./assets/logo-grupo-txai.0b8f47c7.svg' href='https://www.grupotxai.com.br/' width='200' alt='Txai Logo'>
<a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

# Projeto NestJS com PrismaORM

Este projeto é um exemplo de aplicação construída com NestJS e PrismaORM, focada na criação de produtos e usuários, com sistema de login, autenticação e controle de acesso baseado em roles.

## Recursos Principais

- **Criação de Produtos e Usuários**: A aplicação permite a criação de produtos e usuários, facilitando a gestão de dados.
- **Sistema de Login**: Implementa um sistema de login seguro, garantindo que apenas usuários autenticados possam acessar certas funcionalidades.
- **Autenticação**: Utiliza JWT (JSON Web Tokens) para autenticação, proporcionando um fluxo de tokens de acesso eficiente e seguro.
- **Controle de Acesso Baseado em Roles**: Permite a definição de roles para usuários, restringindo o acesso a rotas específicas com base nos níveis de autorização dos usuários.

## Como Começar

1. **Clone o Repositório**:
git clone https://github.com/Fabio-Matos1303/prosel-grupo-txai.git

3. **Instale as Dependências e inicialize o banco de dados**:
npm install
docker compose up -d

4. **Configure as Variáveis de Ambiente**: Crie um arquivo `.env` na raiz do projeto e preencha com as informações necessárias, como DATABASE_URL e JWT_SECRET.

5. **Inicie o Servidor de Desenvolvimento**:
npm run start:dev


## Estrutura do Projeto

A aplicação segue uma arquitetura modular, com módulos separados para usuários, produtos e autenticação. Cada módulo possui seus próprios serviços, controladores e modelos, facilitando a manutenção e escalabilidade.

### Módulos Principais

- **Usuários**: Gerencia a criação, atualização e exclusão de usuários.
- **Produtos**: Gerencia a criação, atualização e exclusão de produtos.
- **Autenticação**: Lida com o login, autenticação e controle de acesso baseado em roles.

## Documentação

Para verificar todos os métodos disponíveis, assim como suas possíveis mensagens de retorno a requisições, acesse o Swagger do projeto através da seguinte URL:
http://localhost:3000/api

## Informações importantes

Este projeto foi construído utilizado o PrismaORM e usa como banco de dados o PostgreSQL, a configuração necessária para setar o banco de dados já está pronta no arquivo `docker-compose.yaml`

## Contribuição

Contribuições são bem-vindas! Para contribuir, por favor, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch para suas alterações: `git checkout -b my-feature`.
3. Salve suas alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`.
4. Envie suas alterações: `git push origin my-feature`.

