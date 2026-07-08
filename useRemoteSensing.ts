import { useState, useEffect, useCallback } from 'react';
import { SpectralLayer, SimulationParameters } from '../types/agrisat';

export const useRemoteSensing = (initialParameters: SimulationParameters) => {
  const [activeLayer, setActiveLayer] = useState<SpectralLayer>('NDVI');
  const [comparisonLayer, setComparisonLayer] = useState<SpectralLayer>('TRUE_COLOR');
  const [opacity, setOpacity] = useState<number>(0.85);
  const [isSplitScreen, setIsSplitScreen] = useState<boolean>(false);
  const [timelinePeriod, setTimelinePeriod] = useState<string>('30_DAYS');
  const [isPlayingTimeline, setIsPlayingTimeline] = useState<boolean>(false);
  const [simulatedMetrics, setSimulatedMetrics] = useState({
    calculatedNDVI: 0.68,
    waterStressIndex: 0.24,
    nitrogenDeficiencyRisk: 12,
    predictedYieldMetric: 4.2,
  });

  const runSpectralSimulation = useCallback((params: SimulationParameters) => {
    // Remote Sensing Index Formula Emulations:
    // NDVI = (NIR - Red) / (NIR + Red)
    // NDWI = (Green - NIR) / (Green + NIR)
    const baselineNDVI = params.soilMoisturePct > 40 ? 0.72 : 0.45;
    const computedNDVI = Math.min(0.95, Math.max(0.1, baselineNDVI + (params.fertilizerKgHa * 0.001) - (params.temperatureC > 38 ? 0.15 : 0)));
    const waterStress = Math.max(0, 1 - (params.soilMoisturePct / 100) - (params.rainfallMm * 0.002));
    const nitrogenRisk = Math.max(0, 100 - (params.fertilizerKgHa * 0.8) + (params.humidityPct * 0.2));
    const yieldEst = Math.max(0.5, (computedNDVI * 5.2) - (waterStress * 1.8));

    setSimulatedMetrics({
      calculatedNDVI: parseFloat(computedNDVI.toFixed(3)),
      waterStressIndex: parseFloat(waterStress.toFixed(3)),
      nitrogenDeficiencyRisk: Math.min(100, Math.round(nitrogenRisk)),
      predictedYieldMetric: parseFloat(yieldEst.toFixed(2)),
    });
  }, []);

  useEffect(() => {
    runSpectralSimulation(initialParameters);
  }, [initialParameters, runSpectralSimulation]);

  return {
    activeLayer,
    setActiveLayer,
    comparisonLayer,
    setComparisonLayer,
    opacity,
    setOpacity,
    isSplitScreen,
    setIsSplitScreen,
    timelinePeriod,
    setTimelinePeriod,
    isPlayingTimeline,
    setIsPlayingTimeline,
    simulatedMetrics,
    recalculateEngine: runSpectralSimulation
  };
};
