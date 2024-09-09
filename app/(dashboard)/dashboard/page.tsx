import React from 'react';
export interface PageProps {
  className?: string;
}

export const Page = ({ className }: PageProps) => {
  return <div className={className}>
DASHBOARD
</div>;
};