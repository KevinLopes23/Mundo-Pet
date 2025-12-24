// ==================== CONFIGURAÇÕES ====================
const PERIODS = {
  MORNING: {
    name: "Manhã",
    start: 9,
    end: 12,
    icon: "https://www.figma.com/api/mcp/asset/42c4134c-adb7-4697-90b2-2ce6e4639e2e",
  },
  AFTERNOON: {
    name: "Tarde",
    start: 13,
    end: 18,
    icon: "https://www.figma.com/api/mcp/asset/2c3381cf-0842-4fc6-802f-fd685e952ea6",
  },
  NIGHT: {
    name: "Noite",
    start: 19,
    end: 21,
    icon: "https://www.figma.com/api/mcp/asset/5ab9bc23-61ab-48fb-8ad1-f431f638c515",
  },
};

// ==================== CLASSE DE GERENCIAMENTO ====================
class ScheduleManager {
  constructor() {
    this.schedules = this.loadFromStorage();
    this.currentDate = this.getTodayString();
  }

  // Carregar agendamentos do localStorage
  loadFromStorage() {
    const data = localStorage.getItem("petshop_schedules");
    return data ? JSON.parse(data) : {};
  }

  // Salvar agendamentos no localStorage
  saveToStorage() {
    localStorage.setItem("petshop_schedules", JSON.stringify(this.schedules));
  }

  // Obter data de hoje no formato DD/MM/YYYY
  getTodayString() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Validar horário dentro das janelas permitidas
  validateTime(time) {
    const hour = parseInt(time.split(":")[0]);

    for (const period of Object.values(PERIODS)) {
      if (hour >= period.start && hour < period.end) {
        return true;
      }
    }

    return false;
  }

  // Determinar período baseado no horário
  getPeriodByTime(time) {
    const hour = parseInt(time.split(":")[0]);

    if (hour >= PERIODS.MORNING.start && hour < PERIODS.MORNING.end)
      return "MORNING";
    if (hour >= PERIODS.AFTERNOON.start && hour < PERIODS.AFTERNOON.end)
      return "AFTERNOON";
    if (hour >= PERIODS.NIGHT.start && hour < PERIODS.NIGHT.end) return "NIGHT";

    return null;
  }

  // Verificar conflito de horário
  hasConflict(date, time) {
    if (!this.schedules[date]) return false;
    return this.schedules[date].some((schedule) => schedule.time === time);
  }

  // Adicionar novo agendamento
  addSchedule(scheduleData) {
    const { ownerName, petName, phone, service, date, time } = scheduleData;

    // Validar campos obrigatórios
    if (!ownerName || !petName || !phone || !service || !date || !time) {
      throw new Error("Todos os campos são obrigatórios!");
    }

    // Validar horário
    if (!this.validateTime(time)) {
      throw new Error(
        "Horário fora das janelas permitidas! (Manhã: 09h-12h, Tarde: 13h-18h, Noite: 19h-21h)"
      );
    }

    // Verificar conflito
    if (this.hasConflict(date, time)) {
      throw new Error("Já existe um agendamento neste horário!");
    }

    // Criar agendamento
    const newSchedule = {
      id: Date.now(),
      ownerName,
      petName,
      phone,
      service,
      date,
      time,
      period: this.getPeriodByTime(time),
    };

    // Adicionar à data específica
    if (!this.schedules[date]) {
      this.schedules[date] = [];
    }

    this.schedules[date].push(newSchedule);

    // Ordenar por horário
    this.schedules[date].sort((a, b) => a.time.localeCompare(b.time));

    this.saveToStorage();
    return newSchedule;
  }

  // Remover agendamento
  removeSchedule(date, scheduleId) {
    if (!this.schedules[date]) return false;

    const index = this.schedules[date].findIndex((s) => s.id === scheduleId);
    if (index === -1) return false;

    this.schedules[date].splice(index, 1);

    // Remover data se não houver mais agendamentos
    if (this.schedules[date].length === 0) {
      delete this.schedules[date];
    }

    this.saveToStorage();
    return true;
  }

  // Obter agendamentos de uma data específica
  getSchedulesByDate(date) {
    return this.schedules[date] || [];
  }

  // Agrupar agendamentos por período
  getSchedulesGroupedByPeriod(date) {
    const schedules = this.getSchedulesByDate(date);
    const grouped = {
      MORNING: [],
      AFTERNOON: [],
      NIGHT: [],
    };

    schedules.forEach((schedule) => {
      if (grouped[schedule.period]) {
        grouped[schedule.period].push(schedule);
      }
    });

    return grouped;
  }

  // Mudar data atual
  setCurrentDate(date) {
    this.currentDate = date;
  }
}

