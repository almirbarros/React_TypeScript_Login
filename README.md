# Tela de Login - React 19 + Vite

Este projeto consiste em uma tela de autenticação moderna e totalmente otimizada, desenvolvida como um desafio prático de desenvolvimento frontend. A aplicação aplica conceitos rigorosos de tipagem estrita, boas práticas de arquitetura (Clean Code) e gerenciamento eficiente de formulários.

## 🛠️ Tecnologias e Core da Aplicação

- **Framework**: [React 19](https://react.dev) — Versão estável mais recente do ecossistema, utilizando a API moderna `createRoot`.
- **Linguagem**: [TypeScript 5.x](https://typescriptlang.org) — Tipagem estrita para segurança de dados e autocomplete robusto em tempo de desenvolvimento.
- **Ferramenta de Build (Bundler)**: [Vite 6.x](https://vite.dev) — Substituindo o antigo e descontinuado `react-scripts` (CRA) para garantir compilações ultra-rápidas baseadas em *esbuild*.
- **Gerenciador de Pacotes**: [Yarn v4](https://yarnpkg.com) — Versão modernizada do Yarn configurada via Corepack do Node.js, com cache global otimizado e instalações instantâneas.

---

## 📦 Bibliotecas Utilizadas


| Biblioteca | Versão | Função no Projeto |
| :--- | :--- | :--- |
| **`react-hook-form`** | `^7.54.0` | Gerenciamento de estado de formulários sem re-renderizações desnecessárias. |
| **`yup`** | `^1.4.0` | Validação de esquemas de dados (*schema validation*) baseada em regras de negócio. |
| **`@hookform/resolvers`**| `^3.9.0` | Ponte de integração para o `react-hook-form` ler as validações do `yup`. |
| **`styled-components`** | `^6.1.11` | Estilização por meio de *CSS-in-JS* com suporte nativo a tipos do TypeScript. |

---

## 🧱 Estrutura de Pastas

O projeto adota uma arquitetura baseada em **Componentização Reutilizável e Separação de Conceitos (Concerns)**:

```text
├── src/
│   ├── components/            # Componentes genéricos e reutilizáveis
│   │   ├── Button/            # Botão genérico acessível com herança de propriedades HTML
│   │   └── Input/             # Input genérico integrado ao React-Hook-Form e com borda de erro dinâmica
│   ├── pages/                 # Páginas/Telas principais da aplicação
│   │   └── Login/             # Tela de Login (valida e submete os dados de formulário)
│   ├── global.ts              # Reset de CSS global, definição de fontes (Nunito) e suavizações
│   └── index.tsx              # Ponto de entrada do aplicativo React 19
├── index.html                 # Arquivo HTML principal (movido para a raiz exigido pelo Vite)
├── tsconfig.json              # Configurações do TypeScript otimizadas para Bundler (Vite)
└── vite.config.ts             # Configuração central de plugins do Vite
```

---

## 💡 Práticas de Desenvolvimento Implementadas

### 1. Named Exports e Consistência
Abandono completo do uso de `export default` em favor de **Named Exports** (`export const Component`). Isso mitiga erros de importação fantasma no Vite, garante consistência absoluta nos nomes dos componentes ao longo do projeto e melhora a eficiência da refatoração automática no VS Code.

### 2. Otimização de Performance com `import type`
Todas as assinaturas de interfaces e contratos do TypeScript são importadas utilizando explicitamente o prefixo `type` (ex: `import type { FormLogin } from './types'`). Isso permite que o compilador isole e remova completamente os metadados de tipagem do arquivo final JavaScript em produção, gerando um bundle mais leve.

### 3. Herança de Atributos Nativos do HTML
Os componentes genéricos de interface utilizam `ComponentPropsWithoutRef`. O botão customizado, por exemplo, herda nativamente todas as propriedades válidas de uma tag `<button>` (como `disabled` e `type`), reduzindo propriedades duplicadas e melhorando o suporte a leitores de tela.

### 4. Transient Props (`$hasError`) do Styled Components v6
Implementação do prefixo `$` em propriedades dinâmicas passadas aos componentes estilizados. Isso garante que atributos customizados (como a cor da borda quando há um erro) sirvam apenas para decisões CSS e não poluam a árvore de elementos do DOM real no navegador.

### 5. Layout Moderno com Flexbox e `gap`
Eliminação de componentes vazios de espaçamento vertical (`<Spacing />`). A distribuição espacial entre o título, os inputs e o botão de ação é controlada nativamente através da propriedade `gap: 16px` no container Flexbox.

### 6. Engenharia de UX em Formulários
- **Validação em Tempo Real**: Configuração do `mode: "onChange"` no React Hook Form para liberar ou bloquear o botão de envio no exato caractere em que o formulário se torna válido.
- **Tratamento de Concorrência**: Bloqueio dinâmico do botão através do estado `isSubmitting`, evitando cliques duplos acidentais que sobrecarregam requisições.

---

## 🚀 Como Executar o Projeto

1. Certifique-se de ter o **Node.js** instalado e o **Corepack** ativado:
   ```bash
   corepack enable
   ```

2. Instale as dependências utilizando o Yarn v4:
   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

4. Para gerar o build de produção:
   ```bash
   yarn build
   ```

---

## 📸 Demonstração e Fluxos de Validação

Esta seção apresenta o comportamento visual e os estados do formulário com base nas regras de negócio implementadas com o **Yup** e o **React Hook Form**.

### 1. Formulário Válido (Botão Liberado)
Quando todos os campos atendem aos critérios de validação (e-mail estruturado corretamente e senha com no mínimo 6 caracteres).

> [!IMPORTANT]
> Quando todos os campos atendem aos critérios de validação, **o botão Entrar é ativado automaticamente em tempo real** (`mode: "onChange"`).

<img width="596" height="407" alt="image" src="https://github.com/user-attachments/assets/dd00e23b-3414-4af4-9c3d-558b3f9faf73" />

### 2. Campo de E-mail Obrigatório (E-mail Vazio)
Se o usuário interagir com o campo de e-mail e deixá-lo em branco (ou apagar o conteúdo), o sistema dispara o feedback visual instantâneo com a borda do container vermelha e a mensagem de obrigatoriedade.

<img width="567" height="463" alt="image" src="https://github.com/user-attachments/assets/d1bd2a40-c74c-470c-bf97-8cbe02d4c72f" />

### 3. Erro de E-mail e Senha Simultâneos
Caso o usuário tente preencher os campos incorretamente (como um e-mail sem `@/domain` e uma senha curta com menos de 6 caracteres), o componente genérico de Input renderiza os múltiplos erros simultaneamente, bloqueando o botão de envio.

<img width="556" height="505" alt="image" src="https://github.com/user-attachments/assets/a4898053-0c34-4321-8ae0-0ec9bb004c03" />




