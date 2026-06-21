import React, { useState } from 'react';
import { 
  Heart, 
  Globe, 
  Shield, 
  Phone, 
  ChevronRight, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  FileText, 
  ExternalLink, 
  Clock, 
  Users, 
  Award, 
  TrendingUp, 
  AlertCircle, 
  Menu, 
  X, 
  Building2, 
  HelpingHand,
  BookOpen,
  Anchor,
  CheckCircle2
} from 'lucide-react';

// Genuine Stock images representing frontline humanitarian action
const IMAGES = {
  hero: "https://images.pexels.com/photos/6646862/pexels-photo-6646862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  medicalTeam: "https://images.pexels.com/photos/6129660/pexels-photo-6129660.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  unloadingAid: "https://images.pexels.com/photos/6647018/pexels-photo-6647018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  aidVan: "https://images.pexels.com/photos/6647111/pexels-photo-6647111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  wheelchairAssist: "https://images.pexels.com/photos/6129870/pexels-photo-6129870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  surgery: "https://images.pexels.com/photos/33907397/pexels-photo-33907397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  organizeBoxes: "https://images.pexels.com/photos/6646853/pexels-photo-6646853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  carryingMedicine: "https://images.pexels.com/photos/6646897/pexels-photo-6646897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
};

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  fullText: string;
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Middle East crisis: Urgent call to protect healthcare infrastructure and secure safe passage for ambulances',
    category: 'News Release',
    date: 'February 18, 2026',
    readTime: '4 min read',
    summary: 'The ICRC reiterates its urgent call for all parties to respect international humanitarian law. Hospitals, medical personnel, and wounded civilians must be unconditionally protected under the Geneva Conventions.',
    fullText: 'GENEVA (ICRC) — As intense hostilities continue to threaten densely populated urban centers, the International Committee of the Red Cross (ICRC) urgently reminds all active parties of their absolute legal obligation under International Humanitarian Law to protect medical infrastructure. Hospitals, clinics, emergency medical technicians, and marked ambulances must be granted immediate and unimpeded access to retrieve and treat the wounded. Neutrality is the bedrock of our operational reach, and any direct attack on healthcare facilities severely compromises the survival of civilian populations trapped in conflict zones.',
    image: IMAGES.medicalTeam
  },
  {
    id: '2',
    title: 'Sudan: Emergency surgical teams deployed to frontline hospitals amidst extreme supply shortages',
    category: 'Field Report',
    date: 'February 15, 2026',
    readTime: '6 min read',
    summary: 'Our teams have successfully brought in over 35 tonnes of vital surgical materials and clean water filtration massive systems to support overwhelmed regional medical centers.',
    fullText: 'PORT SUDAN (ICRC) — In response to escalating regional conflict and severe shortages of medical consumables, the ICRC has successfully airlifted 35 tonnes of emergency surgical instruments, anesthesia kits, and high-capacity water sterilization units into the field. Overwhelmed local medical personnel are working around the clock to perform life-saving triage and emergency war surgeries. Our dedicated mobile surgical teams continue to operate alongside local hospital staff, providing critical post-operative care to civilian trauma patients.',
    image: IMAGES.unloadingAid
  },
  {
    id: '3',
    title: 'Protecting civilians in cyberspace: How international humanitarian law applies to digital warfare',
    category: 'Legal Policy & IHL',
    date: 'February 10, 2026',
    readTime: '8 min read',
    summary: 'As cyber operations increasingly target civilian critical infrastructure, the ICRC outlines the clear boundaries and legal obligations binding state and non-state actors online.',
    fullText: 'GENEVA (ICRC) — Armed conflict is no longer confined to physical battlefields. With the exponential rise of military cyber operations targeting municipal power grids, civilian healthcare databases, and public water treatment networks, the ICRC has published an updated legal policy statement. International Humanitarian Law (IHL) strictly prohibits cyber operations that indiscriminately target civilian infrastructure. State militaries and independent hacking collectives alike must respect the fundamental rule of distinction in cyberspace to prevent widespread civilian catastrophe.',
    image: IMAGES.surgery
  },
  {
    id: '4',
    title: 'Reconnecting families separated by armed conflict in Ukraine: A story of determination',
    category: 'Feature Story',
    date: 'February 04, 2026',
    readTime: '5 min read',
    summary: 'Through the Central Tracing Agency, our specialized caseworkers have successfully verified the locations of thousands of prisoners of war and missing family members.',
    fullText: 'KYIV/GENEVA (ICRC) — The uncertainty of not knowing the fate of a missing loved one is one of the deepest wounds of war. Through the dedicated operations of the ICRC Central Tracing Agency Bureau, our field teams work tirelessly to locate soldiers and civilians separated by active hostilities. Operating strictly on principles of confidentiality and neutrality, our caseworkers cross-reference detention records, facilitate the exchange of Red Cross messages, and provide much-needed answers to families waiting for news across borders.',
    image: IMAGES.wheelchairAssist
  },
  {
    id: '5',
    title: 'Afghanistan: Clean drinking water and solar energy restored for 45,000 residents in remote provinces',
    category: 'Field Report',
    date: 'January 28, 2026',
    readTime: '4 min read',
    summary: 'ICRC water engineers have completed rehabilitation of three major municipal waterworks, preventing widespread waterborne diseases in displacement camps.',
    fullText: 'KABUL (ICRC) — Clean drinking water is essential to preserving human dignity and preventing outbreaks of waterborne infectious diseases in displacement camps. ICRC water and habitat engineers have finalized the structural rehabilitation of three municipal solar-powered pumping stations in remote rural provinces. The newly updated infrastructure now delivers continuous clean drinking water and reliable solar electricity to over 45,000 vulnerable residents and several primary field health clinics.',
    image: IMAGES.aidVan
  },
  {
    id: '6',
    title: 'Global review: 160 years of neutral, independent humanitarian action on the front line',
    category: 'Statement',
    date: 'January 20, 2026',
    readTime: '10 min read',
    summary: 'Our President addresses the international diplomatic community on the non-negotiable imperative of neutral access to victims of armed violence in 120+ active conflicts.',
    fullText: 'GENEVA (ICRC) — Commemorating over 160 years of impartial humanitarian intervention, the ICRC President delivered a landmark address to the international diplomatic corps. In an era marked by more than 120 active armed conflicts, the core mandate of the Geneva Conventions remains indispensable. Neutrality is not indifference; it is the vital operational key that grants our personnel unfettered access across the world’s most perilous front lines to protect and assist the vulnerable.',
    image: IMAGES.organizeBoxes
  }
];

