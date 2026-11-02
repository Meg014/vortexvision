import { Brand } from "./brand";
import { MobileMenu } from "./mobile-menu";
import { WhatsAppLink } from "./whatsapp-link";
import { navigation } from "@/lib/site";

export function Header() {
  return <header className="site-header"><div className="container header-inner">
    <Brand />
    <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
    <div className="header-contact"><WhatsAppLink className="button button-outline">Falar no WhatsApp</WhatsAppLink></div>
    <MobileMenu />
  </div></header>;
}
