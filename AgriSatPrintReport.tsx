import React from 'react';
import { SatelliteMetadata, XAIDecision, AlertMatrix, SimulationParameters, SpectralLayer } from './types/agrisat';

interface PrintReportProps {
  activeLayer: SpectralLayer;
  simParams: SimulationParameters;
  satMetadata: SatelliteMetadata[];
  xaiRecommendations: XAIDecision[];
  alerts: AlertMatrix[];
  simulatedMetrics: {
    calculatedNDVI: number;
    waterStressIndex: number;
    nitrogenDeficiencyRisk: number;
    predictedYieldMetric: number;
  };
}

export const AgriSatPrintReport: React.FC<PrintReportProps> = ({
  activeLayer,
  simParams,
  satMetadata,
  xaiRecommendations,
  alerts,
  simulatedMetrics,
}) => {
  const generationTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';

  return (
    <div className="hidden print:block w-full text-slate-100 bg-slate-950 font-sans">
      
      {/* PAGE 1: HEADER & REMOTE SENSING MATRIX OVERVIEW */}
      <div className="min-h-screen flex flex-col justify-between pb-10">
        <div>
          {/* Official Document Top Border Strip */}
          <div className="w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 mb-6" />
          
          {/* Header Metadata Section */}
          <div className="flex justify-between items-start border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-500 text-slate-950 px-2.5 py-1 font-mono font-black text-lg tracking-tighter rounded">
                  ISRO
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white uppercase">AgriSat AI Spatial Analysis Report</h1>
                  <p className="text-xs text-slate-400 font-mono">National Precision Agriculture Telemetry Infrastructure</p>
                </div>
              </div>
            </div>
            <div className="text-right font-mono text-[10px] text-slate-400 space-y-0.5">
              <p>DOC-ID: <span className="text-slate-200 font-bold">AS-2026-Nadir-9814</span></p>
              <p>Classification: <span className="text-emerald-400 font-bold">OPERATIONAL USER DATA</span></p>
              <p>Generated: {generationTimestamp}</p>
            </div>
          </div>

          {/* Plot Registry Context */}
          <div className="mt-6 grid grid-cols-3 gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl text-xs">
            <div>
              <span className="text-[10px] text-slate-400 font-mono block uppercase">Target Land Registry</span>
              <span className="font-bold text-slate-200 text-sm">Zone Grid: BR-409/2026</span>
              <span className="block text-slate-400 mt-0.5">Geo-Coordinates: 21.1458° N, 79.0882° E</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-mono block uppercase">Total Survey Area</span>
              <span className="font-bold text-slate-200 text-sm">4.82 Hectares</span>
              <span className="block text-slate-400 mt-0.5">Catchment: Lower Watershed Grid VII</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-mono block uppercase">Active Spectral Mode</span>
              <span className="font-bold text-emerald-400 text-sm font-mono">{activeLayer} Engine Matrix</span>
              <span className="block text-slate-400 mt-0.5">Telemetry Source: Constellation Composite</span>
            </div>
          </div>

          {/* Core Analytics Snapshot Block */}
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-slate-400 mt-8 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Calculated Analytical Diagnostics
          </h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
              <span className="text-[10px] text-slate-400 block font-mono">MODEL NDVI FACTOR</span>
              <span className="text-xl font-bold text-emerald-400 font-mono">{simulatedMetrics.calculatedNDVI}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
              <span className="text-[10px] text-slate-400 block font-mono">WATER STRESS INDEX</span>
              <span className="text-xl font-bold text-cyan-400 font-mono">{simulatedMetrics.waterStressIndex}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
              <span className="text-[10px] text-slate-400 block font-mono">NITROGEN DEFICIENCY</span>
              <span className="text-xl font-bold text-amber-400 font-mono">{simulatedMetrics.nitrogenDeficiencyRisk}%</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
              <span className="text-[10px] text-slate-400 block font-mono">PREDICTED YIELD CAP</span>
              <span className="text-xl font-bold text-yellow-400 font-mono">{simulatedMetrics.predictedYieldMetric} MT/Ha</span>
            </div>
          </div>

          {/* Map Layer Component Freeze - Mimics canvas snapshot styling */}
          <div className="mt-6 border border-slate-800 bg-slate-900 rounded-xl overflow-hidden">
            <div className="px-4 py-2 bg-slate-800/60 border-b border-slate-800 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300">Live Spatial Imagery Freeze Matrix Frame</span>
              <span className="text-emerald-400 font-bold">Spectral Band Combination: Active</span>
            </div>
            <div className="h-64 bg-slate-950 flex flex-col items-center justify-center relative p-6 text-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="border border-emerald-500/30 px-6 py-4 bg-emerald-950/20 rounded-xl max-w-md">
                <p className="text-sm font-bold text-emerald-400 font-mono uppercase tracking-wider mb-1">{activeLayer} Spectral Map State</p>
                <p className="text-xs text-slate-400 leading-normal">
                  The client browser has captured the structural geometries for Plot Registry BR-409. Cross-referenced with pixel grids, soil profiles, and NIR band arrays.
                </p>
              </div>
            </div>
          </div>

          {/* Active Sensor Constellation Data Logs */}
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-slate-400 mt-8 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> Orbital Sensor Fleet Telemetry Logs
          </h2>
          <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden font-mono">
            <thead>
              <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <th className="p-2.5">ISRO Satellite Asset</th>
                <th className="p-2.5">Spatial Resolution</th>
                <th className="p-2.5">Scan Recency</th>
                <th className="p-2.5">Cloud Contamination</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {satMetadata.map((meta) => (
                <tr key={meta.asset} className="text-slate-200">
                  <td className="p-2.5 font-bold">{meta.asset}</td>
                  <td className="p-2.5 text-slate-300">{meta.resolution}</td>
                  <td className="p-2.5 text-slate-300">{meta.lastScan}</td>
                  <td className="p-2.5 text-slate-400">{meta.cloudCoverage}% Max Block</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer for Page 1 */}
        <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>AgriSat AI • Technical Documentation Terminal Ledger</span>
          <span>Page 1 of 2</span>
        </div>
      </div>

      {/* PAGE BREAK CONFIGURATION */}
      <div className="print:break-after-page" />

      {/* PAGE 2: EXPLAINABLE AI DIAGNOSTICS & SYSTEM AUDIT TRAIL */}
      <div className="min-h-screen flex flex-col justify-between pb-10 pt-6">
        <div>
          <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-6">
            <h2 className="text-base font-bold text-white uppercase tracking-tight">Section II: Deep Diagnostic Explanations</h2>
            <span className="text-[10px] font-mono text-slate-500">DOCID-AS-2026-Nadir-9814</span>
          </div>

          {/* Deep Explainable Inference Layout */}
          <div className="space-y-4">
            {xaiRecommendations.map((xai) => (
              <div key={xai.id} className="border border-slate-800 bg-slate-900/40 rounded-xl p-4 space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">Core Expert Automation Recommendation Directive:</span>
                  <p className="text-sm font-bold text-slate-100 mt-1 leading-relaxed">{xai.recommendation}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-950 p-3 rounded-lg border border-slate-800/60 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block">AI INFERENCE CONFIDENCE SCORE:</span>
                    <span className="text-emerald-400 font-black text-sm">{xai.confidence}% Standard Distribution</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">CROP LOSS ENVIRONMENTAL RISK CALC:</span>
                    <span className="text-amber-400 font-black text-sm">{xai.riskScore} / 100 Risk Coeff</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Multi-Spectral Array Sensor Evidence Cascade:</span>
                  {xai.spectralTriggers.map((trig, idx) => (
                    <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
                      <div className="flex justify-between font-mono font-bold text-slate-200 border-b border-slate-900 pb-1 mb-1.5">
                        <span>🛰 Band Index Array: [{trig.index}]</span>
                        <span className="text-rose-400">{trig.delta} Deviation</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed font-sans">{trig.scientificRationale}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950 p-3 rounded-lg border border-emerald-500/20 text-xs font-mono">
                  <span className="text-emerald-400 font-bold block">Telemetry Matrix Validation Vector (Ground-Truth Sync):</span>
                  <p className="text-slate-300 mt-1 font-sans leading-normal">{xai.groundTruthValidation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sandbox Environmental Testing Vector Matrix */}
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-slate-400 mt-8 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" /> Sandbox Simulation Boundary Configuration
          </h2>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl text-xs font-mono grid grid-cols-3 gap-y-3 gap-x-4">
            <p className="flex justify-between border-b border-slate-800 pb-1"><span>Rainfall Input Load:</span> <span className="text-slate-200 font-bold">{simParams.rainfallMm} mm</span></p>
            <p className="flex justify-between border-b border-slate-800 pb-1"><span>Ambient Temperature Vector:</span> <span className="text-slate-200 font-bold">{simParams.temperatureC} °C</span></p>
            <p className="flex justify-between border-b border-slate-800 pb-1"><span>Atmospheric Humidity Multiplier:</span> <span className="text-slate-200 font-bold">{simParams.humidityPct} %</span></p>
            <p className="flex justify-between border-b border-slate-800/40"><span>Fertilizer Concentration:</span> <span className="text-slate-200 font-bold">{simParams.fertilizerKgHa} kg/Ha</span></p>
            <p className="flex justify-between border-b border-slate-800/40"><span>Soil Substrate Moisture Sat:</span> <span className="text-slate-200 font-bold">{simParams.soilMoisturePct} %</span></p>
          </div>

          {/* Validation Footprint / Cryptographic Authentication Block */}
          <div className="mt-12 pt-8 border-t border-dashed border-slate-800 flex justify-between items-center">
            <div className="space-y-1 text-xs">
              <p className="font-mono text-[10px] text-slate-500">REGULATORY INFRASTRUCTURE ENCRYPTION MATRIX</p>
              <p className="text-slate-300 font-bold">AgriSat AI Inference Model Core v3.2</p>
              <p className="text-slate-400 text-[11px]">Bhuvan Geoportall Spatial Link Interface Verified</p>
            </div>
            {/* Structural representation of an official verification QR stamp space */}
            <div className="w-16 h-16 border border-slate-700 bg-slate-900 rounded p-1 flex flex-col justify-between items-center text-[8px] font-mono text-slate-400">
              <div className="w-full h-full border border-dashed border-slate-600 flex items-center justify-center font-bold text-center text-slate-500">
                QR SEAL
              </div>
            </div>
          </div>
        </div>

        {/* Footer for Page 2 */}
        <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>AgriSat AI • Technical Documentation Terminal Ledger</span>
          <span>Page 2 of 2</span>
        </div>
      </div>

    </div>
  );
};
