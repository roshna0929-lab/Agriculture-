export type SatelliteAsset = 'Cartosat-3' | 'Resourcesat-2A' | 'RISAT-1A (EOS-04)' | 'Oceansat-3' | 'Sentinel-2B' | 'Landsat-9';

export type SpectralLayer = 'TRUE_COLOR' | 'FALSE_COLOR' | 'NDVI' | 'EVI' | 'NDWI' | 'SAVI' | 'LST_THERMAL' | 'CHLOROPHYLL';

export interface SatelliteMetadata {
  asset: SatelliteAsset;
  resolution: string;
  lastScan: string;
  cloudCoverage: number;
  acquisitionTime: string;
  revisitTime: string;
  status: 'Operational' | 'Tasked' | 'Degraded';
}

export interface XAIDecision {
  id: string;
  recommendation: string;
  targetMetric: string;
  confidence: number;
  riskScore: number;
  satelliteSources: SatelliteAsset[];
  spectralTriggers: {
    index: SpectralLayer;
    delta: string;
    scientificRationale: string;
  }[];
  groundTruthValidation: string;
}

export interface AlertMatrix {
  id: string;
  type: 'Flood' | 'Drought' | 'PestOutbreak' | 'NutrientDeficiency' | 'Heatwave' | 'Frost';
  severity: 'CRITICAL' | 'WARNING' | 'ADVISORY';
  impactZone: string;
  recommendedAction: string;
  countdownMinutes: number;
  satelliteSource: SatelliteAsset;
}

export interface SimulationParameters {
  rainfallMm: number;
  temperatureC: number;
  humidityPct: number;
  fertilizerKgHa: number;
  soilMoisturePct: number;
}
