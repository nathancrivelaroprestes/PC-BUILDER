import { ComponentSpec, RigPurpose, RigTier, PrebuiltRig } from "@/types/build";

export const PURPOSE_LABELS: Record<RigPurpose, { title: string; subtitle: string; icon: string }> = {
  GAMES_4K: {
    title: "Games 4K Competitivo",
    subtitle: "Taxa de quadros extrema, Ray Tracing em Ultra e latência mínima.",
    icon: "Gamepad2",
  },
  EDICAO_3D: {
    title: "Edição 3D & Render",
    subtitle: "Poder massivo de VRAM para Blender, Maya, Premiere e Unreal Engine 5.",
    icon: "Layers",
  },
  STREAMING_PRO: {
    title: "Streaming & Criação Pro",
    subtitle: "Dual encoder AV1, multitarefa sem drops e gravação em 4K HDR.",
    icon: "Video",
  },
  WORKSTATION: {
    title: "Workstation & IA Local",
    subtitle: "Cálculo intensivo, modelos de linguagem locais e estabilidade 24/7.",
    icon: "Cpu",
  },
};

export const TIER_LABELS: Record<RigTier, { title: string; badge: string; description: string }> = {
  ENTRADA: {
    title: "Nexus Core (Alta Entrada)",
    badge: "Melhor Custo-Benefício",
    description: "Componentes selecionados a dedo para alta performance equilibrada.",
  },
  ENTHUSIAST: {
    title: "Nexus Apex (Enthusiast)",
    badge: "Flagship Mais Popular",
    description: "Projetado para entusiastas que exigem configurações ultra e altas resoluções.",
  },
  EXTREME: {
    title: "Nexus Titan (Extreme)",
    badge: "Sem Limites / Overkill",
    description: "O mais alto escalão de hardware existente no mercado mundial.",
  },
};

