<!-- Sistema de Moeda Estudantil — Lab03S02 — PUC Minas -->

# 🪙 Sistema de Moeda Estudantil 👨‍💻

> [!NOTE]
> Plataforma acadêmica de **moeda virtual estudantil** desenvolvida para a disciplina de Laboratório de Desenvolvimento de Software (PUC Minas).
> O sistema permite que professores recompensem alunos com moedas que podem ser trocadas por vantagens oferecidas por empresas parceiras.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        O <b>Sistema de Moeda Estudantil</b> é uma plataforma <i>fullstack</i> construída com <b>Node.js</b>, <b>TypeScript</b>, <b>Prisma ORM</b>, <b>PostgreSQL</b> e <b>React com TailwindCSS</b>. Esta iteração (<b>Lab03S02</b>) implementa o <i>Modelo Entidade-Relacionamento</i>, a <i>estratégia de acesso ao banco de dados via ORM</i> e os <b>CRUDs completos</b> (front-end e back-end) para as entidades <b>Aluno</b> e <b>Empresa Parceira</b>, seguindo rigorosamente a arquitetura <b>MVC</b>. O cadastro de qualquer entidade cria atomicamente um registro de usuário vinculado, garantindo <b>consistência transacional</b> no banco de dados. O projeto adota <i>Clean Code</i>, modularização clara e boas práticas de engenharia de software para fins acadêmicos e profissionais.
      </div>
    </td>
    <td>
      <div align="center">
        <img src="https://joaopauloaramuni.github.io/image/logo_ES_vertical.png" alt="Logo PUC Minas Engenharia de Software" width="120px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Projeto em andamento

