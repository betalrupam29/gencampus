"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layout, 
  ShieldCheck, 
  Users, 
  Zap, 
  Play, 
  Image as ImageIcon, 
  Video, 
  Code, 
  Box, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  MessageSquare,
  Wand2,
  Lock,
  Search,
  Settings,
  MoreHorizontal
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const NavBar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-black/40 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">GenCampus</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#demo" className="hover:text-white transition-colors">Platform</a>
        <a href="#security" className="hover:text-white transition-colors">Safety</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</button>
        <button className="px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.6)]">
          Start Creating
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
    <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-5xl mx-auto text-center z-10">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex flex-col items-center gap-6"
      >
        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GenCampus OS 2.0 is live</span>
          <div className="w-px h-3 bg-white/20 mx-1" />
          <a href="#" className="flex items-center hover:text-white transition-colors">Read announcement <ChevronRight className="w-3 h-3 ml-1" /></a>
        </motion.div>
        
        <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-[1.1]">
          Create Anything. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-cyan-400">Instantly.</span>
        </motion.h1>
        
        <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl mt-4 font-light">
          The ultimate AI creative operating system for students and campus teams. Generate text, design posters, edit videos, and ship code with built-in responsible AI.
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            Start Creating <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg flex items-center gap-2 hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">
            <Play className="w-5 h-5" /> Watch Demo
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div variants={fadeIn} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] group-hover:bg-indigo-500/20 transition-colors" />
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 transition-all duration-500">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light">{desc}</p>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-24 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">One platform. <span className="text-gray-500">Infinite possibilities.</span></h2>
      </div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <FeatureCard 
          icon={Box} 
          title="Multimodal Creation" 
          desc="Seamlessly switch between generating essays, 3D renders, short-form videos, and React components all within the same infinite canvas."
        />
        <FeatureCard 
          icon={Layout} 
          title="AI App Builder" 
          desc="Drag, drop, and prompt your way to fully functional campus utilities. Deploy event trackers or study tools with a single click."
        />
        <FeatureCard 
          icon={ShieldCheck} 
          title="Responsible AI Guardrails" 
          desc="Built-in plagiarism checks, citation generators, and bias detection ensure your creative output is always ethical and academically sound."
        />
        <FeatureCard 
          icon={Users} 
          title="Real-time Collaboration" 
          desc="Invite your project group to edit, prompt, and review simultaneously. multiplayer cursors and branchable AI conversation history."
        />
      </motion.div>
    </div>
  </section>
);

const DashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('design');
  return (
    <section id="demo" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] border border-white/10 bg-[#0F0F11]/80 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(79,70,229,0.2)] overflow-hidden flex flex-col h-[800px]">
          {/* Topbar */}
          <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center text-sm font-medium text-gray-300">
                <Box className="w-4 h-4 text-indigo-400" /> CS101 / <span className="text-white">Final Project Demo</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#0F0F11] bg-gradient-to-br from-pink-500 to-orange-400" />
                <div className="w-8 h-8 rounded-full border-2 border-[#0F0F11] bg-gradient-to-br from-blue-500 to-cyan-400" />
                <div className="w-8 h-8 rounded-full border-2 border-[#0F0F11] bg-white/10 flex items-center justify-center text-xs">+2</div>
              </div>
              <button className="px-4 py-1.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors">
                Share
              </button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-20 border-r border-white/10 flex flex-col items-center py-6 gap-6 bg-white/[0.01]">
              <button onClick={() => setActiveTab('text')} className={`p-3 rounded-xl transition-colors ${activeTab === 'text' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><MessageSquare className="w-5 h-5" /></button>
              <button onClick={() => setActiveTab('design')} className={`p-3 rounded-xl transition-colors ${activeTab === 'design' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><ImageIcon className="w-5 h-5" /></button>
              <button onClick={() => setActiveTab('video')} className={`p-3 rounded-xl transition-colors ${activeTab === 'video' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><Video className="w-5 h-5" /></button>
              <button onClick={() => setActiveTab('code')} className={`p-3 rounded-xl transition-colors ${activeTab === 'code' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}><Code className="w-5 h-5" /></button>
              <div className="mt-auto flex flex-col gap-6">
                <button className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors"><Settings className="w-5 h-5" /></button>
              </div>
            </div>

            {/* Main Canvas */}
            <div className="flex-1 bg-[#0A0A0B] relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0B] to-[#0A0A0B]" />
              
              <div className="flex-1 p-8 relative z-10 overflow-y-auto flex items-center justify-center">
                <div className="w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <Wand2 className="w-5 h-5 text-indigo-400" />
                      <span className="font-semibold text-white">Design Generator</span>
                    </div>
                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                  </div>
                  
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center overflow-hidden relative mb-6">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                     <div className="text-center z-10">
                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/10">
                          <ImageIcon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-medium text-white">Campus Tech Symposium Poster</p>
                        <p className="text-xs text-gray-400 mt-1">Generated in 1.2s</p>
                     </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Make it more cyberpunk and add neon lighting..."
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
                      defaultValue="Make it more cyberpunk and add neon lighting"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Safety & Suggestions */}
            <div className="w-80 border-l border-white/10 bg-white/[0.01] p-6 flex flex-col">
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> AI Guardian
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-100">Copyright Safe</span>
                  </div>
                  <p className="text-xs text-emerald-400/80 leading-relaxed">
                    Visual elements are original or derived from licensed public datasets. No infringement detected.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-white">Contrast Warning</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    The neon pink text against the dark background might fail WCAG accessibility standards.
                  </p>
                  <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                    Auto-fix contrast →
                  </button>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-sm font-semibold text-white mb-4">Prompt Suggestions</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 cursor-pointer transition-colors">"Animate background"</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 cursor-pointer transition-colors">"Convert to banner"</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 cursor-pointer transition-colors">"Add school logo"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowNode = ({ icon: Icon, title, active = false }) => (
  <div className="flex flex-col items-center gap-4 relative z-10">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${active ? 'bg-indigo-500/20 border-indigo-500 shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)]' : 'bg-[#151518] border-white/10'}`}>
      <Icon className={`w-7 h-7 ${active ? 'text-indigo-300' : 'text-gray-500'}`} />
    </div>
    <span className={`text-sm font-semibold ${active ? 'text-white' : 'text-gray-500'}`}>{title}</span>
  </div>
);

const Workflow = () => (
  <section className="py-24 px-6 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-16 tracking-tight">The seamless lifecycle of an idea</h2>
      
      <div className="relative flex justify-between items-center max-w-4xl mx-auto">
        <div className="absolute left-8 right-8 top-8 h-0.5 bg-gradient-to-r from-white/5 via-indigo-500/50 to-white/5" />
        <WorkflowNode icon={Sparkles} title="Idea" active />
        <WorkflowNode icon={MessageSquare} title="Draft" />
        <WorkflowNode icon={ImageIcon} title="Design" />
        <WorkflowNode icon={ShieldCheck} title="Review" active />
        <WorkflowNode icon={Play} title="Publish" />
      </div>
    </div>
  </section>
);

const AMDSection = () => (
  <section className="py-20 px-6 relative z-10">
    <div className="max-w-4xl mx-auto">
      <div className="rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
        <div className="rounded-3xl bg-black/60 backdrop-blur-xl border border-white/5 p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/30 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-6 z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#0F0F11] border border-white/10 flex items-center justify-center relative shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]">
              <Cpu className="w-8 h-8 text-white" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Hardware Accelerated</h3>
              <p className="text-sm text-gray-400">Optimized for AMD AI Accelerators</p>
            </div>
          </div>
          
          <div className="z-10 flex gap-4 text-center">
             <div>
               <p className="text-3xl font-extrabold text-white tracking-tighter">10x</p>
               <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Faster Gen</p>
             </div>
             <div className="w-px h-10 bg-white/10 self-center" />
             <div>
               <p className="text-3xl font-extrabold text-white tracking-tighter">Local</p>
               <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Inference</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/[0.05] bg-[#050505] pt-20 pb-10 px-6 relative z-10">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">GenCampus</span>
        </div>
        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
          The AI creative operating system empowering the next generation of campus builders, designers, and thinkers.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-4">Product</h4>
        <ul className="space-y-3 text-sm text-gray-500">
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Responsible AI</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-4">Resources</h4>
        <ul className="space-y-3 text-sm text-gray-500">
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-4">Legal</h4>
        <ul className="space-y-3 text-sm text-gray-500">
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms</a></li>
          <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
      <p>© 2026 GenCampus Inc. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">Discord</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      <NavBar />
      <Hero />
      <Features />
      <DashboardDemo />
      <Workflow />
      <AMDSection />
      <Footer />
    </div>
  );
}