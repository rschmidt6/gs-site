// src/App.jsx
import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { FlashGallery } from "./components/FlashGallery";
import { CalendlyEmbed } from "./components/CalendlyEmbed";
import { InfoPage } from "./components/InfoPage";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("gallery");
  const [tabsLoaded, setTabsLoaded] = useState({
    gallery: true,
    booking: false,
    info: false,
  });

  // Update the document title when component mounts
  useEffect(() => {
    // Set title
    document.title = "g.s.";

    // Set meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Custom tattoo designs and appointments at Garden Sports Tattoo"
      );
    }

    // Set theme color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute("content", "#2b2826");
  }, []);

  // Load a tab when it's first visited
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    if (!tabsLoaded[tabName]) {
      setTabsLoaded((prev) => ({
        ...prev,
        [tabName]: true,
      }));
    }
  };

  return (
    <>
      <div className="app-container">
        <header>
          <div className="logo-container">
            <img
              src="/images/gs_name1.png"
              alt="Garden Sports Tattoo"
              className="logo-image"
            />
          </div>
          <Navigation activeTab={activeTab} setActiveTab={handleTabChange} />
        </header>

        <main>
          {/* Each tab content is rendered but hidden when not active */}
          <div style={{ display: activeTab === "gallery" ? "block" : "none" }}>
            {tabsLoaded.gallery && <FlashGallery />}
          </div>

          <div style={{ display: activeTab === "booking" ? "block" : "none" }}>
            {tabsLoaded.booking && <CalendlyEmbed />}
          </div>

          <div style={{ display: activeTab === "info" ? "block" : "none" }}>
            {tabsLoaded.info && <InfoPage />}
          </div>
        </main>

        {activeTab !== "info" && <Footer />}
      </div>
    </>
  );
}

export default App;
