import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.23-1.63a11.93 11.93 0 0 0 5.82 1.49h.01c6.59 0 11.94-5.36 11.94-11.95 0-3.19-1.24-6.19-3.48-8.43ZM12.06 21.84a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.88 9.88 0 0 1-1.51-5.29c0-5.47 4.45-9.92 9.87-9.92a9.85 9.85 0 0 1 7 2.9 9.85 9.85 0 0 1 2.9 7c0 5.47-4.45 9.91-9.91 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" /></svg>;
}

export function WhatsAppLink({ children, className = "button button-primary", floating = false }: { children?: ReactNode; className?: string; floating?: boolean }) {
  return <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={className} aria-label={floating ? "Falar com a VortexVision no WhatsApp (abre em nova aba)" : undefined}>
    <WhatsAppIcon />{children}{!floating && <span className="sr-only"> (abre em nova aba)</span>}
  </a>;
}
