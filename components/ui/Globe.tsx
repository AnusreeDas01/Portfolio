"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

// Extend ThreeGlobe to be used in R3F
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}
extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const ASPECT_RATIO = 1.2;
const CAMERA_Z = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    {
      size: number;
      order: number;
      color: (t: number) => string;
      lat: number;
      lng: number;
    }[]
  >([]);
  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      buildData();
      buildMaterial();
    }
  }, [globeRef.current]);

  const buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultProps.shininess || 0.9;
  };

  const buildData = () => {
    const points = data.flatMap((arc) => {
      const rgb = hexToRgb(arc.color)!;
      return [
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.startLat,
          lng: arc.startLng,
        },
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.endLat,
          lng: arc.endLng,
        },
      ];
    });

    setGlobeData(
      points.filter(
        (v, i, a) =>
          a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
      )
    );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData.length) return;

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    startAnimation();
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current) return;

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => d.startLat)
      .arcStartLng((d) => d.startLng)
      .arcEndLat((d) => d.endLat)
      .arcEndLng((d) => d.endLng)
      .arcColor((d) => d.color)
      .arcAltitude((d) => d.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashAnimateTime(defaultProps.arcTime);

    globeRef.current
      .pointsData(globeData)
      .pointColor((d) => d.color(1))
      .pointRadius(2);
  };

  return <threeGlobe ref={globeRef} />;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;

  return (
    <Canvas camera={{ position: [0, 0, CAMERA_Z], fov: 50 }}>
      <ambientLight color={globeConfig.ambientLight || "#ffffff"} intensity={0.6} />
      <directionalLight color={globeConfig.directionalLeftLight || "#ffffff"} position={[-400, 100, 400]} />
      <directionalLight color={globeConfig.directionalTopLight || "#ffffff"} position={[-200, 500, 200]} />
      <pointLight color={globeConfig.pointLight || "#ffffff"} position={[-200, 500, 200]} intensity={0.8} />
      <Globe {...props} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const match = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  return match
    ? {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16),
      }
    : null;
}
