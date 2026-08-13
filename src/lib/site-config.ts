// Ajuste aqui os dados de contato da clínica.
export const siteConfig = {
  nome: "Dra. Giselle Moretti",
  whatsappNumero: "5511999999999", // formato internacional, somente números
  whatsappMensagem:
    "Olá, Dra. Giselle! Gostaria de agendar uma consulta de nutrição e MTC.",
  instagram: "https://instagram.com/dragisellemoretti",
  instagramHandle: "@dragisellemoretti",
  email: "contato@gisellemoretti.com.br",
  endereco: "Atendimento presencial em São Paulo e online para todo o Brasil",
  horario: "Segunda a sexta, das 8h às 18h",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumero}?text=${encodeURIComponent(
  siteConfig.whatsappMensagem,
)}`;
