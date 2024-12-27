import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export interface FeatureAccordionItem {
  id: string;
  title: string;
  content: string;
}