
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatProps {
  value: string;
  label: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}