const CRISIS_REGIONS = [
  {
    id: 'gaza-israel',
    name: 'Gaza / Israel Conflict',
    urgentTag: 'Critical Emergency',
    description: 'Civilians are facing catastrophic shortages of medical supplies, food, and clean water. The healthcare system is severely compromised.',
    impactGoal: 'Surgical teams, emergency trauma kits, clean water distribution, and family tracing services.',
    image: IMAGES.medicalTeam
  },
  {
    id: 'sudan',
    name: 'Sudan Emergency',
    urgentTag: 'Mass Displacement',
    description: 'Intense armed conflict has displaced millions of families. Famine conditions threaten several regions while hospitals lack basic electricity and sterilization.',
    impactGoal: 'Emergency food baskets, mobile surgical deployment, and civilian protection advocacy.',
    image: IMAGES.unloadingAid
  },
  {
    id: 'ukraine',
    name: 'Ukraine Crisis',
    urgentTag: 'Protracted Conflict',
    description: 'Frontline towns suffer from continuous bombardment, disrupting heating, power grids, and access to medical care during harsh winter conditions.',
    impactGoal: 'Generators for clinics, home repair materials, physical rehabilitation for amputees, and POW visits.',
    image: IMAGES.wheelchairAssist
  },
  {
    id: 'yemen-syria',
    name: 'Yemen & Syria Relief',
    urgentTag: 'Essential Services',
    description: 'Over a decade of complex warfare has decimated civil infrastructure, leaving millions dependent on daily humanitarian water trucking and primary clinics.',
    impactGoal: 'Rehabilitation of municipal water networks, primary health care centers, and prosthetic limbs.',
    image: IMAGES.aidVan
  }
];

