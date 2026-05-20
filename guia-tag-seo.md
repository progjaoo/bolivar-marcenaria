# 📊 Guia de Implementação — Tracking, Conversões & SEO para Landing Pages
> Documentação técnica e **prompt reutilizável** para configurar Analytics, Pixels de conversão, WhatsApp e SEO profissional em Landing Pages construídas com Lovable / Vite / TanStack Start.
---
## 1. Visão geral da arquitetura
Toda a configuração é centralizada em **`src/lib/config.ts`** e consumida por **`src/components/analytics/TrackingScripts.tsx`**.
```
src/
├── lib/
│   └── config.ts                       ← IDs, telefone, mensagem WhatsApp
├── components/
│   ├── analytics/
│   │   └── TrackingScripts.tsx         ← Injeta GTM / GA4 / Meta Pixel / Ads + helper trackLead()
│   └── landing/
│       ├── LeadForm.tsx                ← dispara trackLead("form")
│       └── FloatingWhatsApp.tsx        ← dispara trackLead("whatsapp_float")
└── routes/
    ├── __root.tsx                      ← <TrackingScripts /> + <NoScriptPixels />
    ├── index.tsx                       ← <head> meta, OG, JSON-LD LocalBusiness
    └── sitemap[.]xml.ts                ← sitemap dinâmico
public/
└── robots.txt
```
---
## 2. Variáveis de ambiente (`.env`)
Crie um arquivo `.env` (ou configure no painel do host) com **apenas as que você for usar** — vazias são ignoradas automaticamente:
```env
# Google Tag Manager (recomendado — gerencia todos os outros por dentro)
VITE_GTM_ID=GTM-XXXXXXX
# Google Analytics 4 (se NÃO estiver usando GTM)
VITE_GA4_ID=G-XXXXXXXXXX
# Meta Pixel (Facebook / Instagram Ads)
VITE_META_PIXEL_ID=1234567890123456
# Google Ads + label de conversão (formato: AW-XXXXXXXXX / abcDeFgHiJ)
VITE_GOOGLE_ADS_ID=AW-1234567890
VITE_GOOGLE_ADS_CONVERSION_LABEL=AbCdEfGhIjKlMnOp
```
> ⚠️ **Importante:** variáveis precisam começar com `VITE_` para serem expostas ao bundle. Após editar `.env`, **reinicie o dev server**.
### Onde encontrar cada ID
| Variável | Onde obter |
|---|---|
| `VITE_GTM_ID` | tagmanager.google.com → criar contêiner → topo da tela (`GTM-XXXXXXX`) |
| `VITE_GA4_ID` | analytics.google.com → Admin → Fluxos de dados → ID da medição (`G-XXXX`) |
| `VITE_META_PIXEL_ID` | business.facebook.com → Gerenciador de Eventos → Fontes de dados |
| `VITE_GOOGLE_ADS_ID` | ads.google.com → Ferramentas → Conversões → topo do snippet (`AW-XXX`) |
| `VITE_GOOGLE_ADS_CONVERSION_LABEL` | mesmo snippet, parâmetro `send_to` após a barra |
---
## 3. Configuração do site & WhatsApp
Edite **`src/lib/config.ts`**:
```ts
export const SITE = {
  name: "Bolivar Marcenaria",
  domain: "bolivarmarcenaria.com.br",
  phone: "5511999999999",        // ← E.164 SEM +, com DDI 55 + DDD + número
  whatsappMessage: "Olá! Vim pelo site e gostaria de um orçamento.",
  city: "São Paulo, SP",
};
```
A função `whatsappUrl(msg?)` monta automaticamente: `https://wa.me/<phone>?text=<mensagem>`.
---
## 4. Eventos de conversão (automáticos)
O helper **`trackLead(label)`** já está conectado em:
| Componente | Label disparada |
|---|---|
| `FloatingWhatsApp.tsx` (botão fixo) | `whatsapp_float` |
| `Hero.tsx` (CTA WhatsApp) | `whatsapp_hero` |
| `LeadForm.tsx` (envio do formulário) | `form` |
Cada chamada dispara **simultaneamente**:
```ts
fbq("track", "Lead");                              // Meta Pixel
gtag("event", "generate_lead", { event_label });   // GA4
dataLayer.push({ event: "lead", lead_source });    // GTM
gtag("event", "conversion", { send_to: "AW-XXX/LABEL" }); // Google Ads (se configurado)
```
> 💡 No GA4, configure `generate_lead` como **evento de conversão** em *Admin → Eventos*.
---
## 5. SEO profissional (já incluído)
| Item | Onde fica | Editar |
|---|---|---|
| `<html lang="pt-BR">` | `src/routes/__root.tsx` | — |
| Viewport otimizado | `__root.tsx` (`width=device-width, initial-scale=1`) | — |
| Title / description pt-BR | `src/routes/index.tsx` → `head().meta` | sim |
| Open Graph + Twitter Card | `index.tsx` → `head().meta` | sim (og:url, og:image) |
| Canonical | `index.tsx` → `head().links` | sim |
| JSON-LD `LocalBusiness` | `index.tsx` → `head().scripts` | nome, telefone, endereço |
| `robots.txt` | `public/robots.txt` | bloquear paths específicos |
| `sitemap.xml` | `src/routes/sitemap[.]xml.ts` | adicionar novas rotas |
| Imagens com `width`/`height` + `loading="lazy"` | componentes `landing/*` | manter padrão |
| Hero LCP otimizado | `Hero.tsx` → `<img fetchPriority="high" loading="eager">` | — |
### Checklist final antes de publicar
- [ ] Trocar `SITE.phone`, `SITE.name`, `SITE.domain` em `config.ts`
- [ ] Preencher IDs no `.env` (ou no painel do host)
- [ ] Substituir `/og-cover.jpg` por imagem real 1200×630
- [ ] Validar JSON-LD em [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Testar Pixel com [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper)
- [ ] Testar GA4/Ads com [Tag Assistant](https://tagassistant.google.com)
---
## 6. 📋 PROMPT REUTILIZÁVEL — copie e cole no Lovable
> Use este prompt em qualquer projeto novo de Landing Page no Lovable para reaplicar **toda essa estrutura**:
```text
Implemente uma Landing Page profissional com a seguinte infraestrutura de tracking e SEO:
ARQUIVO src/lib/config.ts (centraliza tudo):
- SITE: { name, domain, phone (E.164 sem +), whatsappMessage, city }
- ANALYTICS lendo de import.meta.env:
  - VITE_GTM_ID         → Google Tag Manager
  - VITE_GA4_ID         → Google Analytics 4
  - VITE_META_PIXEL_ID  → Meta Pixel (Facebook/Instagram)
  - VITE_GOOGLE_ADS_ID  → Google Ads (AW-XXXXXXXXX)
  - VITE_GOOGLE_ADS_CONVERSION_LABEL → label da tag de conversão
- Função whatsappUrl(msg?) que monta https://wa.me/<phone>?text=<encoded>
ARQUIVO src/components/analytics/TrackingScripts.tsx:
- Injeta os snippets oficiais de GTM, GA4, Meta Pixel e Google Ads via <script>.
- Pula automaticamente quando o ID correspondente estiver vazio.
- Exporta NoScriptPixels para o <body> (iframe GTM + img Meta Pixel).
- Exporta helper trackLead(label) que dispara:
    fbq("track","Lead")
    gtag("event","generate_lead",{event_label:label})
    dataLayer.push({event:"lead", lead_source:label})
    gtag("event","conversion",{send_to:`${ADS_ID}/${LABEL}`}) se configurado.
INTEGRAÇÃO:
- <TrackingScripts /> no <head> via __root.tsx; <NoScriptPixels /> no início do <body>.
- Chamar trackLead("whatsapp_float") no botão flutuante de WhatsApp.
- Chamar trackLead("whatsapp_hero") no CTA do Hero.
- Chamar trackLead("form") no onSubmit do formulário de lead (após validação Zod), redirecionando para whatsappUrl() com mensagem pré-preenchida (nome, cidade, projeto).
SEO (pt-BR):
- <html lang="pt-BR"> + viewport width=device-width,initial-scale=1.
- head() na rota / com: title e description em pt-BR, Open Graph completo (og:title, og:description, og:type=website, og:locale=pt_BR, og:url, og:image), Twitter card summary_large_image, canonical.
- JSON-LD application/ld+json do tipo LocalBusiness (name, telephone, address PostalAddress, areaServed, priceRange, description) injetado via head().scripts.
- public/robots.txt com User-agent: * / Allow: / e Sitemap: /sitemap.xml.
- src/routes/sitemap[.]xml.ts servindo XML dinâmico com todas as rotas públicas.
- Todas as <img> com width, height e loading="lazy".
- Imagem do Hero com fetchPriority="high" e loading="eager" para otimizar LCP.
- HTML semântico: <header>, <main>, <section>, <article>, <footer>, um único <h1>, alt em todas imagens.
Não exponha service keys no client. Apenas as VITE_* (publicáveis) vão no bundle.
```
---
**Última atualização:** Maio 2026