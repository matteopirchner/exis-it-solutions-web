
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
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
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/impressum" element={<PageTransition><Impressum /></PageTransition>} />
        <Route path="/datenschutz" element={<PageTransition><Datenschutz /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><Cookies /></PageTransition>} />
        <Route path="/services/netzwerkloesungen" element={<PageTransition><Netzwerkloesungen /></PageTransition>} />
        <Route path="/services/it-support" element={<PageTransition><ITSupport /></PageTransition>} />
        <Route path="/services/cloud-loesungen" element={<PageTransition><CloudLoesungen /></PageTransition>} />
        <Route path="/services/sicherheitsloesungen" element={<PageTransition><Sicherheitsloesungen /></PageTransition>} />
        <Route path="/services/server-management" element={<PageTransition><ServerManagement /></PageTransition>} />
        <Route path="/services/it-beratung" element={<PageTransition><ITBeratung /></PageTransition>} />
        <Route path="/services/individuelle-loesungen" element={<PageTransition><IndividuelleLösungen /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
