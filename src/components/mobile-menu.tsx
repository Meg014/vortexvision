"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";
import { WhatsAppLink } from "./whatsapp-link";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function closeOutside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    const desktop = window.matchMedia("(min-width: 960px)");
    const close = () => setOpen(false);
    desktop.addEventListener("change", close);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    return () => {
      desktop.removeEventListener("change", close);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return <div className="mobile-menu" ref={root} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    <nav id="mobile-navigation" aria-label="Navegação móvel" className="mobile-panel" hidden={!open}>
      {navigation.map(item => <a key={item.href} href={item.href} onClick={() => {
        setOpen(false);
        const section = document.getElementById(item.href.slice(1));
        // Mantém a sequência de teclado no destino após ocultar o menu.
        section?.setAttribute("tabindex", "-1");
        section?.focus({ preventScroll: true });
      }}>{item.label}</a>)}
      <WhatsAppLink>Falar no WhatsApp</WhatsAppLink>
    </nav>
  </div>;
}
