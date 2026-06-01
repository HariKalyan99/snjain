import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { regions } from '../../data/site';
import 'leaflet/dist/leaflet.css';

const HUB = regions[0];
const DARK_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

function markerIcon(active, hub) {
  return L.divIcon({
    className: 'trade-marker-icon',
    html: `
      <div class="trade-marker ${active ? 'trade-marker--active' : ''} ${hub ? 'trade-marker--hub' : ''}" aria-hidden="true">
        <span class="trade-marker__ring"></span>
        <span class="trade-marker__dot"></span>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

/** Pans / zooms the map when the selected region changes. */
function MapFocus({ active }) {
  const map = useMap();

  useEffect(() => {
    const target = regions[active];
    if (!target) return;

    if (active === 0) {
      map.flyTo([target.lat, target.lng], 5, { duration: 1.1 });
      return;
    }

    const bounds = L.latLngBounds(
      [HUB.lat, HUB.lng],
      [target.lat, target.lng],
    );
    map.flyToBounds(bounds, {
      padding: [48, 48],
      maxZoom: 5,
      duration: 1.1,
    });
  }, [active, map]);

  return null;
}

/** Initial framing — all corridors visible. */
function MapInitialBounds() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(regions.map((r) => [r.lat, r.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 3, animate: false });
  }, [map]);

  return null;
}

export default function TradeMap({ active, onSelect }) {
  const hubPosition = useMemo(() => [HUB.lat, HUB.lng], []);

  return (
    <div className="trade-map relative z-0 isolate h-[360px] w-full overflow-hidden border border-white/10 bg-ink sm:h-[400px] lg:h-[460px]">
      <MapContainer
        center={hubPosition}
        zoom={3}
        scrollWheelZoom={false}
        className="h-full w-full"
        attributionControl
      >
        <TileLayer url={DARK_TILES} attribution={TILE_ATTRIBUTION} />
        <MapInitialBounds />
        <MapFocus active={active} />

        {regions.slice(1).map((region, i) => {
          const index = i + 1;
          const highlighted = active === index;
          return (
            <Polyline
              key={region.name}
              positions={[
                [HUB.lat, HUB.lng],
                [region.lat, region.lng],
              ]}
              pathOptions={{
                color: highlighted ? '#FF372F' : 'rgba(255, 255, 255, 0.22)',
                weight: highlighted ? 2.5 : 1.5,
                dashArray: highlighted ? undefined : '6 10',
                opacity: active === 0 ? 0.5 : highlighted ? 1 : 0.28,
              }}
            />
          );
        })}

        {regions.map((region, index) => (
          <Marker
            key={region.name}
            position={[region.lat, region.lng]}
            icon={markerIcon(active === index, region.hub)}
            eventHandlers={{
              click: () => onSelect(index),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
