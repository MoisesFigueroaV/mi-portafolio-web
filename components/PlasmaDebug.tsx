"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function PlasmaDebug() {
  const { theme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [webglSupport, setWebglSupport] = useState<string>("checking...");

  useEffect(() => {
    setMounted(true);

    // Verificar soporte WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (gl) {
        const vendor = gl.getParameter(gl.VENDOR);
        const renderer = gl.getParameter(gl.RENDERER);
        setWebglSupport(`✅ WebGL disponible - ${vendor} - ${renderer}`);
      } else {
        setWebglSupport("❌ WebGL no disponible");
      }
    } catch (error) {
      setWebglSupport(`❌ Error WebGL: ${error}`);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 bg-yellow-500 text-black p-4 rounded z-50">
        <p>🔄 Cargando debug...</p>
      </div>
    );
  }

  const isDark = theme === "dark" || resolvedTheme === "dark";

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-black text-black dark:text-white p-4 rounded shadow-lg z-50 text-sm max-w-xs">
      <h3 className="font-bold mb-2">🔍 Debug Plasma</h3>
      <div className="space-y-1">
        <p><strong>Mounted:</strong> {mounted ? "✅" : "❌"}</p>
        <p><strong>Theme:</strong> {theme || "undefined"}</p>
        <p><strong>Resolved:</strong> {resolvedTheme || "undefined"}</p>
        <p><strong>System:</strong> {systemTheme || "undefined"}</p>
        <p><strong>Is Dark:</strong> {isDark ? "✅" : "❌"}</p>
        <p><strong>Should Show Plasma:</strong> {isDark ? "✅ SÍ" : "❌ NO"}</p>
        <p className="text-xs">{webglSupport}</p>
      </div>

      {/* Test visual para ver si el fondo está ahí */}
      <div className="mt-2 p-2 bg-red-500 bg-opacity-50">
        <p className="text-xs">Si ves plasma detrás de este rojo, funciona</p>
      </div>
    </div>
  );
}
