import heroImg from './assets/hero.png'
import brightWhiteShortsGuernsey from './assets/wardrobe/bright-white-shorts-guernsey.png'
import brightWhiteShortsStudio from './assets/wardrobe/bright-white-shorts-studio.png'
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
  imageUrl?: string
  isComingSoon?: boolean
  comingSoonCopy?: string
  originalUrl?: string
}

type HoverCaptionProps = {
  children: string
  caption: string
}

const heroSlides = [
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781876234/boutique_pair_1_neqqx2.png',
    alt: 'Boutique Pair 1',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781876234/boutique_pair_2_lse1sd.png',
    alt: 'Boutique Pair 2',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781876237/boutique_pair_3_upv72x.png',
    alt: 'Boutique Pair 3',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781879429/Cotton-voile-fragment_xwgec7.png',
    alt: 'Cotton voile fragment',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781879310/jet-shimmer-evening_au0h38.png',
    alt: 'Jet shimmer evening ensemble',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782077393/kept-memory-collage_e8vdpj.png',
    alt: 'Kept Memory collage',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782082071/cotton-voile-shimmer-skirt2_ubdmxu.png',
    alt: 'Cotton voile blouse and shimmer skirt',
  },
]

const rightColumnSlides = [
  ...heroSlides.slice(0, 6),
]

const seasonalOrbs = [
  { title: 'Vintage Notes Orb', accent: 'vintage-notes' },
  { title: 'Morning Vintage Orb', accent: 'morning' },
  { title: 'Summer Vintage Orb', accent: 'summer' },
  { title: 'Evening Vintage Orb', accent: 'evening' },
]

