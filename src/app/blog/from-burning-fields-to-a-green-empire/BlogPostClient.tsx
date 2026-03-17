"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, User, Leaf, Factory, Sprout, TreePine, Wind, ArrowRight, Quote, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";


const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const tocItems = [
  { id: "the-sight", label: "The Sight That Changed Everything" },
  { id: "farmers-son", label: "Heart of a Farmer's Son" },
  { id: "the-struggle", label: "The Struggle" },
  { id: "why-waste-matters", label: "Why Agri-Waste Matters" },
  { id: "soul-of-jee", label: "Soul of JEE Origin" },
  { id: "building-dream", label: "Building the Dream" },
  { id: "circular-economy", label: "Circular Economy in Action" },
  { id: "environmental-impact", label: "Environmental Impact" },
  { id: "vision-2040", label: "Vision 2040" },
  { id: "message-youth", label: "Message to the Youth" },
  { id: "conclusion", label: "The Legacy of the Soil" },
];

const stats = [
  { icon: TreePine, value: "Millions", label: "Trees Saved Annually", color: "text-emerald-600" },
  { icon: Wind, value: "1 Crore Tons", label: "Agri-Waste Target/Year", color: "text-sky-600" },
  { icon: Sprout, value: "Zero-Waste", label: "Manufacturing Model", color: "text-green-600" },
  { icon: Factory, value: "Bio-Refinery", label: "Eco-Friendly Processing", color: "text-amber-700" },
];

const processSteps = [
  { step: "01", title: "We Go to the Farmer", desc: "We pick up the waste they were going to burn, providing direct income from crop residue." },
  { step: "02", title: "We Process Agri-Waste", desc: "Agricultural waste becomes premium pulp for packaging, textiles, and paper — ready for global supply chains." },
  { step: "03", title: "We Generate Energy", desc: "Liquids and residues from agri-waste are converted into energy to run our machines sustainably." },
  { step: "04", title: "We Return to the Soil", desc: "Whatever remains goes back as organic fertiliser, enriching the land that fed us." },
];

