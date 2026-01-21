# Projeto TMDB – Catálogo de Filmes

Aplicação front-end desenvolvida com **Next.js (App Router)** que consome a **API do The Movie Database (TMDB)** para exibir filmes populares e detalhes individuais, com foco em **boas práticas, organização de código e experiência do usuário**.

---

## Demonstração

Projeto desenvolvido para fins de estudo e avaliação técnica em processo seletivo.

---

## Tecnologias Utilizadas

- Next.js 13+ (App Router)
- React
- TypeScript
- Material UI (MUI)
- Axios
- TMDB API
- Emotion (@emotion/react e @emotion/styled)

---

## 📁 Estrutura do Projeto

```text
src/
 ├─ app/
 │  ├─ layout.tsx        # Layout global (Header + Footer)
 │  ├─ page.tsx          # Página inicial (filmes populares)
 │  ├─ movie/
 │  │  └─ [id]/page.tsx  # Página de detalhes do filme
 │
 ├─ components/
 │  ├─ Header.tsx
 │  ├─ Footer.tsx
 │  ├─ MovieCard.tsx
 │  ├─ Loading.tsx
 │
 ├─ services/
 │  └─ tmdb.ts           # Configuração da API
 │
 ├─ styles/
 │  └─ theme.ts          # Tema global do Material UI
 │
 ├─ globals.css
```
---
## Funcionalidades

- Listagem de filmes populares
- Modal de detalhes do filme
- Layout responsivo (mobile, tablet e desktop)
- Feedback visual de carregamento
- Tratamento de erro com Snackbar
- Componentes reutilizáveis
- Tema global com Material UI
- Header e Footer globais
---

## Configuração da API (TMDB)
Para criar sua conta no TMDB Acesse: https://www.themoviedb.org/

Crie uma conta gratuita e gere sua API Key (v3 auth) em: Profile → Settings → API
---
## Criar arquivo .env.local

Na raiz do projeto, crie o arquivo:

```env
NEXT_PUBLIC_TMDB_API_KEY=SUA_CHAVE_AQUI
```
---
## Como rodar o projeto localmente
Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Instale as dependências

```bash
npm install
```

Rode o projeto
```bash
npm run dev
```
Acesse o localhost
```bash
Next.js 16.1.4 (Turbopack)
- Local:         http://localhost:3000
```



