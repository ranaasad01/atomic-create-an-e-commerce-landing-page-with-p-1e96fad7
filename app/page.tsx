"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Star, ShoppingBag, Heart, ArrowRight, Truck, RotateCcw, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { APP_NAME, APP_TAGLINE, CATEGORIES } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline data ────────────────────────────────────────────────────────────

const products = [
  {
    id: "p1",
    name: "Woven Linen Throw",
    category: "Living",
    price: 89,
    originalPrice: 120,
    rating: 4.8,
    reviewCount: 214,
    image: "https://www.brentwoodhome.com/cdn/shop/products/BWH_Linen_Blanket_0421_1400x.jpg?v=1621449921",
    badge: "Sale",
    description: "Soft, breathable linen in earthy tones. Perfect for layering on sofas or beds.",
  },
  {
    id: "p2",
    name: "Matte Ceramic Mug Set",
    category: "Kitchen",
    price: 54,
    rating: 4.9,
    reviewCount: 389,
    image: "https://m.media-amazon.com/images/I/61QWWtwsokL.jpg",
    badge: "Bestseller",
    description: "Set of four hand-thrown mugs in a warm sand glaze. Dishwasher safe.",
  },
  {
    id: "p3",
    name: "Walnut Side Table",
    category: "Living",
    price: 249,
    rating: 4.7,
    reviewCount: 97,
    image: "https://assets.rjimgs.com/rjimgs/ab/images/dp/wcm/202608/0002/bilquist-side-table-2-o.jpg",
    description: "Solid American walnut with tapered legs. Minimal, timeless, built to last.",
  },
  {
    id: "p4",
    name: "Linen Duvet Cover",
    category: "Bedroom",
    price: 138,
    originalPrice: 175,
    rating: 4.8,
    reviewCount: 162,
    image: "http://3hlinen.com/cdn/shop/files/3HLinen_Offwhite_Linen_Duvet_Cover_Set.png?v=1747894963",
    badge: "Sale",
    description: "Stone-washed linen that gets softer with every wash. Available in six tones.",
  },
  {
    id: "p5",
    name: "Brass Pendant Light",
    category: "Lighting",
    price: 195,
    rating: 4.6,
    reviewCount: 73,
    image: "https://m.media-amazon.com/images/I/81Ij6k6gpRL._AC_UF894,1000_QL80_.jpg",
    badge: "New",
    description: "Aged brass finish with a hand-blown glass shade. Adds warmth to any room.",
  },
  {
    id: "p6",
    name: "Teak Outdoor Chair",
    category: "Outdoor",
    price: 320,
    rating: 4.9,
    reviewCount: 51,
    image: "https://www.countrycasualteak.com/media/catalog/product/c/a/calypso_4849_p8250918.jpg?store=default&image-type=image",
    badge: "New",
    description: "FSC-certified teak with weatherproof cushions. Folds flat for easy storage.",
  },
  {
    id: "p7",
    name: "Marble Serving Board",
    category: "Kitchen",
    price: 72,
    rating: 4.7,
    reviewCount: 128,
    image: "https://images.urbndata.com/is/image/Anthropologie/100215607_000_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=640",
    description: "Honed Carrara marble with a natural edge. Ideal for cheese and charcuterie.",
  },
  {
    id: "p8",
    name: "Linen Table Runner",
    category: "Kitchen",
    price: 38,
    rating: 4.5,
    reviewCount: 204,
    image: "https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202617/0110/italian-washed-linen-table-runner-o.jpg",
    description: "Pre-washed linen in a relaxed weave. Adds texture to any dining table.",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Mara Jensen",
    location: "Copenhagen",
    avatar: "https://www.ageist.com/wp-content/uploads/2024/05/IMG_5448-683x1024.jpg",
    rating: 5,
    text: "Every piece I've ordered from Lumière has exceeded my expectations. The linen throw is now a permanent fixture on my sofa.",
  },
  {
    id: "t2",
    name: "Oliver Reyes",
    location: "London",
    avatar: "https://www.myprivia.com/sites/default/files/2025-04/flsp_Oliver_Reyes.jpg",
    rating: 5,
    text: "The walnut side table arrived beautifully packaged and looks even better in person. Craftsmanship is genuinely impressive.",
  },
  {
    id: "t3",
    name: "Suki Tanaka",
    location: "Melbourne",
    avatar: "https://covers.libro.fm/9781792227080_1120.jpg",
    rating: 5,
    text: "I've been searching for a ceramic mug set that felt substantial and beautiful. These are exactly that. Already ordered a second set as a gift.",
  },
];

const collections = [
  {
    id: "c1",
    title: "The Calm Kitchen",
    subtitle: "12 pieces",
    image: "https://static.wixstatic.com/media/838bae_b9f241fca89645c4bec19240352f010f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    accent: "bg-amber-50",
  },
  {
    id: "c2",
    title: "Soft Living",
    subtitle: "18 pieces",
    image: "https://static.wixstatic.com/media/838bae_b9f241fca89645c4bec19240352f010f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    accent: "bg-indigo-50",
  },
  {
    id: "c3",
    title: "Outdoor Ease",
    subtitle: "9 pieces",
    image: "https://stephanieodea.com/wp-content/uploads/2025/12/infographic-soft-vs-slow-living.png",
    accent: "bg-emerald-50",
  },
];