export default function BlogPostClient() {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
      const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) { setActiveSection(tocItems[i].id); return; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-brand-light-bg text-brand-dark-neutral">
      {/* ===== HERO SECTION ===== */}
      <header className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/blog/hero-burning-fields.png" alt="Contrast between burning agricultural fields and green thriving farmland in rural India" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-12 md:pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm border border-emerald-400/20"><Leaf className="w-3 h-3" />Sustainability</span>
            <span className="inline-flex items-center gap-1.5 text-white/70 text-sm"><Calendar className="w-3.5 h-3.5" />March 17, 2026</span>
            <span className="inline-flex items-center gap-1.5 text-white/70 text-sm"><Clock className="w-3.5 h-3.5" />12 min read</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-heading font-bold text-white !leading-[1.15] mb-5">
            From the Burning Fields to a Green Empire
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            My Journey to Save Rural India — turning agricultural waste into a national treasure.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-3 mt-8 pt-6 border-t border-white/15">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-dark-green to-brand-soft-green flex items-center justify-center text-white font-bold text-sm"><User className="w-5 h-5" /></div>
            <div><p className="text-white font-semibold text-sm">Gopal Jee</p><p className="text-white/60 text-xs">Founder &amp; CEO, JEE Origin Pvt Ltd</p></div>
          </motion.div>
        </div>
      </header>

      {/* ===== STATS BAR ===== */}
      <section className="bg-brand-dark-green py-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 justify-center">
              <s.icon className="w-6 h-6 text-brand-soft-green flex-shrink-0" />
              <div><p className="text-white font-bold text-sm">{s.value}</p><p className="text-white/60 text-[11px]">{s.label}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex gap-12">
        {/* Table of Contents — Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-28">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark-green/50 mb-4">Contents</p>
            <ul className="space-y-1 border-l-2 border-brand-soft-green/30">
              {tocItems.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className={`block pl-4 py-1.5 text-[13px] leading-snug transition-all border-l-2 -ml-[2px] ${activeSection === item.id ? "border-brand-dark-green text-brand-dark-green font-semibold" : "border-transparent text-brand-dark-neutral/50 hover:text-brand-dark-neutral/80 hover:border-brand-soft-green"}`}>{item.label}</a></li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Article Body */}
        <article className="min-w-0 flex-1 max-w-3xl">
          {/* Intro */}
          <motion.div {...fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-brand-dark-neutral/90 first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-brand-dark-green first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              In many parts of rural India, the end of every harvest still looks like the end of the world — fields on fire, skies turned grey, and the smell of smoke choking entire villages. For most people, this is just &ldquo;how things are done&rdquo; to clear crop residue. For me, as a farmer&apos;s son, every burning field feels like a wound to the soil that raised me.
            </p>
            <p className="text-lg leading-relaxed text-brand-dark-neutral/80 mt-6">
              This is the story of how I decided to turn that &ldquo;waste&rdquo; into &ldquo;wealth&rdquo; — how converting <strong>agricultural waste to paper pulp</strong> became my life&apos;s mission, and how <strong>JEE Origin Pvt Ltd</strong> is building a <strong>circular economy in agriculture</strong> that serves farmers, protects forests, and offers real <strong>stubble burning alternatives</strong> for a smoke-free rural India.
            </p>
          </motion.div>

          <hr className="border-brand-soft-green/20 my-12" />

          {/* Section: The Sight */}
          <Section id="the-sight" title="The Sight That Changed Everything" icon={<Leaf className="w-5 h-5" />}>
            <p>I still remember the smell of smoke hanging over the fields during harvest season. In the heart of rural India, where the earth is supposed to provide life, I saw it being choked. I saw farmers — the very backbone of our nation — standing helplessly as they set fire to mountains of agricultural waste.</p>
            <p>To the world, it was just <em>&ldquo;kachra&rdquo;</em> (waste). To the farmers, it was a burden they had to clear as fast as possible. But to me, it looked like a wasted opportunity — a burning treasure that could have powered a thousand homes and saved a million trees.</p>
            <p>My name is <strong>Gopal Jee</strong>, and my story isn&apos;t about science in a lab. It&apos;s about the promise I made to the soil of my country: that no farmer would ever have to burn their hard work again.</p>
          </Section>

          {/* Section: Farmer's Son */}
          <Section id="farmers-son" title="The Heart of a Farmer's Son">
            <p>I didn&apos;t grow up in a world of luxury; I grew up in the rhythm of the seasons. I grew up watching the monsoon decide our mood, the soil decide our income, and the market decide our fate.</p>
            <p>I saw my father and his neighbours toil day and night, only to be left with tons of biomass waste that nobody wanted. This waste wasn&apos;t just an environmental problem; it was a symbol of how we treat our agriculture. We take the fruit, the grain, or the fibre, and we discard the rest as if it has no soul.</p>
            <p>I couldn&apos;t accept that. I believed that if nature created something, it must have a purpose. That simple belief became the foundation of <strong>JEE Origin Pvt Ltd</strong>. I decided to dedicate my life to finding the &ldquo;wealth&rdquo; hidden in the &ldquo;waste&rdquo; of our fields.</p>
          </Section>

          {/* Section: The Struggle */}
          <Section id="the-struggle" title="The Struggle: A Young Man Against the Norms">
            <p>When I first started talking about turning agricultural waste into high-value paper pulp, people laughed. They told me I was too young. They said the paper industry belongs to giants who cut down forests and control everything from raw materials to markets.</p>
            <BlockquoteCard quote="Gopal, why don't you just get a comfortable job? Why do you want to play with waste?" />
            <p>But every time I saw a farmer struggling to clear his field, or saw thick black smoke rising on the horizon, my resolve grew stronger. I realised that innovation isn&apos;t just about inventing something new; it&apos;s about solving a pain that nobody else wants to touch.</p>
            <p>I spent years under the harsh sun, travelling from one village to another, collecting what others threw away, and proving that the &ldquo;waste&rdquo; of a farm is the &ldquo;gold&rdquo; of an industry. I was just one young man against the norms, but I had the strength of my roots behind me.</p>
          </Section>

          {/* Section: Why Waste Matters */}
          <Section id="why-waste-matters" title="Why Agricultural Waste Matters">
            <p>India is a land of abundance, but we are also a land of immense waste. Every year, <strong>millions of tons of agricultural residue</strong> — the stalks, the stems, the husks — are generated and then largely ignored.</p>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <InfoCard icon="🌍" title="The Environmental Cost" text="When this waste is burnt, it releases toxins and particulate matter into the air our children breathe. When it rots improperly, it pollutes soil and water." color="red" />
              <InfoCard icon="👨‍🌾" title="The Human Cost" text="Farmers, already under financial pressure, spend limited income just to dispose of this residue. What should have been a resource becomes a burden." color="amber" />
            </div>
            <p>This is why <strong>agricultural residue management in India</strong> is not just a technical topic — it is a social, economic, and environmental necessity.</p>
          </Section>

          {/* Section: Soul of JEE Origin */}
          <Section id="soul-of-jee" title="Why Agriculture Waste? The Soul of JEE Origin">
            <p>At <strong>JEE Origin</strong>, we decided to change the definition of waste. We saw agricultural residue as the world&apos;s most sustainable raw material. Instead of treating crop remains like a problem to be burned away, we began to see them as the raw fibre for a new kind of industry.</p>
            <p>We realised that if we could turn this biomass into <strong>high-quality paper pulp</strong>, we wouldn&apos;t just be building a business — we would be <strong>saving our forests</strong>. We could prove that paper, packaging, and many fibre-based products don&apos;t always need to come from trees.</p>
            <BlockquoteCard quote="If a tree took years to grow, why should we cut it down when a crop grows back every season and leaves so much useful residue behind?" />
            <p>That belief is the soul of JEE Origin: turning <strong>agricultural waste to paper pulp</strong> and <strong>eco-friendly products</strong>, so that not a single extra tree needs to be cut for a piece of paper.</p>
          </Section>

          {/* Image Divider */}
          <div className="my-14 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/assets/blog/circular-economy.png" alt="Agricultural fibers like wheat straw and sugarcane bagasse being processed into sustainable paper pulp at JEE Origin" width={900} height={450} className="w-full h-auto" />
            <p className="text-center text-xs text-brand-dark-neutral/50 py-3 bg-white">Agricultural fibers transformed into sustainable paper pulp</p>
          </div>

          {/* Section: Building the Dream */}
          <Section id="building-dream" title="Building the Dream: JEE Origin Pvt Ltd">
            <p>Transitioning from a dreamer to a founder was the hardest thing I&apos;ve ever done. <strong>JEE Origin Pvt Ltd</strong> was built on grit, late nights, and the blessings of the farming community.</p>
            <p>We didn&apos;t want to build just another factory. We wanted to build a <strong>bio-refinery that respects the earth</strong>. A bio-refinery is like an oil refinery — but instead of crude oil, we use biomass such as crop residue, <strong>sugarcane bagasse</strong>, and <strong>wheat straw</strong>. We convert this into high-value paper pulp and related eco-friendly products.</p>
            <h3 className="text-xl font-heading font-bold text-brand-dark-green mt-10 mb-6">Our Revolutionary Manufacturing Model</h3>
            <div className="space-y-4">
              {processSteps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-4 rounded-xl bg-white border border-brand-soft-green/20 shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-dark-green/10 flex items-center justify-center text-brand-dark-green font-bold text-sm">{s.step}</span>
                  <div><h4 className="font-semibold text-brand-dark-green text-[15px]">{s.title}</h4><p className="text-sm text-brand-dark-neutral/70 mt-0.5">{s.desc}</p></div>
                </motion.div>
              ))}
            </div>
            <p className="mt-8">This is the <strong>circular economy in action</strong>. It is a loop where nothing is wasted, and everyone wins.</p>
          </Section>

          {/* Section: Circular Economy */}
          <Section id="circular-economy" title="Circular Economy in Action: Waste to Wealth">
            <p>Our work at JEE Origin is not just about technology; it is about building a <strong>bridge between farms and industry</strong>.</p>
            <p>On one side, we have <em>kisans</em> (farmers) who struggle with crop residue and often see no option beyond burning. On the other side, we have <strong>brands, paper mills, and packaging buyers</strong> looking for reliable, sustainable raw materials.</p>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <InfoCard icon="🤝" title="Partner to Farmers" text="Offering farmer income from crop residue that was once considered useless, adding thousands of rupees to seasonal income." color="green" />
              <InfoCard icon="🏢" title="Solution for Industry" text="Delivering agri-waste-based pulp and eco-friendly packaging from agri-waste that helps companies meet sustainability goals." color="blue" />
            </div>
            <p>In a village I visited in North India, farmers used to burn their wheat straw every year. Today, they bundle that same straw and sell it to us. Their fields are clearer, their air is cleaner, and that &ldquo;kachra&rdquo; now adds a few thousand rupees to their income.</p>
            <p>In another cluster, a sugarcane-growing community now sees its bagasse as feedstock for <strong>sugarcane bagasse pulp</strong> that travels into global packaging and paper products. For them, waste is no longer a shame — it is a symbol of progress.</p>
          </Section>

          {/* Section: Environmental Impact */}
          <Section id="environmental-impact" title="Environmental Impact: Smoke-Filled Skies to Clear Horizons">
            <p>The impact of this model is not theoretical; it is visible in the air we breathe and in the forests we save. By turning <strong>agricultural waste to paper pulp</strong>, we are working towards:</p>
            <ul className="space-y-3 my-6 list-none pl-0">
              {[
                ["🔥", "Reduced stubble burning and smoke, leading to cleaner skies and fewer respiratory problems."],
                ["🌬️", "Cleaner air in rural villages, giving children a chance to grow without seasonal smoke clouds."],
                ["🌲", "Lower pressure on forests, because paper and packaging can be made from agri-waste instead of trees."],
              ].map(([icon, text], i) => (
                <li key={i} className="flex gap-3 items-start p-3 rounded-lg bg-emerald-50/70 border border-emerald-100"><span className="text-lg flex-shrink-0">{icon}</span><span className="text-[15px] text-brand-dark-neutral/85">{text}</span></li>
              ))}
            </ul>
            <p>When we say <strong>&ldquo;Serve the Nature — Save Tree, Save Planet,&rdquo;</strong> we mean it in very practical terms. Every ton of agri-waste pulp we produce is one step away from deforestation and one step closer to a <strong>smoke-free rural India</strong>.</p>
          </Section>

          {/* Vision 2040 Image */}
          <div className="my-14 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/assets/blog/vision-2040.png" alt="A vision of sustainable India 2040 with green farmlands and eco-friendly bio-refinery" width={900} height={450} className="w-full h-auto" />
            <p className="text-center text-xs text-brand-dark-neutral/50 py-3 bg-white">The vision: a smoke-free, sustainable India by 2040</p>
          </div>

          {/* Section: Vision 2040 */}
          <Section id="vision-2040" title="A Vision for the New India: 2040">
            <p>My vision for the year <strong>2040</strong> is clear: a <strong>&ldquo;Smoke-Free India.&rdquo;</strong></p>
            <p>We are on a mission to <strong>process 1 crore tons of agricultural waste every year</strong>. For me, this isn&apos;t about turnover or valuation. It&apos;s about:</p>
            <ul className="space-y-2 my-6 ml-1 list-none pl-0">
              {["The number of trees we saved.", "The number of farmers who could finally afford to send their children to better schools because their 'waste' became a source of income.", "The number of villages that can breathe easier because the fire in their fields has been replaced by opportunity in their hands."].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start"><span className="w-1.5 h-1.5 rounded-full bg-brand-dark-green mt-2 flex-shrink-0" /><span className="text-[15px] leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </Section>

          {/* Section: Message to Youth */}
          <Section id="message-youth" title="The Message to the Youth">
            <p>To every young Indian who feels they are too small to make a change: <strong>look at the waste around you</strong>. The biggest problems of our country are actually our biggest opportunities.</p>
            <p>You don&apos;t need a fancy office or a foreign degree to be a hero. You just need the courage to look at a problem and say, <em>&ldquo;I will solve this.&rdquo;</em></p>
            <p>I am not just a founder; I am a son of the soil who refused to let his roots be burnt. At JEE Origin, we are proving that the future of India isn&apos;t in the hands of those who exploit nature, but in the hands of those who heal it.</p>
            <p>If I, as a farmer&apos;s son, can build a <strong>bio-refinery model</strong> around crop residue, you too can build something powerful around the challenges you see. The path is not easy, but the soil of this country is fertile — not just for crops, but for ideas.</p>
          </Section>

          {/* Section: Conclusion */}
          <Section id="conclusion" title="Conclusion: The Legacy of the Soil">
            <p>The journey of <strong>JEE Origin Pvt Ltd</strong> is just beginning. Every time a roll of paper is made from our agricultural pulp, it is a victory for the environment. Every time a farmer gets paid for his crop residue, it is a victory for India.</p>
            <p>We are committed to <strong>zero-waste manufacturing in India</strong>, to honouring the land that feeds us, and to ensuring that our children inherit cleaner air, stronger forests, and more dignified villages.</p>
            <p>I invite you to be a part of this journey — not as distant observers, but as <strong>partners in a revolution</strong>:</p>
            <div className="grid sm:grid-cols-3 gap-3 my-8">
              {[
                { to: "Farmers", cta: "Collaborate with us. Sell your residue instead of burning it." },
                { to: "Businesses & Brands", cta: "Source sustainable pulp and eco-friendly packaging from agri-waste." },
                { to: "Youth & Investors", cta: "Join us in building a smoke-free India by 2040." },
              ].map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-brand-dark-green/5 border border-brand-dark-green/10 text-center">
                  <p className="font-bold text-brand-dark-green text-sm mb-1">{c.to}</p>
                  <p className="text-xs text-brand-dark-neutral/70 leading-relaxed">{c.cta}</p>
                </div>
              ))}
            </div>
            <p className="font-medium text-lg">Let&apos;s stop burning our future. Let&apos;s start building it — <strong>one field, one stem, and one dream at a time</strong>.</p>
          </Section>

          {/* Author Quote */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 mb-8 relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-brand-dark-green to-[#2d7a5e] text-white text-center">
            <Quote className="w-8 h-8 text-white/20 mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-heading italic leading-relaxed">&ldquo;The waste of today is the wealth of tomorrow. Let us grow together.&rdquo;</p>
            <p className="mt-4 text-white/70 font-semibold text-sm">— Gopal Jee, Founder &amp; CEO</p>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-white border border-brand-soft-green/30 shadow-sm text-center">
            <h3 className="text-xl font-heading font-bold text-brand-dark-green mb-2">Ready to Join the Green Revolution?</h3>
            <p className="text-sm text-brand-dark-neutral/60 mb-6">Partner with JEE Origin for sustainable pulp solutions.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark-green text-white rounded-full font-semibold text-sm hover:bg-brand-dark-green/90 transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>

      {/* ===== MORE STORIES SECTION ===== */}
      <section className="bg-white py-24 border-t border-brand-soft-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark-green/60 mb-3">Continue Reading</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark-green">More <span className="text-brand-accent-brown">Stories</span></h2>
            </div>
            <Link href="/blog" className="group inline-flex items-center gap-2 text-brand-dark-green font-bold text-sm tracking-wide hover:text-brand-accent-brown transition-colors">
              View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts
              .filter(post => post.slug !== "from-burning-fields-to-a-green-empire")
              .slice(0, 3)
              .map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
          </div>
        </div>
      </section>


      {/* Back to Top */}
      {showBackToTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-brand-dark-green text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform" aria-label="Back to top">
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

/* ===== Reusable Sub-Components ===== */

function Section({ id, title, icon, children }: { id: string; title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.section id={id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 scroll-mt-28">
      <div className="flex items-center gap-3 mb-5">
        {icon && <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-dark-green/10 flex items-center justify-center text-brand-dark-green">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark-green">{title}</h2>
      </div>
      <div className="space-y-4 text-[16px] md:text-[17px] leading-[1.8] text-brand-dark-neutral/85">{children}</div>
    </motion.section>
  );
}

function BlockquoteCard({ quote }: { quote: string }) {
  return (
    <div className="my-8 pl-5 py-4 border-l-4 border-brand-accent-brown bg-brand-accent-brown/5 rounded-r-xl">
      <p className="italic text-brand-dark-neutral/80 text-[15px] leading-relaxed">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

function InfoCard({ icon, title, text, color }: { icon: string; title: string; text: string; color: string }) {
  const borderColors: Record<string, string> = { red: "border-red-200 bg-red-50/50", amber: "border-amber-200 bg-amber-50/50", green: "border-emerald-200 bg-emerald-50/50", blue: "border-sky-200 bg-sky-50/50" };
  return (
    <div className={`p-5 rounded-xl border ${borderColors[color] || "border-gray-200 bg-gray-50/50"}`}>
      <p className="text-2xl mb-2">{icon}</p>
      <h4 className="font-bold text-sm text-brand-dark-green mb-1">{title}</h4>
      <p className="text-[13px] text-brand-dark-neutral/70 leading-relaxed">{text}</p>
    </div>
  );
}
