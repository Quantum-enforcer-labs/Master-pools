import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useThemeStore } from "../store/store";
import { useState, useEffect } from "react";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import toast, { Toaster } from "react-hot-toast";

export const Route = createFileRoute("/pricing")({
  component: PricingEstimator,
});

function PricingEstimator() {
  const { darkMode } = useThemeStore();

  const [poolType, setPoolType] = useState("Standard");
  const [size, setSize] = useState(20);
  const [waterfall, setWaterfall] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [heating, setHeating] = useState(false);

  // Load saved estimate from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("poolEstimate");
    if (saved) {
      const data = JSON.parse(saved);
      setPoolType(data.poolType || "Standard");
      setSize(data.size || 20);
      setWaterfall(data.waterfall || false);
      setLighting(data.lighting || false);
      setHeating(data.heating || false);
    }
  }, []);

  const saveEstimate = () => {
    localStorage.setItem(
      "poolEstimate",
      JSON.stringify({
        poolType,
        size,
        waterfall,
        lighting,
        heating,
      })
    );
    toast.success("✅ Estimate saved locally!");
  };

  const clearEstimate = () => {
    localStorage.removeItem("poolEstimate");
    setPoolType("Standard");
    setSize(20);
    setWaterfall(false);
    setLighting(false);
    setHeating(false);
    toast.success("🧹 Estimate cleared!");
  };

  const calculatePrice = () => {
    let base = 8000; // Base price for Zimbabwe

    if (poolType === "Luxury") base += 6000;
    if (poolType === "Infinity") base += 12000;

    base += size * 350;
    if (waterfall) base += 1200;
    if (lighting) base += 800;
    if (heating) base += 3000;

    return base;
  };

  const total = calculatePrice();

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: darkMode ? "#333" : "#fff",
            color: darkMode ? "#fff" : "#000",
          },
        }}
      />
      <PageTransitionWrapper>
        <div
          className={`min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 
          ${
            darkMode
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              : "bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`max-w-3xl w-full p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-lg 
              ${darkMode ? "bg-black/30 text-white" : "bg-white/70 text-[#0e2f44]"}`}
          >
            <h1 className="text-4xl font-extrabold mb-8 text-center">
              Pool Pricing Estimator 🇿🇼
            </h1>

            <div className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">Pool Type</label>
                <select
                  className="w-full p-3 rounded-lg bg-white dark:bg-black/50"
                  value={poolType}
                  onChange={(e) => setPoolType(e.target.value)}
                >
                  <option>Standard</option>
                  <option>Luxury</option>
                  <option>Infinity</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Pool Size (sq meters)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-center">Selected Size: {size} m²</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={waterfall}
                    onChange={() => setWaterfall(!waterfall)}
                  />
                  <span>Waterfall</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={lighting}
                    onChange={() => setLighting(!lighting)}
                  />
                  <span>LED Lighting</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={heating}
                    onChange={() => setHeating(!heating)}
                  />
                  <span>Heating System</span>
                </label>
              </div>
            </div>

            <div className="mt-10 text-center">
              <h2 className="text-3xl font-bold mb-2">Estimated Price:</h2>
              <p className="text-4xl font-extrabold text-[#0077b6]">
                USD ${total.toLocaleString()}
              </p>
              <p className="italic mt-2 text-sm">
                *Estimated cost — contact us for official quotation.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={saveEstimate}
                className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
              >
                Save Estimate
              </button>

              <button
                onClick={clearEstimate}
                className="px-6 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition"
              >
                Clear Estimate
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center dark:text-white/60">
              Your estimate is saved locally on your device.
            </p>
          </motion.div>
        </div>
      </PageTransitionWrapper>
    </>
  );
}
