import { motion } from 'motion/react';
import { MapPin, Sun, Navigation, Layers, Compass, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && API_KEY.trim() !== '';

export default function MapSection() {
  const [open, setOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  // Primary office location in Addis Ababa (Bole Road Area)
  const HQ_POSITION = { lat: 8.9954, lng: 38.7844 };

  return (
    <section id="location" className="py-32 bg-slate-900 border-t-4 border-slate-950 text-white relative overflow-hidden">
      {/* Absolute tech style elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-slate-900 to-amber-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text/Address Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-amber-400 animate-spin-slow" size={24} />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-amber-400">Headquarters Location</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8 italic">
              Our Physical<br />
              <span className="text-slate-400">Grid Base</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              Visit our state-of-the-art testing facility, experience raw solid-state photovoltiac capabilities live, and consult with seasoned heavy-electrical grid engineers in person.
            </p>

            {/* Address Details Block */}
            <div className="p-8 bg-slate-950 rounded-[2rem] border-2 border-slate-800 space-y-6 relative overflow-hidden">
              <div className="absolute right-4 bottom-4 text-slate-900/40 select-none">
                <Sun size={120} strokeWidth={4} />
              </div>

              <div className="relative flex items-start gap-4 z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <MapPin size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">HQ Address</div>
                  <div className="text-lg font-black tracking-tight text-white uppercase italic">
                    Bole Road, Block 4B,<br />Addis Ababa, Ethiopia
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-4 z-10 pt-4 border-t border-slate-900">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                  <Navigation size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Quick Navigation</div>
                  <div className="text-sm text-slate-400 font-medium">
                    Opposite Millennium Hall, adjacent to the Renewable District Tower. Space available for heavy vehicles.
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${HQ_POSITION.lat},${HQ_POSITION.lng}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 hover:text-white transition-colors"
                >
                  Open in Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Google Map Frame with fallback */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] w-full border-[10px] border-slate-950 rounded-[3rem] overflow-hidden shadow-2xl bg-slate-950">
              
              {!hasValidKey ? (
                // Super styled fallback instructing user to add Google Maps Key
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center bg-slate-950 z-20">
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-6 animate-pulse">
                    <Layers size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2 italic">
                    Google Maps API Key Required
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mb-8 font-medium leading-relaxed">
                    To activate high-fidelity tracking, please provide a Google Maps Platform API key in AI Studio.
                  </p>
                  
                  <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 text-left max-w-md w-full text-xs space-y-3 font-medium">
                    <p className="text-slate-300">
                      <strong>1.</strong> Get a key from the{' '}
                      <a 
                        href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-400 underline"
                      >
                        Google Cloud Console
                      </a>.
                    </p>
                    <p className="text-slate-300">
                      <strong>2.</strong> Add it inside the **Secrets** panel:
                    </p>
                    <ul className="list-disc pl-5 text-slate-400 space-y-1">
                      <li>Open Settings (⚙️ gear icon, top-right)</li>
                      <li>Select Secrets</li>
                      <li>Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> as key</li>
                      <li>Paste your credential API key as value</li>
                    </ul>
                  </div>
                  
                  {/* Decorative Mock Map background style in fallback */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 opacity-30 pointer-events-none -z-10" />
                </div>
              ) : (
                // Pure active maps implementation
                <div className="w-full h-full relative">
                  <APIProvider apiKey={API_KEY} version="weekly">
                    <Map
                      defaultCenter={HQ_POSITION}
                      defaultZoom={15}
                      mapId="DEMO_MAP_ID"
                      internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                      style={{ width: '100%', height: '100%' }}
                      gestureHandling="cooperative"
                      options={{
                        styles: [
                          { elementType: 'geometry', stylers: [{ color: '#1e293b' }] },
                          { elementType: 'labels.text.stroke', stylers: [{ color: '#0f172a' }] },
                          { elementType: 'labels.text.fill', stylers: [{ color: '#64748b' }] },
                          { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#334155' }] },
                          { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#94a3b8' }] },
                          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#0f172a' }] },
                          { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#1e293b' }] },
                          { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#475569' }] },
                          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#090d16' }] }
                        ],
                        disableDefaultUI: false
                      }}
                    >
                      <AdvancedMarker
                        ref={markerRef}
                        position={HQ_POSITION}
                        onClick={() => setOpen(true)}
                        title="GENBATA HQ"
                      >
                        <Pin background="#f59e0b" glyphColor="#0f172a" borderColor="#0f172a" scale={1.2} />
                      </AdvancedMarker>

                      {open && (
                        <InfoWindow
                          anchor={marker}
                          onCloseClick={() => setOpen(false)}
                        >
                          <div className="p-3 text-slate-900 font-sans max-w-[200px]">
                            <h4 className="text-sm font-black uppercase tracking-tight italic mb-1">GENBATA HQ</h4>
                            <p className="text-xs text-slate-500 font-medium">Bole Road, Block 4B, Addis Ababa. Always-On Energetic Base.</p>
                          </div>
                        </InfoWindow>
                      )}
                    </Map>
                  </APIProvider>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
