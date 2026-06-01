import { Link } from 'react-router-dom';

const base =
  'group inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ease-smooth';

const variants = {
  primary: 'bg-red text-white hover:bg-ink',
  dark: 'bg-ink text-white hover:bg-red',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white',
  ghost: 'border border-white/25 text-white hover:bg-white hover:text-ink',
};

function Arrow() {
  return (
    <span className="inline-block transition-transform duration-300 ease-smooth group-hover:translate-x-1">
      &rarr;
    </span>
  );
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  arrow = true,
  type = 'button',
  className = '',
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
