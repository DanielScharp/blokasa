import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './Button.module.css'

type Variant = 'primary' | 'forest' | 'light' | 'glass' | 'soft' | 'outline'
type Size = 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  icon?: string
  block?: boolean
  children: ReactNode
}

const cx = (variant: Variant, size: Size, block?: boolean, extra?: string) =>
  [styles.button, styles[variant], styles[size], block && styles.block, extra].filter(Boolean).join(' ')

/** Link com cara de botão. `to` navega dentro do site sem recarregar; `href` é para âncoras e links externos. */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  icon,
  block,
  children,
  className,
  to,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }) {
  const content = (
    <>
      <span>{children}</span>
      {icon && <img src={icon} alt="" aria-hidden className={styles.icon} />}
    </>
  )
  const cls = cx(variant, size, block, className)

  return to ? (
    <Link to={to} className={cls} {...rest}>
      {content}
    </Link>
  ) : (
    <a className={cls} {...rest}>
      {content}
    </a>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  block,
  children,
  className,
  type = 'button',
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={cx(variant, size, block, className)} {...rest}>
      <span>{children}</span>
      {icon && <img src={icon} alt="" aria-hidden className={styles.icon} />}
    </button>
  )
}
