
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "@/pages/Index";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import Cookies from "@/pages/Cookies";
import NotFound from "@/pages/NotFound";
import Netzwerkloesungen from "@/pages/services/Netzwerkloesungen";
import ITSupport from "@/pages/services/ITSupport";
import CloudLoesungen from "@/pages/services/CloudLoesungen";
import Sicherheitsloesungen from "@/pages/services/Sicherheitsloesungen";
import ServerManagement from "@/pages/services/ServerManagement";
import ITBeratung from "@/pages/services/ITBeratung";
import IndividuelleLösungen from "@/pages/services/IndividuelleLösungen";

const AnimatedRoutes = () => {
  const location = useLocation();
  useAnalytics();
  
  const handleAnimationComplete = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition onAnimationComplete={handleAnimationComplete}><Index /></PageTransition>} />
        <Route path="/impressum" element={<PageTransition onAnimationComplete={handleAnimationComplete}><Impressum /></PageTransition>} />
        <Route path="/datenschutz" element={<PageTransition onAnimationComplete={handleAnimationComplete}><Datenschutz /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition onAnimationComplete={handleAnimationComplete}><Cookies /></PageTransition>} />
        <Route path="/services/netzwerkloesungen" element={<PageTransition onAnimationComplete={handleAnimationComplete}><Netzwerkloesungen /></PageTransition>} />
        <Route path="/services/it-support" element={<PageTransition onAnimationComplete={handleAnimationComplete}><ITSupport /></PageTransition>} />
        <Route path="/services/cloud-loesungen" element={<PageTransition onAnimationComplete={handleAnimationComplete}><CloudLoesungen /></PageTransition>} />
        <Route path="/services/sicherheitsloesungen" element={<PageTransition onAnimationComplete={handleAnimationComplete}><Sicherheitsloesungen /></PageTransition>} />
        <Route path="/services/server-management" element={<PageTransition onAnimationComplete={handleAnimationComplete}><ServerManagement /></PageTransition>} />
        <Route path="/services/it-beratung" element={<PageTransition onAnimationComplete={handleAnimationComplete}><ITBeratung /></PageTransition>} />
        <Route path="/services/individuelle-loesungen" element={<PageTransition onAnimationComplete={handleAnimationComplete}><IndividuelleLösungen /></PageTransition>} />
        <Route path="*" element={<PageTransition onAnimationComplete={handleAnimationComplete}><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
