import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: 'svc-001',
    slug: 'charpente-traditionnelle',
    title: 'Charpente Traditionnelle',
    description: 'Fermes, poutres apparentes, chevrons — le savoir-faire ancestral du bois',
    longDescription: "Maxence maîtrise l'art de la charpente traditionnelle dans toute sa splendeur : fermes à la Normande, poutres apparentes, pannes, chevrons taillés à la main. Que ce soit pour une construction neuve ou la rénovation d'une charpente ancienne, chaque assemblage est réalisé selon les règles de l'art. Bois massifs sélectionnés, assemblages tenon-mortaise, tailles soignées — une charpente qui dure des siècles.",
    icon: 'ChefHat',
    image: '/images/services/cuisine-moderne.jpg',
    features: ['Charpente sur mesure', 'Bois massifs sélectionnés', 'Assemblages tenon-mortaise', 'Fermes traditionnelles', 'Poutres apparentes', 'Garantie décennale'],
  },
  {
    id: 'svc-002',
    slug: 'charpente-moderne',
    title: 'Charpente Moderne & Extensions',
    description: 'Extensions bois, ossature bois, charpentes contemporaines',
    longDescription: "MDNT Construction conçoit et réalise vos charpentes modernes : extensions de maison en ossature bois, charpentes industrielles, fermettes, structures contemporaines. Du plan à la pose, Maxence coordonne l'intégralité du chantier avec rigueur et précision. Résultat : des structures solides, performantes et esthétiques qui valorisent votre habitat.",
    icon: 'LayoutGrid',
    image: '/images/services/escalier-bois.jpg',
    features: ['Extensions ossature bois', 'Charpentes industrielles', 'Fermettes modernes', 'Structures contemporaines', 'Coordination chantier', 'Respect des délais'],
  },
  {
    id: 'svc-003',
    slug: 'menuiserie-agencements',
    title: 'Menuiserie & Agencements',
    description: 'Escaliers, dressings, menuiseries extérieures — tout sur mesure',
    longDescription: "Au-delà de la charpente, Maxence réalise l'intégralité de vos menuiseries. Escaliers design, dressings sur mesure, portes et fenêtres bois, volets, bardages — chaque élément est fabriqué avec soin dans l'atelier MDNT Construction. Menuiserie intérieure et extérieure d'excellence, adaptée à votre style et à vos besoins.",
    icon: 'Hammer',
    image: '/images/services/dressing-lumineux.jpg',
    features: ['Escaliers design', 'Dressings modulables', 'Portes & fenêtres bois', 'Volets sur mesure', 'Bardages & terrasses', 'Finitions premium'],
  },
];
