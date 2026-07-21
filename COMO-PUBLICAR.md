# Minha Estante — como publicar no GitHub Pages

Mesmo esquema do seu app de pontos GPS:

1. Crie um repositório novo no GitHub (ex.: `minha-estante`)
2. Suba os 5 arquivos desta pasta:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Vá em **Settings → Pages → Branch: main → / (root) → Save**
4. Acesse `https://SEU-USUARIO.github.io/minha-estante/`

## No celular

1. Abra o link no Chrome
2. Menu (⋮) → **"Adicionar à tela inicial"** / **"Instalar app"**
3. Pronto — vira um app com ícone, funciona até sem internet

## Importante saber

- Os livros ficam guardados **no aparelho** (IndexedDB), não na internet.
  Cada aparelho tem a sua estante — o que você adicionar no celular não aparece no PC.
- Se limpar os dados do navegador, os livros somem. O app já pede "armazenamento
  persistente" pro navegador não apagar sozinho, mas backup é sempre bom
  (o botão "Baixar / compartilhar" serve pra isso).
- PDF abre direto no navegador. EPUB é baixado pra abrir no seu leitor preferido
  (ReadEra, Lithium, etc).
- Limite de espaço: normalmente o navegador libera vários GB, o app mostra o
  quanto está usando embaixo da busca.
