import { useEffect, useRef, memo } from 'react';
import createGlobe from 'cobe';

// Memoized Globe component to prevent unnecessary re-renders
export interface GlobeProps {
  isDarkMode: boolean;
}

const Globe = memo(function Globe({ isDarkMode }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    // Theme-Aware Color Palette for Globe
    const baseColor: [number, number, number] = isDarkMode ? [255 / 255, 215 / 255, 0 / 255] : [148 / 255, 163 / 255, 184 / 255];
    const markerColor: [number, number, number] = isDarkMode ? [255 / 255, 215 / 255, 0 / 255] : [148 / 255, 163 / 255, 184 / 255];
    const glowColor: [number, number, number] = isDarkMode ? [255 / 255, 215 / 255, 0 / 255] : [148 / 255, 163 / 255, 184 / 255];

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1800,
      height: 1800,
      phi: 0,
      theta: 0.3,
      dark: isDarkMode ? 1 : 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 15000,
      mapBrightness: 3,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 0.8,
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.07 },
        { location: [40.7128, -74.0060], size: 0.07 },
        { location: [51.5074, -0.1278], size: 0.07 },
        { location: [35.6762, 139.6503], size: 0.07 },
        { location: [-33.8688, 151.2093], size: 0.07 },
        { location: [19.0760, 72.8777], size: 0.07 },
        { location: [1.3521, 103.8198], size: 0.07 },
        { location: [52.5200, 13.4050], size: 0.07 },
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', willChange: 'transform' }}
    />
  );
});

export default Globe;
