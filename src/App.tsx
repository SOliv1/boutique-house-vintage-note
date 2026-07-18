import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import brightWhiteShortsGuernsey from './assets/wardrobe/bright-white-shorts-guernsey.png'
import brightWhiteShortsStudio from './assets/wardrobe/bright-white-shorts-studio.png'
import cinematicDoubleBay from './assets/wardrobe/cinematic-doubleBay.png'
import linenSydneyEnsemble from './assets/wardrobe/linen-sydney-ensemble.png'
import designerProvenance from './assets/sketchbook/Designer-provenance.jpg'
import redRubyDressSketch from './assets/sketchbook/redRubyDress-1985motifs-sketch.jpg'
import rubyRedSydney1985 from './assets/sketchbook/ruby-redSydney1985.jpeg'
import rubyLaquerLinen from './assets/sketchbook/ruby-laquer-linen.png'
import rubyLaquerLinenStraight from './assets/sketchbook/ruby-laquer-linen-straight.png'
import rubyLinenLineDrawing from './assets/sketchbook/ruby-laquer-linendesignpendantmotifs.png'
import windowTreesDress from './assets/window-trees/window-trees-dress.png'
import windowTreesGarden from './assets/window-trees/window-trees-garden.jpeg'
import whiteSatinSilkSkorts from './assets/edits/white-satin-silk-skorts1984.jpg'
import whiteSatinSilkSkortsSkirt from './assets/edits/white-satin-silk-skorts-skirt1984.jpg'
import './App.css'

const darkLuminousWrapImage =
  'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782129318/summereveningWrap-2026_oa7cbw.png'

const laquerPendantSwatch = new URL(
  './assets/sketchbook/laquer-pendant-swatch.JPG',
  import.meta.url,
).href

const laquerPendantDetail = new URL(
  './assets/sketchbook/laquer-pendant.jpg',
  import.meta.url,
).href

const laquerPendantTile = new URL(
  './assets/sketchbook/laquer-pendant-tile.JPG',
  import.meta.url,
).href

const laquerPendantRuby = new URL(
  './assets/sketchbook/laquer-pendant-ruby.JPG',
  import.meta.url,
).href

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

type FieldNoteChapter = {
  title: string
  body: string[]
  list?: string[]
}

type FieldNote = Finding & {
  id: string
  status: string
  chapters?: FieldNoteChapter[]
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

type CollectionCard = {
  title: string
  meta: string
  detail: string
  imageUrl: string
  prefaceImageUrl?: string
  prefaceCaption?: string
  detailStudy?: {
    title: string
    imageUrl: string
    notes: string[]
  }[]
  conceptStudy?: {
    initialImageUrl: string
    refinedImageUrl: string
  }
  secondaryImageUrl?: string
  secondaryCaption?: string
  finalImageUrl?: string
  finalCaption?: string
  featureImage?: boolean
  isDocument?: boolean
}

type HoverCaptionProps = {
  children: string
  caption: string
}

const blueSilkCottonDressImage =
  'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782305519/blue-cotton-silk-enhanced-1983_qiw8et.png'

const doveGreyBlueSwatch =
  'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782310959/Dove-grey-blue-swatch_yavenx.png'

const reimaginedDressImages = [
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782309339/hero-studio_g7vtmp.png',
    alt: 'Editorial studio portrait of the reimagined dove-grey-blue silk-cotton dress',
    caption: 'Boutique House Reimagined · Studio portrait',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782309000/darkblue-cotton-silk-reimagined4-1983_c1wsuk.png',
    alt: 'Reimagined dove-grey-blue silk-cotton dress beside a classic Ford Capri',
    caption: 'The 1984 silhouette, reimagined',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782308989/darkblue-cotton-silk-reimagined3-1983_hauvw3.png',
    alt: 'Garden editorial view of the reimagined silk-cotton dress',
    caption: 'Garden study · Quiet mid-eighties glamour',
  },
]

const engagementSkortSlides = [
  {
    src: whiteSatinSilkSkorts,
    alt: 'Reimagined white satin silk engagement skort dress with gold lame belt and chainmail sandals',
  },
  {
    src: whiteSatinSilkSkortsSkirt,
    alt: 'Editorial detail of the white satin silk skort skirt with gold lame styling',
  },
]

const archiveHeroSlides = [
  {
    src: rubyLaquerLinen,
    alt: 'Ruby-lacquer linen dress with fitted waist photographed by the fireplace',
  },
  {
    src: rubyLaquerLinenStraight,
    alt: 'Straight ruby-lacquer linen dress photographed by the fireplace',
  },
  {
    src: windowTreesDress,
    alt: 'Model wearing the luminous green Window Trees linen-cotton dress',
  },
  {
    src: brightWhiteShortsGuernsey,
    alt: 'Model wearing bright-white structured cotton shorts on the Guernsey coast',
  },
  {
    src: cinematicDoubleBay,
    alt: 'Cinematic Double Bay wardrobe memory portrait from Sydney 1986',
  },
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
  {
    src: blueSilkCottonDressImage,
    alt: 'Blue silk-cotton work dress photographed beside a 1968 Ford Capri',
  },
]

const heroSlides = [...engagementSkortSlides, ...reimaginedDressImages.slice(0, 2), ...archiveHeroSlides]

