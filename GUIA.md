# 🚀 Guia Rápido - Mundo Pet

## Primeiros Passos

### 1. Abrir o Sistema

Simplesmente abra o arquivo `index.html` no seu navegador preferido.

### 2. Carregar Dados de Exemplo (Opcional)

Para testar o sistema com dados pré-cadastrados:

1. Abra o Console do navegador (F12 → Console)
2. Cole o conteúdo do arquivo `scripts/sample-data.js`
3. Pressione Enter
4. A página será recarregada com os dados de exemplo

## Como Usar

### ➕ Criar Novo Agendamento

1. Clique no botão **"NOVO AGENDAMENTO"** (canto inferior direito)
2. Preencha todos os campos:
   - **Nome do tutor**: Ex: "Helena Souza"
   - **Nome do pet**: Ex: "Cheddar"
   - **Telefone**: Ex: "(11) 98765-4321"
   - **Descrição do serviço**: Ex: "Banho e tosa"
   - **Data**: Selecione no calendário
   - **Hora**: Selecione o horário (respeitando as janelas permitidas)
3. Clique em **"AGENDAR"**

✅ **Sucesso**: Uma mensagem verde aparecerá e o agendamento será adicionado à lista

❌ **Erro**: Se houver algum problema, uma mensagem vermelha explicará o erro

### 🗑️ Remover Agendamento

1. Localize o agendamento na lista
2. Clique em **"Remover agendamento"**
3. Confirme a ação
4. O agendamento será removido imediatamente

### 📅 Visualizar Agendamentos

- **Por período**: Os agendamentos são automaticamente organizados em:

  - 🌅 **Manhã**: 09h-12h
  - ☀️ **Tarde**: 13h-18h
  - 🌙 **Noite**: 19h-21h

- **Por data**: A data atual é mostrada no topo. Os agendamentos são filtrados pela data selecionada.

## ⚠️ Regras Importantes

### Validações

✅ Todos os campos são obrigatórios  
✅ Horário deve estar dentro das janelas permitidas  
✅ Não pode haver dois agendamentos no mesmo horário  
✅ Campos não podem estar vazios

### Horários Permitidos

| Período | Horário Início | Horário Fim |
| ------- | -------------- | ----------- |
| Manhã   | 09:00          | 11:59       |
| Tarde   | 13:00          | 17:59       |
| Noite   | 19:00          | 20:59       |

❌ **Bloqueados**: 00:00-08:59, 12:00-12:59, 18:00-18:59, 21:00-23:59

## 🎯 Dicas de Uso

### Atalhos do Teclado

- **ESC**: Fecha o modal de agendamento
- **Tab**: Navega entre os campos do formulário

### Boas Práticas

1. **Sempre confira o horário**: Certifique-se de que está na janela correta
2. **Telefone completo**: Inclua DDD e número completo
3. **Descrição clara**: Especifique bem o serviço (ex: "Banho e tosa completo" ao invés de apenas "Banho")
4. **Confirme antes de remover**: A remoção é irreversível!

## 🐛 Solução de Problemas

### "Já existe um agendamento neste horário"

**Problema**: Você está tentando agendar em um horário já ocupado  
**Solução**: Escolha outro horário ou remova o agendamento existente

### "Horário fora das janelas permitidas"

**Problema**: O horário escolhido não está em Manhã, Tarde ou Noite  
**Solução**: Selecione um horário válido (09h-12h, 13h-18h ou 19h-21h)

### Modal não abre

**Problema**: Erro no JavaScript  
**Solução**:

1. Abra o Console (F12)
2. Verifique se há erros em vermelho
3. Recarregue a página (Ctrl+R ou F5)

### Dados não aparecem após recarregar

**Problema**: localStorage pode estar limpo  
**Solução**: Recarregue os dados de exemplo pelo Console

## 💡 Recursos Adicionais

### Limpar Todos os Dados

Para começar do zero:

```javascript
localStorage.removeItem("petshop_schedules");
location.reload();
```

### Ver Dados Salvos

Para inspecionar os dados armazenados:

```javascript
console.log(JSON.parse(localStorage.getItem("petshop_schedules")));
```

### Exportar Dados

Para fazer backup dos dados:

```javascript
const data = localStorage.getItem("petshop_schedules");
console.log("Copie e salve:", data);
```

## 📞 Suporte

Em caso de dúvidas ou problemas, consulte o arquivo `README.md` para informações técnicas detalhadas.

---

**Bom uso! 🐾**
