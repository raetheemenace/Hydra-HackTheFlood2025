import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CloudUpload, 
  FileText, 
  Lock, 
  EyeOff, 
  Ghost, 
  Zap, 
  ShieldCheck, 
  Menu, 
  X 
} from 'lucide-react';

const Dropbox = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Drag and Drop Visual Handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-300 font-sans selection:bg-red-900 selection:text-white flex flex-col">
      
      {/* --- Navigation Bar (Shared) --- */}
      <nav className="border-b border-gray-800 bg-[#161616] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-red-900/20 p-2 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-500">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-widest text-red-500">HYDRA</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Overview</Link>
                <Link to="/map" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Investigator map</Link>
                <Link to="/dropbox" className="text-white px-3 py-2 rounded-md text-sm font-medium border-b-2 border-red-500">Dropbox</Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#161616] border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-800">Overview</Link>
              <Link to="/map" className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-800">Investigator map</Link>
              <Link to="/dropbox" className="text-white block px-3 py-2 rounded-md text-base font-medium bg-gray-900">Dropbox</Link>
            </div>
          </div>
        )}
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Speak Truth to Power.<br />Safely.
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Please upload your evidence below. Drag and drop photos, videos, or documents here.
          </p>
        </div>

        {/* Upload Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Left: Text Entry */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-white font-medium mb-3">
              <FileText size={18} /> Text Entry
            </label>
            <textarea 
              className="flex-1 bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 text-gray-300 focus:outline-none focus:border-red-900/50 resize-none h-64 md:h-80 shadow-inner"
              placeholder="Enter what you want to say..."
            ></textarea>
          </div>

          {/* Right: File Upload */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-white font-medium mb-3">
              <CloudUpload size={18} /> Upload pictures, documents or videos
            </label>
            <div 
              className={`flex-1 bg-[#1a1a1a] border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-8 transition-colors h-64 md:h-80 cursor-pointer group
                ${dragActive ? 'border-red-500 bg-red-900/10' : 'border-gray-800 hover:border-gray-600'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrag}
            >
              <div className="bg-[#222] p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <CloudUpload size={40} className="text-gray-400 group-hover:text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Drag and drop your files</h3>
              <p className="text-gray-500 text-sm mb-4">or click to browse from your device</p>
              <p className="text-xs text-gray-600 text-center max-w-xs">
                Supported: Images (JPG, PNG), Documents (PDF, DOC), Videos (MP4, MOV)
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-16">
          <button className="bg-red-900/80 hover:bg-red-800 text-red-100 px-12 py-3 rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(153,27,27,0.3)] border border-red-800">
            Upload
          </button>
        </div>

        {/* Privacy Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Your Privacy is Our Priority</h2>
          <p className="text-gray-400 text-sm max-w-3xl mx-auto mb-10">
            System HYDRA operates under the principle of radical transparency and user protection. All submissions are processed through end-to-end encryption protocols, ensuring that your identity and evidence remain completely anonymous and secure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SecurityCard 
              icon={<Lock size={32} />} 
              title="End-to-End Encrypted" 
              desc="All data is encrypted before transmission" 
            />
            <SecurityCard 
              icon={<EyeOff size={32} />} 
              title="Metadata Stripped" 
              desc="Client-side removal of identifying information" 
            />
            <SecurityCard 
              icon={<Ghost size={32} />} 
              title="Anonymous Submission" 
              desc="No logs. No IP tracking. Completely clean." 
            />
            <div className="hidden md:block md:col-span-3">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
                <SecurityCard 
                  icon={<Zap size={32} />} 
                  title="Instant Processing" 
                  desc="Real-time verification and sorting" 
                />
                <SecurityCard 
                  icon={<ShieldCheck size={32} />} 
                  title="Security Guaranteed" 
                  desc="Bank-grade security protocols" 
                />
               </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

// Helper Component for Security Cards
const SecurityCard = ({ icon, title, desc }) => (
  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 flex flex-col items-center hover:border-gray-700 transition-colors">
    <div className="text-white mb-4 opacity-80">{icon}</div>
    <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
    <p className="text-gray-500 text-xs max-w-[200px]">{desc}</p>
  </div>
);

export default Dropbox;