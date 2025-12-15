import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import ProgramKarate from "@/pages/ProgramKarate";
import ProgramBharatanatyam from "@/pages/ProgramBharatanatyam";
import ProgramYoga from "@/pages/ProgramYoga";
import KarateBeginner from "@/pages/KarateBeginner";
import KarateIntermediate from "@/pages/KarateIntermediate";
import KarateAdvanced from "@/pages/KarateAdvanced";
import KarateKids from "@/pages/KarateKids";
import KarateSelfDefense from "@/pages/KarateSelfDefense";
import BharatanatyamBasics from "@/pages/BharatanatyamBasics";
import BharatanatyamIntermediate from "@/pages/BharatanatyamIntermediate";
import BharatanatyamLevelUp from "@/pages/BharatanatyamLevelUp";
import BharatanatyamPerformance from "@/pages/BharatanatyamPerformance";
import BharatanatyamTheory from "@/pages/BharatanatyamTheory";
import YogaHatha from "@/pages/YogaHatha";
import YogaVinyasa from "@/pages/YogaVinyasa";
import YogaPower from "@/pages/YogaPower";
import YogaFlexibility from "@/pages/YogaFlexibility";
import YogaMeditation from "@/pages/YogaMeditation";
import Founder from "@/pages/Founder";
import Reviews from "@/pages/Reviews";
import Pricing from "@/pages/Pricing";
import Gallery from "@/pages/Gallery";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/programs/karate/beginner" component={KarateBeginner} />
      <Route path="/programs/karate/intermediate" component={KarateIntermediate} />
      <Route path="/programs/karate/advanced" component={KarateAdvanced} />
      <Route path="/programs/karate/kids" component={KarateKids} />
      <Route path="/programs/karate/self-defense" component={KarateSelfDefense} />
      <Route path="/programs/bharatanatyam/basics" component={BharatanatyamBasics} />
      <Route path="/programs/bharatanatyam/intermediate" component={BharatanatyamIntermediate} />
      <Route path="/programs/bharatanatyam/levelup" component={BharatanatyamLevelUp} />
      <Route path="/programs/bharatanatyam/performance" component={BharatanatyamPerformance} />
      <Route path="/programs/bharatanatyam/theory" component={BharatanatyamTheory} />
      <Route path="/programs/yoga/hatha" component={YogaHatha} />
      <Route path="/programs/yoga/vinyasa" component={YogaVinyasa} />
      <Route path="/programs/yoga/power" component={YogaPower} />
      <Route path="/programs/yoga/flexibility" component={YogaFlexibility} />
      <Route path="/programs/yoga/meditation" component={YogaMeditation} />
      <Route path="/programs/karate" component={ProgramKarate} />
      <Route path="/programs/bharatanatyam" component={ProgramBharatanatyam} />
      <Route path="/programs/yoga" component={ProgramYoga} />
      <Route path="/founder" component={Founder} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
