import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContentScript {
  hook: string;
  body: string;
  cta: string;
}

export enum ServiceType {
  CERAMIC = 'Ceramic Coating',
  PPF = 'Paint Protection Film',
  TINT = 'Window Tinting',
  DETAIL = 'Full Mobile Detail'
}