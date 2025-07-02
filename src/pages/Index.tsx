
import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Server, Network, Headphones, Cloud, Settings, Users, Award, Clock, CheckCircle, Star, Globe, Mail, Database } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import GoogleMaps from "@/components/GoogleMaps";
import CookieBanner from "@/components/CookieBanner";
import CounterAnimation from "@/components/CounterAnimation";

const Index = () => {
  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 120; // 120px offset for better spacing from navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a4979dec-233f-4407-a953-c36de27959ab.png" 
                alt="exis Solutions" 
                className="h-12 hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => smoothScroll('about')} 
                className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group"
              >
                Über Exis
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => smoothScroll('services')} 
                className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group"
              >
                Leistungen
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => smoothScroll('faq')} 
                className="text-gray-700 hover:text-[#8B1538] transition-all duration-300 hover:scale-105 relative group"
              >
                Fragen
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button className="bg-[#8B1538] hover:bg-[#8B1538]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
                <button onClick={() => smoothScroll('contact')} className="text-white">Kontakt</button>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8B1538]/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="mb-8 animate-fade-in">
              <p className="text-2xl md:text-3xl font-light mb-2 text-[#8B1538] animate-pulse">
                Das ist IT. Das ist exis.
              </p>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-fade-in">
              IT-Lösungen für Ihr Unternehmen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Professionelle IT-Services, Hosting-Lösungen und Support für B2B und Privatkunden. 
              Ihre Experten für moderne Technologie in Pongau/Salzburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Button size="lg" className="bg-[#8B1538] hover:bg-[#8B1538]/90 hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-4 text-white">
                <button onClick={() => smoothScroll('contact')} className="text-white">Kostenloses Beratungsgespräch</button>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-4">
                <button onClick={() => smoothScroll('services')} className="text-black">Unsere Leistungen</button>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#8B1538] to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <CounterAnimation 
                end={150} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold mb-2"
              />
              <div className="text-sm md:text-base opacity-90">Zufriedene Kunden</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">Support</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <CounterAnimation 
                end={99.9} 
                suffix="%" 
                className="text-4xl md:text-5xl font-bold mb-2"
              />
              <div className="text-sm md:text-base opacity-90">Uptime</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <CounterAnimation 
                end={5} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold mb-2"
              />
              <div className="text-sm md:text-base opacity-90">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Parallax Effect */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
                Über exis Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Seit über 5 Jahren sind wir Ihr verlässlicher Partner für alle IT-Angelegenheiten. Mit modernsten 
                Technologien und persönlichem Service sorgen wir dafür, dass Ihre IT-Infrastruktur reibungslos funktioniert.
                Als junges Team aus dem Pongau in Salzburg bringen wir frische Ideen und innovative Lösungen zu Ihnen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#8B1538]/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src="/lovable-uploads/ef49115e-c47a-4e3d-bd71-221f60451dae.png" 
                  alt="Server-Infrastruktur" 
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Warum exis Solutions?
                </h3>
                <div className="space-y-6">
                  {[
                    "Über 150 zufriedene Kunden vertrauen uns",
                    "24/7 Support und garantierte Reaktionszeiten", 
                    "Modernste Hosting-Infrastruktur mit 99.9% Uptime",
                    "Transparente Preise und faire Konditionen",
                    "Persönlicher Ansprechpartner für alle Anliegen",
                    "Junges, dynamisches Team aus Pongau/Salzburg"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group hover:scale-105 transition-all duration-300">
                      <div className="w-4 h-4 bg-[#8B1538] rounded-full mr-4 group-hover:animate-pulse"></div>
                      <p className="text-lg text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Exis Solutions hat unsere komplette IT-Infrastruktur modernisiert. Hervorragender Service!"</p>
                <p className="font-semibold text-gray-900">- KMU Kunde</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Nextcloud Setup war perfekt. Endlich unabhängig von Microsoft Teams!"</p>
                <p className="font-semibold text-gray-900">- Privatkunde</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"24/7 Support funktioniert wirklich. Schnelle Hilfe bei allen Problemen."</p>
                <p className="font-semibold text-gray-900">- Unternehmenskunde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Effects */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unsere Leistungen
              </h2>
              <p className="text-xl text-gray-300">
                Komplette IT-Services aus einer Hand
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Netzwerklösungen",
                  description: "Planung, Installation und Wartung von Netzwerk-Infrastrukturen für optimale Konnektivität.",
                  image: "/lovable-uploads/2ce30bf2-ca83-4c26-b6c7-c9e91e256ed0.png",
                  icon: <Network className="w-8 h-8" />,
                  link: "/services/netzwerkloesungen"
                },
                {
                  title: "IT-Support",
                  description: "Schnelle Hilfe bei IT-Problemen - vor Ort oder remote. Ihr zuverlässiger IT-Partner.",
                  image: "/lovable-uploads/7b856886-75e6-4ed2-889b-761ab5eda86c.png",
                  icon: <Headphones className="w-8 h-8" />,
                  link: "/services/it-support"
                },
                {
                  title: "Hosting", 
                  description: "Professionelles Website-Hosting, Nextcloud-Instanzen als Teams/OneDrive-Ersatz und Mailserver-Lösungen.",
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
                  icon: <Globe className="w-8 h-8" />,
                  link: "/services/cloud-loesungen"
                },
                {
                  title: "Sicherheitslösungen",
                  description: "Umfassende IT-Security-Konzepte zum Schutz Ihrer Daten und Systeme.",
                  image: "/lovable-uploads/f924556c-da8a-4be4-ac24-bcfae1b5e9fa.png",
                  icon: <Shield className="w-8 h-8" />,
                  link: "/services/sicherheitsloesungen"
                },
                {
                  title: "Server-Management",
                  description: "Professionelle Verwaltung und Wartung Ihrer Server-Infrastruktur.",
                  image: "/lovable-uploads/b4e37a6e-ccd1-4e28-ae38-f8fb3b22b264.png",
                  icon: <Server className="w-8 h-8" />,
                  link: "/services/server-management"
                },
                {
                  title: "IT-Beratung",
                  description: "Strategische Beratung für Ihre IT-Landschaft und digitale Transformation.",
                  image: "/lovable-uploads/cfa8e99f-b09f-42a4-8d66-1dd218b41108.png",
                  icon: <Settings className="w-8 h-8" />,
                  link: "/services/it-beratung"
                }
              ].map((service, index) => (
                <Link key={index} to={service.link} className="group relative block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B1538] to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 h-full">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4 text-[#8B1538] bg-white/10 backdrop-blur-sm rounded-full p-3 mb-6">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#8B1538] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nextcloud - Ihre Microsoft Teams Alternative
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Werden Sie unabhängig von Microsoft! Unsere Nextcloud-Lösungen bieten alles, 
                was Sie für moderne Zusammenarbeit brauchen - und das auf Ihren eigenen Servern.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team-Kollaboration</h3>
                <p className="text-gray-600">Chat, Video-Calls, Dokumentenbearbeitung - alles in einem Tool</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sicherer Dateispeicher</h3>
                <p className="text-gray-600">OneDrive-Ersatz mit vollständiger Kontrolle über Ihre Daten</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrierte E-Mail</h3>
                <p className="text-gray-600">Komplette E-Mail-Lösung mit Kalender und Kontakten</p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <button onClick={() => smoothScroll('contact')}>Nextcloud-Beratung anfragen</button>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-gray-600">
                Antworten auf die wichtigsten Fragen zu unseren Services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
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
              ].map((faq, index) => (
                <div key={index} className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8B1538]/20">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#8B1538] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Kontakt aufnehmen
              </h2>
              <p className="text-xl text-gray-600">
                Lassen Sie uns über Ihre IT-Anforderungen sprechen
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <ContactForm />
              </div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontakt Info</h3>
                  <div className="space-y-4">
                    <div className="group">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">E-Mail</h4>
                      <p className="text-gray-600">office@exis.at</p>
                    </div>
                    <div className="group">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">Adresse</h4>
                      <p className="text-gray-600">
                        exis Solutions e.U.<br />
                        Pongau, Salzburg<br />
                        Österreich
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">Öffnungszeiten</h4>
                      <p className="text-gray-600">
                        Mo-Fr: 8:00 - 18:00 Uhr<br />
                        24/7 Notfall-Support verfügbar
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Standort</h3>
                  <GoogleMaps />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <img 
                  src="/lovable-uploads/a4979dec-233f-4407-a953-c36de27959ab.png" 
                  alt="exis Solutions" 
                  className="h-12 mb-6 filter brightness-0 invert hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Ihr verlässlicher Partner für professionelle IT-Lösungen in Pongau/Salzburg. 
                  Von Netzwerken bis Hosting - wir machen Ihre IT zum Erfolgsfaktor.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/services/netzwerkloesungen" className="hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 inline-block">Netzwerklösungen</Link></li>
                  <li><Link to="/services/it-support" className="hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 inline-block">IT-Support</Link></li>
                  <li><Link to="/services/cloud-loesungen" className="hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 inline-block">Hosting</Link></li>
                  <li><Link to="/services/server-management" className="hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 inline-block">Server-Management</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">Rechtliches</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/impressum" className="hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 inline-block">Impressum</Link></li>
                  <li><Link to="/datenschutz" className="hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 inline-block">Datenschutz</Link></li>
                  <li><Link to="/cookies" className="hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 inline-block">Cookies</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2025 exis Solutions e. U. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};

export default Index;
