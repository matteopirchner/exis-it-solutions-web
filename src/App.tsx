
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import Netzwerkloesungen from "./pages/services/Netzwerkloesungen";
import ITSupport from "./pages/services/ITSupport";
import CloudLoesungen from "./pages/services/CloudLoesungen";
import Sicherheitsloesungen from "./pages/services/Sicherheitsloesungen";
import ServerManagement from "./pages/services/ServerManagement";
import ITBeratung from "./pages/services/ITBeratung";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/services/netzwerkloesungen" element={<Netzwerkloesungen />} />
          <Route path="/services/it-support" element={<ITSupport />} />
          <Route path="/services/cloud-loesungen" element={<CloudLoesungen />} />
          <Route path="/services/sicherheitsloesungen" element={<Sicherheitsloesungen />} />
          <Route path="/services/server-management" element={<ServerManagement />} />
          <Route path="/services/it-beratung" element={<ITBeratung />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
