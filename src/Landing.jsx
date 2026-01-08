import { useState } from "react";

export default function Landing() {
  const [showConcept, setShowConcept] = useState(false);

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

        {/* SECTION PRINCIPALE */}
        <section className="bgc-card">
          <p className="bgc-lead">
            Bienvenue dans l’arène où la communauté devient{" "}
            <span className="hl-gold">légendaire</span>.
          </p>

          <p className="bgc-text">
            Sur le stream de <span className="hl-red">SouledgeBGC</span>, tu
            gagnes des <span className="hl-red">doritos</span> pour ouvrir des{" "}
            <span className="hl-gold">boosters</span>.
          </p>

          <p className="bgc-text">
            Collectionne des cartes uniques et affiche-les comme{" "}
            <span className="hl-gold">avatar</span> ou{" "}
            <span className="hl-gold">bannière</span>.
          </p>

          <p className="bgc-oath">
          <strong>
            Ce n’est pas qu’un jeu.
          <br />
            C’est une bagarre. Une légende.
          <br />
          <span className="bgc-oath-highlight">La tienne.</span>
          </strong>
          </p>

          <div className="bgc-actions">
            <button
              className="btn-primary"
              type="button"
              onClick={() =>
                alert("Bientôt : connexion + ouverture de boosters 👀")
              }
            >
              Entrer dans l’arène
            </button>

            <button
              className={`btn-ghost ${showConcept ? "is-active" : ""}`}
              type="button"
              onClick={() => setShowConcept((v) => !v)}
              aria-expanded={showConcept}
            >
              {showConcept ? "Masquer le concept" : "Voir le concept"}
            </button>
          </div>
        </section>

        {/* CONCEPT — DÉPLIAGE SANS SCROLL */}
        <div className={`concept-wrapper ${showConcept ? "open" : ""}`}>
          <section className="bgc-card bgc-card--spaced">
            <p className="bgc-lead">
              Le concept en 3 étapes :{" "}
              <span className="hl-gold">gagner</span>,{" "}
              <span className="hl-gold">ouvrir</span>,{" "}
              <span className="hl-gold">briller</span>.
            </p>

            <p className="bgc-text">
              1) Tu gagnes des <span className="hl-red">doritos</span> en
              participant au stream.
              <br />
              2) Tu ouvres des boosters et obtiens des cartes à ton effigie.
              <br />
              3) Tu exportes tes cartes pour afficher ta légende partout.
            </p>
          </section>
        </div>

        <footer className="bgc-footer">
          Projet communautaire — Légendes du BGC
        </footer>
      </section>
    </main>
  );
}
