// Ajuste aqui os dados de contato da clínica.
export const siteConfig = {
  nome: "Dra. Giselle Moretti",
  whatsappNumero: "5548991582362", // formato internacional, somente números
  whatsappMensagem:
    "Olá, Dra. Giselle! Gostaria de agendar uma consulta de nutrição e MTC.",
  instagram: "https://www.instagram.com/nutrigisellemoretti/",
  instagramHandle: "@nutrigisellemoretti",
  whatsappExibicao: "(48) 99158-2362",
  endereco: "Atendimento on-line para todo o Brasil e  presencial em Florianópolis",
  horario: "Segunda a sexta, das 8h às 18h",
};

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumero}`;