const EXPERTISE_CATEGORIES = [
  {
    id: 'protecting',
    title: 'Protecting Civilians',
    subtitle: 'Upholding human dignity behind front lines',
    description: 'We engage in confidential dialogue with authorities and armed groups to demand compliance with international humanitarian law and prevent civilian harm during active hostilities.',
    points: ['Confidential dialogues with both state militaries and non-state armed groups', 'Promoting clear distinction between combatants and civilians', 'Advocating for the protection of essential civilian infrastructure'],
    image: IMAGES.wheelchairAssist
  },
  {
    id: 'detainees',
    title: 'Visiting Detainees',
    subtitle: 'Monitoring humane treatment in detention facilities',
    description: 'We visit prisoners of war and civilian detainees to monitor their treatment and living conditions, ensuring they are treated with dignity and able to maintain text contact with their families.',
    points: ['Regular monitoring visits to detention facilities worldwide', 'Securing confidential, private interviews with detainees', 'Delivering Red Cross messages between detainees and loved ones'],
    image: IMAGES.organizeBoxes
  },
  {
    id: 'health',
    title: 'War Surgery & Health Care',
    subtitle: 'Life-saving triage and mobile surgical teams',
    description: 'In conflict zones where medical infrastructure has collapsed or been destroyed, our specialized war surgeons, nurses, and physical rehabilitation experts step in. We supply hospitals and set up field triage units.',
    points: ['Deployment of mobile emergency surgical teams in active war zones', 'Provision of essential surgical instruments and medical oxygen', 'Long-term physical rehabilitation and prosthetic limb manufacturing'],
    image: IMAGES.surgery
  },
  {
    id: 'relief',
    title: 'Economic Security & Food Aid',
    subtitle: 'Ensuring survival and rebuilding livelihoods',
    description: 'When war cuts off food supplies and destroys local economies, we deliver emergency food rations, cash assistance, and agricultural tools. Our goal is to stabilize communities immediately.',
    points: ['Emergency distribution of high-nutrition food parcels and essential hygiene kits', 'Targeted cash grants allowing displaced families to purchase immediate necessities', 'Distribution of drought-resistant seed varieties and livestock vaccination'],
    image: IMAGES.unloadingAid
  },
  {
    id: 'water',
    title: 'Water & Habitat Engineering',
    subtitle: 'Repairing critical civilian infrastructure',
    description: 'Clean water is life. When artillery or power outages disable water treatment plants, our engineers work across front lines to repair municipal pipes, install industrial generators, and construct emergency sanitation facilities.',
    points: ['Emergency water trucking for besieged or displaced populations', 'Large-scale structural repair of municipal power and water grids', 'Building sanitary facilities to prevent cholera and infectious disease outbreaks'],
    image: IMAGES.aidVan
  },
  {
    id: 'law',
    title: 'International Humanitarian Law (IHL)',
    subtitle: 'The rules of war that preserve humanity',
    description: 'The Geneva Conventions form the core of International Humanitarian Law. As the official guardian of IHL, we advise governments, train military commanders, and publish legal interpretations to adapt the rules of war to new technologies.',
    points: ['Formal guardian and promoter of the 1949 Geneva Conventions', 'Training military officers, rebel commanders, and peacekeepers globally', 'Developing legal boundaries for cyber operations and artificial intelligence in war'],
    image: IMAGES.carryingMedicine
  }
];