export const CONFIGURATOR_MATRIX: Record<RigPurpose, Record<RigTier, ComponentSpec>> = {
  GAMES_4K: {
    ENTRADA: {
      cpu: "AMD Ryzen 7 7800X3D (8-Core, 5.0GHz, 104MB Cache)",
      gpu: "NVIDIA GeForce RTX 4070 Ti Super 16GB GDDR6X",
      ram: "32GB (2x16GB) Corsair Vengeance DDR5 6000MHz CL30",
      storage: "2TB Kingston KC3000 NVMe M.2 Gen4 (7.000 MB/s)",
      motherboard: "ASUS TUF Gaming B650-Plus WiFi",
      cooling: "Water Cooler Lian Li Galahad II Trinity 360mm ARGB",
      psu: "Corsair RM850e 850W 80 Plus Gold Modular ATX 3.0",
      case: "Lian Li O11 Vision Black com 6x Fans Unifan SL-Infinity",
      totalPrice: 14890,
      estimatedFps: [
        { game: "Cyberpunk 2077 (4K RT)", fps: 95 },
        { game: "Black Myth: Wukong (4K DLSS)", fps: 110 },
        { game: "Valorant (1440p High)", fps: 580 },
        { game: "GTA VI Ready (4K Est.)", fps: 90 },
      ],
      score: { gaming: 92, render: 84, multitask: 88 },
    },
    ENTHUSIAST: {
      cpu: "AMD Ryzen 7 9800X3D (Zen 5 3D V-Cache, 5.2GHz)",
      gpu: "NVIDIA GeForce RTX 5080 16GB GDDR7 Blackwell",
      ram: "64GB (2x32GB) G.Skill Trident Z5 RGB DDR5 6400MHz CL32",
      storage: "4TB Crucial T700 PCIe 5.0 NVMe (12.400 MB/s)",
      motherboard: "ASUS ROG Strix X670E-E Gaming WiFi",
      cooling: "Water Cooler NZXT Kraken Elite 360 RGB LCD",
      psu: "Seasonic Vertex GX-1000 1000W 80 Plus Gold ATX 3.0",
      case: "Hyte Y70 Touch Infinite Black com Tela 4K Integrada",
      totalPrice: 24900,
      estimatedFps: [
        { game: "Cyberpunk 2077 (4K RT Overdrive)", fps: 145 },
        { game: "Black Myth: Wukong (4K Cinematic)", fps: 160 },
        { game: "Call of Duty: Warzone (4K Ultra)", fps: 220 },
        { game: "GTA VI Ready (4K Est.)", fps: 135 },
      ],
      score: { gaming: 99, render: 91, multitask: 95 },
    },
    EXTREME: {
      cpu: "AMD Ryzen 9 9950X (16-Core, 32-Threads, 5.7GHz)",
      gpu: "NVIDIA GeForce RTX 5090 32GB GDDR7 Blackwell 512-bit",
      ram: "96GB (2x48GB) Corsair Dominator Titanium DDR5 7000MHz",
      storage: "8TB (2x 4TB Samsung 990 PRO Gen4 em RAID 0 - 14.800 MB/s)",
      motherboard: "ASUS ROG Crosshair X670E Extreme",
      cooling: "Custom Watercooling Loop EKWB Quantum Reflection² D-RGB",
      psu: "Corsair AX1600i 1600W 80 Plus Titanium Digital",
      case: "Lian Li V3000 PLUS Full Tower Custom Engineering",
      totalPrice: 42990,
      estimatedFps: [
        { game: "Cyberpunk 2077 (4K Full Path Tracing)", fps: 195 },
        { game: "Black Myth: Wukong (4K Nativo Máximo)", fps: 210 },
        { game: "Flight Simulator 2024 (4K Ultra)", fps: 165 },
        { game: "GTA VI Ready (4K Est.)", fps: 180 },
      ],
      score: { gaming: 100, render: 100, multitask: 100 },
    },
  },
  EDICAO_3D: {
    ENTRADA: {
      cpu: "Intel Core i7-14700K (20-Core, 28-Threads, 5.6GHz)",
      gpu: "NVIDIA GeForce RTX 4070 Ti Super 16GB GDDR6X (CUDA/OptiX)",
      ram: "64GB (2x32GB) Kingston Fury Beast DDR5 5600MHz",
      storage: "2TB Samsung 990 PRO NVMe Gen4 (7.450 MB/s)",
      motherboard: "MSI MAG Z790 Tomahawk WiFi",
      cooling: "Water Cooler Arctic Liquid Freezer III 360 Black",
      psu: "XPG Core Reactor II 850W 80 Plus Gold ATX 3.0",
      case: "Fractal Design North Charcoal Black com Painel em Madeira Real",
      totalPrice: 15490,
      estimatedFps: [
        { game: "Blender 4.2 BMW Render", fps: 6 }, // segundos
        { game: "Premiere 4K Timeline Playback", fps: 60 },
        { game: "Unreal Engine 5.4 Viewport", fps: 120 },
        { game: "After Effects Real-Time Preview", fps: 60 },
      ],
      score: { gaming: 88, render: 93, multitask: 91 },
    },
    ENTHUSIAST: {
      cpu: "Intel Core Ultra 9 285K (24-Core, 5.7GHz, NPU IA dedicada)",
      gpu: "NVIDIA GeForce RTX 5080 16GB GDDR7 Blackwell",
      ram: "96GB (2x48GB) G.Skill Ripjaws S5 DDR5 6000MHz",
      storage: "4TB Crucial T705 Gen5 NVMe (14.500 MB/s)",
      motherboard: "ASUS ProArt Z890-CREATOR WiFi (Dual Thunderbolt 4)",
      cooling: "Water Cooler Lian Li HydroShift LCD 360 TL",
      psu: "be quiet! Dark Power 13 1000W 80 Plus Titanium",
      case: "Fractal Design Define 7 XL Sound-Dampened Black",
      totalPrice: 26900,
      estimatedFps: [
        { game: "Blender 4.2 BMW Render", fps: 3 },
        { game: "DaVinci Resolve 8K RAW Realtime", fps: 60 },
        { game: "Unreal Engine 5.4 Nanite+Lumen", fps: 145 },
        { game: "Cinema 4D OctaneBench Score", fps: 980 },
      ],
      score: { gaming: 94, render: 98, multitask: 97 },
    },
    EXTREME: {
      cpu: "AMD Ryzen 9 9950X (16-Core Zen 5, 32-Threads, 5.7GHz)",
      gpu: "NVIDIA GeForce RTX 5090 32GB GDDR7 (21.760 núcleos CUDA)",
      ram: "128GB (4x32GB) Corsair Vengeance DDR5 6000MHz ECC Ready",
      storage: "8TB Samsung 990 EVO NVMe Gen5 + 16TB Enterprise HDD",
      motherboard: "ASUS ProArt X670E-CREATOR WiFi 10Gbps Ethernet",
      cooling: "Custom Loop Duplo EK-Quantum Workstation Edition",
      psu: "Corsair AX1600i Titanium 1600W Digital",
      case: "Lian Li O11 Dynamic EVO XL Black",
      totalPrice: 44900,
      estimatedFps: [
        { game: "Blender Monster Benchmark", fps: 1 },
        { game: "Render 8K REDCODE RAW", fps: 120 },
        { game: "UE5 Matrix City 4K Native", fps: 130 },
        { game: "AI Model Fine-Tuning Batch", fps: 300 },
      ],
      score: { gaming: 98, render: 100, multitask: 100 },
    },
  },
  STREAMING_PRO: {
    ENTRADA: {
      cpu: "AMD Ryzen 7 7700X (8-Core, 5.4GHz) + Placa Elgato 4K60 Pro",
      gpu: "NVIDIA GeForce RTX 4070 Super 12GB Dual AV1 Encoder",
      ram: "32GB (2x16GB) Corsair Vengeance RGB DDR5 6000MHz",
      storage: "2TB Kingston KC3000 PCIe 4.0 NVMe",
      motherboard: "Gigabyte B650 AORUS Elite AX",
      cooling: "DeepCool LT720 360mm High-Performance Liquid",
      psu: "Corsair RM750e 750W 80 Plus Gold ATX 3.0",
      case: "Montech King 95 Pro Curved Glass Black",
      totalPrice: 13990,
      estimatedFps: [
        { game: "Stream 1440p60 AV1 + Game 1440p", fps: 165 },
        { game: "OBS Studio CPU Load", fps: 4 }, // %
        { game: "Warzone Dual Stream", fps: 140 },
        { game: "Render Instant Highlight Clip", fps: 15 },
      ],
      score: { gaming: 89, render: 86, multitask: 92 },
    },
    ENTHUSIAST: {
      cpu: "AMD Ryzen 7 9800X3D (Zen 5 3D V-Cache, 5.2GHz)",
      gpu: "NVIDIA GeForce RTX 5080 16GB GDDR7 Dual Gen8 NVENC",
      ram: "64GB (2x32GB) Kingston Fury Renegade RGB DDR5 6400MHz",
      storage: "4TB Samsung 990 PRO Gen4 NVMe (Partição Stream/Cache)",
      motherboard: "ASUS ROG Strix B650E-F Gaming WiFi",
      cooling: "Lian Li HydroShift 360 RGB LCD",
      psu: "Corsair RM1000x Shift 1000W 80 Plus Gold",
      case: "NZXT H9 Flow Dual-Chamber Black",
      totalPrice: 23990,
      estimatedFps: [
        { game: "Stream 4K60 YouTube + Twitch Multistream", fps: 180 },
        { game: "OBS Drop Frames", fps: 0 }, // 0 frames perdidos
        { game: "Apex Legends 1440p 240Hz", fps: 240 },
        { game: "VTuber 3D Avatar Tracking Latency", fps: 8 }, // ms
      ],
      score: { gaming: 98, render: 90, multitask: 96 },
    },
    EXTREME: {
      cpu: "AMD Ryzen 9 9950X (16-Core Zen 5, 32-Threads)",
      gpu: "NVIDIA GeForce RTX 5090 32GB GDDR7 + Placa Captura 4K144 HDR",
      ram: "96GB DDR5 6600MHz Low Latency G.Skill",
      storage: "8TB NVMe Gen5 Crucial T705 + 8TB SSD Scratch",
      motherboard: "ASRock X670E Taichi Carrara",
      cooling: "Water Cooler ASUS ROG Ryujin III 360 ARGB com Tela OLED 3.5\"",
      psu: "Seasonic Prime TX-1300 Titanium 1300W",
      case: "Lian Li O11 Dynamic EVO RGB Black",
      totalPrice: 41900,
      estimatedFps: [
        { game: "Multistream 4K120 HDR sem perdas", fps: 200 },
        { game: "Transcodificação simultânea 4 streams", fps: 120 },
        { game: "Cyberpunk 4K Path Tracing on Stream", fps: 160 },
        { game: "Latência Total de Render de Cena", fps: 4 }, // ms
      ],
      score: { gaming: 100, render: 98, multitask: 100 },
    },
  },
  WORKSTATION: {
    ENTRADA: {
      cpu: "AMD Ryzen 9 7900X (12-Core, 24-Threads, 5.6GHz)",
      gpu: "NVIDIA RTX 4070 Ti Super 16GB ECC-Supported Studio",
      ram: "64GB DDR5 5600MHz Kingston ECC On-Die",
      storage: "2TB Samsung 990 PRO NVMe Gen4",
      motherboard: "ASUS ProArt B650-CREATOR",
      cooling: "Noctua NH-D15 chromax.black Dual-Tower",
      psu: "Corsair RM850x 850W Gold",
      case: "Fractal Design Meshify 2 Black Solid",
      totalPrice: 16290,
      estimatedFps: [
        { game: "Simulação MatLab & Python Matrix", fps: 95 },
        { game: "Compilação Chromium / C++", fps: 12 }, // min
        { game: "Cálculo FEA SolidWorks", fps: 90 },
        { game: "Virtualização Proxmox (8 VMs)", fps: 99 },
      ],
      score: { gaming: 85, render: 94, multitask: 96 },
    },
    ENTHUSIAST: {
      cpu: "Intel Core Ultra 9 285K (24-Core, Arquitetura Arrow Lake)",
      gpu: "NVIDIA GeForce RTX 5080 16GB GDDR7",
      ram: "128GB (4x32GB) Kingston Fury Beast DDR5 5600MHz",
      storage: "4TB NVMe Gen5 Sabrent Rocket 5 (14.000 MB/s)",
      motherboard: "Gigabyte Z890 AERO D (Thunderbolt 4 + 10GbE)",
      cooling: "Water Cooler Arctic Liquid Freezer III 420mm",
      psu: "Super Flower Leadex Titanium 1200W",
      case: "be quiet! Dark Base Pro 901 Inverted Support",
      totalPrice: 28500,
      estimatedFps: [
        { game: "Inferência LLM LLaMA 3 70B (4-bit)", fps: 42 }, // tokens/s
        { game: "Compilação Kernel Linux", fps: 4 }, // min
        { game: "Simulação CFD Ansys Fluent", fps: 98 },
        { game: "Estabilidade Contínua 72h Stress", fps: 100 },
      ],
      score: { gaming: 92, render: 99, multitask: 99 },
    },
    EXTREME: {
      cpu: "AMD Ryzen Threadripper 7960X (24-Core, 48-Threads) / 9950X",
      gpu: "NVIDIA GeForce RTX 5090 32GB GDDR7 Workstation Certified",
      ram: "192GB (4x48GB) Corsair Vengeance DDR5 5600MHz",
      storage: "16TB (4x 4TB Gen5 NVMe em RAID 10 Hardware)",
      motherboard: "ASUS ProArt TRX50 / X670E Extreme",
      cooling: "Custom Water Loop Industrial Bitspower Dual Radiator",
      psu: "Corsair AX1600i 1600W Titanium Digital",
      case: "Caselabs / Lian Li V3000 Plus Workstation Vault",
      totalPrice: 52900,
      estimatedFps: [
        { game: "Inferência LLM LLaMA 3 70B FP16", fps: 78 }, // tokens/s
        { game: "Render V-Ray Distributed", fps: 100 },
        { game: "Docker Swarm 32 Containers Load", fps: 100 },
        { game: "MTBF Esperado Sem Interrupções", fps: 999 }, // horas
      ],
      score: { gaming: 96, render: 100, multitask: 100 },
    },
  },
};

