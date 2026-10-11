# Assinatura de e-mail NoJurídico — C · Digital Signature

## Conteúdo
- `gerador.html` — gerador: preencha os dados, veja a prévia em fundo branco e preto e copie a assinatura ou baixe o .htm.
- `assinatura-claro.html` — assinatura do Gustavo, versão clara (troca sozinha para escura no Apple Mail e no Outlook.com).
- `assinatura-escuro.html` — versão escura fixa.
- `assinatura.js` — o modelo usado pelo gerador (uma única fonte para todas as assinaturas).
- `img/` — PNG transparentes (3× retina): `logo-claro` (logotipo azul oficial), `logo-escuro` (logotipo branco oficial), `rubrica-claro/escuro`, `icon-site|linkedin|instagram-claro/escuro`.

## 1. Publicar as imagens (uma vez)
Suba a pasta `img/` para um endereço HTTPS público, por exemplo `https://www.nojuridico.com.br/assinatura/img/`. Sem isso as imagens não aparecem para quem recebe o e-mail.

## 2. Gerar a assinatura
1. Abra `gerador.html` no navegador (Chrome ou Edge).
2. Preencha nome, cargo, telefone, e-mail e links. Campos vazios somem da assinatura (ex.: sem Instagram = sem ícone).
3. Em **Endereço da pasta de imagens**, informe a URL HTTPS do passo 1.
4. Escolha **Clara (automática)** — recomendado — ou **Escura fixa**.
5. Clique em **Copiar assinatura** (para colar no Outlook) ou **Baixar .htm**.

## 3. Instalar no Outlook
**Outlook para Windows (clássico):** Arquivo › Opções › Email › Assinaturas › Novo › cole (Ctrl+V) › Salvar › defina como padrão para novas mensagens e respostas.
Alternativa: salve o `.htm` baixado em `%APPDATA%\Microsoft\Signatures` e reabra o Outlook.

**Novo Outlook / Outlook na Web:** Configurações › Contas › Assinaturas › + Nova assinatura › cole › Salvar › escolha como padrão.

**Outlook para Mac:** Outlook › Configurações › Assinaturas › + › cole › salve e defina como padrão.

**Gmail:** Configurações › Ver todas › Geral › Assinatura › Criar › cole › Salvar alterações (no fim da página).

**Apple Mail:** Ajustes › Assinaturas › + › desmarque "Sempre usar a fonte padrão" › cole.

## 4. Testar
Envie um e-mail para você mesmo e confira em modo claro e escuro: imagens carregando, links clicáveis (site, e-mail, telefone, LinkedIn, Instagram).

## Especificações
- Fonte: Inter quando instalada; senão Segoe UI / Helvetica / Arial.
- Cores (design system): texto #111111 / #52525C / #71717D, acento #10069F, divisória #DFDFE5. Escuro: #F5F5F7 / #C6C6CE / #9B9BA6, acento #C0BBEF, divisória #3A3A42.
- Layout: tabelas e CSS inline, largura ≈ 430px. Logo 144×28, rubrica 200×47, ícones 16×16.
- Gmail e Outlook para Windows não trocam sozinhos para o escuro; para quem usa modo escuro neles, gere a versão **Escura fixa**.
