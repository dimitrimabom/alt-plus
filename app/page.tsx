
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* HEADER */}
<header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex h-20 items-center justify-between">
      {/* Logo */}
      <a href="/" className="text-2xl font-extrabold text-gray-900">
        ALT<span className="text-red-600">+</span>
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <a href="#services" className="hover:text-red-600 transition">
          Services
        </a>
        <a href="#approach" className="hover:text-red-600 transition">
          Approche
        </a>
        <a href="#projects" className="hover:text-red-600 transition">
          Projets
        </a>
        <a href="/blog" className="hover:text-red-600 transition">
          Blog
        </a>
      </nav>

      {/* CTA */}
      <div className="hidden md:flex">
        <a
          href="/contact"
          className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition"
        >
          Démarrer un projet
        </a>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden rounded-lg border border-gray-200 p-2">
        <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
        <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
        <span className="block h-0.5 w-6 bg-gray-800" />
      </button>
    </div>
  </div>
</header>

      {/* HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white">
  {/* Glow / décor */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
    {/* Badge */}
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
      🚀 Digital Studio orienté impact
    </span>

    {/* Titre */}
    <h1 className="mt-8 text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
      Accélère la croissance <br className="hidden md:block" />
      <span className="text-red-200">de ton business</span> avec le digital
    </h1>

    {/* Sous-titre */}
    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-red-100">
      ALT+ conçoit des produits digitaux performants, élégants et pensés pour
      générer de vrais résultats.
    </p>

    {/* CTA */}
    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
      <button className="rounded-xl bg-white px-8 py-4 font-semibold text-red-600 shadow-lg shadow-black/20 hover:scale-[1.02] hover:bg-red-50 transition">
        Parlons de ton projet
      </button>
      <button className="rounded-xl border border-white/30 px-8 py-4 font-semibold backdrop-blur hover:bg-white/10 transition">
        Voir nos réalisations
      </button>
    </div>

    {/* Indicateur de confiance */}
    <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-red-100">
      <span>✔ Produits sur mesure</span>
      <span>✔ Tech moderne</span>
      <span>✔ Vision business</span>
    </div>
  </div>
</section>



      {/* SERVICES */}
<section className="relative mx-auto max-w-7xl px-6 py-28">
  {/* En-tête */}
  <div className="max-w-2xl">
    <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
      Nos services
    </span>
    <h2 className="mt-3 text-3xl md:text-4xl font-bold">
      Une expérience digitale qui fait la différence
    </h2>
    <p className="mt-4 text-gray-600">
      On conçoit des solutions digitales solides, utiles et orientées business.
      Pas de blabla. Que du résultat.
    </p>
  </div>

  {/* Grille */}
  <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {[
      {
        title: 'Sites web',
        desc: 'Vitrines, landing pages et plateformes rapides, modernes et optimisées.',
        icon: '🌐',
      },
      {
        title: 'Design UI/UX',
        desc: 'Interfaces élégantes, claires et pensées pour convertir.',
        icon: '🎨',
      },
      {
        title: 'Apps Web & Mobile',
        desc: 'SaaS, dashboards et outils métiers sur mesure.',
        icon: '⚙️',
      },
      {
        title: 'Marketing Digital',
        desc: 'Stratégie, visibilité et croissance mesurable.',
        icon: '📈',
      },
    ].map((service) => (
      <div
        key={service.title}
        className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
          {service.icon}
        </div>

        <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm text-gray-600">{service.desc}</p>

        {/* Hover accent */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-red-500 opacity-0 transition group-hover:opacity-100" />
      </div>
    ))}
  </div>
</section>



     {/* APPROACH */}
<section className="relative bg-gray-50">
  <div className="mx-auto max-w-7xl px-6 py-28">
    {/* Header */}
    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
        Notre approche
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold">
        Une méthode claire, orientée résultats
      </h2>
      <p className="mt-4 text-gray-600">
        Chaque projet suit un processus structuré. Objectif : livrer vite,
        bien, et avec un impact mesurable.
      </p>
    </div>

    {/* Steps */}
    <div className="relative mt-20 grid gap-6 md:grid-cols-4">
      {[
        {
          title: 'Compréhension',
          desc: 'Analyse du besoin, des objectifs business et des contraintes.',
        },
        {
          title: 'Design',
          desc: 'Conception UI/UX orientée clarté, usage et conversion.',
        },
        {
          title: 'Développement',
          desc: 'Implémentation propre, performante et scalable.',
        },
        {
          title: 'Suivi',
          desc: 'Accompagnement, évolution et optimisation continue.',
        },
      ].map((step, i) => (
        <div
          key={step.title}
          className="group relative rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Step number */}
          <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white font-bold shadow-md">
            0{i + 1}
          </div>

          <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>
          <p className="mt-3 text-sm text-gray-600">{step.desc}</p>

          {/* Decorative line */}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-red-500 opacity-0 transition group-hover:opacity-100" />
        </div>
      ))}
    </div>
  </div>
</section>



      {/* PROJECTS — Bento */}
<section className="mx-auto max-w-7xl px-6 py-28">
  {/* Header */}
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
        Projets réalisés
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold">
        Des produits concrets, pas des promesses
      </h2>
      <p className="mt-4 text-gray-600">
        Chaque projet est conçu pour répondre à un vrai besoin business,
        avec une exécution propre et performante.
      </p>
    </div>

    {/* Voir plus */}
    <a
      href="/projects"
      className="inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-700 transition"
    >
      Voir tous les projets
      <span className="text-lg">→</span>
    </a>
  </div>

  {/* Bento grid */}
  <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[220px]">
    {/* Billora */}
    <div className="relative md:col-span-4 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 flex flex-col justify-end overflow-hidden group">
      <span className="text-sm text-red-400 font-medium">SaaS · Facturation</span>
      <h3 className="mt-2 text-2xl font-bold">Billora</h3>
      <p className="mt-2 text-sm text-gray-300 max-w-md">
        Application de facturation moderne, rapide et pensée pour les entreprises.
      </p>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
    </div>

    {/* TrustSnap */}
    <div className="relative md:col-span-2 rounded-3xl bg-white border border-gray-100 p-8 flex flex-col justify-end shadow-sm group hover:shadow-md transition">
      <span className="text-sm text-red-600 font-medium">Web App</span>
      <h3 className="mt-2 text-xl font-semibold">TrustSnap</h3>
      <p className="mt-2 text-sm text-gray-600">
        Collecte et affichage de témoignages clients.
      </p>
    </div>

    {/* e-FME */}
    <div className="relative md:col-span-2 rounded-3xl bg-white border border-gray-100 p-8 flex flex-col justify-end shadow-sm group hover:shadow-md transition">
      <span className="text-sm text-red-600 font-medium">Maintenance</span>
      <h3 className="mt-2 text-xl font-semibold">e-FME</h3>
      <p className="mt-2 text-sm text-gray-600">
        Gestion intelligente de la maintenance préventive.
      </p>
    </div>

    {/* Dash BTS */}
    <div className="relative md:col-span-4 rounded-3xl bg-gradient-to-br from-red-600 to-red-700 text-white p-8 flex flex-col justify-end overflow-hidden group">
      <span className="text-sm text-red-200 font-medium">Monitoring · Data</span>
      <h3 className="mt-2 text-2xl font-bold">Dashboard BTS</h3>
      <p className="mt-2 text-sm text-red-100 max-w-md">
        Supervision avancée et visualisation des sites télécoms.
      </p>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
    </div>
  </div>
</section>



      {/* CTA */}
<section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
  {/* Décor */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-28">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Texte */}
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-red-200">
          Prêt à passer à l’action ?
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
          Tu as une idée ? <br />
          <span className="text-red-200">On la transforme en produit</span> performant.
        </h2>
        <p className="mt-4 text-red-100">
          Discutons de ton projet et voyons comment ALT+ peut t’aider à
          construire une solution digitale solide et durable.
        </p>
      </div>

      {/* Bouton */}
      <div className="shrink-0">
        <button className="group relative rounded-xl bg-white px-10 py-4 font-semibold text-red-600 shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:shadow-2xl">
          Discutons maintenant
          <span className="ml-3 inline-block transition group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  </div>
</section>



      {/* FOOTER */}
<footer className="bg-gray-950 text-gray-400">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid gap-12 md:grid-cols-4">
      {/* Brand */}
      <div>
        <h3 className="text-2xl font-extrabold text-white">ALT+</h3>
        <p className="mt-4 text-sm leading-relaxed">
          Digital studio orienté impact. <br />
          Nous concevons des produits digitaux utiles,
          performants et pensés pour durer.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Navigation
        </h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white transition">Accueil</li>
          <li className="hover:text-white transition">Services</li>
          <li className="hover:text-white transition">Projets</li>
          <li className="hover:text-white transition">Blog</li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Services
        </h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white transition">Sites web</li>
          <li className="hover:text-white transition">Design UI/UX</li>
          <li className="hover:text-white transition">Applications web</li>
          <li className="hover:text-white transition">Marketing digital</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Contact
        </h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white transition">contact@altplus.io</li>
          <li className="hover:text-white transition">LinkedIn</li>
          <li className="hover:text-white transition">Twitter / X</li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm">
      <p>© {new Date().getFullYear()} ALT+. Tous droits réservés.</p>
      <div className="flex gap-6">
        <span className="hover:text-white transition">Mentions légales</span>
        <span className="hover:text-white transition">Politique de confidentialité</span>
      </div>
    </div>
  </div>
</footer>

    </main>
  );
}