function HoverCaption({ children, caption }: HoverCaptionProps) {
  return (
    <span className="hover-caption" data-caption={caption} tabIndex={0}>
      {children}
    </span>
  )
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
    title: 'Munich Stripe Blouse & Leather Skirt',
    category: 'Timeless Dressing',
    description:
      'A cobalt stripe blouse and black leather skirt study, held as an atmospheric preview from the Munich story.',
    price: 'Preview note',
    imageUrl:
      'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781730284/Munich-timeless-dressing_moera9.png',
    isComingSoon: true,
    comingSoonCopy: 'Preview image while this wardrobe note is prepared.',
    originalUrl: 'https://boutique-house-production-751b.up.railway.app/products/?category=timeless_dressing',
  },
  {
    title: 'White Shirt Mirror Study',
    category: 'Early Sketch Collection',
    description:
      'A quiet white shirt portrait with warm mirror light, saved as a soft opening note for the sketch archive.',
    price: 'Preview note',
    imageUrl:
      'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781875183/Clood-paper-cottontopCarousel_tnxube.png',
    isComingSoon: true,
    comingSoonCopy: 'Preview image while this piece is prepared.',
    originalUrl: 'https://boutique-house-production-751b.up.railway.app/products/?collection=vintage_notes',
  },
  {
    title: 'Linen Tailored Set',
    category: 'Timeless Dressing',
    description:
      'Relaxed tailoring with a soft vintage line: useful for slow mornings, city errands, and collected wardrobes.',
    price: 'Archive note',
    originalUrl: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781876234/boutique_pair_2_lse1sd.png',
  },
  {
    title: 'Minimal Knit Edit',
    category: 'The Wardrobe',
    description:
      'Quiet knitwear notes in neutral texture, made for layering with denim, wool, and old leather.',
    price: 'Archive note',
    originalUrl: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781876870/neutrals-knit-vintage_mfypob.jpg',
  },
  {
    title: 'Worn Denim Study',
    category: 'Worn & Loved',
    description:
      'A note on faded blues, softened seams, and denim that feels better after years of ordinary wear.',
    price: 'Archive note',
    originalUrl: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781877150/worn-denim-study_jxa1n1.jpg',
  },
  {
    title: 'Cotton Shirt Fragment',
    category: 'Early Sketch Collection',
    description:
      'Crisp cotton, pearl buttons, sleeve folds, and the kind of shirt that makes a wardrobe feel edited.',
    price: 'Archive note',
    originalUrl: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781879429/Cotton-voile-fragment_xwgec7.png',
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
          <figure className="hero-media vintage-carousel" aria-label="Vintage wardrobe carousel">
            <div className="carousel-viewport" tabIndex={0}>
              <div className="carousel-track">
                {[...heroSlides, ...heroSlides].map((slide, index) => (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    aria-hidden={index >= heroSlides.length ? 'true' : undefined}
                    key={`${slide.src}-${index}`}
                  />
                ))}
              </div>
            </div>
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
                id={note.id === 'the-wardrobe' ? 'the-wardrobe-note' : note.id}
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

        <section id="the-wardrobe" className="content-section wardrobe-section" aria-labelledby="wardrobe-title">
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
          <article className="wardrobe-feature" aria-labelledby="bright-white-shorts-title">
            <div className="wardrobe-feature-gallery">
              <figure className="wardrobe-feature-image wardrobe-feature-image--main">
                <img
                  src={brightWhiteShortsGuernsey}
                  alt="Bright-white structured cotton shorts worn on the Guernsey coast"
                />
                <figcaption>Guernsey, 1985/86</figcaption>
              </figure>
              <figure className="wardrobe-feature-image">
                <img
                  src={brightWhiteShortsStudio}
                  alt="Studio view showing the tailored pleats and crisp line of the white shorts"
                />
                <figcaption>Structured cotton, naturally crisp</figcaption>
              </figure>
            </div>
            <div className="wardrobe-feature-copy">
              <p className="eyebrow">Vintage Notes · Guernsey · 1985/86</p>
              <h3 id="bright-white-shorts-title">Bright-White Structured Shorts</h3>
              <p className="wardrobe-feature-lede">
                Bright-white structured cotton shorts, circa 1985/86. Naturally crisp
                with the option to starch for a sharper Sydney 'Paddington' line.
              </p>
              <div className="wardrobe-feature-story">
                <p>
                  In the sunlit streets of Guernsey and the breezy coastal towns, these
                  bright-white cotton shorts were more than clothing: they were a statement
                  of understated style and practical elegance. They were made not from
                  percale, poplin, or drill, but from good, dense, structured cotton: a
                  cloth that held its shape naturally and could take starch without
                  relying on it.
                </p>
                <p>
                  A light starch belonged naturally to the mid-eighties. It gave white
                  shorts a clean, architectural line while preserving the ease of cotton.
                  Worn with a simple tee or tucked shirt, the silhouette stayed minimal,
                  sun-fresh, and quietly refined.
                </p>
                <p>
                  The coastal ease of Guernsey found a kindred spirit in Sydney’s leafy
                  East Side: Paddington lanes, lace-trimmed wrought-iron houses, and summer
                  dressing shaped by light and air. Whether sharpened with starch or left
                  softly natural, this pair moved comfortably between both worlds.
                </p>
                <p>
                  Their charm lies in that versatility: polished without being formal,
                  relaxed without losing their shape. A quiet piece of history woven into
                  fabric, carrying the light and life of the mid-eighties wherever it goes.
                </p>
              </div>
              <footer className="wardrobe-feature-footer">
                <strong>Archive note</strong>
                <span>Dense cotton · starch-optional</span>
              </footer>
            </div>
          </article>
          <article className="wardrobe-alternative" aria-labelledby="white-lines-title">
            <div className="wardrobe-alternative-heading">
              <p className="eyebrow">Alternative editorial story</p>
              <h3 id="white-lines-title">White Lines of Summer</h3>
              <span>Guernsey to Paddington · 1985/86</span>
            </div>
            <div className="wardrobe-alternative-story">
              <p>
                There is a particular kind of white that belongs to summer: bright against
                the Guernsey coast, crisp beneath Sydney sun, and softened only by wear.
                These structured cotton shorts held that light in their clean pleats and
                easy, generous line.
              </p>
              <p>
                Their fabric was simple and assured: not percale, poplin, or drill, but a
                dense cotton with enough body to stand beautifully on its own. A touch of
                starch could make the silhouette more architectural; without it, the shorts
                relaxed into the unstudied ease of a tee, a tucked shirt, and bare summer days.
              </p>
              <p>
                From Guernsey’s sea air to the lace verandas and leafy streets of Paddington,
                they speak the same language: bright white, thoughtful structure, and the
                enduring pleasure of clothes that know exactly what they are.
              </p>
              <blockquote>Structured bright-white shorts, 1985/86. Clean, crisp, starch-optional.</blockquote>
            </div>
          </article>
          <div className="wardrobe-memory-group">
          <section className="vintage-memory" aria-labelledby="double-bay-title">
            <div className="vintage-memory-heading">
              <p className="eyebrow">Wardrobe memory · Sydney</p>
              <h2 id="double-bay-title">Double Bay 1986</h2>
            </div>
            <div className="vintage-memory-copy">
              <p>
                <em>Evening settled over Sydney like silk.</em>
                <br />
                The harbour shimmered below the boutique windows, yachts drifting in the
                violet dusk. I remember standing there: cotton-voile blouse tied softly at
                the neck, skirt brushing my knees, feeling part of the scene and apart from
                it, as if the light itself had chosen me.
              </p>
              <p>
                Double Bay was a world of its own then: leafy streets, polished shopfronts,
                and the hum of conversation between travellers, designers, and dreamers.
                The boutique was small but radiant: a place where clothes were stories, and
                each customer carried one home. I wore that ensemble often, proud yet calm,
                knowing it belonged to the rhythm of the place.
              </p>
              <p className="vintage-memory-culture">
                <strong>1986 · Cultural Atmosphere</strong>
                <br />
                <em>Top Gun</em> released its iconic love theme{' '}
                <strong>“Take My Breath Away”</strong>: a song that drifted through radios and
                shopfronts that year, matching the soft coastal light of Sydney’s eastern
                suburbs.
              </p>
              <p>
                <em>The tag now reads</em>{' '}
                <strong>Property of Sara Oliver · Double Bay 1986</strong>: a quiet signature
                of a time when Sydney felt cinematic, when the harbour lights mirrored the
                folds of voile and the promise of evening lingered in every reflection.
              </p>
            </div>
          </section>
          <div className="memory-sidebars">
          <section className="cultural-timeline" aria-labelledby="cultural-timeline-title">
            <p className="eyebrow">Sound · Cinema · Style</p>
            <h3 id="cultural-timeline-title">1981–1986 · Cultural Timeline</h3>
            <ul>
              <li>
                <strong>1981</strong>
                <span>
                  Phil Collins releases{' '}
                  <em>
                    <HoverCaption caption="1981 · Phil Collins · Atmospheric, coastal, late-evening tone.">
                      In the Air Tonight
                    </HoverCaption>
                  </em>
                  , shaping the decade’s
                  atmospheric sound.
                </span>
              </li>
              <li>
                <strong>1982</strong>
                <span>
                  <em>An Officer and a Gentleman</em> premieres. “
                  <HoverCaption caption="1982 · Joe Cocker & Jennifer Warnes · Romantic, cinematic, uplifting.">
                    Up Where We Belong
                  </HoverCaption>
                  ” becomes a global romantic theme.
                </span>
              </li>
              <li>
                <strong>1983</strong>
                <span>
                  The Police release{' '}
                  <em>
                    <HoverCaption caption="1983 · The Police · Iconic, steady, instantly recognisable.">
                      Every Breath You Take
                    </HoverCaption>
                  </em>
                  , one of the most
                  recognisable songs of the era.
                </span>
              </li>
              <li>
                <strong>1984</strong>
                <span>
                  Sade’s{' '}
                  <em>
                    <HoverCaption caption="1984 · Sade · Elegant, cool, sophisticated.">
                      Smooth Operator
                    </HoverCaption>
                  </em>{' '}
                  defines the cool, elegant sound of
                  mid-eighties evenings.
                </span>
              </li>
              <li>
                <strong>1985</strong>
                <span>
                  Whitney Houston releases{' '}
                  <em>
                    <HoverCaption caption="1985 · Whitney Houston · Soft, romantic, late-night Sydney.">
                      Saving All My Love for You
                    </HoverCaption>
                  </em>
                  , adding a
                  soft-romantic tone to the year.
                </span>
              </li>
              <li>
                <strong>1985</strong>
                <span>
                  Dire Straits release{' '}
                  <em>
                    <HoverCaption caption="1985 · Dire Straits · Global hit, MTV-defining.">
                      Money for Nothing
                    </HoverCaption>
                  </em>{' '}
                  and{' '}
                  <em>
                    <HoverCaption caption="1985 · Dire Straits · Bright, upbeat, boutique-day energy.">
                      Walk of Life
                    </HoverCaption>
                  </em>{' '}
                  on
                  the album <em>Brothers in Arms</em>. Their world tour includes major Sydney
                  performances.
                </span>
              </li>
              <li>
                <strong>1986</strong>
                <span>
                  <em>Top Gun</em> arrives. “
                  <HoverCaption caption="1986 · Berlin · The defining love theme of the year.">
                    Take My Breath Away
                  </HoverCaption>
                  ” becomes the year’s
                  defining love song.
                </span>
              </li>
            </ul>
          </section>
          <aside className="soundtrack-era" aria-labelledby="soundtrack-era-title">
            <p className="eyebrow">Vintage Notes playlist</p>
            <h3 id="soundtrack-era-title">Soundtrack of the Era</h3>
            <ul>
              <li>
                <strong>1981</strong>
                <span>
                  Phil Collins ·{' '}
                  <em>
                    <HoverCaption caption="1981 · Phil Collins · Atmospheric, coastal, late-evening tone.">
                      In the Air Tonight
                    </HoverCaption>
                  </em>
                </span>
              </li>
              <li>
                <strong>1982</strong>
                <span>
                  Joe Cocker &amp; Jennifer Warnes ·{' '}
                  <em>
                    <HoverCaption caption="1982 · Joe Cocker & Jennifer Warnes · Romantic, cinematic, uplifting.">
                      Up Where We Belong
                    </HoverCaption>
                  </em>
                </span>
              </li>
              <li>
                <strong>1986</strong>
                <span>
                  Berlin ·{' '}
                  <em>
                    <HoverCaption caption="1986 · Berlin · The defining love theme of the year.">
                      Take My Breath Away
                    </HoverCaption>
                  </em>
                </span>
              </li>
            </ul>
            <p className="soundtrack-era-note">
              These songs shaped the emotional rhythm of Sydney’s eastern suburbs: Double
              Bay, Paddington, and Darling Point, during the years you lived them.
            </p>
          </aside>
          <section
            className="vintage-carousel-right"
            aria-label="Boutique, fabric, and orb image carousel"
            tabIndex={0}
          >
            <div className="carousel-track-vertical">
              {rightColumnSlides.map((slide) => (
                <img src={slide.src} alt={slide.alt} loading="lazy" key={slide.src} />
              ))}
              {seasonalOrbs.map((orb) => (
                <figure
                  className={`carousel-orb carousel-orb--${orb.accent}`}
                  aria-label={orb.title}
                  key={orb.accent}
                >
                  <span aria-hidden="true" />
                  <figcaption>{orb.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          </div>
          </div>
          <article className="collector-story" aria-labelledby="elephant-skirt-title">
            <header className="collector-story-header">
              <div>
                <p className="eyebrow">Wardrobe Stories · Collector’s Edition</p>
                <h3 id="elephant-skirt-title">Cerulean Top &amp; Elephant Motif A-Line Skirt</h3>
              </div>
              <div className="collector-story-meta">
                <span>Circa 1977–78</span>
                <span>Prue Acton · Melbourne</span>
              </div>
            </header>

            <div
              className="collector-story-gallery"
              aria-label="Elephant motif ensemble photographs"
              aria-describedby="elephant-gallery-caption"
            >
              <figure className="collector-story-image">
                <img
                  src="https://res.cloudinary.com/dwpvbtoad/image/upload/v1781861457/D5B2F488-1ED6-4AE4-B17D-F5D1A25718A1_nqbdyz.jpg"
                  alt="Cerulean top and Elephant motif A-line skirt from the late 1970s"
                  loading="lazy"
                />
                <figcaption>
                  The Elephant motif ensemble · Melbourne, circa 1977–78
                </figcaption>
              </figure>
              <figure className="collector-story-image">
                <img
                  src="https://res.cloudinary.com/dwpvbtoad/image/upload/v1781861077/IMG_7971_nc2txq.jpg"
                  alt="Archival detail view of the Elephant motif outfit"
                  loading="lazy"
                />
                <figcaption>Collector’s view · Colour, structure, and appliqué</figcaption>
              </figure>
              <figure className="collector-story-image">
                <img
                  src="https://res.cloudinary.com/dwpvbtoad/image/upload/v1781853027/IMG_7971_pfbqzr.jpg"
                  alt="Additional archival view of the cerulean and Elephant motif ensemble"
                  loading="lazy"
                />
                <figcaption>Archive view · A wearable piece of art</figcaption>
              </figure>
              <figure className="collector-story-image">
                <img
                  src="https://res.cloudinary.com/dwpvbtoad/image/upload/v1782078948/kept-memory-collage2_xffqjb.png"
                  alt="Kept Memory collage celebrating the cerulean and wildlife motif collection"
                  loading="lazy"
                />
                <figcaption>Kept Memory · The wildlife motif story</figcaption>
              </figure>
            </div>
            <div className="collector-gallery-caption" id="elephant-gallery-caption">
              <div className="collector-gallery-caption-title">
                <h4>Cerulean Top &amp; Elephant Motif A-Line Skirt</h4>
                <p>Prue Acton, Melbourne, c.1977–78</p>
                <span>Cotton, appliqué · Limited Collector’s Series</span>
              </div>
              <div className="collector-gallery-caption-copy">
                <p>
                  Designed by Prue Acton OBE, one of Australia’s most influential fashion
                  designers of the 1960s–80s, this ensemble forms part of a short-run series
                  featuring bold walking-animal motifs. Produced in Melbourne during Acton’s
                  late-1970s creative period, the skirts were made in limited numbers and
                  became highly sought after among schoolgirls, who each chose a different
                  design. Known examples include the Elephant, Tiger, and Giraffe.
                </p>
                <p>
                  Acton’s work from this era is celebrated for its vibrant colour, youthful
                  silhouettes, and modern Australian aesthetic. Pieces from her label are
                  now held in major museum collections, including Museums Victoria and the
                  Powerhouse Museum. This set represents a rare surviving example of her
                  wildlife appliqué series and reflects the designer’s enduring interest in
                  colour, movement, and textile storytelling.
                </p>
              </div>
            </div>

            <div className="collector-story-intro">
              <p>Smart. Vibrant. Unforgettable.</p>
              <span>
                A limited vintage recreation: the memory of a small, unofficial
                club marked by colour, character, and friendship.
              </span>
            </div>

            <div className="collector-story-layout">
              <div className="collector-story-copy">
                <p>
                  This ensemble began its life in Melbourne in the late 1970s, created
                  during a short, brilliant run of collectible wildlife skirts. Each
                  featured a different animal in bold appliqué: walking, striding, or
                  turning across the fabric as if caught mid-story. Produced in limited
                  numbers and sold quietly, they were worn proudly by a certain circle
                  of girls who understood what they were.
                </p>
                <p className="collector-story-emphasis">I was one of them.</p>
                <p>
                  We were school friends, each with our own motif. The Elephant was mine:
                  a soft grey appliqué stitched onto a stiff cotton A-line skirt, its form
                  moving from side to front as you walked. Others wore the Tiger, the
                  Giraffe, and a handful of designs I can no longer fully recall. I remember
                  only that they were vivid, confident, and instantly recognisable. It became our
                  small, unofficial club, and there was a thrill in wearing something no
                  one else had.
                </p>
                <p>
                  The top was always cerulean. Soft cotton, short sleeves, and a gentle,
                  flattering shape balanced the structure of the skirt. It was not meant
                  to compete; it framed the artwork. Together the pieces created a
                  silhouette that felt youthful yet composed. It was summer’s best wear:
                  light-catching, easy, and memorable.
                </p>
                <p>
                  Cut, stitched, and appliquéd by hand in a Melbourne studio, no two skirts
                  were exactly alike. Cerulean, saffron, deep green, and warm grey echoed
                  the Australian landscape without imitating it. The animals were stylised
                  but full of personality, each walking with a sense of purpose.
                </p>
                <p>
                  The Elephant skirt became my favourite. It caught the light at every
                  hour and moved with me. It felt like a small piece of art I could wear,
                  carrying school corridors, summer heat, and the feeling of belonging
                  to something quietly special.
                </p>
                <p>
                  Today, the set stands as a Limited Vintage Recreation: a rare survivor
                  preserved with care for The Wardrobe: Collector’s Edition. It remembers
                  a designer who created joy in cotton and thread, and a moment when
                  clothing felt like a shared secret between friends.
                </p>
                <footer className="collector-story-closing">
                  <span>A delightful, timeless piece.</span>
                  <strong>A story worth keeping.</strong>
                </footer>
              </div>

              <aside className="designer-note" aria-labelledby="prue-acton-title">
                <p className="eyebrow">The designer · In brief</p>
                <h4 id="prue-acton-title">Prue Acton OBE</h4>
                <p>
                  One of Australia’s most influential designers of the 1960s–80s, Prue
                  Acton became known for bold colour, youthful silhouettes, and a distinctly
                  modern Australian aesthetic. She launched her label in Melbourne at 19,
                  built an international following, became the first Australian female
                  designer to show in New York, and created uniforms for three Olympic Games.
                </p>
                <p>
                  Her vibrant textiles and distinctive appliqué work now belong to museum
                  collections including Museums Victoria and Sydney’s Powerhouse. The late-
                  seventies Elephant, Tiger, and Giraffe motifs sit naturally within this
                  creative period: vivid, characterful, and part of Australia’s broader
                  design history.
                </p>
                <p>
                  Acton always considered herself an artist first. In the 1980s she stepped
                  away from commercial fashion and returned to painting, later co-founding
                  Moriarty Colour to advance contemporary colour education. Her dual legacy
                  as a pioneering designer and committed colourist gives the work its rare depth.
                </p>
                <figure className="motif-thumbnail">
                  <img
                    src="https://res.cloudinary.com/dwpvbtoad/image/upload/v1781853024/IMG_7972_hx5f7w.jpg"
                    alt="Small archival glimpse of the Lion motif outfit"
                    loading="lazy"
                  />
                  <figcaption>Lion motif · An archival glimpse</figcaption>
                </figure>
              </aside>
            </div>
          </article>
          <div className="wardrobe-grid">
            {wardrobeItems.map((item) => (
              <article
                className={`wardrobe-card${item.isComingSoon ? ' wardrobe-card--coming-soon' : ''}`}
                key={item.title}
              >
                <div className="wardrobe-image">
                  <img src={item.imageUrl || heroImg} alt={item.title} />
                  {item.isComingSoon && (
                    <div className="wardrobe-coming-soon-veil" aria-label={`${item.title} coming soon`}>
                      <span className="wardrobe-coming-soon-panel">
                        <span className="wardrobe-coming-soon-label">Coming Soon</span>
                      </span>
                    </div>
                  )}
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

