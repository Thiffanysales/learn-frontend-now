import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Code2,
  Menu,
  X,
  ArrowUp,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Briefcase,
  DollarSign,
  Building2,
  AlertTriangle,
  Globe2,
  Target,
  BookOpen,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Desenvolvedor Front-End | Tudo sobre a Carreira" },
      {
        name: "description",
        content:
          "Conheça a carreira de Desenvolvedor Front-End: o que faz, qualificações, salários, empresas que contratam, desafios e a relação com o ODS 9.",
      },
      { property: "og:title", content: "Desenvolvedor Front-End | Carreira" },
      {
        property: "og:description",
        content: "Tudo sobre o Desenvolvimento Front-End em um só lugar.",
      },
    ],
  }),
});

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#salario", label: "Salário" },
  { href: "#empresas", label: "Empresas" },
  { href: "#desafios", label: "Desafios" },
  { href: "#ods", label: "ODS 9" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#equipe", label: "Equipe" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/80 border-b border-neutral-200">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
            <Code2 className="h-5 w-5" />
            <span>FrontDev</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-black transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <ul className="px-6 py-4 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-neutral-700"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden
        />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1 text-xs uppercase tracking-widest text-neutral-600">
            <Sparkles className="h-3.5 w-3.5" /> Carreira em Tecnologia
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Desenvolvedor <span className="text-neutral-400">Front-End</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-600 font-medium">
            Tudo sobre um Desenvolvimento Front-End
          </p>
          <p className="mt-8 max-w-2xl mx-auto text-neutral-600 leading-relaxed">
            Por trás de cada site fluido, app intuitivo e interface acessível existe um
            desenvolvedor Front-End. Uma das profissões mais estratégicas do mundo digital —
            transformando design em experiência, código em conexão.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition"
            >
              Explorar a profissão
            </a>
            <a
              href="#equipe"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:border-black transition"
            >
              Nossa Equipe
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <Section id="sobre" eyebrow="Sobre a profissão" title="O que faz um Desenvolvedor Front-End">
        <Block title="INTRODUÇÃO">
          <p>
            O desenvolvedor front-end é o profissional responsável por projetar a interface visual
            de sites e aplicativos, garantindo uma navegação intuitiva e uma boa experiência para o
            usuário.
          </p>
          <p>
            O profissional desenvolvedor Front-End é quem cria páginas web funcionais, posicionando
            textos, imagens, botões e menus para que o design seja responsivo e atendo às demanda
            dos usuários em diferentes dispositivos. Ele é responsável por colocar na prática,
            através de códigos, o design de um site ou interface.
          </p>
          <p>
            Enquanto o web design projeta o visual de um site, o desenvolvimento front-end
            implementa esse design através de códigos, como HTML, CSS, Javascript. Ou seja, é o
            front-end que coloca “para funcionar” toda a parte visual de uma interface, como uma
            página de um site ou de um aplicativo.
          </p>
          <p>
            Podemos dizer que tudo o que um usuário vê, interação ou clique é fruto do trabalho de
            um desenvolvedor front-end, que deve garantir que o site ou interface funcione
            corretamente e siga um design padrão em todos os dispositivos.
          </p>
        </Block>

        <Block title="Qualificações essenciais">
          <p>
            Para se destacar na área de front-end, é preciso ir além do básico. Aqui estão algumas
            qualificações essenciais:
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {[
              ["HTML, CSS e JavaScript", "A base de qualquer projeto."],
              ["Design responsivo", "Interfaces que funcionam em qualquer dispositivo."],
              ["SEO técnico", "Conhecimento em otimização para motores de busca."],
              ["Soft skills", "Comunicação e trabalho em equipe fazem toda a diferença."],
            ].map(([t, d]) => (
              <li
                key={t}
                className="rounded-xl border border-neutral-200 p-4 hover:border-black transition"
              >
                <p className="font-semibold text-black">{t}</p>
                <p className="text-sm text-neutral-600 mt-1">{d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Além disso, é essencial estar sempre aprendendo. A tecnologia muda rapidamente, e quem
            trabalha com front-end precisa se atualizar constantemente para se manter relevante.
          </p>
        </Block>
      </Section>

      {/* SALARIO */}
      <Section
        id="salario"
        eyebrow="Mercado"
        title="Média salarial (2026)"
        icon={<DollarSign className="h-5 w-5" />}
      >
        <p className="text-neutral-700">
          A média salarial de um desenvolvedor Front-End é de <strong>R$ 6.000 mil reais</strong>.
          Mas essa média varia de acordo com os anos de experiência na profissão, a responsabilidade
          e a prática.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { lvl: "Júnior", exp: "0 – 2 anos", v: "R$ 3.000" },
            { lvl: "Pleno", exp: "2 – 5 anos", v: "R$ 5.972" },
            { lvl: "Sênior", exp: "5+ anos", v: "R$ 10.000" },
          ].map((c, i) => (
            <div
              key={c.lvl}
              className={`rounded-2xl p-6 border ${
                i === 2
                  ? "bg-black text-white border-black"
                  : "bg-neutral-50 border-neutral-200"
              }`}
            >
              <p className="text-xs uppercase tracking-widest opacity-60">{c.exp}</p>
              <p className="mt-2 text-xl font-semibold">Front-End {c.lvl}</p>
              <p className="mt-6 text-3xl font-bold">{c.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EMPRESAS */}
      <Section
        id="empresas"
        eyebrow="Oportunidades"
        title="Principais empresas que contratam"
        icon={<Building2 className="h-5 w-5" />}
      >
        <p className="text-neutral-700">
          Muitas empresas grandes contratam ainda na fase Junior. As empresas que mais contratam
          atualmente são Nubank, iFood, Magazine Luiza, Mercado Livre, Globo, Omie e Stone. Além
          delas, consultorias como BairesDev, CI&amp;T e Conexa Labs oferecem muitas vagas remotas.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Nubank",
            "iFood",
            "Magazine Luiza",
            "Mercado Livre",
            "Globo",
            "Omie",
            "Stone",
            "BairesDev",
            "CI&T",
            "Conexa Labs",
          ].map((c) => (
            <span
              key={c}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-black hover:text-white hover:border-black transition"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* DESAFIOS */}
      <Section
        id="desafios"
        eyebrow="Realidade da carreira"
        title="Desafios da profissão"
        icon={<AlertTriangle className="h-5 w-5" />}
      >
        <p className="text-neutral-700 leading-relaxed">
          Essa área ainda sim tem seus desafios, o ecossistema front-end tem muitas ferramentas,
          bibliotecas e frameworks que mudam rapidamente. Então, você tem que lidar com a sobrecarga
          de informação. O segredo para não se sentir perdido é focar em construir uma base
          extremamente sólida nos fundamentos (HTML, CSS e JavaScript puro) antes de se aprofundar
          em frameworks. Uma base forte torna o aprendizado de qualquer nova ferramenta muito mais
          fácil.
        </p>
      </Section>

      {/* ODS 9 */}
      <Section
        id="ods"
        eyebrow="Impacto social"
        title="Relação com o ODS 9"
        icon={<Globe2 className="h-5 w-5" />}
      >
        <p className="text-neutral-700 leading-relaxed">
          O ODS 9 busca promover a indústria inclusiva e sustentável, estimular a inovação e
          desenvolver infraestrutura. O Desenvolvedor Front-End contribui diretamente para esses
          objetivos criando interfaces digitais, eficientes e inclusivas que modernizam a indústria
          e facilitam o acesso à tecnologia.
        </p>
        <p className="mt-4 text-neutral-700">
          Alguns exemplos são a inovação, inclusão e acessibilidade.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card
            title="Acessibilidade"
            body="O desenvolvedor Front-End permite que pessoas com deficiência visual ou motora utilizem os serviços digitais, promovendo acessibilidade."
          />
          <Card
            title="Inclusão econômica"
            body="A criação de sites e aplicativos acessíveis permite que pequenas empresas e produtores rurais vendam seus produtos pela internet, gerando crescimento econômico e incluindo as pequenas empresas digitalmente."
          />
        </div>
      </Section>

      {/* METODOLOGIA */}
      <Section
        id="metodologia"
        eyebrow="Como foi feito"
        title="METODOLOGIA"
        icon={<Target className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Block title="Público-alvo">
            <p>
              O público alvo desse projeto são os iniciantes na área de TI, principalmente os do 1º
              período da faculdade.
            </p>
          </Block>
          <Block title="Seleção do público-alvo">
            <p>
              Os critérios utilizados foram pessoas que desejam entender melhor a carreira de
              desenvolver de Front-End e estudantes do primeiro período da faculdade de TI.
            </p>
          </Block>
          <Block title="Coleta de dados">
            <p>
              Foi realizada pesquisas em sites especializados em vagas de emprego, sites que falam
              sobre a profissão de desenvolvedor de Front-End, documentação oficial da ONU, o ODS
              9. Não foram realizadas pesquisas presenciais, gravações ou entrevistas.
            </p>
          </Block>
          <Block title="Análise">
            <p>
              <strong>Quantitativa:</strong> levantamento de dados salarial.
            </p>
            <p className="mt-2">
              <strong>Qualitativa:</strong> análise descritiva sobre as funções de um desenvolver de
              Front-End, os desafios e as oportunidades.
            </p>
          </Block>
          <Block title="Pesquisa">
            <p>
              A pesquisa foi realizada pelo Google, nos sites: quero bolsa, ebaconline, glassdor,
              betrybe e alura.
            </p>
          </Block>
        </div>
      </Section>

      {/* REFERÊNCIAS */}
      <Section
        id="referencias"
        eyebrow="Fontes"
        title="REFERÊNCIAS"
        icon={<BookOpen className="h-5 w-5" />}
      >
        <ul className="space-y-4 text-sm">
          <RefItem
            label="Introdução"
            links={[
              "https://querobolsa.com.br/carreiras-e-profissoes/desenvolvedor-front-end",
              "https://ebaconline.com.br/blog/desenvolvedor-front-end-o-que-faz",
            ]}
          />
          <RefItem
            label="Média salarial"
            links={[
              "https://www.glassdoor.com.br/Sal%C3%A1rios/desenvolvedor-front-end-sal%C3%A1rio-SRCH_KO0,23.htm",
              "https://www.betrybe.com/guia-salarios-profissoes/front-end",
            ]}
          />
          <RefItem
            label="Desafios"
            links={["https://www.alura.com.br/artigos/desenvolvedor-frontend"]}
          />
        </ul>
      </Section>

      {/* EQUIPE */}
      <section id="equipe" className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-neutral-400">
            Nossa Equipe
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Quem somos
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Conheça os desenvolvedores por trás deste projeto.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
            <div className="rounded-2xl border border-neutral-700 p-6 bg-neutral-900 flex flex-col">
              <h3 className="text-xl font-bold text-white">Thiffany Cristina da Silva Sales</h3>
              <p className="text-sm text-neutral-400 mt-1">Desenvolvedor Front-End</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Social href="https://www.linkedin.com/in/thiffany-cristina-da-silva-sales?utm_source=share_via&utm_content=profile&utm_medium=member_ios" label="LinkedIn" icon={<Linkedin className="h-5 w-5" />} />
                <Social href="https://github.com/Thiffanysales" label="GitHub" icon={<Github className="h-5 w-5" />} />
                <Social href="https://www.instagram.com/accounts/login/" label="Instagram" icon={<Instagram className="h-5 w-5" />} />
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-700 p-6 bg-neutral-900 flex flex-col">
              <h3 className="text-xl font-bold text-white">Vitor Hugo Passos Ramalho</h3>
              <p className="text-sm text-neutral-400 mt-1">Desenvolvedor Front-End</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Social href="https://www.linkedin.com/in/vitor-hugo-passos-ramamlho-540965410" label="LinkedIn" icon={<Linkedin className="h-5 w-5" />} />
                <Social href="https://github.com/vitorhugopassosramalho" label="GitHub" icon={<Github className="h-5 w-5" />} />
                <Social href="https://www.instagram.com/accounts/login/" label="Instagram" icon={<Instagram className="h-5 w-5" />} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-neutral-400 text-sm">E-mail do projeto</p>
            <a
              href="mailto:thiffanyevitor@gmail.com"
              className="inline-flex items-center gap-2 mt-2 text-white underline underline-offset-4 hover:text-neutral-300 transition"
            >
              <Mail className="h-4 w-4" />
              thiffanyevitor@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500">
        <div className="flex items-center justify-center gap-2">
          <Briefcase className="h-4 w-4" />
          <span>© {new Date().getFullYear()} FrontDev — Carreira Desenvolvedor Front-End</span>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-black text-white p-3 shadow-lg hover:bg-neutral-800 transition"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  icon,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
          {icon}
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
        <div className="mt-10 text-neutral-700 leading-relaxed space-y-4">{children}</div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-black tracking-tight">{title}</h3>
      <div className="space-y-3 text-neutral-700">{children}</div>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 hover:border-black transition">
      <h4 className="font-semibold text-black">{title}</h4>
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{body}</p>
    </div>
  );
}

function RefItem({ label, links }: { label: string; links: string[] }) {
  return (
    <li className="rounded-xl border border-neutral-200 p-4">
      <p className="font-semibold text-black">{label}</p>
      <ul className="mt-2 space-y-1">
        {links.map((l) => (
          <li key={l}>
            <a
              href={l}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 underline-offset-4 hover:underline hover:text-black break-all"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

function Social({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-3 text-sm hover:bg-white hover:text-black hover:border-white transition"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
