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
  legalName: 'Plzeňské Instalace s.r.o.',
  slogan: 'Kvalitní instalace pro váš komfort',
  region: 'Plzeň a okolí',
  // Real contact data provided by the company.
  phone: '+420 737 239 759',
  phoneHref: 'tel:+420737239759',
  office: '+420 377 441 356',
  officeHref: 'tel:+420377441356',
  email: 'plzenskeinstalacesro@seznam.cz',
  web: 'www.plzenskeinstalace.cz',
  street: 'Samaritská 165/1',
  city: '301 00 Plzeň-Doudlevce',
  hours: 'Nonstop pohotovost plyn',
} as const

/** People to call directly. */
export const contacts: { name: string; role?: string; phone: string; phoneHref: string }[] = [
  { name: 'Petr Lenc', role: 'Jednatel', phone: '+420 737 239 761', phoneHref: 'tel:+420737239761' },
  { name: 'Marek Hrůza', phone: '+420 737 239 759', phoneHref: 'tel:+420737239759' },
]

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
    title: 'Zemní práce s JCB & Volvo',
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
/*  Key imagery (real company photos in /public/photos)                */
/* ------------------------------------------------------------------ */

export const heroImage = '/photos/work-12.jpg' // dokončený dům s dlažbou + vůz firmy
export const aboutImage = '/photos/work-06.jpg' // Volvo nosič s rypadlem JCB

/* ------------------------------------------------------------------ */
/*  Gallery — curated real photos with honest category tags            */
/* ------------------------------------------------------------------ */

export interface GalleryItem {
  src: string
  alt: string
  tag: string
  /** Feature tile spans two columns on desktop. */
  featured?: boolean
}

// Each tile = a distinct service. Real company photos for machinery / finished
// builds / fleet; category-matched Pexels stock for the indoor trades the
// company doesn't photograph. No image is repeated.
export const gallery: GalleryItem[] = [
  { src: '/photos/work-11.jpg', alt: 'Dokončený rodinný dům s novou zámkovou dlažbou', tag: 'Zámková dlažba', featured: true },
  { src: '/photos/voda-detail.jpg', alt: 'Montáž vodovodního potrubí a ventilů', tag: 'Vodovodní instalace' },
  { src: '/photos/work-08.jpg', alt: 'Volvo nosič s rypadlem JCB a servisní vůz', tag: 'Technika JCB & Volvo' },
  { src: '/photos/plyn-detail.jpg', alt: 'Plynové potrubí s plynoměrem na fasádě', tag: 'Plynové instalace' },
  { src: '/photos/work-10.jpg', alt: 'Přeprava rypadla na stavbu vlastní technikou', tag: 'Zemní práce' },
  { src: '/photos/topeni-detail.jpg', alt: 'Technická místnost s kotlem a akumulačními nádržemi', tag: 'Topení a vytápění' },
  { src: '/photos/work-13.jpg', alt: 'Dokončená stavba rodinného domu s kamennou zdí', tag: 'Stavební práce' },
  { src: '/photos/kanal-detail.jpg', alt: 'Kanalizační vpusť a odvodnění zpevněné plochy', tag: 'Kanalizace' },
  { src: '/photos/work-02.jpg', alt: 'Servisní dodávka Pohotovost plyn', tag: 'Pohotovost plyn' },
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
