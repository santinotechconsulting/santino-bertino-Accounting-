/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Qualifications } from './components/Qualifications';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Capabilities } from './components/Capabilities';

import { Process } from './components/Process';
import { ServiceEstimator } from './components/ServiceEstimator';
import { FAQ } from './components/FAQ';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';


export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [contactService, setContactService] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setContactService(serviceTitle);
    const contactElem = document.getElementById('contact');
    contactElem?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyScope = (scopeText: string) => {
    setContactMessage(scopeText);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#283342] selection:bg-[#0B2345] selection:text-white">
      {/* Top Bar Header */}
      <Header onOpenContactModal={() => {
        const contactElem = document.getElementById('contact');
        contactElem?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSelectService={handleSelectService} />

        {/* About Santino Bertino */}
        <About onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Core Professional Services */}
        <Services onSelectService={handleSelectService} />

        {/* Target Industries & Sectors */}
        <Industries onSelectIndustry={(type) => {
          const contactElem = document.getElementById('contact');
          contactElem?.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Academic & Professional Qualifications */}
        <Qualifications />

        {/* Cross-Sector Experience */}
        <Experience />

        {/* Practical Case Studies */}
        <Portfolio />

        {/* Client Testimonials & Social Proof */}
        <Testimonials />

        {/* Technical Capabilities & Global Standards */}
        <Capabilities />


        {/* 4-Step Client Journey */}
        <Process />

        {/* Interactive Diagnostic & Scoping Tool */}
        <ServiceEstimator onApplyScopeToContact={handleApplyScope} />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Financial Insights & Articles */}
        <Insights />


        {/* Contact & Consultation Form */}
        <Contact initialService={contactService} initialMessage={contactMessage} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume / CV Viewer Modal */}
      <ResumeModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </div>
  );
}
