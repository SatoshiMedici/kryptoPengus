import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  external = false,
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-pixel text-xs tracking-wide transition-all duration-300 rounded-xl'

  const variants = {
    primary:
      'bg-beak-orange text-white px-8 py-4 hover:scale-[1.02] hover:shadow-lg hover:shadow-beak-orange/25 active:scale-[0.98]',
    secondary:
      'border-2 border-teal text-teal px-8 py-4 hover:bg-teal hover:text-white active:scale-[0.98]',
    ghost:
      'text-beak-orange px-4 py-2 hover:bg-beak-orange/5',
  }

  const disabledStyles = disabled
    ? 'cursor-not-allowed opacity-60 hover:scale-100 hover:shadow-none'
    : ''

  const classes = `${base} ${variants[variant]} ${disabledStyles} ${className}`

  if (disabled) {
    return (
      <span className={classes} role="button" aria-disabled="true">
        {children}
      </span>
    )
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
