
import CounterAnimation from "@/components/CounterAnimation";

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
