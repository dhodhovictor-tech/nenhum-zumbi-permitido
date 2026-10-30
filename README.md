# Cidade Barricada

Os zumbis tomaram o mundo, mas a sua rua resiste. Defenda o portão, salve sobreviventes e transforme o refúgio numa cidade.

O jogo é um app web instalável (PWA): abre em tela cheia, tem ícone próprio na tela inicial e funciona sem internet depois da primeira abertura. O progresso fica salvo no próprio celular.

## Arquivos

- `index.html` — o jogo inteiro (HTML, CSS e JavaScript num arquivo só)
- `manifest.webmanifest` — nome, ícone e modo tela cheia do app
- `sw.js` — guarda o jogo no aparelho para funcionar offline. **Ao publicar uma versão nova, aumente `VERSION`** para os celulares baixarem a atualização.
- `icons/` — ícones do app

## Publicar (GitHub Pages)

1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em *Build and deployment*, escolha **Deploy from a branch**, selecione a branch e a pasta `/ (root)` e salve.
3. Depois de 1–2 minutos o jogo fica em `https://<seu-usuário>.github.io/nenhum-zumbi-permitido/`.

## Instalar no celular

- **Android (Chrome):** abra o link → menu ⋮ → **Instalar app** (ou "Adicionar à tela inicial").
- **iPhone (Safari):** abra o link → botão Compartilhar → **Adicionar à Tela de Início**.