export default function App() {
  const [currentLang, setCurrentLang] = useState('English');
  const [activeExpertiseTab, setActiveExpertiseTab] = useState('protecting');
  const [selectedCrisis, setSelectedCrisis] = useState(CRISIS_REGIONS[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Popup Modal States
  const [selectedArticleModal, setSelectedArticleModal] = useState<Article | null>(null);
  const [showRflModal, setShowRflModal] = useState(false);

  // Smooth scroll helper accounting for fixed sticky header height (80px)
  const handleScrollToSection = (e: React.MouseEvent, sectionId: string, expertiseTabId?: string, crisisTabId?: string) => {
    e.preventDefault();
    if (expertiseTabId) {
      setActiveExpertiseTab(expertiseTabId);
    }
    if (crisisTabId) {
      const found = CRISIS_REGIONS.find(c => c.id === crisisTabId);
      if (found) setSelectedCrisis(found);
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -80; // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const activeExpertise = EXPERTISE_CATEGORIES.find(c => c.id === activeExpertiseTab) || EXPERTISE_CATEGORIES[0];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-red-600 selection:text-white antialiased">
      
      {/* TOP EMERGENCY BAR */}
      <div className="bg-neutral-900 text-neutral-200 px-4 py-2 text-xs border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="font-bold text-white tracking-wide uppercase">Neutral & Independent Mission:</span>
            <span className="text-neutral-300">Working across front lines in 120+ conflicts to preserve human dignity.</span>
          </div>
          <div className="flex items-center gap-6 font-medium text-neutral-400">
            {/* Opens RFL Popup Modal */}
            <button 
              type="button" 
              onClick={() => setShowRflModal(true)} 
              className="hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              <Phone className="w-3 h-3 text-red-500" /> Restoring Family Links
            </button>
            <div className="hidden md:flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <select 
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="bg-neutral-800 text-neutral-200 py-0.5 px-2 rounded text-xs border border-neutral-700 outline-none cursor-pointer hover:border-neutral-600 transition"
              >
                <option value="English">English</option>
                <option value="Français">Français</option>
                <option value="Español">Español</option>
                <option value="العربية">العربية</option>
                <option value="中文">中文</option>
                <option value="Русский">Русский</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Name (Forces Hard Browser Refresh) */}
          <div className="flex items-center gap-4">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.location.reload(); }} 
              className="flex items-center gap-3 group cursor-pointer"
              title="Reload Home"
            >
              <div className="w-12 h-12 bg-white border-2 border-neutral-300 rounded flex items-center justify-center p-1.5 shadow-sm group-hover:border-neutral-400 transition shrink-0">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute w-8 h-2.5 bg-red-600" />
                  <div className="absolute w-2.5 h-8 bg-red-600" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-neutral-900 leading-none mb-1">
                  ICRC
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 hidden sm:block leading-none">
                  International Committee of the Red Cross
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links (Scrolls down to sections) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-neutral-700">
            <a href="#global-impact" onClick={(e) => handleScrollToSection(e, 'global-impact')} className="hover:text-red-600 transition py-2 border-b-2 border-transparent hover:border-red-600">Who We Are</a>
            <a href="#what-we-do" onClick={(e) => handleScrollToSection(e, 'what-we-do')} className="hover:text-red-600 transition py-2 border-b-2 border-transparent hover:border-red-600">What We Do</a>
            <a href="#urgent-help" onClick={(e) => handleScrollToSection(e, 'urgent-help')} className="hover:text-red-600 transition py-2 border-b-2 border-transparent hover:border-red-600">Where We Work</a>
            <a href="#war-and-law" onClick={(e) => handleScrollToSection(e, 'war-and-law')} className="hover:text-red-600 transition py-2 border-b-2 border-transparent hover:border-red-600">War & Law (IHL)</a>
            <a href="#latest-articles" onClick={(e) => handleScrollToSection(e, 'latest-articles')} className="hover:text-red-600 transition py-2 border-b-2 border-transparent hover:border-red-600">News & Media</a>
          </nav>

          {/* External Redirect Donate Link to icrc-donate.vercel.app */}
          <div className="flex items-center gap-3">
            <a 
              href="https://icrc-donate.vercel.app" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-md shadow-md hover:shadow-lg transition flex items-center gap-2 text-sm tracking-wide uppercase"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate</span>
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 px-4 py-6 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase text-neutral-500">Navigation</span>
              <div className="flex items-center gap-2 text-xs">
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span className="font-medium">{currentLang}</span>
              </div>
            </div>
            <a 
              href="#global-impact" 
              onClick={(e) => handleScrollToSection(e, 'global-impact')}
              className="block font-semibold text-neutral-800 hover:text-red-600 py-2"
            >
              Who We Are
            </a>
            <a 
              href="#what-we-do" 
              onClick={(e) => handleScrollToSection(e, 'what-we-do')}
              className="block font-semibold text-neutral-800 hover:text-red-600 py-2"
            >
              What We Do
            </a>
            <a 
              href="#urgent-help" 
              onClick={(e) => handleScrollToSection(e, 'urgent-help')}
              className="block font-semibold text-neutral-800 hover:text-red-600 py-2"
            >
              Where We Work
            </a>
            <a 
              href="#war-and-law" 
              onClick={(e) => handleScrollToSection(e, 'war-and-law')}
              className="block font-semibold text-neutral-800 hover:text-red-600 py-2"
            >
              War & Law (IHL)
            </a>
            <a 
              href="#latest-articles" 
              onClick={(e) => handleScrollToSection(e, 'latest-articles')}
              className="block font-semibold text-neutral-800 hover:text-red-600 py-2"
            >
              News & Media
            </a>
            <div className="pt-4 border-t border-neutral-200 space-y-3">
              {/* External Redirect Donate Link */}
              <a 
                href="https://icrc-donate.vercel.app" 
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg text-center uppercase text-xs tracking-wider block"
              >
                Donate
              </a>
              {/* Opens RFL Popup Modal */}
              <button 
                type="button" 
                onClick={() => { setShowRflModal(true); setMobileMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-red-600 bg-red-50 p-3 rounded-lg cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Restoring Family Links Helpdesk</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-neutral-900 text-white min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.hero} 
              alt="ICRC Volunteers delivering humanitarian aid on the frontline" 
              className="w-full h-full object-cover object-center opacity-40 scale-105 transform transition duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-900/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 w-full">
            <div className="max-w-3xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600 text-white font-bold text-xs tracking-wider uppercase shadow-md">
                <Shield className="w-4 h-4" /> Neutral Humanitarian Action
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                On the front line <br className="hidden sm:inline" />
                <span className="text-red-500">for humanity</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl font-normal">
                Since 1863, we have worked to relieve suffering and preserve human dignity during war and armed violence. We deliver life‑saving aid across front lines, strive to reconnect families, advocate for humane treatment of detainees and urge compliance with international humanitarian law to keep civilians safe, including online.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* External Redirect Donate Link to icrc-donate.vercel.app */}
                <a 
                  href="https://icrc-donate.vercel.app" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-md shadow-xl hover:shadow-red-600/20 transition flex items-center justify-center gap-2 group uppercase tracking-wider text-center"
                >
                  <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition" />
                  <span>Donate</span>
                </a>

                {/* Scrolls down to global impact section */}
                <a 
                  href="#global-impact" 
                  onClick={(e) => handleScrollToSection(e, 'global-impact')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 font-semibold text-base px-8 py-4 rounded-md transition flex items-center justify-center gap-2 group text-center"
                >
                  <span>Explore Our Global Impact</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
              </div>

              <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-neutral-400 border-t border-neutral-800">
                <div>
                  <span className="font-bold text-white block text-sm mb-0.5">Neutral & Independent</span>
                  Unfettered access to victims of war
                </div>
                <div>
                  <span className="font-bold text-white block text-sm mb-0.5">Geneva Conventions</span>
                  Official global guardian of IHL
                </div>
                <div className="hidden sm:block">
                  <span className="font-bold text-white block text-sm mb-0.5">Rapid Deployment</span>
                  Active in 90+ countries
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* MISSION & GLOBAL IMPACT SECTION */}
        <section id="global-impact" className="py-20 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-500">
                <Globe className="w-4 h-4 text-red-600" /> Global Impartial Reach
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                120+ Conflicts. One mission: <br />
                <span className="text-red-600">Preserve and prioritize humanity during war</span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                We operate strictly on the principles of humanity, neutrality, independence, and impartiality. Our mandate allows us to cross battle lines where others cannot, delivering relief to the most isolated populations.
              </p>
            </div>

            <div className="mb-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Our global impact
              </h3>
            </div>

            {/* Impact stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl text-center group hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center mx-auto mb-6 transition duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-neutral-900 group-hover:text-white tracking-tight mb-2 transition duration-300">
                  90+
                </div>
                <p className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-300 transition duration-300">
                  countries with operational offices
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-200 group-hover:border-neutral-800 text-xs text-neutral-400 group-hover:text-neutral-400 transition duration-300">
                  Permanent international field delegations
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl text-center group hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center mx-auto mb-6 transition duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-neutral-900 group-hover:text-white tracking-tight mb-2 transition duration-300">
                  93.5%
                </div>
                <p className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-300 transition duration-300">
                  of donations go directly to the field
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-200 group-hover:border-neutral-800 text-xs text-neutral-400 group-hover:text-neutral-400 transition duration-300">
                  Highly audited efficiency rating
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl text-center group hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center mx-auto mb-6 transition duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-neutral-900 group-hover:text-white tracking-tight mb-2 transition duration-300">
                  160+
                </div>
                <p className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-300 transition duration-300">
                  years on the side of humanity
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-200 group-hover:border-neutral-800 text-xs text-neutral-400 group-hover:text-neutral-400 transition duration-300">
                  Four-time Nobel Peace Prize recipients
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl text-center group hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center mx-auto mb-6 transition duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-neutral-900 group-hover:text-white tracking-tight mb-2 transition duration-300">
                  18,000+
                </div>
                <p className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-300 transition duration-300">
                  staff at HQ and in the field
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-200 group-hover:border-neutral-800 text-xs text-neutral-400 group-hover:text-neutral-400 transition duration-300">
                  Local experts and medical specialists
                </div>
              </div>

            </div>

            {/* Quote banner */}
            <div className="mt-16 bg-neutral-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="relative z-10 max-w-4xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-snug">
                  "Neutrality is not indifference. It is our operational key to reaching the wounded on both sides of any battle line."
                </h3>
                <p className="text-sm font-semibold text-neutral-400 tracking-wide uppercase">
                  — Mandate of the International Committee of the Red Cross
                </p>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
                <div className="w-full h-full bg-red-600 transform rotate-12 scale-150" />
              </div>
            </div>

          </div>
        </section>


        {/* URGENT HELP NEEDED SECTION (Interactive UI Tabs) */}
        <section id="urgent-help" className="py-16 bg-neutral-100 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-2">
                  <AlertCircle className="w-4 h-4" /> Active Humanitarian Operations
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Urgent help needed
                </h2>
                <p className="text-neutral-600 mt-2 max-w-2xl text-base leading-relaxed">
                  Our teams are currently delivering emergency medical care, food parcels, and clean water to families trapped in the world's most severe armed conflicts.
                </p>
              </div>

              {/* CRISIS REGION TABS */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {CRISIS_REGIONS.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedCrisis(region)}
                    className={`px-5 py-3 rounded-lg font-bold text-xs shrink-0 transition flex items-center gap-2 ${selectedCrisis.id === region.id ? 'bg-neutral-900 text-white shadow-md' : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'}`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${selectedCrisis.id === region.id ? 'text-red-500' : 'text-neutral-500'}`} />
                    <span>{region.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Crisis Showcase Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-fadeIn">
              
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider">
                      {selectedCrisis.urgentTag}
                    </span>
                    <span className="text-xs font-bold text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Updated Daily
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                    {selectedCrisis.name}
                  </h3>

                  <p className="text-neutral-700 text-base leading-relaxed mb-6">
                    {selectedCrisis.description}
                  </p>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 mb-8">
                    <h4 className="font-bold text-sm text-neutral-900 mb-2 flex items-center gap-2">
                      <HelpingHand className="w-4 h-4 text-red-600" /> Immediate Field Priorities
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {selectedCrisis.impactGoal}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-neutral-500 block font-medium mb-1">Direct Field Logistics</span>
                    <span className="text-xl font-extrabold text-neutral-900">Emergency Civilian Relief</span>
                  </div>

                  {/* External Redirect Donate Link to icrc-donate.vercel.app */}
                  <a 
                    href="https://icrc-donate.vercel.app" 
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 group uppercase tracking-wider text-sm text-center"
                  >
                    <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition" />
                    <span>Send Aid to {selectedCrisis.name}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-900 relative min-h-[300px] lg:min-h-full">
                <img 
                  src={selectedCrisis.image} 
                  alt={selectedCrisis.name}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-900/90 backdrop-blur rounded-xl text-white block lg:hidden">
                  <p className="text-xs font-bold text-red-400 mb-1">On the ground confirmation</p>
                  <p className="text-xs text-neutral-300">Over 93.5% of funds go directly to local field supplies and expert medical support.</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* OUR WORK TO HELP PEOPLE AFFECTED BY ARMED CONFLICT */}
        <section id="what-we-do" className="py-20 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-2">
                <Building2 className="w-4 h-4" /> Core Humanitarian Capabilities
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-3">
                Our work to help people affected by armed conflict
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 tracking-tight mb-4">
                Protecting and assisting people whose lives have been torn apart by armed conflict
              </h3>

              <p className="text-neutral-600 text-base leading-relaxed">
                Choose an operational expertise tab below to inspect our field deployments, detainee visits, war surgery centers, and water habitat infrastructure across global front lines.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Category Tabs sidebar */}
              <div className="lg:col-span-4 space-y-2">
                {EXPERTISE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveExpertiseTab(cat.id)}
                    className={`w-full text-left p-5 rounded-xl border transition flex items-center justify-between group ${activeExpertiseTab === cat.id ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' : 'bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div>
                      <h4 className="font-bold text-base mb-1 group-hover:text-red-600 transition duration-150">
                        {cat.title}
                      </h4>
                      <p className={`text-xs ${activeExpertiseTab === cat.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {cat.subtitle}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 ${activeExpertiseTab === cat.id ? 'text-red-500' : 'text-neutral-400 group-hover:text-neutral-600'}`} />
                  </button>
                ))}
              </div>

              {/* Tab Display Pane */}
              <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xl animate-fadeIn">
                <div className="h-64 sm:h-80 relative bg-neutral-900">
                  <img 
                    src={activeExpertise.image} 
                    alt={activeExpertise.title}
                    className="w-full h-full object-cover object-center absolute inset-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-red-600 text-white font-bold text-[11px] px-3 py-1 rounded uppercase tracking-wider mb-2 inline-block">
                      Primary Expertise
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {activeExpertise.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-8">
                  <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                    {activeExpertise.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-600" /> Key Field Interventions
                    </h4>
                    <ul className="space-y-3 pl-2">
                      {activeExpertise.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-neutral-500">
                      Fully coordinated with international humanitarian law mandates.
                    </div>
                    {/* External Redirect Donate Link to icrc-donate.vercel.app */}
                    <a 
                      href="https://icrc-donate.vercel.app" 
                      className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-center"
                    >
                      <span>Fund This Specific Work</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SEEKING TO ENSURE RESPECT FOR INTERNATIONAL HUMANITARIAN LAW */}
        <section id="war-and-law" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" /> The Geneva Conventions
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Seeking to ensure respect for <br />
                  <span className="text-red-500">international humanitarian law</span>
                </h2>

                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                  Even wars have limits. International Humanitarian Law (IHL) protects people who are not, or are no longer, participating in hostilities—including wounded troops, prisoners, and civilians. As the promoter and guardian of IHL, the ICRC insists on humane treatment across all active global battlefields.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-neutral-800/80 border border-neutral-700 p-5 rounded-xl">
                    <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-500" /> Restricting Weapons
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Lobbying against indiscriminate weapons like landmines, cluster munitions, and unregulated autonomous military AI.
                    </p>
                  </div>

                  <div className="bg-neutral-800/80 border border-neutral-700 p-5 rounded-xl">
                    <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-red-500" /> Safeguarding Healthcare
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Enforcing absolute protection for hospitals, ambulances, and clinical staff marked with the Red Cross emblem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-800 border border-neutral-700 rounded-2xl p-8 text-neutral-100 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Download Core IHL Resources & Treaties
                </h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Access official public legal commentaries, military commander manuals, and custom educational overviews of the 1949 Geneva Conventions.
                </p>

                <div className="space-y-3">
                  {/* Download Links */}
                  <a href="#_" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-red-500 transition group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-red-500" />
                      <div>
                        <h5 className="font-bold text-xs text-white group-hover:text-red-400 transition">The 1949 Geneva Conventions</h5>
                        <p className="text-[11px] text-neutral-400">PDF • 4.2 MB • Official Legal Text</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition" />
                  </a>

                  <a href="#_" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-red-500 transition group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-red-500" />
                      <div>
                        <h5 className="font-bold text-xs text-white group-hover:text-red-400 transition">Customary IHL Database</h5>
                        <p className="text-[11px] text-neutral-400">Online Interactive Tool • Updated 2026</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition" />
                  </a>

                  <a href="#_" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-red-500 transition group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-red-500" />
                      <div>
                        <h5 className="font-bold text-xs text-white group-hover:text-red-400 transition">Rules of War for Mobile Troops</h5>
                        <p className="text-[11px] text-neutral-400">Pocket Guide • Multiple Languages</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition" />
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-700 text-center">
                  <a href="#_" onClick={(e) => e.preventDefault()} className="text-xs font-bold text-red-400 hover:text-red-300 transition flex items-center justify-center gap-1">
                    <span>View all legal publications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* LATEST ARTICLES SECTION */}
        <section id="latest-articles" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-2">
                <FileText className="w-4 h-4" /> Global Newsroom
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Latest articles
              </h2>
              <p className="text-neutral-600 mt-2 text-base max-w-2xl leading-relaxed">
                Read live press releases, direct operational field dispatches, and policy statements from our international relief delegations.
              </p>
            </div>

            {/* Articles Grid (Clicking shows a popup modal that can be closed) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ARTICLES.map((article) => (
                <article 
                  key={article.id} 
                  className="bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedArticleModal(article)}
                >
                  <div>
                    <div className="h-56 relative overflow-hidden bg-neutral-900">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-neutral-900/90 backdrop-blur text-white font-bold text-[11px] uppercase tracking-wider border border-neutral-700">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" /> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" /> {article.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-xl text-neutral-900 group-hover:text-red-600 transition duration-200 line-clamp-2 mb-3">
                        {article.title}
                      </h3>

                      <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-neutral-100/80 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:text-red-600 transition">
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-12 border-t border-neutral-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-neutral-800">
            
            {/* Brand & info (Forces Hard Browser Refresh) */}
            <div className="lg:col-span-2 space-y-6">
              <div onClick={() => window.location.reload()} className="flex items-center gap-3 group cursor-pointer" title="Reload Home">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center p-1 shadow-sm shrink-0">
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <div className="absolute w-7 h-2 bg-red-600" />
                    <div className="absolute w-2 h-7 bg-red-600" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight text-white leading-none mb-1">
                    ICRC
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400 leading-none">
                    International Committee of the Red Cross
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                The ICRC helps people around the world affected by armed conflict and other violence, doing everything it can to protect their dignity and relieve their suffering, often with its Red Cross and Red Crescent partners. The organization also seeks to prevent hardship by promoting and strengthening humanitarian law and championing universal humanitarian principles.
              </p>

              {/* External Redirect Donate Link to icrc-donate.vercel.app */}
              <div>
                <a 
                  href="https://icrc-donate.vercel.app" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition inline-flex items-center gap-2 text-xs tracking-wide uppercase"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donate to Support Our Mission</span>
                </a>
              </div>
            </div>

            {/* Links Column 1: Who we are (Scrolls to #global-impact) */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Who we are</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#global-impact" onClick={(e) => handleScrollToSection(e, 'global-impact')} className="hover:text-white transition">Our mandate and mission</a></li>
                <li><a href="#global-impact" onClick={(e) => handleScrollToSection(e, 'global-impact')} className="hover:text-white transition">History of the ICRC</a></li>
                <li><a href="#global-impact" onClick={(e) => handleScrollToSection(e, 'global-impact')} className="hover:text-white transition">The Red Cross emblem</a></li>
                <li><a href="#global-impact" onClick={(e) => handleScrollToSection(e, 'global-impact')} className="hover:text-white transition">Presidents & Governance</a></li>
                <li><a href="#global-impact" onClick={(e) => handleScrollToSection(e, 'global-impact')} className="hover:text-white transition">Funding & Budget Audits</a></li>
                <li><a href="#_" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Careers & Frontline Jobs</a></li>
              </ul>
            </div>

            {/* Links Column 2: What we do (Scrolls to #what-we-do AND selects specific tab) */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">What we do</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#what-we-do" onClick={(e) => handleScrollToSection(e, 'what-we-do', 'protecting')} className="hover:text-white transition">Protecting civilians</a></li>
                <li><a href="#what-we-do" onClick={(e) => handleScrollToSection(e, 'what-we-do', 'detainees')} className="hover:text-white transition">Visiting detainees</a></li>
                <li><a href="#what-we-do" onClick={(e) => handleScrollToSection(e, 'what-we-do', 'health')} className="hover:text-white transition">War surgery & health care</a></li>
                <li><a href="#_" onClick={(e) => { e.preventDefault(); setShowRflModal(true); }} className="hover:text-white transition">Restoring family links</a></li>
                <li><a href="#what-we-do" onClick={(e) => handleScrollToSection(e, 'what-we-do', 'water')} className="hover:text-white transition">Water and habitat engineering</a></li>
                <li><a href="#what-we-do" onClick={(e) => handleScrollToSection(e, 'what-we-do', 'relief')} className="hover:text-white transition">Economic security & food</a></li>
              </ul>
            </div>

            {/* Links Column 3: Where we work (External Donate links to icrc-donate.vercel.app) */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Where we work</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="https://icrc-donate.vercel.app" className="hover:text-white transition text-red-400 font-semibold">Donate to Gaza & Israel</a></li>
                <li><a href="https://icrc-donate.vercel.app" className="hover:text-white transition text-red-400 font-semibold">Donate to Ukraine crisis</a></li>
                <li><a href="https://icrc-donate.vercel.app" className="hover:text-white transition text-red-400 font-semibold">Donate to Sudan operations</a></li>
                <li><a href="#urgent-help" onClick={(e) => handleScrollToSection(e, 'urgent-help', undefined, 'yemen-syria')} className="hover:text-white transition">Afghanistan field offices</a></li>
                <li><a href="#urgent-help" onClick={(e) => handleScrollToSection(e, 'urgent-help', undefined, 'yemen-syria')} className="hover:text-white transition">Syria & Yemen relief</a></li>
                <li><a href="#global-impact" onClick={(e) => handleScrollToSection(e, 'global-impact')} className="hover:text-white transition">All 90+ global delegations</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom attribution & legal */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div className="flex flex-wrap items-center gap-6">
              <span>© 2026 International Committee of the Red Cross</span>
              <a href="https://icrc-donate.vercel.app" className="hover:text-white transition font-semibold text-neutral-400">Donate Page</a>
              <a href="#_" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Privacy & Copyright</a>
              <a href="#_" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Fraud alert</a>
              <a href="#_" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Contact us</a>
            </div>
            <div className="text-[11px] text-neutral-400 bg-neutral-800 px-3 py-1 rounded">
              Logo Refresh Active • All donate clicks route to icrc-donate.vercel.app
            </div>
          </div>

        </div>
      </footer>


      {/* ========================================== */}
      {/* POPUP MODAL 1: FULL ARTICLE DISPATCH VIEW */}
      {/* ========================================== */}
      {selectedArticleModal && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white text-neutral-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-200 relative max-h-[90vh] flex flex-col">
            
            {/* Header Image */}
            <div className="h-64 sm:h-80 relative bg-neutral-900 shrink-0">
              <img 
                src={selectedArticleModal.image} 
                alt={selectedArticleModal.title} 
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/20 to-transparent" />
              
              <button 
                type="button"
                onClick={() => setSelectedArticleModal(null)}
                className="absolute top-6 right-6 p-2 text-white bg-neutral-900/80 hover:bg-neutral-900 rounded-full transition border border-neutral-700 shadow-lg z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs uppercase tracking-wider inline-block">
                  {selectedArticleModal.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  {selectedArticleModal.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <div className="flex items-center gap-6 text-xs font-bold text-neutral-500 pb-4 border-b border-neutral-200">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-neutral-400" /> {selectedArticleModal.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-neutral-400" /> {selectedArticleModal.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-red-600">
                  <Shield className="w-4 h-4" /> Official Press Desk
                </span>
              </div>

              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line">
                {selectedArticleModal.fullText}
              </p>

              <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-2xl space-y-3 mt-6">
                <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-neutral-500" /> Mandate Verification & Neutral Access
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  The ICRC operates independently of all state governments and military coalitions. Our operations are fully coordinated in accordance with the 1949 Geneva Conventions to provide impartial relief directly to victims of war.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between shrink-0">
              <span className="text-xs text-neutral-500 font-semibold">Press Release ID: #ICRC-2026-{selectedArticleModal.id}</span>
              <button 
                type="button"
                onClick={() => setSelectedArticleModal(null)}
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-6 py-2.5 rounded-xl transition text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Dispatch
              </button>
            </div>

          </div>
        </div>
      )}


      {/* ========================================== */}
      {/* POPUP MODAL 2: RESTORING FAMILY LINKS (RFL) */}
      {/* ========================================== */}
      {showRflModal && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white text-neutral-900 rounded-3xl max-w-2xl w-full p-8 sm:p-12 shadow-2xl border border-neutral-200 relative max-h-[90vh] overflow-y-auto space-y-8">
            
            <button 
              type="button"
              onClick={() => setShowRflModal(false)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Phone className="w-3.5 h-3.5 text-red-600" /> Central Tracing Agency Bureau
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Restoring Family Links (RFL) Network
              </h3>
              <p className="text-neutral-600 text-base mt-3 leading-relaxed">
                If you have lost contact with a relative due to armed conflict, migration, or detention, the International Red Cross and Red Crescent network can assist you in locating them free of charge.
              </p>
            </div>

            <div className="space-y-4 bg-neutral-50 border border-neutral-200 p-6 rounded-2xl">
              <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> How Our Tracing Desk Works
              </h4>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span><strong>Confidential Cross-Border Inquiries:</strong> We securely check detention facility rosters and displacement camp logs worldwide.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span><strong>Red Cross Messages:</strong> Delivery of private, written family messages to prisoners of war across front lines.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span><strong>100% Free & Impartial:</strong> All tracing assistance is provided without charge by neutral caseworkers.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-neutral-200 pt-6 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Official RFL Global Database Support</span>
              <button 
                type="button"
                onClick={() => setShowRflModal(false)}
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-8 py-3.5 rounded-xl transition text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                Close Helpdesk Window
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}