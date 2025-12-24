# 📚 Documentação da API - Mundo Pet

## Visão Geral

O sistema Mundo Pet utiliza JavaScript puro (Vanilla JS) com duas classes principais para gerenciar agendamentos.

## Classes

### 1. ScheduleManager

Classe responsável pela lógica de negócio e persistência de dados.

#### Construtor

```javascript
const manager = new ScheduleManager();
```

Inicializa o gerenciador carregando dados do localStorage.

---

#### Métodos Públicos

##### `addSchedule(scheduleData)`

Adiciona um novo agendamento ao sistema.

**Parâmetros:**

```javascript
{
  ownerName: string,    // Nome do tutor (obrigatório)
  petName: string,      // Nome do pet (obrigatório)
  phone: string,        // Telefone (obrigatório)
  service: string,      // Descrição do serviço (obrigatório)
  date: string,         // Data no formato DD/MM/YYYY (obrigatório)
  time: string          // Hora no formato HH:MM (obrigatório)
}
```

**Retorno:**

```javascript
{
  id: number,           // ID único do agendamento
  ownerName: string,
  petName: string,
  phone: string,
  service: string,
  date: string,
  time: string,
  period: string        // 'MORNING', 'AFTERNOON' ou 'NIGHT'
}
```

**Exceções:**

- `Error`: "Todos os campos são obrigatórios!"
- `Error`: "Horário fora das janelas permitidas!"
- `Error`: "Já existe um agendamento neste horário!"

**Exemplo:**

```javascript
try {
  const newSchedule = manager.addSchedule({
    ownerName: "Helena Souza",
    petName: "Cheddar",
    phone: "(11) 98765-4321",
    service: "Banho e tosa",
    date: "10/01/2024",
    time: "14:00",
  });
  console.log("Agendamento criado:", newSchedule);
} catch (error) {
  console.error("Erro:", error.message);
}
```

---

##### `removeSchedule(date, scheduleId)`

Remove um agendamento específico.

**Parâmetros:**

- `date` (string): Data no formato DD/MM/YYYY
- `scheduleId` (number): ID do agendamento

**Retorno:**

- `boolean`: `true` se removido com sucesso, `false` se não encontrado

**Exemplo:**

```javascript
const removed = manager.removeSchedule("10/01/2024", 1640000000001);
if (removed) {
  console.log("Agendamento removido!");
} else {
  console.log("Agendamento não encontrado");
}
```

---

##### `getSchedulesByDate(date)`

Retorna todos os agendamentos de uma data específica.

**Parâmetros:**

- `date` (string): Data no formato DD/MM/YYYY

**Retorno:**

- `Array`: Lista de agendamentos ordenados por horário

**Exemplo:**

```javascript
const schedules = manager.getSchedulesByDate("10/01/2024");
console.log(`Total de agendamentos: ${schedules.length}`);
```

---

##### `getSchedulesGroupedByPeriod(date)`

Retorna agendamentos agrupados por período do dia.

**Parâmetros:**

- `date` (string): Data no formato DD/MM/YYYY

**Retorno:**

```javascript
{
  MORNING: [],      // Agendamentos da manhã
  AFTERNOON: [],    // Agendamentos da tarde
  NIGHT: []         // Agendamentos da noite
}
```

**Exemplo:**

```javascript
const grouped = manager.getSchedulesGroupedByPeriod("10/01/2024");
console.log("Manhã:", grouped.MORNING.length);
console.log("Tarde:", grouped.AFTERNOON.length);
console.log("Noite:", grouped.NIGHT.length);
```

---

##### `validateTime(time)`

Valida se um horário está dentro das janelas permitidas.

**Parâmetros:**

- `time` (string): Horário no formato HH:MM

**Retorno:**

- `boolean`: `true` se válido, `false` se inválido

**Exemplo:**

```javascript
console.log(manager.validateTime("09:00")); // true - Manhã
console.log(manager.validateTime("14:00")); // true - Tarde
console.log(manager.validateTime("20:00")); // true - Noite
console.log(manager.validateTime("12:00")); // false - Fora da janela
```

---

##### `hasConflict(date, time)`

Verifica se já existe um agendamento em um horário específico.

**Parâmetros:**

- `date` (string): Data no formato DD/MM/YYYY
- `time` (string): Horário no formato HH:MM

**Retorno:**

- `boolean`: `true` se há conflito, `false` se está livre

**Exemplo:**

```javascript
if (manager.hasConflict("10/01/2024", "14:00")) {
  console.log("Horário já ocupado!");
} else {
  console.log("Horário disponível");
}
```

---

##### `setCurrentDate(date)`

Define a data atual sendo visualizada.

**Parâmetros:**

- `date` (string): Data no formato DD/MM/YYYY

**Exemplo:**

```javascript
manager.setCurrentDate("11/01/2024");
```

---

##### `getTodayString()`

Retorna a data de hoje no formato DD/MM/YYYY.

**Retorno:**

- `string`: Data atual

**Exemplo:**

```javascript
const today = manager.getTodayString();
console.log("Hoje:", today);
```

---

### 2. ScheduleUI

Classe responsável pela interface do usuário e interações.

#### Construtor

```javascript
const ui = new ScheduleUI(manager);
```

**Parâmetros:**

- `manager` (ScheduleManager): Instância do gerenciador

---