// ==================== CLASSE DE UI ====================
class ScheduleUI {
  constructor(manager) {
    this.manager = manager;
    this.modal = document.getElementById("scheduleModal");
    this.form = document.getElementById("scheduleForm");
    this.scheduleList = document.querySelector(".schedule-list");
    this.datePicker = document.querySelector(".date-picker span");

    this.initializeEventListeners();
    this.renderSchedules();
  }

  initializeEventListeners() {
    // Abrir modal
    document
      .getElementById("openModalBtn")
      .addEventListener("click", () => this.openModal());

    // Fechar modal
    document
      .getElementById("modalOverlay")
      .addEventListener("click", () => this.closeModal());

    // Submeter formulário
    this.form.addEventListener("submit", (e) => this.handleFormSubmit(e));

    // Mudar data (simplificado - apenas exibe)
    // Você pode adicionar um date picker real aqui

    // ESC para fechar
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Focar no primeiro campo
    setTimeout(() => {
      document.getElementById("ownerName").focus();
    }, 100);
  }

  closeModal() {
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
    this.form.reset();
    this.clearErrors();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.clearErrors();

    // Coletar dados do formulário
    const formData = {
      ownerName: document.getElementById("ownerName").value.trim(),
      petName: document.getElementById("petName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      service: document.getElementById("service").value.trim(),
      date: this.formatDate(document.getElementById("date").value),
      time: document.getElementById("time").value,
    };

    try {
      // Adicionar agendamento
      this.manager.addSchedule(formData);

      // Atualizar UI
      this.renderSchedules();

      // Fechar modal
      this.closeModal();

      // Feedback de sucesso
      this.showSuccess("Agendamento criado com sucesso!");
    } catch (error) {
      this.showError(error.message);
    }
  }

  formatDate(dateString) {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  }

  showError(message) {
    // Criar elemento de erro temporário
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #ff4444;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(errorDiv);

    setTimeout(() => {
      errorDiv.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
  }

  showSuccess(message) {
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.textContent = message;
    successDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #00c851;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(successDiv);

    setTimeout(() => {
      successDiv.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => successDiv.remove(), 300);
    }, 3000);
  }

  clearErrors() {
    document.querySelectorAll(".field-error").forEach((el) => el.remove());
  }

  renderSchedules() {
    const grouped = this.manager.getSchedulesGroupedByPeriod(
      this.manager.currentDate
    );
    this.scheduleList.innerHTML = "";

    // Renderizar cada período
    Object.entries(PERIODS).forEach(([key, period]) => {
      const schedules = grouped[key];
      const section = this.createPeriodSection(key, period, schedules);
      this.scheduleList.appendChild(section);
    });

    // Atualizar data no picker
    this.datePicker.textContent = this.manager.currentDate;
  }

  createPeriodSection(periodKey, period, schedules) {
    const section = document.createElement("section");
    section.className = "period-section";

    // Header
    const header = document.createElement("div");
    header.className = "period-header";
    header.innerHTML = `
      <div class="period-title">
        <img src="${period.icon}" alt="${period.name}">
        <h2>${period.name}</h2>
      </div>
      <span class="period-time">${period.start
        .toString()
        .padStart(2, "0")}h-${period.end.toString().padStart(2, "0")}h</span>
    `;

    // Content
    const content = document.createElement("div");
    content.className = "period-content";

    if (schedules.length === 0) {
      content.innerHTML =
        '<p class="no-schedules">Nenhum agendamento neste período</p>';
    } else {
      schedules.forEach((schedule) => {
        const item = this.createScheduleItem(schedule);
        content.appendChild(item);
      });
    }

    section.appendChild(header);
    section.appendChild(content);

    return section;
  }

  createScheduleItem(schedule) {
    const item = document.createElement("div");
    item.className = "schedule-item";
    item.innerHTML = `
      <span class="time">${schedule.time}</span>
      <div class="info">
        <div class="names">
          <strong>${schedule.petName}</strong>
          <span>/ ${schedule.ownerName}</span>
        </div>
        <span class="service">${schedule.service}</span>
      </div>
      <button class="remove-btn" data-id="${schedule.id}">Remover agendamento</button>
    `;

    // Adicionar evento de remoção
    item.querySelector(".remove-btn").addEventListener("click", () => {
      this.handleRemoveSchedule(schedule.id);
    });

    return item;
  }

  handleRemoveSchedule(scheduleId) {
    if (confirm("Tem certeza que deseja remover este agendamento?")) {
      const removed = this.manager.removeSchedule(
        this.manager.currentDate,
        scheduleId
      );

      if (removed) {
        this.renderSchedules();
        this.showSuccess("Agendamento removido com sucesso!");
      }
    }
  }
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener("DOMContentLoaded", () => {
  const manager = new ScheduleManager();
  const ui = new ScheduleUI(manager);

  // Expor globalmente para debug (opcional)
  window.scheduleManager = manager;
  window.scheduleUI = ui;
});
