# 🎙️ NLW Agents - Sala de Perguntas com IA

Uma aplicação moderna para criação de salas de perguntas onde os usuários podem fazer perguntas e receber respostas geradas por Inteligência Artificial, incluindo funcionalidade de gravação de áudio.

## ✨ Funcionalidades

- 🏠 **Criação de Salas**: Interface intuitiva para criar novas salas de perguntas
- 💬 **Sistema de Perguntas**: Envio e visualização de perguntas com respostas de IA
- 🎤 **Gravação de Áudio**: Funcionalidade para gravar áudio e enviar para processamento
- 📱 **Interface Responsiva**: Design moderno e adaptável para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderno e rápido
- **React Router DOM** - Roteamento para SPA

### Styling & UI
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI modernos e acessíveis
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones modernos e consistentes

### Gerenciamento de Estado & Dados
- **TanStack Query** - Gerenciamento de estado servidor
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas TypeScript

### Utilitários
- **dayjs** - Manipulação de datas

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório
cd nlw-agents/web

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   └── ...             # Componentes específicos
├── http/               # Hooks e tipos para API
├── pages/              # Páginas da aplicação
├── lib/                # Utilitários
└── utils/              # Funções auxiliares
```

## 🌐 API

A aplicação consome uma API local rodando na porta `3333` com os seguintes endpoints:

- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:id/questions` - Lista perguntas de uma sala
- `POST /rooms/:id/questions` - Cria uma pergunta
- `POST /rooms/:id/audio` - Envia arquivo de áudio

## 🎨 Design System

O projeto utiliza o **shadcn/ui** com configuração personalizada:
- Base color: Zinc
- Style: New York
- CSS Variables habilitadas
- Componentes totalmente customizáveis

---
