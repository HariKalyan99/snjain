import { company } from '../../data/company';

export function PhoneIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.956 1.294c-.24.324-.63.47-1.002.354a11.042 11.042 0 0 1-5.516-5.516c-.116-.372.03-.762.354-1.002l1.294-.956c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

export default function PhoneLink({
  className = '',
  iconClassName = 'h-4 w-4 shrink-0',
  textClassName = '',
  label = company.phoneLabel,
}) {
  return (
    <a
      href={company.phoneHref}
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`Call ${company.legalName}`}
    >
      <PhoneIcon className={iconClassName} />
      <span className={textClassName}>{label}</span>
    </a>
  );
}
