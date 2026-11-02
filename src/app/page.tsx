import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About, Differentials, Portfolio } from "@/components/about";
import { Contact, Footer } from "@/components/footer";
import { WhatsAppLink } from "@/components/whatsapp-link";

export default function Home() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo" tabIndex={-1}><Hero /><Services /><Differentials /><Portfolio /><About /><Contact /></main><Footer /><WhatsAppLink className="floating-whatsapp" floating /></>;
}
