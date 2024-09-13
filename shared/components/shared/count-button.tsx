// 'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import { CountIconButton } from './count-icon-button';
import { useCart } from '@/shared/hooks';

export interface CountButtonProps {
  value?: number;
  size?: 'sm' | 'lg';
  onClick?: (type: 'plus' | 'minus') => void;
  className?: string;
}

export const CountButton: React.FC<CountButtonProps> = ({
  className,
  onClick,
  value = 1,
  size = 'sm',
}) => {
  // const {updating} =useCart()
  return (
    <div className={cn('inline-flex items-center justify-between gap-3', className)}>
      <CountIconButton
        onClick={() => onClick?.('minus')}
        disabled={value === 1}
        size={size}
        typeBtn="minus"
        // className={updating ? 'cursor-not-allowed' : 'cursor-pointer'} 
             />

      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>

      <CountIconButton onClick={() => onClick?.('plus')} size={size} typeBtn="plus" />
    </div>
  );
};
