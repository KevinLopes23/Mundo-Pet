# Deploy no GitHub Pages

Este guia mostra como fazer o deploy do Mundo Pet no GitHub Pages.

## 🚀 Opção 1: Configuração Automática

### 1. Faça Push do Código

```bash
git add .
git commit -m "feat: projeto completo para GitHub Pages"
git push origin main
```

### 2. Configure no GitHub

1. Acesse seu repositório no GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**

### 3. Aguarde o Deploy

- GitHub Actions irá processar automaticamente
- Em alguns minutos, seu site estará em:
  ```
  https://seu-usuario.github.io/Mundo-Pet/
  ```

## 🔧 Opção 2: GitHub Actions (Avançado)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 📝 Checklist Pré-Deploy

Antes de fazer deploy, verifique:

- [ ] Todos os arquivos commitados
- [ ] README.md atualizado com seu usuário
- [ ] Screenshots incluídas
- [ ] Licença configurada
- [ ] .gitignore configurado
- [ ] Links funcionando

## 🔗 Atualizando Links

Depois do deploy, atualize estes links no README.md:

```markdown
# Substitua "seu-usuario" pelo seu username do GitHub

[Demo](https://seu-usuario.github.io/Mundo-Pet/)

![Screenshot](https://raw.githubusercontent.com/seu-usuario/Mundo-Pet/main/assets/screenshots/screenshot-desktop.png)
```

## ✅ Verificação Pós-Deploy

1. Acesse a URL do GitHub Pages
2. Teste todas as funcionalidades:

   - [ ] Abrir modal
   - [ ] Criar agendamento
   - [ ] Remover agendamento
   - [ ] Trocar data
   - [ ] Validações funcionando

3. Teste em diferentes navegadores:

   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge

4. Teste responsividade:
   - [ ] Desktop (1920x1080)
   - [ ] Tablet (768x1024)
   - [ ] Mobile (375x667)

## 🐛 Problemas Comuns

### Página 404

**Problema**: Site mostra "404 Page Not Found"

**Solução**:

1. Verifique se o branch está correto (main)
2. Certifique-se que `index.html` está na raiz
3. Aguarde alguns minutos após configurar

### CSS/JS não carrega

**Problema**: Página sem estilo ou funcionalidades

**Solução**:

1. Use caminhos relativos (sem `/` no início)

   ```html
   <!-- ✅ Correto -->
   <link rel="stylesheet" href="styles/global.css" />

   <!-- ❌ Errado -->
   <link rel="stylesheet" href="/styles/global.css" />
   ```

### localStorage não funciona

**Problema**: Dados não são salvos

**Solução**:

- localStorage funciona normalmente no GitHub Pages
- Verifique o console do navegador (F12)
- Certifique-se que não está em modo anônimo

## 🔄 Atualizações

Para atualizar o site:

```bash
# Faça suas alterações
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# GitHub Pages atualiza automaticamente
```

## 📊 Monitoramento

### GitHub Insights

Acesse **Insights** → **Traffic** para ver:

- Número de visitantes
- Páginas mais acessadas
- Referências

### Google Analytics (Opcional)

1. Crie uma conta no [Google Analytics](https://analytics.google.com/)
2. Obtenha seu ID de rastreamento
3. Adicione no `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

## 🎯 Otimizações

### Performance

1. **Minificar arquivos**:

   ```bash
   # Instale ferramentas de minificação
   npm install -g minify

   # Minifique CSS
   minify styles/index.css > styles/index.min.css

   # Minifique JS
   minify scripts/app.js > scripts/app.min.js
   ```

2. **Comprimir imagens**:
   - Use [TinyPNG](https://tinypng.com/)
   - Ou [Squoosh](https://squoosh.app/)

### SEO

Adicione no `index.html`:

```html
<head>
  <!-- SEO -->
  <meta
    name="description"
    content="Sistema de agendamento para petshop - moderno, intuitivo e gratuito"
  />
  <meta name="keywords" content="petshop, agendamento, pets, veterinário" />
  <meta name="author" content="Seu Nome" />

  <!-- Open Graph -->
  <meta property="og:title" content="Mundo Pet - Sistema de Agendamento" />
  <meta
    property="og:description"
    content="Sistema moderno para gerenciar agendamentos de petshop"
  />
  <meta
    property="og:image"
    content="https://seu-usuario.github.io/Mundo-Pet/assets/screenshots/screenshot-desktop.png"
  />
  <meta property="og:url" content="https://seu-usuario.github.io/Mundo-Pet/" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

## 📱 PWA (Progressive Web App)

Para tornar o app instalável:

1. Crie `manifest.json`
2. Adicione service worker
3. Configure ícones
4. Veja guia completo em [web.dev/pwa](https://web.dev/progressive-web-apps/)

## 🎓 Recursos

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Boa sorte com seu deploy! 🚀**
