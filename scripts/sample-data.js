// Dados de exemplo para testar o sistema
// Cole este código no console do navegador para adicionar dados de teste

const sampleData = {
  "10/01/2024": [
    {
      id: 1640000000001,
      ownerName: "Fernanda Costa",
      petName: "Thor",
      phone: "(11) 98765-4321",
      service: "Vacinação",
      date: "10/01/2024",
      time: "09:00",
      period: "MORNING",
    },
    {
      id: 1640000000002,
      ownerName: "João Souza",
      petName: "Mel",
      phone: "(11) 98765-4322",
      service: "Corte de Unhas",
      date: "10/01/2024",
      time: "13:00",
      period: "AFTERNOON",
    },
    {
      id: 1640000000003,
      ownerName: "Pedro Martins",
      petName: "Bella",
      phone: "(11) 98765-4323",
      service: "Aplicação de Anti-pulgas",
      date: "10/01/2024",
      time: "14:00",
      period: "AFTERNOON",
    },
    {
      id: 1640000000004,
      ownerName: "Juliana Rocha",
      petName: "Simba",
      phone: "(11) 98765-4324",
      service: "Tosa Higiênica",
      date: "10/01/2024",
      time: "15:00",
      period: "AFTERNOON",
    },
    {
      id: 1640000000005,
      ownerName: "Camila Santos",
      petName: "Max",
      phone: "(11) 98765-4325",
      service: "Limpeza de Dentes",
      date: "10/01/2024",
      time: "20:00",
      period: "NIGHT",
    },
  ],
};

// Salvar no localStorage
localStorage.setItem("petshop_schedules", JSON.stringify(sampleData));

// Recarregar a página
location.reload();

console.log("✅ Dados de exemplo carregados! A página será recarregada.");