const rightColumnSlides = [
  ...engagementSkortSlides,
  reimaginedDressImages[0],
  {
    src: doveGreyBlueSwatch,
    alt: 'Dove-grey-blue silk-cotton swatch from the 1984 work-dress story',
  },
  ...archiveHeroSlides.filter((slide) => slide.src !== blueSilkCottonDressImage),
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

const navigationItems = [
  { label: 'Collections', href: '#notes' },
  { label: 'Early Sketch Collection', href: '#early-sketch-collection', isSubItem: true },
  { label: 'Cultural Timeline', href: '#cultural-timeline', isSubItem: true },
  { label: '1984 Archive', href: '#blue-silk-cotton-work-dress' },
  { label: 'The Wardrobe', href: '#the-wardrobe' },
  { label: 'Stories', href: '#wardrobe-stories' },
  { label: 'Journal', href: '#journal' },
  { label: 'Field Notes', href: '#field-notes', isSubItem: true },
  { label: 'Contact', href: '#contact' },
]

const scrollStops = [
  'top',
  'notes',
  'early-sketch-collection',
  'window-trees-collection',
  'blue-silk-cotton-work-dress',
  'the-wardrobe',
  'wardrobe-stories',
  'cultural-timeline',
  'journal',
  'field-notes',
  'contact',
]

const fieldNotes: FieldNote[] = [
  {
    id: 'field-note-01',
    title: 'The Useful Patina',
    meta: 'Field note 01',
    description:
      'A short guide to choosing vintage pieces with wear that adds character instead of noise.',
    status: 'Ready to open',
    chapters: [
      {
        title: 'What Useful Patina Means',
        body: [
          'Useful patina is wear that adds definition, not distraction.',
          'It is the softening, fading, and shaping that comes from real use, not neglect. It is the difference between a piece that feels lived-in and one that feels worn down.',
          'Useful patina gives an object presence. Noise interrupts. Patina enriches.',
        ],
      },
      {
        title: 'How to Recognise Useful Patina',
        body: [
          'These cues show the piece has been used well, not compromised.',
        ],
        list: [
          'Wear should follow movement: elbows, hems, pockets, handles.',
          'Structure should stay true: the piece must hold its line.',
          'Fading should be even, not patchy.',
          'Texture should feel settled, not weakened.',
          'Repairs should be intentional, not messy.',
        ],
      },
      {
        title: 'The Natural Light Test',
        body: [
          'Hold the piece in natural light.',
          'If the wear looks balanced, softened, and well-earned, keep it. If the wear looks threadbare, thinned, patchy, or visually loud, leave it.',
          'This test helps you distinguish patina from damage.',
        ],
      },
      {
        title: 'Choosing Proportion',
        body: [
          'Choose proportion that still works today and has a timeless, settled quality.',
          'A vintage piece should feel relevant, not costume. Proportion is the bridge between past and present.',
        ],
      },
      {
        title: 'The Movement Check',
        body: [
          'Try the garment on.',
          'If it moves with you, the patina is beneficial. If it feels stiff, fragile, or resistant, the wear has become structural, and the piece should be avoided.',
          'Patina should never interfere with comfort or movement.',
        ],
      },
      {
        title: 'Why Provenance Matters',
        body: [
          'Provenance gives the piece context and lineage.',
          'It tells you where it lived, who wore it, and why it lasted. It turns vintage into story, not surplus.',
          'A garment with provenance feels anchored. A garment without it feels anonymous.',
        ],
      },
      {
        title: 'How to Choose Pieces With Soul',
        body: [
          'Soul comes from clarity, restraint, and honest wear.',
        ],
        list: [
          'Start with fabric feel. It should feel confident, not fragile.',
          'Choose proportion that still works today.',
          'Look for one defining detail: a pocket line, a button, a stitch.',
          'Prefer colours that have softened gracefully.',
          'Trust your first response. It is usually accurate.',
        ],
      },
      {
        title: 'How Clothes Become Reimagined',
        body: [
          'Reimagining is about refining the original intention.',
          'It improves comfort, movement, or proportion without erasing the era. The best reimagined pieces keep the spirit of the garment while making it feel relevant now.',
          'This is how vintage becomes current, not costume.',
        ],
      },
      {
        title: 'Where to Find Useful Patina',
        body: [
          'These places reward patience and curiosity.',
        ],
        list: [
          'Antique fairs',
          'Small vintage shops',
          'Estate sales',
          'Market stalls',
          'Independent dealers',
          'Family archives',
        ],
      },
      {
        title: 'Three Additional Tools',
        body: [
          'The Patina Test: natural light reveals whether wear is balanced or broken.',
          'The Movement Check: movement reveals whether wear is character or deterioration.',
          'The Continuity Rule: choose pieces you can continue wearing without hesitation.',
        ],
      },
      {
        title: 'Closing Note',
        body: [
          'Useful patina is the record of use: a way to choose vintage that feels lived-in, expressive, and ready for its next chapter.',
        ],
      },
    ],
  },
  {
    id: 'field-note-02',
    title: 'Small Rooms, Deep Mood',
    meta: 'Field note 02',
    description:
      'Layered textiles, framed fragments, and one brave color can make a corner feel collected.',
    status: 'Next drawer',
  },
  {
    id: 'field-note-03',
    title: 'Market Morning Checklist',
    meta: 'Field note 03',
    description:
      'Measurements, fabric feel, makers marks, and the polite art of walking away.',
    status: 'Next drawer',
  },
]

const earlySketchCards: CollectionCard[] = [
  {
    title: 'Designer Provenance',
    meta: 'Archive card',
    detail:
      'Provenance, materials, emotional notes, and era context for the ruby linen design.',
    imageUrl: designerProvenance,
    prefaceImageUrl: rubyRedSydney1985,
    prefaceCaption: 'Original 1985 Darling Point dress inspiration for ruby lacquer dress',
    detailStudy: [
      {
        title: 'Ruby-Lacquer Swatch',
        imageUrl: laquerPendantDetail,
        notes: ['Linen-Cotton Weave', 'Starched Texture', 'Ruby-Lacquer Tone'],
      },
      {
        title: 'Motif Tile',
        imageUrl: laquerPendantTile,
        notes: ['Circular Ruby-Lacquer + Black-Jet Motif', 'Pencil Linework Repeat'],
      },
      {
        title: 'Pendant Macro',
        imageUrl: laquerPendantRuby,
        notes: ['Rope Pearls', 'Jet Shimmer Beads', 'Ruby-Lacquer Pendant'],
      },
    ],
    conceptStudy: {
      initialImageUrl: laquerPendantSwatch,
      refinedImageUrl: rubyLinenLineDrawing,
    },
    isDocument: true,
  },
  {
    title: 'Ruby Linen Composition',
    meta: 'Colour study',
    detail:
      'A ruby linen dress idea held with pendant motifs, swatches, and early proportion notes.',
    imageUrl: rubyLaquerLinen,
    secondaryImageUrl: redRubyDressSketch,
    secondaryCaption: 'C1985 RUBY-LAQUER DRESS',
    finalImageUrl: rubyLaquerLinenStraight,
    finalCaption: 'Straight ruby-lacquer linen dress study.',
    featureImage: true,
  },
]

const wardrobeItems: WardrobeItem[] = [
  {
    title: 'Dove-Grey-Blue Dress · Reimagined',
    category: 'Boutique House Reimagined',
    description:
      'A contemporary product-line study drawn from the original silk-cotton work dress worn in Adelaide in 1984.',
    price: 'Product line preview',
    imageUrl: reimaginedDressImages[0].src,
  },
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
    originalUrl:
      'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781730284/Munich-timeless-dressing_moera9.png',
  },
  {
    title: 'Linen Tailored Set',
    category: 'Timeless Dressing',
    description:
      'Relaxed tailoring with a soft vintage line: useful for slow mornings, city errands, and collected wardrobes.',
    price: 'Archive note',
    imageUrl:
      'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782312597/Linen-tailored-1986_bceu5o.png',
    isComingSoon: true,
    comingSoonCopy: 'Preview image while this tailored wardrobe note is prepared.',
    originalUrl:
      'https://res.cloudinary.com/dwpvbtoad/image/upload/v1782312597/Linen-tailored-1986_bceu5o.png',
  },
  {
    title: 'Minimal Knit Edit',
    category: 'The Wardrobe',
    description:
      'Quiet knitwear notes in neutral texture, made for layering with denim, wool, and old leather.',
    price: 'Archive note',
    imageUrl:
      'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781876870/neutrals-knit-vintage_mfypob.jpg',
    isComingSoon: true,
    comingSoonCopy: 'Preview image while this knitwear edit is prepared.',
    originalUrl: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781876870/neutrals-knit-vintage_mfypob.jpg',
  },
  {
    title: 'Worn Denim Study',
    category: 'Worn & Loved',
    description:
      'A note on faded blues, softened seams, and denim that feels better after years of ordinary wear.',
    price: 'Archive note',
    imageUrl:
      'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781877150/worn-denim-study_jxa1n1.jpg',
    isComingSoon: true,
    comingSoonCopy: 'Preview image while this Worn & Loved study is prepared.',
    originalUrl: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1781877150/worn-denim-study_jxa1n1.jpg',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMenuOpen)

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const closeOnDesktop = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('resize', closeOnDesktop)

    return () => {
      document.body.classList.remove('mobile-menu-open')
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const scrollToNeighbourSection = (direction: 'previous' | 'next') => {
    const headerOffset = 120
    const sectionPositions = scrollStops
      .map((id) => {
        const element = document.getElementById(id)
        if (!element) {
          return null
        }

        return {
          id,
          top: element.getBoundingClientRect().top + window.scrollY,
        }
      })
      .filter((section): section is { id: string; top: number } => Boolean(section))

    const currentY = window.scrollY + headerOffset
    const target =
      direction === 'next'
        ? sectionPositions.find((section) => section.top > currentY + 8)
        : [...sectionPositions].reverse().find((section) => section.top < currentY - 8)

    document.getElementById(target?.id ?? (direction === 'next' ? 'contact' : 'top'))?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a
          className="brand-mark"
          href="#top"
          aria-label="Boutique House Vintage Notes home"
          onClick={closeMenu}
        >
          <span>Boutique House</span>
          <strong>Vintage Notes</strong>
        </a>
        <button
          className={`mobile-menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
          aria-label="Sections"
        >
          <div className="mobile-menu-heading">
            <a href="#top" onClick={closeMenu}>
              <span>Boutique House</span>
              <strong>Vintage Notes</strong>
            </a>
            <button type="button" aria-label="Close navigation menu" onClick={closeMenu}>
              ×
            </button>
          </div>
          {navigationItems.map((item) => (
            <a
              className={item.isSubItem ? 'nav-sub-link' : undefined}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className={`mobile-menu-backdrop${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label="Close navigation menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
        />
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
              <a className="button button-secondary" href="#the-wardrobe">
                Explore The Wardrobe
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
          <section
            className="collection-card-series"
            aria-labelledby="early-sketch-series-title"
          >
            <div className="collection-series-heading">
              <p className="eyebrow">Sketchbook collections</p>
              <h3 id="early-sketch-series-title">Early Sketch Collection</h3>
              <p>
                First impressions, shapes, swatches, and the pieces that begin as a margin
                note.
              </p>
            </div>
            <div className="collection-card-grid">
              {earlySketchCards.map((card) => (
                <article
                  className={`collection-card${card.isDocument ? ' collection-card--document' : ''}${card.featureImage ? ' collection-card--feature-image' : ''}`}
                  key={card.title}
                >
                  {card.prefaceImageUrl && (
                    <figure className="collection-card-preface">
                      <img
                        src={card.prefaceImageUrl}
                        alt={card.prefaceCaption || card.title}
                        loading="lazy"
                        decoding="async"
                      />
                      {card.prefaceCaption && <figcaption>{card.prefaceCaption}</figcaption>}
                    </figure>
                  )}
                  <figure>
                    <img src={card.imageUrl} alt={card.title} loading="lazy" decoding="async" />
                  </figure>
                  {card.detailStudy && (
                    <div className="collection-detail-study">
                      {card.detailStudy.map((study) => (
                        <figure key={study.title}>
                          <figcaption>{study.title}</figcaption>
                          <img
                            src={study.imageUrl}
                            alt={study.title}
                            loading="lazy"
                            decoding="async"
                          />
                          <ul>
                            {study.notes.map((note) => (
                              <li key={note}>{note}</li>
                            ))}
                          </ul>
                        </figure>
                      ))}
                    </div>
                  )}
                  {card.conceptStudy && (
                    <div className="collection-concept-study">
                      <figure>
                        <figcaption>Initial Concept</figcaption>
                        <img
                          src={card.conceptStudy.initialImageUrl}
                          alt="Ruby lacquer linen fabric swatch"
                          loading="lazy"
                          decoding="async"
                        />
                        <ul>
                          <li>Ruby-Lacquer Dress</li>
                          <li>Sydney 1985</li>
                          <li>Linen-Cotton, Starched</li>
                        </ul>
                      </figure>
                      <figure>
                        <figcaption>Refined Design</figcaption>
                        <img
                          src={card.conceptStudy.refinedImageUrl}
                          alt="Line drawing of the ruby lacquer dress with pendant and shoe studies"
                          loading="lazy"
                          decoding="async"
                        />
                        <ul>
                          <li>Studio Sketch</li>
                          <li>Pendant + Shoe Close-ups</li>
                        </ul>
                      </figure>
                    </div>
                  )}
                  {card.finalImageUrl && (
                    <figure className="collection-card-final">
                      <img
                        src={card.finalImageUrl}
                        alt={`${card.title} finished ruby linen dress`}
                        loading="lazy"
                        decoding="async"
                      />
                      {card.finalCaption && <figcaption>{card.finalCaption}</figcaption>}
                    </figure>
                  )}
                  {card.secondaryImageUrl && (
                    <figure className="collection-card-inset">
                      <img
                        src={card.secondaryImageUrl}
                        alt={`${card.title} colour drawing`}
                        loading="lazy"
                        decoding="async"
                      />
                      {card.secondaryCaption && <figcaption>{card.secondaryCaption}</figcaption>}
                    </figure>
                  )}
                  <div className="collection-card-copy">
                    <p>{card.meta}</p>
                    <h4>{card.title}</h4>
                    <span>{card.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <article
            id="window-trees-collection"
            className="window-trees-story"
            aria-labelledby="window-trees-title"
          >
            <header className="window-trees-header">
              <div>
                <p className="eyebrow">Timeless Dressing · Archive story</p>
                <h3 id="window-trees-title">The Window Trees Collection</h3>
                <p className="window-trees-subtitle">A Boutique House Original Textile Story</p>
              </div>
              <dl className="window-trees-meta">
                <div>
                  <dt>Season</dt>
                  <dd>Spring / Summer</dd>
                </div>
                <div>
                  <dt>Mood</dt>
                  <dd>Luminous · serene · architectural · rooted in nature</dd>
                </div>
              </dl>
            </header>

            <div className="window-trees-gallery">
              <figure className="window-trees-image window-trees-image--dress">
                <img
                  src={windowTreesDress}
                  alt="Luminous green linen-cotton dress with embroidered leaves, jet shimmer heels, and striped garden hat"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>The Window Trees dress · Spring / Summer</figcaption>
              </figure>
              <figure className="window-trees-image window-trees-image--garden">
                <img
                  src={windowTreesGarden}
                  alt="The garden trees and morning sky that inspired the collection"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>The view from the window · trees in morning light</figcaption>
              </figure>
            </div>

            <div className="window-trees-intro">
              <p>The trees in my garden, translated into textile architecture.</p>
              <span>
                Crafted in a linen-cotton blend for crispness and breathability, the dress
                moves from pale, luminous green at the neckline to vibrant green at the hem.
              </span>
            </div>

            <div className="window-trees-details">
              <section aria-labelledby="window-trees-details-title">
                <p className="eyebrow">Garment study</p>
                <h4 id="window-trees-details-title">Structure in leaf and light</h4>
                <ul>
                  <li>
                    <strong>V-neckline</strong>
                    <span>Tailored and architectural, echoing the clarity of morning light.</span>
                  </li>
                  <li>
                    <strong>Three-quarter sleeves</strong>
                    <span>Lightly starched, with embroidered leaf motifs at the cuffs.</span>
                  </li>
                  <li>
                    <strong>Right-front slit</strong>
                    <span>Edged with tiny leaf motifs, adding movement and subtle rhythm.</span>
                  </li>
                  <li>
                    <strong>Back structured pleat</strong>
                    <span>Sculptural and vertical, reminiscent of tree trunks.</span>
                  </li>
                </ul>
              </section>
              <aside className="window-trees-accents" aria-labelledby="window-trees-accents-title">
                <p className="eyebrow">Finishing notes</p>
                <h4 id="window-trees-accents-title">Garden-party signatures</h4>
                <p>
                  <strong>Jet Shimmer pointed kitten heels</strong>: black with a subtle
                  sparkle, completing the ensemble.
                </p>
                <p>
                  <strong>Signature straw hat</strong>: wide-brimmed and finely striped in
                  duo greens, with a shimmer dark-green band tilted over one eye.
                </p>
              </aside>
            </div>

            <div className="window-trees-closing">
              <section aria-labelledby="window-trees-origin-title">
                <p className="eyebrow">Concept origin</p>
                <h4 id="window-trees-origin-title">The view becomes the cloth</h4>
                <p>
                  Morning light, tree silhouettes, and the quiet rhythm of nature become a
                  study in line, movement, and colour. The collection embodies Boutique
                  House’s ethos: peace, harmony, and timeless dressing rooted in place.
                </p>
              </section>
              <section aria-labelledby="window-trees-styling-title">
                <p className="eyebrow">Styling notes</p>
                <h4 id="window-trees-styling-title">From picnic to soirée</h4>
                <ul>
                  <li>Ideal for garden parties, countryside weddings, or summer soirées.</li>
                  <li>Dress down with flat sandals and a woven tote for daytime picnics.</li>
                  <li>Pair with the Dark Luminous Wrap for evening elegance.</li>
                </ul>
              </section>
            </div>

            <section
              className="window-trees-wrap"
              aria-labelledby="dark-luminous-wrap-title"
            >
              <figure className="window-trees-wrap-image">
                <img
                  src={darkLuminousWrapImage}
                  alt="Dark luminous green evening wrap with tiny leaf-shimmer motifs"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Dark Luminous Wrap · Evening Elegance</figcaption>
              </figure>
              <div className="window-trees-wrap-copy">
                <p className="eyebrow">
                  Vintage Notes · Timeless Dressing · Evening Elegance
                </p>
                <h4 id="dark-luminous-wrap-title">The Dark Luminous Wrap</h4>
                <p>
                  A dark luminous green evening wrap with tiny leaf-shimmer motifs.
                  Designed for quiet evening elegance and worn as a companion piece
                  to the Timeless Dressing collection.
                </p>
                <span>
                  A deeper garden tone for twilight: softly reflective, understated,
                  and naturally paired with The Window Trees dress.
                </span>
              </div>
            </section>

            <blockquote className="window-trees-reflection">
              <p className="eyebrow">Designer’s reflection</p>
              “I wanted to capture the feeling of standing at my window, the trees glowing
              in morning light, and translate that serenity into a dress that moves with the day.”
            </blockquote>
          </article>

          <article
            id="blue-silk-cotton-work-dress"
            className="period-dress-story"
            aria-labelledby="blue-work-dress-title"
          >
            <header className="period-dress-header">
              <div>
                <p className="eyebrow">Timeless Dressing · Vintage Notes · 1984</p>
                <h3 id="blue-work-dress-title">Blue Silk-Cotton Work Dress</h3>
              </div>
              <p className="period-dress-date">A working wardrobe memory</p>
            </header>

            <figure className="period-dress-image">
              <img
                src={blueSilkCottonDressImage}
                alt="Blue silk-cotton work dress worn with dark brown Charles Jourdan courts beside a 1968 Ford Capri"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Garden portrait · Blue silk-cotton work dress · 1984
              </figcaption>
            </figure>

            <div className="period-dress-layout">
              <div className="period-dress-intro">
                <p>
                  Worn as part of my work ensemble in 1984: a blue silk-cotton
                  dress paired with dark brown leather courts by Charles Jourdan.
                </p>
              </div>

              <div className="period-dress-story-copy">
                <p>
                  I wore this dress while working in a creative fashion boutique
                  in the city shopping precinct. It was everyday professional
                  styling for that period: polished, practical, and expressive
                  enough for a fashion-led setting.
                </p>
                <p>
                  The outfit was photographed in the garden beside my first car,
                  a 1968 Ford Capri with black leather seats and distinctive
                  G-stripes running along the sides.
                </p>
              </div>
            </div>

            <figure className="period-dress-swatch">
              <img
                src={doveGreyBlueSwatch}
                alt="Dove-grey-blue silk-cotton fabric swatch associated with the 1984 work dress"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>Original colour reference · 1984</strong>
                <span>
                  Dove-grey-blue silk-cotton: the softly lustrous colour and tactile
                  fabric reference behind the work ensemble.
                </span>
              </figcaption>
            </figure>

            <dl className="period-dress-details">
              <div>
                <dt>Dress</dt>
                <dd>Blue silk-cotton work dress</dd>
              </div>
              <div>
                <dt>Shoes</dt>
                <dd>Dark brown leather courts by Charles Jourdan</dd>
              </div>
              <div>
                <dt>Setting</dt>
                <dd>Garden portrait beside a 1968 Ford Capri</dd>
              </div>
              <div>
                <dt>Context</dt>
                <dd>
                  Creative fashion boutique, city shopping precinct, Adelaide,
                  South Australia
                </dd>
              </div>
            </dl>

            <footer className="period-dress-closing">
              The image records the ensemble exactly as it was worn for everyday
              professional life in 1984.
            </footer>
          </article>
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

          <div className="vintage-essay">
            <div className="vintage-essay-header">
              <h2>1984 Engagement Skort Dress · Archive Essay</h2>
              <figure className="motif-thumbnail skort-thumbnail">
                <img
                  src={whiteSatinSilkSkorts}
                  alt="White satin-silk engagement skort dress reference"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>White satin-silk dress · 1984 reference</figcaption>
              </figure>
            </div>

            <p>
              This piece sits at the intersection of memory, tailoring, and quiet summer atmosphere.
              The 1984 engagement dress is part of the Boutique House archive. It reflects early adulthood,
              Adelaide light, and the calm interiors of a North Adelaide home.
            </p>

            <p>
              The dress was made from white silk satin with a soft reflective sheen. The updated version
              preserves the original fabric character while improving movement. The skirt is now a concealed
              skort with a clean outer drape and a tailored inner layer.
            </p>

            <p>
              A diagonal gold-thread motif ran from the left shoulder across the bodice and around the hem.
              The reinterpretation treats this motif as architectural linework that frames the silhouette.
            </p>

            <p>
              The original gold lamé tie belt is reimagined as a sculpted accessory. Slightly wider. Stabilised.
              Calibrated to match the gold tone of the sandals.
            </p>

            <p>
              Gold lamé and chainmail sandals complete the outfit. The updated stance improves comfort with
              higher arch support, secure ankle wrap, and softened chainmail.
            </p>

            <p>
              The dress was worn at a first engagement party in 1984 in North Adelaide. Cream carpets and
              creamy white walls created a quiet palette that harmonised with the garment. The piece was
              purchased on Melbourne Street or at Burnside Village.
            </p>

            <p>
              The modern version aligns with Boutique House principles: tailoring, texture, and slow wardrobe
              ideas. It stands as a reference point for timeless dressing and atmospheric design.
            </p>
          </div>

          <article
            id="dove-grey-blue-reimagined"
            className="reimagined-story"
            aria-labelledby="reimagined-dress-title"
          >
            <div className="reimagined-gallery" aria-label="Reimagined dress editorial photographs">
              <figure className="reimagined-image reimagined-image--lead">
                <img
                  src={reimaginedDressImages[0].src}
                  alt={reimaginedDressImages[0].alt}
                  loading="eager"
                  decoding="async"
                />
                <figcaption>{reimaginedDressImages[0].caption}</figcaption>
              </figure>
              <figure className="reimagined-image reimagined-image--swatch">
                <img
                  src={doveGreyBlueSwatch}
                  alt="Close crop of the original 1984 dove-grey-blue fabric swatch"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Archive fabric · Dove-grey-blue · 1984</figcaption>
              </figure>
            </div>

            <div className="reimagined-copy">
              <header>
                <p className="eyebrow">
                  Timeless Dressing · Vintage Notes (Reimagined) · 1984 · Blue
                  Silk-Cotton · Charles Jourdan · Ford Capri
                </p>
                <h3 id="reimagined-dress-title">The Dove-Grey-Blue Dress, Reimagined</h3>
                <p className="reimagined-lede">
                  A new Boutique House product line, developed from the original
                  silk-cotton dress I wore while working in an Adelaide fashion boutique
                  in 1984.
                </p>
              </header>

              <p>
                The original photograph becomes a clear editorial Vintage Notes image:
                calm, balanced, and faithful to the quietly professional glamour of the
                mid-eighties. The model faces the camera naturally, without exaggerated
                styling or shoulder pads.
              </p>

              <dl className="reimagined-details">
                <div>
                  <dt>Cloth</dt>
                  <dd>Heavier-weave blue silk-cotton, softly lustrous and structured</dd>
                </div>
                <div>
                  <dt>Shape</dt>
                  <dd>Modest V-neckline, defined waist, and skirt falling just below the knee</dd>
                </div>
                <div>
                  <dt>Sleeves</dt>
                  <dd>Short and gently puffed, with soft gathers at the shoulder</dd>
                </div>
                <div>
                  <dt>Signature</dt>
                  <dd>Matching side-fastening belt with a small flower motif at the clasp</dd>
                </div>
              </dl>

              <div className="reimagined-notes">
                <p>
                  <strong>Styling:</strong> dark brown leather courts by Charles Jourdan;
                  softly waved, shoulder-length blonde hair, parted to the left.
                </p>
                <p>
                  <strong>Setting:</strong> natural garden daylight beside a 1968 Ford
                  Capri with black leather seats and G-stripes, held in a soft 1980s film tone.
                </p>
              </div>

              <figure className="reimagined-swatch-study">
                <img
                  src={doveGreyBlueSwatch}
                  alt="Full archive swatch showing the colour and texture of the original 1984 dove-grey-blue fabric"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <strong>Archive colour reference · 1984</strong>
                  <span>
                    The original dove-grey-blue swatch: a tactile reference for the
                    reimagined silk-cotton cloth, its softly muted colour and heavier weave.
                  </span>
                </figcaption>
              </figure>

              <footer>
                <strong>Overall mood</strong>
                <span>Confident · elegant · quietly professional</span>
              </footer>
            </div>
          </article>
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
          <div id="wardrobe-stories" className="wardrobe-memory-group">
          <section className="vintage-memory" aria-labelledby="double-bay-title">
            <div className="vintage-memory-heading">
              <p className="eyebrow">Wardrobe memory · Sydney</p>
              <h2 id="double-bay-title">Double Bay 1986</h2>
              <figure className="vintage-memory-card">
                <img
                  src={cinematicDoubleBay}
                  alt="Cinematic Double Bay wardrobe memory portrait from Sydney 1986"
                  loading="lazy"
                />
                <figcaption>Double Bay evening study</figcaption>
              </figure>
              <figure className="vintage-memory-card">
                <img
                  src={linenSydneyEnsemble}
                  alt="Linen Sydney ensemble wardrobe memory with Double Bay 1986 archive tag"
                  loading="lazy"
                />
                <figcaption>Linen Sydney ensemble</figcaption>
              </figure>
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
          <section id="cultural-timeline" className="cultural-timeline" aria-labelledby="cultural-timeline-title">
            <p className="eyebrow">Sound · Cinema · Style</p>
            <h3 id="cultural-timeline-title">1981–1986 / 87 · Cultural Timeline</h3>
            <ul>
              <li>
                <strong>1981 Kicks off ...</strong>
                <span>
                  Vangelis releases{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/8a-HfNE3EIo?si=6e272tYZKUYb6O4Y"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1981 · Vangelis · Bright, heroic, steady, pulse, electronic.">
                        Chariots of Fire
                      </HoverCaption>
                    </em>
                  </a>
                   , my favourite epic track in Adelaide, South Australia from September 1981, filled with memories of dear friends from that time.
                </span>
              </li>
              <li>
                <strong>1981</strong>
                <span>
                  Phil Collins releases{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/YkADj0TPrJA?si=eXaZVVSjsATWqrcC"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1981 · Phil Collins · Atmospheric, coastal, late-evening tone.">
                        In the Air Tonight
                      </HoverCaption>
                    </em>
                  </a>
                  , shaping the decade’s
                  atmospheric sound.
                </span>
              </li>
              <li>
                <strong>1982</strong>
                <span>
                  <em>An Officer and a Gentleman</em> premieres. “
                  <a
                    className="music-link"
                    href="https://music.youtube.com/watch?v=bjrOcrisGyI&si=-KucT-EKCEp54cX9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HoverCaption caption="1982 · Joe Cocker & Jennifer Warnes · Romantic, cinematic, uplifting.">
                      Up Where We Belong
                    </HoverCaption>
                  </a>
                  ” becomes a global romantic theme.
                </span>
              </li>
              <li>
                <strong>1983</strong>
                <span>
                  The Police release{' '}
                  <a
                    className="music-link"
                    href="https://music.youtube.com/watch?v=-SaUrDhp034&si=E4Zj9_g3OqFCAUw0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1983 · The Police · Iconic, steady, instantly recognisable.">
                        Every Breath You Take
                      </HoverCaption>
                    </em>
                  </a>
                  , one of the most
                  recognisable songs of the era.
                </span>
              </li>
              <li>
                <strong>1984</strong>
                <span>
                  Sade’s{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/4TYv2PhG89A?si=jUb7uSpGOHUk8WX7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1984 · Sade · Elegant, cool, sophisticated.">
                        Smooth Operator
                      </HoverCaption>
                    </em>
                  </a>{' '}
                  defines the cool, elegant sound of mid-eighties evenings. I had just
                  moved to Sydney from Adelaide and was working in a smart boutique in
                  Double Bay when I first heard this.
                </span>
              </li>
              <li>
                <strong>1985</strong>
                <span>
                  Whitney Houston releases{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/7_S2lTmIecI?si=DkH2tUtqfSJ1_UJb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1985 · Whitney Houston · Soft, romantic, late-night Sydney.">
                        Saving All My Love for You
                      </HoverCaption>
                    </em>
                  </a>
                  , adding a soft-romantic tone to the year. I was working for Cartier
                  and Rothmans PR when I first heard this, driving all over Sydney on
                  promotion tours.
                </span>
              </li>
              <li>
                <strong>1985</strong>
                <span>
                  Philip Oakey &amp; Giorgio Moroder release{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/PE1lzqJCeJ0?si=c8ofLKm4rg6YUEfo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1985 · Philip Oakey & Giorgio Moroder · Polished Sydney workday futurism.">
                        Together in Electric Dreams
                      </HoverCaption>
                    </em>
                  </a>
                  . I was working in a smart bank in Sydney, wearing a cream cotton suit
                  with a midi-length skirt, matching cream blouse, and black satin tie
                  bow. I always felt very polished in that outfit, bought from guess
                  where: Georges in Cross Street, Double Bay.
                </span>
              </li>
              <li>
                <strong>1985</strong>
                <span>
                  Dire Straits release{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/IGSykzjjS80?si=qNIBuNmsqUZ9Q5Pv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1985 · Dire Straits · Global hit, MTV-defining. We were right there, live from Sydney Arena.">
                        Money for Nothing
                      </HoverCaption>
                    </em>
                  </a>{' '}
                  and{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/Gy3YiqLmPD8?si=fvAU00PgeN1ZQxzg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1985 · Dire Straits · Live at the Sydney Arena. We were there. Bright, upbeat, boutique-day energy.">
                        Walk of Life
                      </HoverCaption>
                    </em>
                  </a>{' '}
                  on the album <em>Brothers in Arms</em>. We were right there, live
                  from Sydney Arena, with{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/8xsqrghU3sM?si=01uhu-lYTJke8cPE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="Dire Straits live · Sydney Arena memory · guitar-bright and unforgettable.">
                        Sultans of Swing
                      </HoverCaption>
                    </em>
                  </a>{' '}
                  folded into that unforgettable concert memory.
                </span>
              </li>
              <li>
                <strong>1986</strong>
                <span>
                  <em>Top Gun</em> arrives. “
                  <a
                    className="music-link"
                    href="https://youtube.com/shorts/DWTXPI-1x7A?si=VK6i0t8dShmg3TUW"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HoverCaption caption="1986 · Berlin · The defining love theme of the year.">
                      Take My Breath Away
                    </HoverCaption>
                  </a>
                  ” becomes the year’s
                  defining love song.
                </span>
              </li>
              <li>
                <strong>1986 / 1987</strong>
                <span>
                  Orchestral Manoeuvres in the Dark release{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/moFiaQPCl04?si=cyK79uEtiFYheUad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="Global release September 1986 · Reached Sydney, NSW in late 1986 / 1987 · Big Australian hit, truly atmospheric.">
                        Forever Live and Die
                      </HoverCaption>
                    </em>
                  </a>
                  , globally released in September 1986 and reaching Sydney, Australia
                  as a big hit in late 1986 / 1987. I always associated it with Sydney
                  high life, truly atmospheric music.
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
                  <a
                    className="music-link"
                    href="https://youtu.be/YkADj0TPrJA?si=eXaZVVSjsATWqrcC"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1981 · Phil Collins · Atmospheric, coastal, late-evening tone.">
                        In the Air Tonight
                      </HoverCaption>
                    </em>
                  </a>
                </span>
              </li>
              <li>
                <strong>1982</strong>
                <span>
                  Joe Cocker &amp; Jennifer Warnes ·{' '}
                  <a
                    className="music-link"
                    href="https://music.youtube.com/watch?v=bjrOcrisGyI&si=-KucT-EKCEp54cX9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1982 · Joe Cocker & Jennifer Warnes · Romantic, cinematic, uplifting.">
                        Up Where We Belong
                      </HoverCaption>
                    </em>
                  </a>
                </span>
              </li>
              <li>
                <strong>1986</strong>
                <span>
                  Berlin ·{' '}
                  <a
                    className="music-link"
                    href="https://youtube.com/shorts/DWTXPI-1x7A?si=VK6i0t8dShmg3TUW"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="1986 · Berlin · The defining love theme of the year.">
                        Take My Breath Away
                      </HoverCaption>
                    </em>
                  </a>
                </span>
              </li>
              <li>
                <strong>1986 / 1987</strong>
                <span>
                  Orchestral Manoeuvres in the Dark ·{' '}
                  <a
                    className="music-link"
                    href="https://youtu.be/moFiaQPCl04?si=cyK79uEtiFYheUad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>
                      <HoverCaption caption="Global release September 1986 · Sydney, NSW hit in late 1986 / 1987 · Sydney high-life atmosphere.">
                        Forever Live and Die
                      </HoverCaption>
                    </em>
                  </a>
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

            <section className="collector-era-soundtrack" aria-labelledby="collector-era-soundtrack-title">
              <div>
                <p className="eyebrow">Late-seventies atmosphere</p>
                <h4 id="collector-era-soundtrack-title">The Sound Around The Motif Dress</h4>
              </div>
              <ul>
                <li>
                  <strong>1977-78</strong>
                  <span>
                    Bread ·{' '}
                    <a
                      className="music-link"
                      href="https://music.youtube.com/watch?v=OudI2JPhEqQ&si=RDxpLOsWMTGRLQWO"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <em>
                        <HoverCaption caption="A soft romantic classic, remembered here as part of the late-seventies mood.">
                          Make It with You
                        </HoverCaption>
                      </em>
                    </a>
                  </span>
                </li>
                <li>
                  <strong>1977-78</strong>
                  <span>
                    America ·{' '}
                    <a
                      className="music-link"
                      href="https://youtu.be/na47wMFfQCo?si=vSU4L7E-l79SNUMR"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <em>
                        <HoverCaption caption="Open-road folk rock, easy and sunlit, carrying the feeling of an earlier seventies world into memory.">
                          A Horse with No Name
                        </HoverCaption>
                      </em>
                    </a>
                  </span>
                </li>
                <li>
                  <strong>1978-79</strong>
                  <span>
                    Supertramp ·{' '}
                    <a
                      className="music-link"
                      href="https://music.youtube.com/watch?v=Zmc_a-qoBMw&si=73s0xxoIZ4jktYVT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <em>
                        <HoverCaption caption="Late-seventies brightness with a thoughtful, questioning edge.">
                          The Logical Song
                        </HoverCaption>
                      </em>
                    </a>
                  </span>
                </li>
              </ul>
              <p>
                These songs sit beside the Prue Acton motif dress as an early soundtrack:
                soft radio memories, school-days brightness, and the easy atmosphere of
                the era.
              </p>
            </section>

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
                className={`wardrobe-card${item.isComingSoon ? ' wardrobe-card--coming-soon' : ''}${
                  item.title === 'Dove-Grey-Blue Dress · Reimagined'
                    ? ' wardrobe-card--reimagined'
                    : ''
                }`}
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

        <section id="journal" className="content-section journal-section" aria-labelledby="field-notes-title">
          <section id="field-notes" className="field-notes-section" aria-labelledby="field-notes-title">
            <div className="field-notes-heading">
              <p className="eyebrow">Field notes</p>
              <h2 id="field-notes-title">Open The Story</h2>
              <span>
                Short drawers for practical vintage guidance. Field Notes 02 and 03 sit beside
                this first note as compact companions, ready to expand without adding a long
                uninterrupted scroll.
              </span>
            </div>
            <div className="field-note-drawer-grid">
              {fieldNotes.map((note, noteIndex) => (
                <details
                  className={`field-note-drawer${note.chapters ? ' field-note-drawer--feature' : ''}`}
                  id={note.id}
                  open={noteIndex === 0}
                  key={note.id}
                >
                  <summary>
                    <span>
                      <small>{note.meta}</small>
                      <strong>{note.title}</strong>
                    </span>
                    <em>{note.status}</em>
                  </summary>
                  <div className="field-note-panel">
                    <p>{note.description}</p>
                    {note.chapters ? (
                      <div className="field-note-chapters">
                        {note.chapters.map((chapter, chapterIndex) => (
                          <details className="field-note-chapter" key={chapter.title}>
                            <summary>
                              <span>{String(chapterIndex + 1).padStart(2, '0')}</span>
                              <strong>{chapter.title}</strong>
                            </summary>
                            <div className="field-note-chapter-copy">
                              {chapter.list && (
                                <ul>
                                  {chapter.list.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              )}
                              {chapter.body.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                          </details>
                        ))}
                      </div>
                    ) : (
                      <p className="field-note-coming-soon">
                        This note will use the same drawer rhythm: a concise lead, short
                        collapsible sections, and a calm mobile stack.
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Stay in touch</p>
            <h2 id="contact-title">A Note From Vintage Notes</h2>
          </div>
          <div className="contact-section-copy">
            <p>
              Questions about an archive story, a reimagined piece, or the wider
              Boutique House collection are always welcome.
            </p>
            <a className="contact-email" href="mailto:hello@boutiquehouse.co.uk">
              hello@boutiquehouse.co.uk
            </a>
            <a
              className="button button-secondary"
              href="https://boutique-house-production-751b.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Boutique House
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-brand">
          <p className="eyebrow">Part of the Boutique House Family</p>
          <strong>Vintage Notes</strong>
          <p>
            <a
              href="https://boutique-house-production-751b.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              Boutique House
            </a>
            {' '}· © 2026 Boutique House · Part of the{' '}
            <a
              href="https://soliv1.github.io/moodsboard-reflections-family/#/"
              target="_blank"
              rel="noreferrer"
            >
              Cinematic Moods Board Family
            </a>
          </p>
        </div>

        <nav className="site-footer-links" aria-label="Boutique House information">
          <a href="https://boutique-house-production-751b.up.railway.app/delivery/" target="_blank" rel="noreferrer">
            Delivery
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://boutique-house-production-751b.up.railway.app/track-order/" target="_blank" rel="noreferrer">
            Track Your Order
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://boutique-house-production-751b.up.railway.app/legal/privacy/" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://boutique-house-production-751b.up.railway.app/legal/terms/" target="_blank" rel="noreferrer">
            Terms &amp; Conditions
          </a>
        </nav>

        <div className="site-footer-closing">
          <span>Vintage Boutique UK · Curated Living · Worcestershire</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <div className="section-scroll-controls" aria-label="Page section controls">
        <button
          type="button"
          aria-label="Jump to previous section"
          onClick={() => scrollToNeighbourSection('previous')}
        >
          ↑
        </button>
        <button
          type="button"
          aria-label="Jump to next section"
          onClick={() => scrollToNeighbourSection('next')}
        >
          ↓
        </button>
      </div>
    </div>
  )
}

export default App
