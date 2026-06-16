import type { Icon } from '@phosphor-icons/react'
import {
  Flame,
  Drop,
  Pipe,
  Thermometer,
  Buildings,
  Truck,
  GridNine,
} from '@phosphor-icons/react'

/* ------------------------------------------------------------------ */
/*  Company                                                            */
/* ------------------------------------------------------------------ */

export const company = {
  name: 'Plzeňské Instalace',
  slogan: 'Kvalitní instalace pro váš komfort',
  region: 'Plzeň a okolí',
  phone: '+420 605 218 470',
  phoneHref: 'tel:+420605218470',
  email: 'info@plzenske-instalace.cz',
  ico: '08471596',
  street: 'Železniční 12',
  city: '301 00 Plzeň',
  hours: 'Po–Pá 7:00–17:00',
} as const

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'O nás', href: '#o-nas' },
  { label: 'Postup', href: '#postup' },
  { label: 'Realizace', href: '#realizace' },
  { label: 'Kontakt', href: '#kontakt' },
] as const

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export interface Service {
  id: string
  title: string
  description: string
  icon: Icon
  /** Larger bento tile for the two lead services. */
  featured?: boolean
}

export const services: Service[] = [
  {
    id: 'plyn',
    title: 'Plynové instalace',
    description:
      'Rozvody plynu, připojení spotřebičů a revize. Montáž podle platných norem s tlakovou zkouškou a protokolem.',
    icon: Flame,
    featured: true,
  },
  {
    id: 'kanalizace',
    title: 'Kanalizace',
    description:
      'Odpadní systémy, přípojky a opravy ležaté i svislé kanalizace.',
    icon: Pipe,
  },
  {
    id: 'voda',
    title: 'Vodovodní instalace',
    description:
      'Kompletní rozvody studené i teplé vody, výměny stoupaček a připojení zařizovacích předmětů.',
    icon: Drop,
    featured: true,
  },
  {
    id: 'topeni',
    title: 'Topení a vytápění',
    description:
      'Ústřední topení, podlahové vytápění a osazení kotlů na klíč.',
    icon: Thermometer,
  },
  {
    id: 'stavebni',
    title: 'Stavební práce',
    description:
      'Drobné i rozsáhlejší stavební úpravy navazující na instalace.',
    icon: Buildings,
  },
  {
    id: 'zemni',
    title: 'Zemní práce — JCB & Volvo',
    description:
      'Výkopy a terénní úpravy vlastní technikou JCB a Volvo.',
    icon: Truck,
  },
  {
    id: 'dlazba',
    title: 'Pokládka zámkové dlažby',
    description:
      'Příjezdové plochy, chodníky a terasy s pečlivým podkladem.',
    icon: GridNine,
  },
]

/* ------------------------------------------------------------------ */
/*  About — value pillars                                              */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: '15+', label: 'let zkušeností' },
  { value: '600+', label: 'dokončených zakázek' },
  { value: '2', label: 'stroje JCB & Volvo' },
] as const

export const aboutFeatures = [
  {
    title: 'Řemeslná preciznost',
    description:
      'Každý spoj a každá trasa řešená tak, aby vydržela roky bez starostí.',
  },
  {
    title: 'Vlastní technika',
    description:
      'Výkopy i terénní úpravy zvládneme bez subdodavatelů, rychleji a levněji.',
  },
  {
    title: 'Jasná cena předem',
    description:
      'Rozpočet dostanete písemně před zahájením prací. Žádná překvapení na faktuře.',
  },
  {
    title: 'Záruka a revize',
    description:
      'Ke každé instalaci předáváme protokol a sjednanou záruku na provedené práce.',
  },
] as const

/* ------------------------------------------------------------------ */
/*  Process                                                            */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    title: 'Nezávazná poptávka',
    description:
      'Zavoláte nebo napíšete. Probereme rozsah, termíny a vaše představy.',
  },
  {
    title: 'Prohlídka a rozpočet',
    description:
      'Přijedeme na místo, zaměříme a připravíme transparentní cenovou nabídku.',
  },
  {
    title: 'Realizace',
    description:
      'Pracujeme čistě, v dohodnutém termínu a s minimem zásahu do provozu.',
  },
  {
    title: 'Předání a záruka',
    description:
      'Provedeme zkoušky, předáme protokoly a sjednáme záruku na dílo.',
  },
] as const

/* ------------------------------------------------------------------ */
/*  Projects / gallery (placeholder photography via picsum seeds)      */
/* ------------------------------------------------------------------ */

export interface Project {
  title: string
  tag: string
  /** picsum seed — swap for real photos later. */
  seed: string
  /** Tile span on the desktop masonry grid. */
  span: 'tall' | 'wide' | 'normal'
}

export const projects: Project[] = [
  { title: 'Rozvody vody, novostavba', tag: 'Voda', seed: 'plumbing-copper-pipes', span: 'tall' },
  { title: 'Plynová přípojka RD', tag: 'Plyn', seed: 'gas-installation-boiler', span: 'normal' },
  { title: 'Výkop pro přípojky', tag: 'Zemní práce', seed: 'excavator-trench-dig', span: 'wide' },
  { title: 'Podlahové topení', tag: 'Topení', seed: 'underfloor-heating-pipes', span: 'normal' },
  { title: 'Příjezdová dlažba', tag: 'Dlažba', seed: 'paving-blocks-driveway', span: 'normal' },
  { title: 'Kotelna na klíč', tag: 'Topení', seed: 'boiler-room-heating', span: 'tall' },
]

/* ------------------------------------------------------------------ */
/*  Testimonial                                                        */
/* ------------------------------------------------------------------ */

export const testimonial = {
  quote:
    'Přípojky, topení i dlažbu kolem domu zvládli jako jedna parta. Termín seděl a po sobě uklidili. Konečně firma, na kterou je spoleh.',
  name: 'Martin Hrubý',
  role: 'novostavba RD, Dobřany',
} as const
