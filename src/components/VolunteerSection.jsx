import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { volunteerInterests, volunteerSkills } from '../data/content';

export default function VolunteerSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    skill: volunteerSkills[0],
    interest: volunteerInterests[0],
  });
  const [status, setStatus] = useState('Share your availability and we will follow up with the right opportunity.');

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setStatus('Please add your name and email to continue.');
      return;
    }

    setStatus('Thank you. Your volunteer interest has been captured for the next outreach round.');
  }

  return (
    <section id="volunteer" className="section-shell">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Volunteer"
              title="Join a mission-driven volunteer network"
              description="A volunteer signup flow should feel welcoming, clear, and easy to complete on mobile. This form keeps the experience simple while still collecting the useful details an NGO team needs."
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="glass-card p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Why volunteers stay engaged</p>
              <div className="mt-5 space-y-4">
                {[
                  'Flexible roles for students, professionals, and field volunteers.',
                  'Campaigns with visible outcomes and regular impact updates.',
                  'Clear coordination for drives, events, and awareness programs.',
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-[var(--border)] bg-[color:var(--surface-strong)] px-4 py-4 text-sm leading-7 text-[var(--muted)]">
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card-strong p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[var(--text)]">
                <span>Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="soft-input"
                  placeholder="Your full name"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-[var(--text)]">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="soft-input"
                  placeholder="you@example.com"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-[var(--text)]">
                <span>Skills</span>
                <select
                  value={form.skill}
                  onChange={(event) => updateField('skill', event.target.value)}
                  className="soft-input"
                >
                  {volunteerSkills.map((skill) => (
                    <option key={skill}>{skill}</option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-[var(--text)]">
                <span>Interest</span>
                <select
                  value={form.interest}
                  onChange={(event) => updateField('interest', event.target.value)}
                  className="soft-input"
                >
                  {volunteerInterests.map((interest) => (
                    <option key={interest}>{interest}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-4 text-sm leading-7 text-[var(--muted)]">
              Selected role: <span className="font-semibold text-[var(--text)]">{form.skill}</span> for{' '}
              <span className="font-semibold text-[var(--text)]">{form.interest}</span>
            </div>

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="btn-primary mt-6 w-full"
            >
              Submit Volunteer Interest
            </motion.button>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]" role="status">
              {status}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}