export const PREBUILT_RIGS: PrebuiltRig[] = [
  {
    id: "pulse",
    slug: "nexus-pulse",
    name: "Nexus Pulse",
    tagline: "Alta performance competitiva com engenharia cirúrgica.",
    purpose: "GAMES_4K",
    tier: "ENTRADA",
    price: 14890,
    badge: "Mais Vendido de Entrada",
    specs: {
      cpu: "AMD Ryzen 7 7800X3D (8C/16T, 104MB Cache)",
      gpu: "NVIDIA GeForce RTX 4070 Ti Super 16GB",
      ram: "32GB DDR5 6000MHz CL30 RGB",
      storage: "2TB NVMe M.2 Gen4 (7.000 MB/s)",
      cooling: "Water Cooler Lian Li Galahad II 360",
      psu: "Corsair 850W Gold Modular ATX 3.0",
    },
    highlightFeatures: [
      "Perfeito para monitores OLED 1440p 240Hz e 4K 120Hz",
      "Cable management invisível com sleeves preto carbono",
      "Temperaturas abaixo de 62°C em sessões prolongadas",
    ],
    fpsDisplay: {
      title: "Warzone / Cyberpunk 4K",
      fps: "110+ FPS Médio",
    },
  },
  {
    id: "apex",
    slug: "nexus-apex",
    name: "Nexus Apex",
    tagline: "O ápice da tecnologia gráfica para entusiastas implacáveis.",
    purpose: "GAMES_4K",
    tier: "ENTHUSIAST",
    price: 24900,
    badge: "Escolha do Entusiasta",
    specs: {
      cpu: "AMD Ryzen 7 9800X3D (Zen 5 3D V-Cache)",
      gpu: "NVIDIA GeForce RTX 5080 16GB GDDR7",
      ram: "64GB DDR5 6400MHz Low-Latency CL32",
      storage: "4TB Crucial T700 Gen5 (12.400 MB/s)",
      cooling: "NZXT Kraken Elite 360 LCD Display",
      psu: "Seasonic Vertex 1000W 80+ Gold ATX 3.0",
    },
    highlightFeatures: [
      "Pronto para Ray Tracing Completo (Path Tracing) em 4K nativo",
      "Tela LCD integrada com métricas de telemetria em tempo real",
      "Curva de ventoinhas afinada para menos de 26 dB sob estresse",
    ],
    fpsDisplay: {
      title: "Cyberpunk 4K Overdrive",
      fps: "145+ FPS Estável",
    },
  },
  {
    id: "titan",
    slug: "nexus-titan",
    name: "Nexus Titan",
    tagline: "Sem compromissos. O ápice absoluto da engenharia humana em PCs.",
    purpose: "GAMES_4K",
    tier: "EXTREME",
    price: 42990,
    badge: "God Tier / Edição Limitada",
    specs: {
      cpu: "AMD Ryzen 9 9950X (16C/32T) ou Core Ultra 9 285K",
      gpu: "NVIDIA GeForce RTX 5090 32GB GDDR7 512-bit",
      ram: "96GB Dominator Titanium DDR5 7000MHz",
      storage: "8TB NVMe Gen5 RAID 0 Ultrarrápido",
      cooling: "Custom Watercooling Loop EKWB Dual Block",
      psu: "Corsair AX1600i 1600W Titanium Digital",
    },
    highlightFeatures: [
      "Fluido refrigerante térmico premium com aditivos anticorrosão",
      "Chassi sob medida com painéis de alumínio aeroespacial",
      "Certificado de calibração assinado individualmente pelo engenheiro-chefe",
    ],
    fpsDisplay: {
      title: "Todos os Jogos no Máximo Absoluto",
      fps: "195+ FPS em 4K",
    },
  },
];
