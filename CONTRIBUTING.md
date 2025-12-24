# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o Mundo Pet! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU-USUARIO/Mundo-Pet.git
cd Mundo-Pet
```

### 2. Crie uma Branch

```bash
# Crie uma branch para sua feature/correção
git checkout -b feature/minha-feature
# ou
git checkout -b fix/minha-correcao
```

### 3. Faça suas Alterações

- Escreva código limpo e bem documentado
- Siga o padrão de código existente
- Adicione comentários quando necessário
- Teste suas alterações

### 4. Commit

```bash
# Adicione os arquivos modificados
git add .

# Faça commit com mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade X"
```

#### Padrão de Mensagens de Commit

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes
- `chore:` Manutenção, configurações, etc

**Exemplos:**

```
feat: adiciona validação de email
fix: corrige bug no modal de agendamento
docs: atualiza README com instruções de instalação
style: formata código seguindo padrão do projeto
refactor: reorganiza estrutura de classes
```

### 5. Push e Pull Request

```bash
# Envie para seu fork
git push origin feature/minha-feature

# Abra um Pull Request no GitHub
```

## 🎯 Áreas para Contribuição

### 🐛 Bugs e Correções

- Relatar bugs através das Issues
- Corrigir bugs existentes
- Melhorar tratamento de erros

### ✨ Novas Funcionalidades

- Exportação de agendamentos (PDF, CSV)
- Notificações de agendamentos
- Sistema de autenticação
- Dashboard com estatísticas
- API backend real

### 📚 Documentação

- Melhorar README
- Adicionar exemplos de uso
- Traduzir documentação
- Criar tutoriais em vídeo

### 🎨 Design e UX

- Melhorias visuais
- Responsividade
- Acessibilidade (a11y)
- Temas alternativos

### 🧪 Testes

- Testes unitários
- Testes de integração
- Testes E2E
- Melhorar cobertura

## 📏 Padrões de Código

### JavaScript

```javascript
// Use const/let, não var
const scheduleManager = new ScheduleManager();

// Arrow functions quando apropriado
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("pt-BR");
};

// Nomes descritivos
const hasConflictingSchedule = (time) => {
  /* ... */
};

// Comentários quando necessário
/**
 * Valida se o horário está dentro das janelas permitidas
 * @param {string} time - Horário no formato HH:mm
 * @returns {boolean} - True se válido
 */
```

### CSS

```css
/* Use variáveis CSS */
:root {
  --primary-color: #9282fa;
  --background: #151515;
}

/* Classes descritivas */
.schedule-item {
}
.period-section {
}
.modal-overlay {
}

/* Organize por componentes */
/* === Modal === */
/* === Schedule Item === */
/* === Form === */
```

### HTML

```html
<!-- Use estrutura semântica -->
<header>
  <main>
    <section>
      <article>
        <!-- IDs únicos e descritivos -->
        <button id="newScheduleBtn">
          <!-- Classes reutilizáveis -->
          <div class="form-group"></div>
        </button>
      </article>
    </section>
  </main>
</header>
```

## ✅ Checklist de Pull Request

Antes de enviar seu PR, verifique:

- [ ] Código está funcionando sem erros
- [ ] Testei em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Testei em diferentes tamanhos de tela
- [ ] Código está bem documentado
- [ ] Segui o padrão de código do projeto
- [ ] Atualizei a documentação se necessário
- [ ] Mensagens de commit seguem o padrão
- [ ] Não há conflitos com a branch main

## 🚫 O que Evitar

- ❌ Commits diretos na branch main
- ❌ PRs muito grandes (prefira PRs menores e focados)
- ❌ Código não testado
- ❌ Mensagens de commit vagas ("fix", "update", etc)
- ❌ Remover funcionalidades sem discussão
- ❌ Adicionar dependências desnecessárias

## 💡 Dúvidas?

- Abra uma Issue para discussão
- Entre em contato através das Issues
- Leia a documentação completa em `/docs`

## 📜 Código de Conduta

Este projeto segue um código de conduta. Ao contribuir, você concorda em respeitar todos os participantes.

### Comportamento Esperado

- ✅ Seja respeitoso e profissional
- ✅ Aceite críticas construtivas
- ✅ Foque no que é melhor para a comunidade
- ✅ Demonstre empatia

### Comportamento Inaceitável

- ❌ Linguagem ofensiva ou discriminatória
- ❌ Assédio de qualquer tipo
- ❌ Ataques pessoais
- ❌ Spam ou autopromoção

## 🎉 Agradecimentos

Todos os contribuidores serão creditados no README!

---

**Obrigado por contribuir com o Mundo Pet! 🐾**
