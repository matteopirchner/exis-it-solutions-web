
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const FAQSection = () => {
  const faqs = [
    {
      question: "Wie schnell können Sie bei IT-Problemen helfen?",
      answer: "Wir bieten 24/7 Support mit garantierten Reaktionszeiten. Bei kritischen Problemen sind wir innerhalb von 2 Stunden vor Ort oder remote verfügbar."
    },
    {
      question: "Was kostet eine Nextcloud-Installation?",
      answer: "Die Kosten variieren je nach Anzahl der Benutzer und gewünschten Features. Kontaktieren Sie uns für ein individuelles Angebot - bereits ab 50€/Monat verfügbar."
    },
    {
      question: "Arbeiten Sie auch mit kleinen Unternehmen?",
      answer: "Ja, wir betreuen sowohl große Unternehmen als auch kleine Betriebe und Privatpersonen. Unsere Lösungen sind skalierbar und an Ihre Bedürfnisse angepasst."
    },
    {
      question: "Wie sicher sind Ihre Hosting-Lösungen?",
      answer: "Wir implementieren nur DSGVO-konforme Lösungen mit höchsten Sicherheitsstandards, SSL-Verschlüsselung und täglichen Backups. Ihre Daten bleiben in Österreich."
    },
    {
      question: "Bieten Sie auch Wartungsverträge an?",
      answer: "Selbstverständlich! Wir bieten flexible Wartungsverträge, die präventive Wartung, Updates und Priority-Support umfassen."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollRevealWrapper animation="fadeUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-gray-600">
                Antworten auf die wichtigsten Fragen zu unseren Services
              </p>
            </div>
          </ScrollRevealWrapper>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollRevealWrapper 
                key={index} 
                animation="slideLeft" 
                delay={200 + index * 100}
              >
                <div className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8B1538]/20">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#8B1538] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
