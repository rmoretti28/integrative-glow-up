// Ajuste aqui os dados de contato da clínica.
export const siteConfig = {
  nome: "Dra. Giselle Moretti",
  whatsappNumero: "5548991582362", // formato internacional, somente números
  whatsappMensagem:
    "Olá, Dra. Giselle! Gostaria de agendar uma consulta de nutrição e MTC.",
  instagram: "https://www.instagram.com/nutrigisellemoretti/",
  instagramHandle: "@nutrigisellemoretti",
  email: "contato@gisellemoretti.com.br",
  endereco: "Atendimento presencial no Bairro de Coqueiros em Florianópolis",
  horario: "Segunda a sexta, das 8h às 18h",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumero}?text=${encodeURIComponent(
  siteConfig.whatsappMensagem,
)}`;