#### Métodos Públicos

##### `renderSchedules()`

Renderiza a lista completa de agendamentos na interface.

**Exemplo:**

```javascript
ui.renderSchedules();
```

---

##### `openModal()`

Abre o modal de novo agendamento.

**Exemplo:**

```javascript
ui.openModal();
```

---

##### `closeModal()`

Fecha o modal e limpa o formulário.

**Exemplo:**

```javascript
ui.closeModal();
```

---

## Estrutura de Dados

### Agendamento (Schedule Object)

```typescript
interface Schedule {
  id: number; // Timestamp único
  ownerName: string; // Nome do tutor
  petName: string; // Nome do pet
  phone: string; // Telefone
  service: string; // Descrição do serviço
  date: string; // Data (DD/MM/YYYY)
  time: string; // Hora (HH:MM)
  period: string; // 'MORNING' | 'AFTERNOON' | 'NIGHT'
}
```

### Períodos (Periods Configuration)

```javascript
const PERIODS = {
  MORNING: {
    name: "Manhã",
    start: 9,
    end: 12,
    icon: "url-to-icon",
  },
  AFTERNOON: {
    name: "Tarde",
    start: 13,
    end: 18,
    icon: "url-to-icon",
  },
  NIGHT: {
    name: "Noite",
    start: 19,
    end: 21,
    icon: "url-to-icon",
  },
};
```

---

## Exemplos de Uso Completos

### Exemplo 1: Adicionar Múltiplos Agendamentos

```javascript
const schedules = [
  {
    ownerName: "Ana Silva",
    petName: "Rex",
    phone: "(11) 91234-5678",
    service: "Vacinação",
    date: "11/01/2024",
    time: "09:00",
  },
  {
    ownerName: "Carlos Lima",
    petName: "Bella",
    phone: "(11) 92345-6789",
    service: "Tosa",
    date: "11/01/2024",
    time: "14:00",
  },
];

schedules.forEach((schedule) => {
  try {
    manager.addSchedule(schedule);
    console.log(`✅ ${schedule.petName} agendado`);
  } catch (error) {
    console.error(`❌ Erro ao agendar ${schedule.petName}:`, error.message);
  }
});

ui.renderSchedules();
```

### Exemplo 2: Listar Agendamentos de Uma Semana

```javascript
function getNextDays(numDays) {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < numDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    dates.push(`${day}/${month}/${year}`);
  }

  return dates;
}

const week = getNextDays(7);
week.forEach((date) => {
  const schedules = manager.getSchedulesByDate(date);
  console.log(`📅 ${date}: ${schedules.length} agendamento(s)`);
});
```

### Exemplo 3: Verificar Horários Disponíveis

```javascript
function getAvailableSlots(date, period = "AFTERNOON") {
  const config = PERIODS[period];
  const available = [];

  for (let hour = config.start; hour < config.end; hour++) {
    const time = `${String(hour).padStart(2, "0")}:00`;

    if (!manager.hasConflict(date, time)) {
      available.push(time);
    }
  }

  return available;
}

const slots = getAvailableSlots("10/01/2024", "AFTERNOON");
console.log("Horários disponíveis na tarde:", slots);
```

### Exemplo 4: Estatísticas

```javascript
function getStatistics() {
  const allSchedules = Object.values(manager.schedules).flat();

  return {
    total: allSchedules.length,
    byPeriod: {
      morning: allSchedules.filter((s) => s.period === "MORNING").length,
      afternoon: allSchedules.filter((s) => s.period === "AFTERNOON").length,
      night: allSchedules.filter((s) => s.period === "NIGHT").length,
    },
    dates: Object.keys(manager.schedules).length,
  };
}

const stats = getStatistics();
console.log("📊 Estatísticas:", stats);
```

---

## Eventos Customizados

O sistema não emite eventos personalizados nativamente, mas você pode estender as classes para adicionar essa funcionalidade:

```javascript
class ExtendedScheduleManager extends ScheduleManager {
  addSchedule(data) {
    const schedule = super.addSchedule(data);

    // Emitir evento customizado
    window.dispatchEvent(
      new CustomEvent("scheduleAdded", {
        detail: schedule,
      })
    );

    return schedule;
  }
}

// Ouvir evento
window.addEventListener("scheduleAdded", (e) => {
  console.log("Novo agendamento:", e.detail);
});
```

---

## Troubleshooting

### localStorage não disponível

```javascript
if (typeof Storage === "undefined") {
  alert("Seu navegador não suporta localStorage. Os dados não serão salvos.");
}
```

### Recuperar de erro

```javascript
try {
  const manager = new ScheduleManager();
} catch (error) {
  console.error("Erro ao carregar:", error);
  localStorage.removeItem("petshop_schedules");
  location.reload();
}
```

---

## Referências Rápidas

### Formatos Aceitos

- **Data**: DD/MM/YYYY (ex: "10/01/2024")
- **Hora**: HH:MM (ex: "14:00")
- **Telefone**: Livre (sugestão: "(00) 00000-0000")

### Constantes

```javascript
// Períodos
PERIODS.MORNING;
PERIODS.AFTERNOON;
PERIODS.NIGHT;

// Status
("MORNING"); // 09h-12h
("AFTERNOON"); // 13h-18h
("NIGHT"); // 19h-21h
```

---

**Última atualização**: Dezembro 2024
