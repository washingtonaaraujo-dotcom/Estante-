# Como conectar o Google Drive na Estante

O app roda direto no navegador (sem servidor), então o Google pede uma
configuração feita UMA vez só. No fim você vai ter dois códigos pra colar
no `index.html`. Leva uns 10 minutos.

Tudo é feito em: https://console.cloud.google.com

---

## 1. Criar um projeto
- Topo da tela → seletor de projeto → **Novo projeto**
- Nome: `Minha Estante` → **Criar**
- Espera criar e seleciona esse projeto

## 2. Ativar as APIs
Menu (☰) → **APIs e serviços** → **Biblioteca**. Procure e ative as duas:
- **Google Drive API** → Ativar
- **Google Picker API** → Ativar

## 3. Tela de consentimento OAuth
Menu → **APIs e serviços** → **Tela de permissão OAuth**
- Tipo de usuário: **Externo** → Criar
- Nome do app: `Minha Estante`
- E-mail de suporte: o seu
- E-mail do desenvolvedor: o seu → Salvar e continuar
- Em **Escopos**: pode pular (Salvar e continuar)
- Em **Usuários de teste**: **Adicionar usuários** → coloque o SEU e-mail do Gmail
  (o mesmo do Drive) → Salvar e continuar
- Deixe o app em modo **"Teste"** mesmo — funciona perfeito pra uso pessoal

## 4. Criar o Client ID (código 1)
Menu → **APIs e serviços** → **Credenciais**
- **Criar credenciais** → **ID do cliente OAuth**
- Tipo de aplicativo: **Aplicativo da Web**
- Nome: `Estante Web`
- Em **Origens JavaScript autorizadas** → **Adicionar URI** e cole EXATAMENTE:
  ```
  https://washingtonaaraujo-dotcom.github.io
  ```
  (só isso: sem barra no fim, sem o /Estante-/)
- **Criar** → copie o **ID do cliente** (termina em `.apps.googleusercontent.com`)

## 5. Criar a API Key (código 2)
Ainda em **Credenciais**:
- **Criar credenciais** → **Chave de API**
- Copie a chave que aparecer
- (Opcional, recomendado) clique em **Editar chave** → em "Restrições de API"
  marque **Restringir chave** e selecione só **Google Picker API** → Salvar

## 6. Colar os dois códigos no app
Abra o `index.html` e ache estas linhas (perto do meio do arquivo):

```js
const GOOGLE_CLIENT_ID = 'COLE_AQUI_O_CLIENT_ID';
const GOOGLE_API_KEY   = 'COLE_AQUI_A_API_KEY';
```

Troque pelos seus:

```js
const GOOGLE_CLIENT_ID = '12345-abcde.apps.googleusercontent.com';
const GOOGLE_API_KEY   = 'AIzaSyXXXXXXXXXXXXXXXXXXXX';
```

Salve, suba o `index.html` no GitHub de novo, e pronto.

---

## Como usar
No app, toque no botão branco do **Drive** (acima do +):
1. Faz login na conta Google (na 1ª vez aparece um aviso "app não verificado" —
   é normal por estar em modo teste: clique em **Avançado → Acessar Minha Estante**)
2. Abre a janelinha do Drive → escolha um ou vários livros
3. Eles baixam pra estante, com capa e tudo

## Dúvidas comuns
- **"Erro 400: redirect_uri_mismatch" ou não abre**: a origem no passo 4 está
  diferente. Tem que ser `https://washingtonaaraujo-dotcom.github.io` sem barra.
- **"app não verificado"**: normal em modo teste. É seguro, é o seu próprio app.
  Só funciona pros e-mails que você pôs em "Usuários de teste".
- **Os livros continuam no aparelho** depois de importados — o Drive é só a origem.
