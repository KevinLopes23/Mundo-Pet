# 🐾 Preparação para GitHub - Script PowerShell
# Execute este script no PowerShell antes de publicar

Write-Host "🐾 Preparando Mundo Pet para GitHub..." -ForegroundColor Cyan
Write-Host ""

# 1. Verificar se estamos em um repositório Git
Write-Host "📁 Verificando repositório Git..." -ForegroundColor Blue
if (-not (Test-Path .git)) {
    Write-Host "⚠️  Não é um repositório Git. Inicializando..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Repositório Git inicializado" -ForegroundColor Green
} else {
    Write-Host "✓ Repositório Git encontrado" -ForegroundColor Green
}
Write-Host ""

# 2. Verificar arquivos importantes
Write-Host "📋 Verificando arquivos essenciais..." -ForegroundColor Blue

$requiredFiles = @(
    "index.html",
    "README.md",
    "LICENSE",
    ".gitignore",
    "CONTRIBUTING.md",
    "CHANGELOG.md",
    "SECURITY.md",
    "DEPLOY.md"
)

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✓ $file" -ForegroundColor Green
    } else {
        Write-Host "⚠️  $file não encontrado" -ForegroundColor Yellow
    }
}
Write-Host ""

# 3. Verificar estrutura de pastas
Write-Host "📂 Verificando estrutura de pastas..." -ForegroundColor Blue

$requiredDirs = @(
    "styles",
    "scripts",
    "assets",
    "assets\screenshots"
)

foreach ($dir in $requiredDirs) {
    if (Test-Path $dir) {
        Write-Host "✓ $dir\" -ForegroundColor Green
    } else {
        Write-Host "⚠️  $dir\ não encontrado" -ForegroundColor Yellow
    }
}
Write-Host ""

# 4. Verificar se há mudanças não comitadas
Write-Host "🔍 Verificando status do Git..." -ForegroundColor Blue
$gitStatus = git status --short
if ($gitStatus) {
    Write-Host "⚠️  Há mudanças não comitadas:" -ForegroundColor Yellow
    git status --short
} else {
    Write-Host "✓ Não há mudanças pendentes" -ForegroundColor Green
}
Write-Host ""

# 5. Estatísticas do projeto
Write-Host "📊 Estatísticas do projeto:" -ForegroundColor Blue
Write-Host ""

$htmlFiles = (Get-ChildItem -Recurse -Filter *.html | Measure-Object).Count
$cssFiles = (Get-ChildItem -Recurse -Filter *.css | Measure-Object).Count
$jsFiles = (Get-ChildItem -Recurse -Filter *.js | Measure-Object).Count
$mdFiles = (Get-ChildItem -Filter *.md | Measure-Object).Count

Write-Host "  HTML files: $htmlFiles" -ForegroundColor Cyan
Write-Host "  CSS files: $cssFiles" -ForegroundColor Cyan
Write-Host "  JavaScript files: $jsFiles" -ForegroundColor Cyan
Write-Host "  Markdown docs: $mdFiles" -ForegroundColor Cyan
Write-Host ""

# 6. Checklist interativo
Write-Host "✅ Checklist pré-publicação:" -ForegroundColor Blue
Write-Host ""
Write-Host "Antes de publicar no GitHub, você verificou:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  [ ] README.md está atualizado com suas informações?"
Write-Host "  [ ] Screenshots foram adicionadas em assets/screenshots/?"
Write-Host "  [ ] Substituiu 'seu-usuario' pelos seus dados no README?"
Write-Host "  [ ] Substituiu email de exemplo no SECURITY.md?"
Write-Host "  [ ] Links estão corretos?"
Write-Host "  [ ] Código foi testado em index.html?"
Write-Host "  [ ] Testou em diferentes navegadores?"
Write-Host "  [ ] .gitignore está configurado?"
Write-Host "  [ ] LICENSE está presente?"
Write-Host "  [ ] Removeu dados sensíveis/pessoais?"
Write-Host ""

# 7. Sugestões de comandos
Write-Host "📝 Próximos passos sugeridos:" -ForegroundColor Blue
Write-Host ""
Write-Host "1. Adicionar mudanças:" -ForegroundColor Cyan
Write-Host "   git add ." -ForegroundColor Green
Write-Host ""
Write-Host "2. Fazer commit:" -ForegroundColor Cyan
Write-Host '   git commit -m "feat: projeto completo pronto para GitHub"' -ForegroundColor Green
Write-Host ""
Write-Host "3. Adicionar repositório remoto (se ainda não adicionou):" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/SEU-USUARIO/Mundo-Pet.git" -ForegroundColor Green
Write-Host ""
Write-Host "4. Verificar branch e fazer push:" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Green
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "5. Configurar GitHub Pages:" -ForegroundColor Cyan
Write-Host "   - Acesse https://github.com/SEU-USUARIO/Mundo-Pet/settings/pages"
Write-Host "   - Source: main branch, / (root)"
Write-Host "   - Save"
Write-Host ""
Write-Host "6. Após o deploy, sua aplicação estará em:" -ForegroundColor Cyan
Write-Host "   https://SEU-USUARIO.github.io/Mundo-Pet/" -ForegroundColor Green
Write-Host ""

# 8. Avisos importantes
Write-Host "⚠️  IMPORTANTE:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  • Substitua 'SEU-USUARIO' pelo seu username do GitHub" -ForegroundColor Yellow
Write-Host "  • Substitua 'seu-email@exemplo.com' pelo seu email" -ForegroundColor Yellow
Write-Host "  • Revise o README.md antes de publicar" -ForegroundColor Yellow
Write-Host "  • Certifique-se que não há dados sensíveis no código" -ForegroundColor Yellow
Write-Host ""

Write-Host "🎉 Boa sorte com sua publicação no GitHub!" -ForegroundColor Green
Write-Host ""

# Perguntar se deseja continuar com os comandos
$response = Read-Host "Deseja adicionar e commitar os arquivos agora? (S/N)"
if ($response -eq 'S' -or $response -eq 's') {
    Write-Host ""
    Write-Host "Executando git add..." -ForegroundColor Cyan
    git add .
    
    Write-Host "Arquivos adicionados. Execute o commit manualmente com:" -ForegroundColor Green
    Write-Host 'git commit -m "feat: projeto completo pronto para GitHub"' -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host "Ok! Execute os comandos manualmente quando estiver pronto." -ForegroundColor Cyan
}