[![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue?style=for-the-badge)](https://github.com)
![Node.js](https://img.shields.io/badge/Node.js-20.x-007ec6?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-007ec6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-007ec6?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2-007ec6?style=for-the-badge&logo=vite&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_ORM-5.13-007ec6?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-007ec6?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-007ec6?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.19-007ec6?style=for-the-badge&logo=express&logoColor=white)
![GitHub license](https://img.shields.io/badge/Licença-MIT-007ec6?style=for-the-badge&logo=opensourceinitiative)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Inicialização do Banco de Dados](#-inicialização-do-banco-de-dados-postgresql)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Endpoints da API](#-endpoints-da-api)
- [Testes](#-testes)
- [Documentações Utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis

* 🌐 **Demo Online:** *(em breve — deploy planejado na Vercel + Railway)*
* 📖 **Documentação da API (Swagger):** `http://localhost:3333/api/health` *(disponível ao rodar localmente)*
* 🎓 **Disciplina:** Laboratório de Desenvolvimento de Software — PUC Minas
* 📋 **Iteração:** Lab03S02 — Modelo ER, ORM e CRUDs de Aluno e Empresa Parceira

---

## 📝 Sobre o Projeto

O **Sistema de Moeda Estudantil** nasceu como um projeto acadêmico da disciplina de **Laboratório de Desenvolvimento de Software** da **PUC Minas**, com o objetivo de simular um ecossistema de recompensas entre alunos, professores e empresas parceiras.

**Por que ele existe?**
Professores precisam de um mecanismo digital para reconhecer e recompensar o desempenho e o mérito dos alunos. Empresas parceiras, por sua vez, desejam se conectar com o público universitário oferecendo benefícios. O sistema cria essa ponte de forma segura, rastreável e gamificada.

**Qual problema ele resolve?**
- Falta de um canal formal e digital para recompensas acadêmicas.
- Dificuldade de empresas em alcançar o público universitário de forma relevante.
- Ausência de rastreabilidade nas trocas de benefícios entre alunos e parceiros.

**Contexto — Lab03S02:**
Esta iteração foca especificamente na implementação do **Modelo ER**, na definição da estratégia de acesso ao banco de dados via **Prisma ORM** e na construção dos **CRUDs completos** para as entidades **Aluno** e **Empresa Parceira**, incluindo a tela de cadastro no front-end e a comunicação com o back-end via API RESTful.

> [!NOTE]
> Esta seção será expandida a cada iteração do laboratório, adicionando novas funcionalidades como autenticação JWT, lançamento de moedas por professores e catálogo de vantagens das empresas.

---

## ✨ Funcionalidades Principais

- 🎒 **Cadastro de Alunos:** Formulário multi-seções com dados pessoais, endereço completo e credenciais de acesso. Cria atomicamente o registro de autenticação (`Usuario`) e o perfil do aluno.
- 🏢 **Cadastro de Empresas Parceiras:** Formulário elegante com dados corporativos (CNPJ, Razão Social, Nome Fantasia) e credenciais de acesso.
- 🔐 **Gerenciamento de Usuários Base:** Toda entidade (Aluno ou Empresa) possui um registro vinculado na tabela `usuarios` com tipo de perfil (`ALUNO`, `PROFESSOR`, `EMPRESA`) e senha armazenada com **bcrypt**.
- 📋 **CRUD Completo via API RESTful:** Criação, listagem, busca por ID, atualização e remoção de Alunos e Empresas, com respostas padronizadas em JSON.
- ✅ **Validação em Duas Camadas:** Client-side (React) e server-side (middlewares Express), com feedback de erro campo a campo no formulário.
- 🔔 **Toast Notifications:** Feedback visual instantâneo de sucesso ou erro após cada operação, com animação de entrada e saída.
- 🧱 **Arquitetura MVC:** Separação clara de responsabilidades entre Controllers, Services e a camada de dados (Prisma).
- 💳 **Saldo de Moedas:** Campo `saldo_moedas` no perfil do Aluno, pronto para as próximas iterações do sistema.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

| Tecnologia | Versão | Finalidade |
|:-----------|:-------|:-----------|
| **React** | 18.3.x | Biblioteca principal de UI |
| **TypeScript** | 5.4.x | Tipagem estática |
| **TailwindCSS** | 3.4.x | Estilização utilitária |
| **React Router DOM** | 6.x | Roteamento client-side |
| **Axios** | 1.7.x | Cliente HTTP para consumo da API |
| **Vite** | 5.2.x | Build tool e servidor de desenvolvimento |

### 🖥️ Back-end

| Tecnologia | Versão | Finalidade |
|:-----------|:-------|:-----------|
| **Node.js** | 20.x (LTS) | Runtime JavaScript |
| **TypeScript** | 5.4.x | Tipagem estática |
| **Express** | 4.19.x | Framework HTTP / API REST |
| **Prisma ORM** | 5.13.x | Mapeamento objeto-relacional e migrations |
| **PostgreSQL** | 16.x | Banco de dados relacional |
| **bcryptjs** | 2.4.x | Hash seguro de senhas |
| **dotenv** | 16.x | Gerenciamento de variáveis de ambiente |
| **cors** | 2.8.x | Cross-Origin Resource Sharing |

### ⚙️ Infraestrutura & Dev

| Tecnologia | Finalidade |
|:-----------|:-----------|
| **Docker** | Containerização do PostgreSQL |
| **ts-node-dev** | Hot reload no desenvolvimento |
| **Prisma Studio** | Interface visual para o banco de dados |

---

## 🏗 Arquitetura

O sistema adota a **arquitetura MVC (Model-View-Controller)** com uma camada de **Service** intermediária, separando completamente as responsabilidades:

```
Requisição HTTP
      │
      ▼
 [ Middleware ]        ← Validação de campos obrigatórios, formato CPF/CNPJ
      │
      ▼
 [ Controller ]        ← Extrai dados do Request, retorna Response HTTP
      │
      ▼
  [ Service ]          ← Regras de negócio, transações atômicas ($transaction)
      │
      ▼
 [ Prisma ORM ]        ← Acesso ao banco de dados (queries type-safe)
      │
      ▼
 [ PostgreSQL ]        ← Persistência dos dados
```

**Decisão arquitetural central — Herança de Tabelas (TPT):**
A entidade `Usuario` é a tabela base de autenticação. `Aluno` e `EmpresaParceira` referenciam `Usuario` com uma relação 1-para-1 (`UNIQUE` em `id_usuario`). Isso permite que a lógica de login seja centralizada, independentemente do tipo de perfil.

**Atomicidade garantida:**
O cadastro de qualquer entidade utiliza `prisma.$transaction()`. Se a criação do `Usuario` ou do `Aluno`/`Empresa` falhar por qualquer motivo, **toda a operação é revertida** (rollback automático), evitando registros órfãos no banco.

### Diagrama Entidade-Relacionamento (simplificado)

```
┌─────────────────────┐       ┌─────────────────────────┐
│      usuarios       │       │         alunos          │
│─────────────────────│ 1   1 │─────────────────────────│
│ id_usuario (PK)     │──────▶│ id_aluno (PK)           │
│ email_login (UNIQUE)│       │ nome_completo           │
│ senha_hash          │       │ cpf (UNIQUE)            │
│ tipo_perfil (ENUM)  │       │ rg, logradouro, ...     │
│ ativo               │       │ saldo_moedas            │
│ criado_em           │       │ id_usuario (FK, UNIQUE) │
└─────────────────────┘       │ id_instituicao (FK)     │
          │                   │ id_curso (FK)           │
          │ 1              1  └─────────────────────────┘
          │
          └──────────────────▶┌─────────────────────────┐
                               │    empresas_parceiras   │
                               │─────────────────────────│
                               │ id_empresa (PK)         │
                               │ razao_social            │
                               │ nome_fantasia           │
                               │ cnpj (UNIQUE)           │
                               │ contato_nome            │
                               │ id_usuario (FK, UNIQUE) │
                               └─────────────────────────┘
```

---

## 🔧 Instalação e Execução

### Pré-requisitos

Certifique-se de ter o ambiente configurado com as seguintes ferramentas:

* **Node.js:** versão **20.x (LTS)** ou superior
* **npm:** versão **10.x** ou superior (incluso com o Node.js)
* **PostgreSQL:** versão **16.x** — localmente ou via **Docker** *(recomendado)*
* **Docker** *(opcional, mas recomendado para o banco de dados)*
* **Git**

---

### 🔑 Variáveis de Ambiente

#### Back-end (Node.js + Express)

Crie um arquivo **`.env`** dentro da pasta `/backend` (baseado no `.env.example` incluído):

| Variável | Descrição | Exemplo |
|:---------|:----------|:--------|
| `DATABASE_URL` | String de conexão do PostgreSQL (formato Prisma) | `postgresql://postgres:senha@localhost:5432/moeda_estudantil` |
| `PORT` | Porta em que o servidor Express irá rodar | `3333` |

```env
# backend/.env
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/moeda_estudantil"
PORT=3333
```

#### Front-end (React + Vite)

O front-end utiliza o **proxy do Vite** configurado em `vite.config.ts` para redirecionar `/api` → `http://localhost:3333`. Em desenvolvimento, nenhuma variável de ambiente adicional é necessária.

Para deploy em produção, crie um arquivo **`.env`** na pasta `/frontend`:

| Variável | Descrição | Exemplo |
|:---------|:----------|:--------|
| `VITE_API_URL` | URL base da API em produção | `https://meu-backend.railway.app` |

---

### 📦 Instalação de Dependências

1. **Clone o repositório:**

```bash
git clone <URL_DO_SEU_REPOSITÓRIO>
cd "atividade - puc"
```

2. **Instale as dependências do Back-end:**

```bash
cd backend
npm install
```

3. **Instale as dependências do Front-end:**

```bash
cd ../frontend
npm install
```

---

### 💾 Inicialização do Banco de Dados (PostgreSQL)

**Opção 1 — Docker (recomendado):**

```bash
docker run --name moeda_estudantil_db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=sua_senha \
  -e POSTGRES_DB=moeda_estudantil \
  -p 5432:5432 \
  -d postgres:16
```

**Opção 2 — PostgreSQL local:** Crie o banco de dados manualmente e aponte a `DATABASE_URL` no `.env`.

**Execute as migrations do Prisma** (cria todas as tabelas automaticamente):

```bash
cd backend
npx prisma migrate dev --name init
```

**Gere o Prisma Client:**

```bash
npx prisma generate
```

> [!NOTE]
> Para inspecionar o banco visualmente, utilize o **Prisma Studio**: `npx prisma studio`

---

### ⚡ Como Executar a Aplicação

Execute em **dois terminais separados**:

#### Terminal 1: Back-end (Node.js + Express)

```bash
cd backend
npm run dev
```

🚀 *A API estará disponível em **http://localhost:3333***
🏥 *Health check: **http://localhost:3333/api/health***

---

#### Terminal 2: Front-end (React + Vite)

```bash
cd frontend
npm run dev
```

🎨 *O Front-end estará disponível em **http://localhost:5173***

---

## 📂 Estrutura de Pastas

```
atividade - puc/
│
├── README.md                          # 📘 Documentação principal do projeto
│
├── /backend                           # 📁 API RESTful — Node.js + Express + TypeScript
│   ├── .env.example                   # 🧩 Exemplo de variáveis de ambiente
│   ├── package.json                   # 📦 Dependências e scripts npm
│   ├── tsconfig.json                  # ⚙️ Configuração do TypeScript
│   │
│   ├── /prisma
│   │   └── schema.prisma              # 🗄️ Modelo ER: Usuario, Aluno, EmpresaParceira
│   │
│   └── /src
│       ├── server.ts                  # 🚀 Ponto de entrada — inicializa o Express
│       │
│       ├── /config
│       │   └── database.ts            # 🔌 Singleton do PrismaClient
│       │
│       ├── /controllers               # 🎮 Camada Controller (MVC)
│       │   ├── AlunoController.ts     #    Orquestra HTTP ↔ AlunoService
│       │   └── EmpresaController.ts   #    Orquestra HTTP ↔ EmpresaService
│       │
│       ├── /services                  # ⚙️ Camada de Regras de Negócio
│       │   ├── AlunoService.ts        #    CRUD + transação atômica Usuario+Aluno
│       │   └── EmpresaService.ts      #    CRUD + transação atômica Usuario+Empresa
│       │
│       ├── /routes                    # 🛣️ Definição das rotas da API
│       │   ├── alunoRoutes.ts         #    GET/POST/PUT/DELETE /api/alunos
│       │   └── empresaRoutes.ts       #    GET/POST/PUT/DELETE /api/empresas
│       │
│       └── /middlewares               # 🛡️ Middlewares de validação
│           └── validationMiddleware.ts #   Valida campos obrigatórios e formatos
│
└── /frontend                          # 📁 SPA — React + TypeScript + TailwindCSS
    ├── index.html                     # 🌐 Ponto de entrada HTML
    ├── package.json                   # 📦 Dependências e scripts npm
    ├── tsconfig.json                  # ⚙️ Configuração do TypeScript
    ├── vite.config.ts                 # ⚡ Configuração do Vite + proxy da API
    ├── tailwind.config.js             # 🎨 Configuração do TailwindCSS
    ├── postcss.config.js              # 🔧 Configuração do PostCSS
    │
    └── /src
        ├── main.tsx                   # 🚀 Ponto de entrada React
        ├── App.tsx                    # 🗺️ Roteamento principal (React Router)
        ├── index.css                  # 🎨 Estilos globais + classes Tailwind reutilizáveis
        │
        ├── /pages
        │   └── Home.tsx               # 🏠 Página inicial com navegação entre cadastros
        │
        ├── /components                # 🧱 Componentes React
        │   ├── CadastroAluno.tsx      #    Formulário multi-seções de cadastro de aluno
        │   ├── CadastroEmpresa.tsx    #    Formulário de cadastro de empresa parceira
        │   └── Toast.tsx              #    Sistema de notificações (hook + container)
        │
        └── /services
            └── api.ts                 # 🔌 Configuração do Axios + funções tipadas por endpoint
```

---

## 🎥 Demonstração

### 🌐 Aplicação Web

Para melhor visualização, as telas principais estão organizadas lado a lado.

| Tela | Descrição |
| :---: | :---: |
| **Página Inicial (Home)** | **Cadastro de Aluno** |
| Painel de navegação com cards para acesso rápido a cada funcionalidade | Formulário multi-seções: Dados Pessoais, Endereço e Credenciais |
| **Cadastro de Empresa Parceira** | **Toast de Sucesso / Erro** |
| Formulário com dados corporativos, contato e credenciais de acesso | Notificação visual instantânea após cada operação |

> [!NOTE]
> Adicione aqui capturas de tela ou GIFs das telas após rodar a aplicação localmente. Hospede as imagens no GitHub Pages ou em um CDN para garantir disponibilidade.

---

### 💻 Exemplos de Saída na API (cURL)

#### Cadastrar um Aluno

```bash
curl -X POST http://localhost:3333/api/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "email_login": "joao.silva@aluno.puc.br",
    "senha": "senha123",
    "nome_completo": "João da Silva Pereira",
    "cpf": "12345678901",
    "rg": "MG1234567",
    "logradouro": "Rua das Flores",
    "numero": "100",
    "bairro": "São Lucas",
    "cidade": "Belo Horizonte",
    "estado": "MG",
    "cep": "31270010"
  }'
```

**Resposta esperada (201 Created):**

```json
{
  "sucesso": true,
  "mensagem": "Aluno cadastrado com sucesso!",
  "dados": {
    "id_aluno": 1,
    "nome_completo": "João da Silva Pereira",
    "cpf": "12345678901",
    "email_login": "joao.silva@aluno.puc.br",
    "tipo_perfil": "ALUNO",
    "criado_em": "2026-05-06T12:00:00.000Z"
  }
}
```

---

#### Cadastrar uma Empresa Parceira

```bash
curl -X POST http://localhost:3333/api/empresas \
  -H "Content-Type: application/json" \
  -d '{
    "email_login": "contato@techcorp.com.br",
    "senha": "senha123",
    "razao_social": "Tech Corp Soluções Ltda",
    "nome_fantasia": "TechCorp",
    "cnpj": "12345678000195",
    "contato_nome": "Maria Souza"
  }'
```

**Resposta esperada (201 Created):**

```json
{
  "sucesso": true,
  "mensagem": "Empresa parceira cadastrada com sucesso!",
  "dados": {
    "id_empresa": 1,
    "razao_social": "Tech Corp Soluções Ltda",
    "cnpj": "12345678000195",
    "email_login": "contato@techcorp.com.br",
    "tipo_perfil": "EMPRESA",
    "criado_em": "2026-05-06T12:01:00.000Z"
  }
}
```

---

#### Erro de validação (400 Bad Request)

```json
{
  "sucesso": false,
  "mensagem": "Dados inválidos. Verifique os campos obrigatórios.",
  "erros": [
    "O campo \"email_login\" é obrigatório.",
    "O campo \"cpf\" é obrigatório."
  ]
}
```

---

## 🔌 Endpoints da API

### Alunos — `/api/alunos`

| Método | Rota | Descrição | Status de Sucesso |
|:-------|:-----|:----------|:-----------------:|
| `POST` | `/api/alunos` | Cadastra um novo aluno | `201 Created` |
| `GET` | `/api/alunos` | Lista todos os alunos | `200 OK` |
| `GET` | `/api/alunos/:id` | Busca aluno por ID | `200 OK` |
| `PUT` | `/api/alunos/:id` | Atualiza dados do aluno | `200 OK` |
| `DELETE` | `/api/alunos/:id` | Remove aluno e usuário vinculado | `200 OK` |

### Empresas Parceiras — `/api/empresas`

| Método | Rota | Descrição | Status de Sucesso |
|:-------|:-----|:----------|:-----------------:|
| `POST` | `/api/empresas` | Cadastra uma nova empresa | `201 Created` |
| `GET` | `/api/empresas` | Lista todas as empresas | `200 OK` |
| `GET` | `/api/empresas/:id` | Busca empresa por ID | `200 OK` |
| `PUT` | `/api/empresas/:id` | Atualiza dados da empresa | `200 OK` |
| `DELETE` | `/api/empresas/:id` | Remove empresa e usuário vinculado | `200 OK` |

### Utilitários

| Método | Rota | Descrição |
|:-------|:-----|:----------|
| `GET` | `/api/health` | Verifica se a API está operacional |

---

## 🧪 Testes

### Executar os testes (a implementar nas próximas iterações)

```bash
# Testes unitários dos Services
cd backend
npm run test

# Testes de integração da API
npm run test:integration
```

> [!NOTE]
> A implementação de testes automatizados (Jest + Supertest) está planejada para as próximas iterações do laboratório. Os endpoints foram testados manualmente via cURL e Postman durante o desenvolvimento desta iteração (Lab03S02).

---

## 🔗 Documentações Utilizadas

* 📖 **Prisma ORM:** [Documentação Oficial do Prisma](https://www.prisma.io/docs)
* 📖 **React:** [Documentação Oficial do React](https://react.dev/reference/react)
* 📖 **TailwindCSS:** [Documentação Oficial do Tailwind](https://tailwindcss.com/docs)
* 📖 **Express.js:** [Documentação Oficial do Express](https://expressjs.com/pt-br/)
* 📖 **TypeScript:** [Manual do TypeScript](https://www.typescriptlang.org/docs/)
* 📖 **Vite:** [Guia de Configuração do Vite](https://vitejs.dev/config/)
* 📖 **Axios:** [Documentação do Axios](https://axios-http.com/ptbr/docs/intro)
* 📖 **bcryptjs:** [bcryptjs no npm](https://www.npmjs.com/package/bcryptjs)
* 📖 **React Router:** [Documentação do React Router v6](https://reactrouter.com/en/main)
* 📖 **Conventional Commits:** [Padrão de mensagens de commit](https://www.conventionalcommits.org/en/v1.0.0/)

---

## 👥 Autores

| 👤 Nome | 🖼️ Foto | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|----------|-----------------|-------------|-----------|
| Lucas Dolabela | <div align="center"><img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/lucas-dolabela"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/lucas-dolabela"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:lucas.dolabela@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |

> [!TIP]
> 💡 **Dica:** Atualize a tabela com seu GitHub real, LinkedIn e e-mail de contato. Adicione também os demais membros do grupo, se houver.

---

## 🤝 Contribuição

1. Faça um `fork` do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`). **(Utilize [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))**
4. Faça o `push` para a branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request (PR)** com uma descrição clara da mudança.

> [!IMPORTANT]
> 📝 Siga os padrões de código já estabelecidos no projeto: nomenclatura em português para variáveis de domínio, comentários explicativos nas camadas de negócio e validação obrigatória em todos os endpoints de escrita.

---

## 📄 Licença

Este projeto é distribuído sob a **Licença MIT**.

---
