export type RigPurpose =
  | "GAMES_4K"
  | "EDICAO_3D"
  | "STREAMING_PRO"
  | "WORKSTATION";

export type RigTier = "ENTRADA" | "ENTHUSIAST" | "EXTREME";

export interface ComponentSpec {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  motherboard: string;
  cooling: string;
  psu: string;
  case: string;
  totalPrice: number;
  estimatedFps: {
    game: string;
    fps: number;
  }[];
  score: {
    gaming: number;
    render: number;
    multitask: number;
  };
}

export interface SavedBuildItem {
  id: string;
  userId: string;
  name: string;
  purpose: string;
  tier: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  totalPrice: number;
  createdAt: string | Date;
}

export interface PrebuiltRig {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  purpose: RigPurpose;
  tier: RigTier;
  price: number;
  badge?: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    cooling: string;
    psu: string;
  };
  highlightFeatures: string[];
  fpsDisplay: {
    title: string;
    fps: string;
  };
}
