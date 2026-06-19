import heroImg from './assets/hero.png'
import './App.css'

type Note = {
  title: string
  period: string
  detail: string
  accent: string
  id: string
}

type Finding = {
  title: string
  meta: string
  description: string
}

type WardrobeItem = {
  title: string
  category: string
  description: string
  price: string
  originalUrl?: string
}

const notes: Note[] = [
  {
    id: 'early-sketch-collection',
    title: 'Early Sketch Collection',
    period: 'Archive category',
    detail:
      'First impressions, shapes, swatches, and the pieces that begin as a margin note.',
    accent: 'linen',
  },
  {
    id: 'timeless-dressing',
    title: 'Timeless Dressing',
    period: 'Archive category',
    detail:
      'Quiet wardrobe ideas built from tailoring, texture, and pieces that do not rush.',
    accent: 'blue',
  },
  {
    id: 'worn-loved',
    title: 'Worn & Loved',
    period: 'Archive category',
    detail:
      'Patina, repair, softened edges, and the kind of wear that makes an object warmer.',
    accent: 'green',
  },
  {
    id: 'sketchbook',
    title: 'Sketchbook',
    period: 'Archive category',
    detail:
      'Loose visual notes, color references, small studies, and collected fragments.',
    accent: 'rose',
  },
  {
    id: 'the-wardrobe',
    title: 'The Wardrobe',
    period: 'Archive category',
    detail:
      'Vintage clothing notes, silhouettes, outfit ideas, and useful styling observations.',
    accent: 'gold',
  },
]

const findings: Finding[] = [
  {
    title: 'The Useful Patina',
    meta: 'Field note 01',
    description:
      'A short guide to choosing vintage pieces with wear that adds character instead of noise.',
  },
  {
    title: 'Small Rooms, Deep Mood',
    meta: 'Field note 02',
    description:
      'Layered textiles, framed fragments, and one brave color can make a corner feel collected.',
  },
  {
    title: 'Market Morning Checklist',
    meta: 'Field note 03',
    description:
      'Measurements, fabric feel, makers marks, and the polite art of walking away.',
  },
]

const wardrobeItems: WardrobeItem[] = [
  {
    title: 'Linen Tailored Set',
    category: 'Timeless Dressing',
    description:
      'Relaxed tailoring with a soft vintage line: useful for slow mornings, city errands, and collected wardrobes.',
    price: 'Archive note',
    originalUrl: 'https://boutique-house-production-751b.up.railway.app/products/?q=linen',
  },
  {
    title: 'Minimal Knit Edit',
    category: 'The Wardrobe',
    description:
      'Quiet knitwear notes in neutral texture, made for layering with denim, wool, and old leather.',
    price: 'Archive note',
    originalUrl: 'https://boutique-house-production-751b.up.railway.app/products/?q=knit',
  },
  {
    title: 'Worn Denim Study',
    category: 'Worn & Loved',
    description:
      'A note on faded blues, softened seams, and denim that feels better after years of ordinary wear.',
    price: 'Archive note',
    originalUrl: 'https://boutique-house-production-751b.up.railway.app/products/?q=jeans',
  },
  {
    title: 'Cotton Shirt Fragment',
    category: 'Early Sketch Collection',
    description:
      'Crisp cotton, pearl buttons, sleeve folds, and the kind of shirt that makes a wardrobe feel edited.',
    price: 'Archive note',
    originalUrl: 'https://boutique-house-production-751b.up.railway.app/products/?q=shirt',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand-mark" href="#top" aria-label="Boutique House Vintage Notes home">
          <span>Boutique House</span>
          <strong>Vintage Notes</strong>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {notes.map((note) => (
            <a href={`#${note.id}`} key={note.id}>
              {note.title}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Collected style, homeware, and atmosphere</p>
            <h1 id="hero-title">Boutique House Vintage Notes</h1>
            <p className="hero-text">
              A separate little home for vintage interiors, wardrobe fragments,
              market finds, and the menu categories already forming inside
              Boutique House.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#notes">
                Read Notes
              </a>
              <a className="button button-secondary" href="#finds">
                View Finds
              </a>
            </div>
          </div>
          <figure className="hero-media">
            <img src={heroImg} alt="Soft editorial still life used as a vintage mood image" />
            <figcaption>Quiet pieces, useful memories, carefully kept.</figcaption>
          </figure>
        </section>

        <section className="intro-band" aria-label="Site purpose">
          <p>
            Part notebook, part mood board, part archive. The Vintage Notes menu
            lives here as its own React website, separate from the main Boutique
            House shop.
          </p>
        </section>

        <section id="notes" className="content-section" aria-labelledby="notes-title">
          <div className="section-heading">
            <p className="eyebrow">Vintage notes</p>
            <h2 id="notes-title">Objects With A Little Weather</h2>
          </div>
          <div className="note-grid">
            {notes.map((note) => (
              <article
                className={`note-card accent-${note.accent}`}
                id={note.id}
                key={note.title}
              >
                <p>{note.period}</p>
                <h3>{note.title}</h3>
                <span>{note.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="finds" className="split-section" aria-labelledby="finds-title">
          <div>
            <p className="eyebrow">The edit</p>
            <h2 id="finds-title">A Place For Interest, Not Checkout Pressure</h2>
          </div>
          <p>
            Use this as a separate website for essays, seasonal mood boards,
            styling observations, antique fair notes, and collected references.
            It can later link back to the main shop only where that feels natural.
          </p>
        </section>

        <section className="content-section wardrobe-section" aria-labelledby="wardrobe-title">
          <div className="section-heading section-heading-wide">
            <div>
              <p className="eyebrow">The wardrobe</p>
              <h2 id="wardrobe-title">Clothes As Notes, Not Stock Pressure</h2>
            </div>
            <p>
              A small edit of clothing references for texture, proportion, and
              quiet styling ideas, kept separate from the main Boutique House shop.
            </p>
          </div>
          <div className="wardrobe-grid">
            {wardrobeItems.map((item) => (
              <article className="wardrobe-card" key={item.title}>
                <div className="wardrobe-image" aria-hidden="true">
                  <img src={heroImg} alt="" />
                </div>
                <div className="wardrobe-copy">
                  <p>{item.category}</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                  <div className="wardrobe-card-footer">
                    <strong>{item.price}</strong>
                    {item.originalUrl && (
                      <a href={item.originalUrl} target="_blank" rel="noreferrer">
                        View Original
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journal" className="content-section journal-section" aria-labelledby="journal-title">
          <div className="section-heading">
            <p className="eyebrow">Journal starters</p>
            <h2 id="journal-title">Three Pieces Ready To Grow</h2>
          </div>
          <div className="journal-list">
            {findings.map((finding) => (
              <article className="journal-item" key={finding.title}>
                <p>{finding.meta}</p>
                <h3>{finding.title}</h3>
                <span>{finding.description}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Boutique House Vintage Notes</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
