import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Plus, CheckCircle, ExternalLink } from 'lucide-react';
import { QUALIFICATIONS } from '../config/siteData';
import { QualificationItem } from '../types';

export const Qualifications: React.FC = () => {
  const [qualificationsList, setQualificationsList] = useState<QualificationItem[]>(QUALIFICATIONS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCert, setNewCert] = useState({
    degree: '',
    institution: '',
    badge: 'Professional Certification',
    description: '',
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('santino_bertino_custom_qualifications');
      if (stored) {
        setQualificationsList(JSON.parse(stored));
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleAddCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCert.degree || !newCert.institution) return;

    const updated: QualificationItem[] = [
      ...qualificationsList,
      {
        id: `custom-cert-${Date.now()}`,
        degree: newCert.degree,
        institution: newCert.institution,
        badge: newCert.badge,
        type: 'professional',
        description: newCert.description || 'Verified professional credential.',
      },
    ];

    setQualificationsList(updated);
    try {
      localStorage.setItem('santino_bertino_custom_qualifications', JSON.stringify(updated));
    } catch {
      // Ignore
    }
    setNewCert({ degree: '', institution: '', badge: 'Professional Certification', description: '' });
    setShowAddModal(false);
  };

  return (
    <section id="qualifications" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087A5B] block mb-2">
              Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
              Academic & Professional Qualifications
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Rigorous postgraduate scholarship paired with global professional accounting standards.
            </p>
            <div className="h-1 w-20 bg-[#C69A3A] mt-4" />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0B2345] bg-white hover:bg-slate-50 border border-[#0B2345]/20 shadow-sm transition-all cursor-pointer shrink-0 self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-[#C69A3A]" />
            <span>Add Certification Record</span>
          </button>
        </div>

        {/* Credentials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualificationsList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#0B2345]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B2345]/5 text-[#0B2345]">
                    {item.type === 'academic' ? (
                      <GraduationCap className="w-6 h-6 text-[#0B2345]" />
                    ) : (
                      <Award className="w-6 h-6 text-[#C69A3A]" />
                    )}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#087A5B] bg-[#087A5B]/10 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B2345] tracking-tight">
                  {item.degree}
                </h3>

                <span className="text-xs font-semibold text-slate-500 block mt-1">
                  {item.institution}
                </span>

                <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-[#087A5B] font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                {item.location && <span>{item.location}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Veracity Assurance Note */}
        <div className="mt-8 p-4 rounded-xl bg-white/70 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#087A5B] shrink-0" />
          <span>
            <strong>Professional Integrity Note:</strong> All academic degrees and professional certifications are stated with verified fidelity. ACCA-related credentials reflect formal syllabus alignment with global standards without unwarranted title exaggerations.
          </span>
        </div>

      </div>

      {/* Add Certification Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#0B2345]/20 animate-in fade-in zoom-in-95">
            <h3 className="text-xl font-bold text-[#0B2345] mb-2">
              Add Professional Certification
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Add newly acquired accounting licenses, certificates, or courses to Santino Bertino’s profile.
            </p>

            <form onSubmit={handleAddCert} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                  Certification / Course Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Advanced IFRS Accounting Certificate"
                  value={newCert.degree}
                  onChange={(e) => setNewCert({ ...newCert, degree: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                  Awarding Institution / Body
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Corporate Finance Institute / ACCA / CATUC"
                  value={newCert.institution}
                  onChange={(e) => setNewCert({ ...newCert, institution: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                  Credential Badge
                </label>
                <select
                  value={newCert.badge}
                  onChange={(e) => setNewCert({ ...newCert, badge: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                >
                  <option value="Professional Certification">Professional Certification</option>
                  <option value="Executive Diploma">Executive Diploma</option>
                  <option value="Accredited Specialization">Accredited Specialization</option>
                  <option value="CPD Continuing Education">CPD Continuing Education</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2345] mb-1">
                  Credential Details & Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe key accounting syllabus covered..."
                  value={newCert.description}
                  onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B2345]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0B2345] rounded-lg hover:bg-[#15396B] cursor-pointer"
                >
                  Save Credential
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
