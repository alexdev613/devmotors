import { ReactNode } from 'react';
import styles from './styles.module.scss';

export function Container ({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}