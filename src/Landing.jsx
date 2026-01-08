export default function Landing() {
  return (
    <main className="bgc-page">
      <section className="bgc-shell">
        <header className="bgc-header">
          <p className="bgc-kicker">Légendes du BGC</p>
          <h1 className="bgc-title">Bagarre Club</h1>
          <div className="bgc-divider">
            <span />
          </div>
        </header>

        <div className="bgc-card">
          <p className="bgc-lead">
            Bienvenue dans l’arène où la communauté devient{" "}
            <span className="hl-gold">légendaire</span>.
          </p>

          <p className="bgc-text">
            Sur le stream du <span className="hl-red">SouledgeBGC</span>, tu
            gagnes des <span className="hl-red">doritos</span> pour ouvrir des{" "}
            <span className="hl-gold">boosters</span> et révéler des cartes
            uniques à l’effigie de la communauté.
          </p>

          <p className="bgc-text">
            Collectionne-les, sauvegarde-les et exporte-les comme{" "}
            <span className="hl-gold">avatar</span> ou{" "}
            <span className="hl-gold">bannière</span> pour marquer ton territoire
            sur les réseaux.
          </p>

          <p className="bgc-oath">
            <strong>Ce n’est pas qu’un jeu.</strong>
            <br />
            C’est une bagarre. Une légende.
            <br />
            <span className="hl-red">La tienne.</span>
          </p>

          <div className="bgc-actions">
            <button className="btn-primary">Entrer dans l’arène</button>
            <button className="btn-ghost">Voir le concept</button>
          </div>
        </div>

        <footer className="bgc-footer">
          Projet communautaire — Légendes du BGC
        </footer>
      </section>
    </main>
  );
}
