# Security Policy

## 🔒 Política de Segurança

### Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.0.x  | :white_check_mark: |

### 🐛 Reportando Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança no Mundo Pet, pedimos que **NÃO** abra uma issue pública.

#### Como Reportar

1. **Email**: Envie um email para [security@exemplo.com](mailto:security@exemplo.com)
2. **Assunto**: "Security Vulnerability in Mundo Pet"
3. **Informações a incluir**:
   - Descrição detalhada da vulnerabilidade
   - Passos para reproduzir o problema
   - Possível impacto
   - Sugestões de correção (se houver)

#### O que esperar

- **Confirmação**: Resposta em até 48 horas
- **Análise**: Investigação em até 7 dias
- **Correção**: Patch em até 30 dias (dependendo da gravidade)
- **Crédito**: Você será creditado na correção (se desejar)

### 🛡️ Considerações de Segurança

#### Armazenamento Local

Este projeto utiliza **localStorage** do navegador para persistência de dados:

- ⚠️ **Dados não são criptografados** no localStorage
- ⚠️ **Não armazene informações sensíveis** (senhas, dados de pagamento)
- ⚠️ **Dados ficam no dispositivo do usuário**
- ✅ **Adequado para**: preferências, dados de demonstração, cache

#### Validação Client-Side

As validações são feitas no navegador (client-side):

- ⚠️ **Não deve ser a única camada de segurança** em produção
- ⚠️ **Implemente validações server-side** ao adicionar backend
- ✅ **Adequado para**: melhoria de UX, feedback rápido

#### Recomendações para Produção

Se você planeja usar este projeto em produção:

1. **Backend Seguro**:

   - Implemente validações server-side
   - Use HTTPS
   - Implemente rate limiting
   - Sanitize inputs

2. **Autenticação**:

   - Use JWT ou sessions
   - Implemente 2FA
   - Hash de senhas (bcrypt, argon2)

3. **Dados Sensíveis**:

   - Use banco de dados com criptografia
   - Nunca exponha dados sensíveis no client
   - Implemente controle de acesso

4. **CORS**:

   - Configure políticas CORS apropriadas
   - Whitelist de domínios permitidos

5. **Headers de Segurança**:
   ```
   Content-Security-Policy
   X-Frame-Options
   X-Content-Type-Options
   Strict-Transport-Security
   ```

### 📋 Checklist de Segurança

Para uso em produção, verifique:

- [ ] Backend com validações server-side
- [ ] HTTPS habilitado
- [ ] Autenticação implementada
- [ ] Dados sensíveis criptografados
- [ ] Rate limiting configurado
- [ ] CORS configurado corretamente
- [ ] Headers de segurança implementados
- [ ] Inputs sanitizados
- [ ] SQL injection prevenido (se usar SQL)
- [ ] XSS prevenido
- [ ] CSRF tokens implementados
- [ ] Logs de auditoria
- [ ] Backup regular de dados
- [ ] Testes de penetração realizados

### 🔍 Auditorias de Segurança

- **Última auditoria**: N/A
- **Próxima auditoria**: TBD

### 📚 Recursos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [CSP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

### ⚖️ Responsabilidade

Este projeto é fornecido "como está", sem garantias. O uso em produção é de responsabilidade do implementador.

---

**Obrigado por ajudar a manter o Mundo Pet seguro!** 🔒
