# 🚀 Quick Start - Publicar no GitHub

## Opção Rápida (5 minutos)

### 1. Prepare os arquivos

Execute o script de preparação:

**Windows (PowerShell):**

```powershell
.\prepare-github.ps1
```

**Mac/Linux:**

```bash
chmod +x prepare-github.sh
./prepare-github.sh
```

### 2. Atualize informações pessoais

Substitua nos arquivos:

- `README.md`: Troque `seu-usuario` pelo seu username do GitHub
- `SECURITY.md`: Troque `security@exemplo.com` pelo seu email
- `CONTRIBUTING.md`: Adicione suas informações de contato

### 3. Faça commit e push

```bash
# Adicionar arquivos
git add .

# Commit
git commit -m "feat: projeto completo pronto para GitHub"

# Push (se já tem repositório remoto)
git push origin main

# OU criar novo repositório
# 1. Crie em https://github.com/new
# 2. Execute:
git remote add origin https://github.com/SEU-USUARIO/Mundo-Pet.git
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Pages

1. Acesse: `https://github.com/SEU-USUARIO/Mundo-Pet/settings/pages`
2. **Source**: `main` branch, `/ (root)` folder
3. Clique em **Save**
4. Aguarde 2-5 minutos
5. Acesse: `https://SEU-USUARIO.github.io/Mundo-Pet/`

## ✅ Checklist Final

- [ ] Substituí `seu-usuario` no README.md
- [ ] Substituí email no SECURITY.md
- [ ] Screenshots estão em `assets/screenshots/`
- [ ] Testei o `index.html` localmente
- [ ] Fiz commit e push
- [ ] Configurei GitHub Pages
- [ ] Testei o site publicado

## 🎯 Resultado

Seu site estará disponível em:

```
https://SEU-USUARIO.github.io/Mundo-Pet/
```

## 📚 Documentação Completa

Para instruções detalhadas, veja:

- [DEPLOY.md](DEPLOY.md) - Guia completo de deploy
- [CONTRIBUTING.md](CONTRIBUTING.md) - Como contribuir
- [INDEX.md](INDEX.md) - Índice de todos os arquivos

## ❓ Dúvidas?

- Leia o [README.md](README.md)
- Veja o [GUIA.md](GUIA.md)
- Consulte o [DEPLOY.md](DEPLOY.md)

---

**Boa sorte! 🐾**