const valueProps = [
  {
    icon: Truck,
    title: "Free Shipping Over $75",
    description: "Complimentary delivery on all orders above $75. Express options available at checkout.",
  },
  {
    icon: RotateCcw,
    title: "60-Day Returns",
    description: "Not in love? Return any item within 60 days for a full refund, no questions asked.",
  },
  {
    icon: Shield,
    title: "Lifetime Guarantee",
    description: "Every product is backed by our lifetime craftsmanship guarantee. We stand behind what we sell.",
  },
  {
    icon: Sparkles,
    title: "Thoughtfully Sourced",
    description: "We partner only with makers who share our commitment to quality materials and fair practices.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -4px rgba(0,0,0,0.08)" },
  hover: { y: -6, boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 20px 40px -12px rgba(0,0,0,0.16)" },
};

const imageScale: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={12}
            className={i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
          />
        ))}
      </div>
      <span className="text-xs text-slate-400">({count})</span>
    </div>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [wished, setWished] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative bg-white rounded-2xl overflow-hidden border border-black/5 cursor-pointer"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -4px rgba(0,0,0,0.08)" }}
    >
      <motion.div variants={cardHover} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] bg-slate-50">
          <motion.img
            variants={imageScale}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                product.badge === "Sale"
                  ? "bg-rose-500 text-white"
                  : product.badge === "Bestseller"
                  ? "bg-amber-400 text-amber-900"
                  : "bg-indigo-600 text-white"
              }`}
            >
              {product.badge}
            </span>
          )}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setWished((w) => !w)}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-black/5 flex items-center justify-center shadow-sm transition-colors duration-200"
          >
            <Heart
              size={14}
              className={wished ? "fill-rose-500 text-rose-500" : "text-slate-400"}
            />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="text-sm font-semibold text-slate-900 leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
            {product.description}
          </p>
          <StarRating rating={product.rating} count={product.reviewCount} />
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-slate-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <motion.button
              whileTap={{ scale: 0.92 }}
              aria-label={`Add ${product.name} to cart`}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200"
            >
              <ShoppingBag size={12} />
              Add
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-[#F7F5F2] overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 40%, rgba(99,102,241,0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(251,191,36,0.08) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-widest"
            >
              <span className="w-6 h-px bg-indigo-600" />
              New Season Arrivals
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight text-balance"
            >
              Objects worth
              <br />
              <span className="text-indigo-600 italic">living with.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-500 leading-relaxed max-w-md text-pretty"
            >
              {APP_TAGLINE} Discover premium homeware, textiles, and lighting
              chosen for beauty, craft, and lasting quality.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 flex-wrap">
              <Link
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.45)] hover:-translate-y-0.5"
              >
                Shop the Collection
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#collections"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-slate-700 font-semibold px-6 py-3 rounded-full border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 bg-white/70 backdrop-blur-sm"
              >
                View Collections
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-2">
              {[
                { value: "4,800+", label: "Happy customers" },
                { value: "98%", label: "5-star reviews" },
                { value: "60-day", label: "Free returns" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-bold text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image collage */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative h-[480px] lg:h-[560px] hidden lg:block"
          >
            <motion.div
              variants={scaleIn}
              className="absolute top-0 right-0 w-[58%] h-[62%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
            >
              <img
                src="https://www.loungelovers.com.au/media/magefan_blog/Living-Room-Styling-LongBeachSofa_1_.jpg"
                alt="Styled living room"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.15 }}
              className="absolute bottom-0 left-0 w-[52%] h-[55%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <img
                src="https://i.etsystatic.com/19325508/r/il/581bb4/6229534039/il_1080xN.6229534039_kwdu.jpg"
                alt="Ceramic homeware flatlay"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.28 }}
              className="absolute bottom-[10%] right-[4%] w-[36%] h-[38%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <img
                src="https://m.media-amazon.com/images/I/81Ij6k6gpRL._AC_UF894,1000_QL80_.jpg"
                alt="Brass pendant light"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="absolute top-[38%] left-[28%] bg-white rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-black/5 flex items-center gap-3"
            >
              <span className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center">
                <Star size={16} className="fill-amber-400 text-amber-400" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">4.9 / 5.0</p>
                <p className="text-[10px] text-slate-400">From 4,800+ reviews</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Value Props ───────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {valueProps.map((vp) => (
            <motion.div
              key={vp.title}
              variants={fadeInUp}
              className="flex items-start gap-4"
            >
              <span className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <vp.icon size={18} className="text-indigo-600" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{vp.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{vp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Collections ───────────────────────────────────────────────────── */}
      <section id="collections" className="bg-[#F7F5F2] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3"
            >
              <span className="w-6 h-px bg-indigo-600" />
              Curated Edits
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 tracking-tight text-balance"
            >
              Shop by Collection
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {collections.map((col, i) => (
              <motion.a
                key={col.id}
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                variants={i === 1 ? scaleIn : fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  i === 1 ? "md:row-span-1 md:scale-[1.02]" : ""
                }`}
                style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.04), 0 12px 32px -8px rgba(0,0,0,0.12)" }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/70 text-xs font-medium mb-1">{col.subtitle}</p>
                    <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                      {col.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                      Explore <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────────────────── */}
      <section id="products" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          >
            <div>
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3"
              >
                <span className="w-6 h-px bg-indigo-600" />
                Featured Products
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
              >
                Handpicked for you
              </motion.h2>
            </div>
            <motion.p variants={fadeInUp} className="text-slate-500 max-w-xs text-sm leading-relaxed">
              Each piece is selected for its quality, design, and the way it elevates everyday living.
            </motion.p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-2 flex-wrap mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
                    : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {(filtered ?? []).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link
              href="#products"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              View all products
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Sale Banner ───────────────────────────────────────────────────── */}
      <section id="sale" className="relative overflow-hidden bg-indigo-600 py-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 55%), radial-gradient(circle at 10% 50%, rgba(255,255,255,0.15) 0%, transparent 45%)",
          }}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <motion.span
              variants={slideInLeft}
              className="inline-block text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-4"
            >
              Limited Time
            </motion.span>
            <motion.h2
              variants={slideInLeft}
              className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4"
            >
              End of Season Sale.
              <br />
              Up to 30% off.
            </motion.h2>
            <motion.p
              variants={slideInLeft}
              className="text-indigo-100 text-base leading-relaxed mb-8 max-w-md"
            >
              A carefully chosen selection of our most-loved pieces, now at reduced prices. Stock is limited and won't be restocked at these prices.
            </motion.p>
            <motion.div variants={slideInLeft}>
              <Link
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory("All");
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-7 py-3.5 rounded-full hover:bg-indigo-50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Shop the Sale
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={slideInRight}
            className="grid grid-cols-2 gap-4"
          >
            {products
              .filter((p) => p.badge === "Sale")
              .slice(0, 2)
              .map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-white text-xs font-semibold truncate">{p.name}</p>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-white font-bold text-sm">${p.price}</span>
                      {p.originalPrice && (
                        <span className="text-indigo-200 text-xs line-through">${p.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="bg-[#F7F5F2] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3"
            >
              <span className="w-6 h-px bg-indigo-600" />
              Customer Stories
              <span className="w-6 h-px bg-indigo-600" />
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Loved by thousands
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                className={`bg-white rounded-2xl p-7 border border-black/5 flex flex-col gap-4 ${
                  i === 1 ? "md:mt-6" : ""
                }`}
                style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.10)" }}
              >
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-100"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About / Brand Story ───────────────────────────────────────────── */}
      <section id="about" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 20px 48px -12px rgba(0,0,0,0.14)" }}
              >
                <img
                  src="https://runescape.wiki/images/thumb/Artisans%27_Workshop.png/1200px-Artisans%27_Workshop.png?415e7"
                  alt="Artisan workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
              >
                <p className="text-3xl font-bold text-slate-900 font-playfair">12+</p>
                <p className="text-xs text-slate-500 mt-0.5">Years of curation</p>
              </motion.div>
            </motion.div>

            {/* Copy side */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-widest"
              >
                <span className="w-6 h-px bg-indigo-600" />
                Our Story
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-balance"
              >
                Craft, care, and a love for beautiful things.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 leading-relaxed text-pretty">
                {APP_NAME} began as a small studio in Copenhagen, born from a belief that the objects
                we surround ourselves with shape how we feel at home. We work directly with independent
                makers and small-batch producers across Europe and Japan to bring you pieces that are
                made to last and designed to delight.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-slate-500 leading-relaxed text-pretty">
                Every product in our range is tested in our own homes before it reaches yours. If we
                wouldn't live with it, we won't sell it.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                {[
                  { label: "Independent makers", value: "60+" },
                  { label: "Countries sourced", value: "14" },
                  { label: "Products curated", value: "320+" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col bg-slate-50 rounded-xl px-5 py-4 border border-slate-100"
                  >
                    <span className="text-2xl font-bold text-slate-900 font-playfair">{s.value}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{s.label}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-200"
                >
                  Explore our range <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest"
          >
            <span className="w-6 h-px bg-indigo-400" />
            Stay in the loop
            <span className="w-6 h-px bg-indigo-400" />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-4xl md:text-5xl font-bold text-white tracking-tight text-balance"
          >
            New arrivals, first.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 leading-relaxed text-pretty">
            Join 12,000 subscribers who get early access to new collections, exclusive offers, and
            thoughtful notes on living well.
          </motion.p>
          <motion.form
            variants={fadeInUp}
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2"
          >
            <input
              type="email"
              placeholder="your@email.com"
              defaultValue=""
              className="flex-1 bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.45)] whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>
          <motion.p variants={fadeInUp} className="text-xs text-slate-600">
            No spam, ever. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}