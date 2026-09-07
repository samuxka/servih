import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Page } from "./types";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ConstructionPage } from "./pages/ConstructionPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar page={page} setPage={setPage} />
        {page === "home" ? (
          <HomePage setPage={setPage} />
        ) : page === "about" ? (
          <AboutPage />
        ) : page === "construction" ? (
          <ConstructionPage setPage={setPage} />
        ) : (
          <ContactPage />
        )}
      </div>
      <Analytics />
    </>
  );
}
