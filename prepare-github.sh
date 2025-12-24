#!/bin/bash

# Script de preparação para publicação no GitHub
# Execute este script antes de fazer push

echo "🐾 Preparando Mundo Pet para GitHub..."
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar se estamos em um repositório Git
echo -e "${BLUE}📁 Verificando repositório Git...${NC}"
if [ ! -d .git ]; then
    echo -e "${YELLOW}⚠️  Não é um repositório Git. Inicializando...${NC}"
    git init
    echo -e "${GREEN}✓ Repositório Git inicializado${NC}"
else
    echo -e "${GREEN}✓ Repositório Git encontrado${NC}"
fi
echo ""

# 2. Verificar arquivos importantes
echo -e "${BLUE}📋 Verificando arquivos essenciais...${NC}"

required_files=(
    "index.html"
    "README.md"
    "LICENSE"
    ".gitignore"
    "CONTRIBUTING.md"
    "CHANGELOG.md"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ $file${NC}"
    else
        echo -e "${YELLOW}⚠️  $file não encontrado${NC}"
    fi
done
echo ""

# 3. Verificar estrutura de pastas
echo -e "${BLUE}📂 Verificando estrutura de pastas...${NC}"

required_dirs=(
    "styles"
    "scripts"
    "assets"
)

for dir in "${required_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✓ $dir/${NC}"
    else
        echo -e "${YELLOW}⚠️  $dir/ não encontrado${NC}"
    fi
done
echo ""

# 4. Verificar se há mudanças não comitadas
echo -e "${BLUE}🔍 Verificando mudanças não comitadas...${NC}"
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  Há mudanças não comitadas${NC}"
    git status -s
else
    echo -e "${GREEN}✓ Não há mudanças pendentes${NC}"
fi
echo ""

# 5. Checklist interativo
echo -e "${BLUE}✅ Checklist pré-publicação:${NC}"
echo ""
echo "Antes de publicar no GitHub, você verificou:"
echo ""
echo "  [ ] README.md está atualizado?"
echo "  [ ] Screenshots foram adicionadas?"
echo "  [ ] Informações pessoais foram removidas?"
echo "  [ ] Links estão corretos?"
echo "  [ ] Código foi testado?"
echo "  [ ] .gitignore está configurado?"
echo "  [ ] LICENSE está presente?"
echo ""

# 6. Sugestões de comandos
echo -e "${BLUE}📝 Próximos passos sugeridos:${NC}"
echo ""
echo "1. Adicionar mudanças:"
echo "   ${GREEN}git add .${NC}"
echo ""
echo "2. Fazer commit:"
echo "   ${GREEN}git commit -m \"feat: projeto completo pronto para GitHub\"${NC}"
echo ""
echo "3. Adicionar repositório remoto (se ainda não adicionou):"
echo "   ${GREEN}git remote add origin https://github.com/SEU-USUARIO/Mundo-Pet.git${NC}"
echo ""
echo "4. Fazer push:"
echo "   ${GREEN}git branch -M main${NC}"
echo "   ${GREEN}git push -u origin main${NC}"
echo ""
echo "5. Configurar GitHub Pages:"
echo "   - Acesse Settings → Pages"
echo "   - Source: main branch"
echo "   - Save"
echo ""
echo -e "${GREEN}🎉 Boa sorte com sua publicação!${NC}"
echo ""
