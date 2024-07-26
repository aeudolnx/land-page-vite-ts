import { ReactNode } from 'react';

export interface titleProps {
  text: string;
  size?: 'large' | 'xlarge' | 'xxxlarge' | 'huge' | 'xhuge';
  color?: 'primaryColor' | 'secondaryColor' | 'mediumGrey' | 'white';
}

export interface textProps {
  text: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  color?: 'primaryColor' | 'secondaryColor' | 'mediumGrey' | 'white';
}

export interface menuProps {
  children: ReactNode;
}

export interface linkProps {
  text: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  color?: 'primaryColor' | 'secondaryColor' | 'mediumGrey' | 'white';
}

export interface mainProps {
  children: ReactNode;
  display?: 'flex' | '';
  alignItems?: 'center' | '';
}
