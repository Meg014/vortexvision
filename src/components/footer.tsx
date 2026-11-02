import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { WhatsAppLink } from "./whatsapp-link";
import { navigation, site, whatsappUrl } from "@/lib/site";

export function Contact() {
  return <section id="contato" className="container contact-wrap" aria-labelledby="contact-title"><div className="contact-panel"><div><p className="eyebrow">SEU PRÓXIMO PROJETO COMEÇA COM UMA CONVERSA</p><h2 id="contact-title">Uma ideia na cabeça?<br />Vamos colocá-la em movimento.</h2><p>Conte o que você precisa. Vamos conversar sobre as possibilidades.</p></div><div className="contact-action"><WhatsAppLink>Vamos conversar <ArrowUpRight size={19} /></WhatsAppLink><span>Contato direto pelo WhatsApp</span></div></div></section>;
}

export function Footer() {
  return <footer className="container site-footer"><div className="footer-main"><div><Brand /><p>{site.slogan}</p></div><nav aria-label="Navegação do rodapé">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-contact"><span>VAMOS CONVERSAR</span><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{site.phoneDisplay}<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> — WhatsApp (abre em nova aba)</span></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} VortexVision. Todos os direitos reservados.</span><span>Design com propósito. Código com direção.</span></div></footer>;
}
