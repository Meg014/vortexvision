# VortexVision

Landing page estática em Next.js (App Router), TypeScript strict e Tailwind CSS. Node.js 24.15.0 configurado em `.node-version`.

```sh
npm ci
npm run dev
```

Acesse http://localhost:3000. Validação: `npm run lint`, `npm run typecheck` e `npm run build`. O build gera `out/`, pronto para hospedagem estática. `next start` não se aplica à exportação estática; para desenvolvimento local, use `npm run dev`.

Conteúdo, navegação e WhatsApp: `src/lib/site.ts`. Identidade e estilos: `src/app/globals.css` e `public/images/`. Os originais das imagens estão preservados em `img/`. A fonte Inter é servida localmente.

Antes de publicar, configure `NEXT_PUBLIC_SITE_URL` com a URL HTTPS real, sem caminho, e refaça o build. Pode ser a URL atribuída pelo Cloudflare Pages; não é necessário comprar um domínio. Essa variável é pública e não deve conter segredos. Sem ela, a URL local é usada nos metadados, robots bloqueia a indexação e sitemap fica vazio. Para testes locais, copie `.env.example` para `.env.local`.

A CSP e os demais headers estão em `public/_headers`, copiado para `out/_headers` e interpretado pelo Cloudflare Pages. Scripts inline são necessários à hidratação estática do Next; `unsafe-eval` não é permitido. O servidor de desenvolvimento não aplica `_headers`. Robots, sitemap e imagem Open Graph são gerados no build, sem servidor em produção. Não há banco de dados, APIs de negócio, middleware ou rastreadores.

Para publicar após autorização: crie o repositório no GitHub e envie o código, incluindo `package-lock.json`, sem `.env*`, `node_modules`, `.next` ou `out`. No Cloudflare, abra **Workers & Pages → Create application → Pages → Connect to Git**, autorize o GitHub e selecione o repositório. Use **Next.js (Static HTML Export)**, comando **`npm run build`**, saída **`out`**, raiz do projeto e a branch de produção escolhida. Configure `NEXT_PUBLIC_SITE_URL` no ambiente Production com a URL real atribuída ao projeto e faça um novo deploy após qualquer alteração nela. Deixe a variável ausente em Preview para manter as prévias sem indexação. Não configure Workers, Functions ou adaptadores Next.js.

Referências: [Next.js estático no Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) e [headers do Pages](https://developers.cloudflare.com/pages/configuration/headers/). Nenhum comando deste projeto cria repositórios ou publica automaticamente.
