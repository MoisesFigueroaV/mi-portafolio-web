"use client";
import React from "react";

interface PlasmaSimpleProps {
  color?: string;
  opacity?: number;
}

export const PlasmaSimple: React.FC<PlasmaSimpleProps> = ({
  color = "#ff6b35",
  opacity = 0.6,
}) => {
  console.log(
    "🔥 PlasmaSimple rendering with color:",
    color,
    "opacity:",
    opacity,
  );

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Capa base con gradientes animados */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 20% 30%, ${color}40 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 80% 20%, ${color}50 0%, transparent 70%),
            radial-gradient(ellipse 70% 70% at 40% 80%, ${color}30 0%, transparent 60%),
            radial-gradient(ellipse 90% 60% at 90% 90%, ${color}45 0%, transparent 65%)
          `,
          opacity: opacity,
          animation: "plasma-move 15s ease-in-out infinite",
        }}
      />

      {/* Capa de movimiento secundario */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle 40% at 60% 40%, ${color}35 0%, transparent 50%),
            radial-gradient(circle 50% at 10% 70%, ${color}25 0%, transparent 60%),
            radial-gradient(circle 35% at 90% 10%, ${color}40 0%, transparent 55%)
          `,
          opacity: opacity * 0.7,
          animation: "plasma-drift 20s ease-in-out infinite reverse",
        }}
      />

      {/* Capa de rotación */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%,
              transparent 0deg,
              ${color}20 60deg,
              transparent 120deg,
              ${color}15 180deg,
              transparent 240deg,
              ${color}25 300deg,
              transparent 360deg
            )
          `,
          opacity: opacity * 0.4,
          animation: "plasma-spin 25s linear infinite",
        }}
      />

      {/* Capa de ondas */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg,
              transparent 0%,
              ${color}10 25%,
              transparent 50%,
              ${color}15 75%,
              transparent 100%
            ),
            linear-gradient(-45deg,
              ${color}12 0%,
              transparent 30%,
              ${color}08 60%,
              transparent 100%
            )
          `,
          opacity: opacity * 0.6,
          animation: "plasma-wave 12s ease-in-out infinite alternate",
        }}
      />

      <style jsx>{`
        @keyframes plasma-move {
          0%,
          100% {
            transform: translate(0%, 0%) scale(1);
            filter: hue-rotate(0deg);
          }
          25% {
            transform: translate(2%, -1%) scale(1.05);
            filter: hue-rotate(15deg);
          }
          50% {
            transform: translate(-1%, 2%) scale(0.95);
            filter: hue-rotate(-10deg);
          }
          75% {
            transform: translate(-2%, -1%) scale(1.02);
            filter: hue-rotate(20deg);
          }
        }

        @keyframes plasma-drift {
          0%,
          100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
          30% {
            transform: translate(-3%, 2%) rotate(5deg) scale(1.1);
          }
          60% {
            transform: translate(2%, -2%) rotate(-3deg) scale(0.9);
          }
        }

        @keyframes plasma-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes plasma-wave {
          0%,
          100% {
            transform: scaleX(1) skewX(0deg);
          }
          33% {
            transform: scaleX(1.1) skewX(2deg);
          }
          66% {
            transform: scaleX(0.9) skewX(-1deg);
          }
        }

        /* Respeta prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PlasmaSimple;
