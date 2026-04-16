import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexV1 from "./pages/IndexV1";
import VariationPicker from "./pages/VariationPicker";
import WaitlistPage from "./pages/WaitlistPage";
import NotFound from "./pages/NotFound";
import OodlesVariations from "./pages/OodlesVariations";
import OodlesVariationsV2 from "./pages/OodlesVariationsV2";
import OodlesBrief from "./pages/OodlesBrief";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v1" element={<IndexV1 />} />
          <Route path="/pick" element={<VariationPicker />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/oodles" element={<OodlesVariations />} />
          <Route path="/oodles-v2" element={<OodlesVariationsV2 />} />
          <Route path="/oodles-brief" element={<OodlesBrief />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
