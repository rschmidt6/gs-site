import { motion } from "framer-motion";

export function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="nav-container">
      <div className="nav-tabs">
        <button
          className={activeTab === "gallery" ? "active" : ""}
          onClick={() => setActiveTab("gallery")}
        >
          flash
          {activeTab === "gallery" && (
            <motion.div
              className="underline"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
        <button
          className={activeTab === "booking" ? "active" : ""}
          onClick={() => setActiveTab("booking")}
        >
          book
          {activeTab === "booking" && (
            <motion.div
              className="underline"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
        <button
          className={activeTab === "info" ? "active" : ""}
          onClick={() => setActiveTab("info")}
        >
          info
          {activeTab === "info" && (
            <motion.div
              className="underline"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      </div>
    </nav>
  );
}
