import { ServiceItem } from './types';
import { Palette, Video, Megaphone, BarChart3 } from 'lucide-react';
import React from 'react';

export const SERVICES: ServiceItem[] = [
  {
    id: 'branding',
    title: 'Branding & Logo Design',
    category: 'Creative',
    description: 'Complete visual identity overhaul including logo, typography, and brand guidelines.',
    price: 'From 1,500 DH',
    priceValue: 1500,
    iconName: 'Palette'
  },
  {
    id: 'production',
    title: 'Professional Reels/Videos',
    category: 'Production',
    description: 'Pack of 4 high-quality reels designed for viral reach on Instagram and TikTok.',
    price: 'From 3,000 DH',
    priceValue: 3000,
    iconName: 'Video'
  },
  {
    id: 'marketing',
    title: 'Meta Ads Management',
    category: 'Marketing',
    description: 'Targeted ad campaigns on Facebook & Instagram to maximize ROI and leads.',
    price: 'From 2,000 DH/mo',
    priceValue: 2000,
    iconName: 'Megaphone'
  },
  {
    id: 'strategy',
    title: 'Full Digital Audit',
    category: 'Strategy',
    description: 'Deep dive into your current presence with a roadmap for 10x growth.',
    price: '500 DH',
    priceValue: 500,
    iconName: 'BarChart3'
  }
];

export const ICON_MAP: Record<string, React.ElementType> = {
  Palette: Palette,
  Video: Video,
  Megaphone: Megaphone,
  BarChart3: BarChart3
};
