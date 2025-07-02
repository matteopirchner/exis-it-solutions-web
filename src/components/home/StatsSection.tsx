
import CounterAnimation from "@/components/CounterAnimation";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import ParallaxBackground from "@/components/ParallaxBackground";

const StatsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <ParallaxBackground speed={0.2} className="absolute inset-0">
        <div className="bg-gradient-to-r from-[#8B1538] to-red-600"></div>
      </ParallaxBackground>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <ScrollRevealWrapper animation="fadeUp" delay={100}>
            <div className="group hover:scale-105 transition-transform duration-300">
              <CounterAnimation 
                end={150} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold mb-2"
              />
              <div className="text-sm md:text-base opacity-90">Zufriedene Kunden</div>
            </div>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="fadeUp" delay={200}>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">Support</div>
            </div>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="fadeUp" delay={300}>
            <div className="group hover:scale-105 transition-transform duration-300">
              <CounterAnimation 
                end={99.9} 
                suffix="%" 
                className="text-4xl md:text-5xl font-bold mb-2"
              />
              <div className="text-sm md:text-base opacity-90">Uptime</div>
            </div>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="fadeUp" delay={400}>
            <div className="group hover:scale-105 transition-transform duration-300">
              <CounterAnimation 
                end={5} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold mb-2"
              />
              <div className="text-sm md:text-base opacity-90">Jahre Erfahrung</div>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
