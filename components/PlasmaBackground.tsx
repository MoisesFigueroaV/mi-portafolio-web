"use client";

export function PlasmaBackground({ children }: { children: React.ReactNode }) {
  console.log("🔥 PlasmaBackground rendering!");

  return (
    <>
      {/* Fondo de prueba súper simple y visible */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, #ff6b35, #f7931e, #ffd700, #ff6b35)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 3s ease infinite",
          zIndex: -1,
          opacity: 0.3,
        }}
      >
        <div
          className="absolute top-4 left-4 bg-black text-white p-2 rounded"
          style={{ zIndex: 1000 }}
        >
          ✅ Fondo visible!
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      {children}
    </>
  );
}
