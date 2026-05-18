import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {
  certificateBenefits,
  covidRelief,
  fundUsage,
  internships,
  keyProjects,
  socialPresenceLinks,
  trustCertificationNote,
  trustPoints,
} from '../data/content';

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Why Trust Us"
            title="Verified credentials and transparent operations"
            description="These points are directly based on your provided InAmigos profile material."
          />
          <img
            src="/images/trust-badges.svg"
            alt="InAmigos trust credentials overview"
            className="mt-8 w-full rounded-2xl border border-white/10"
            loading="lazy"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {trustPoints.map((point, index) => (
              <motion.article
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="card-soft p-5"
              >
                <h4 className="text-sm font-semibold text-accent-500">{point.split('.')[0]}</h4>
                <p className="mt-2 text-sm text-slate-300">{point}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4 text-sm text-sky-100">
            {trustCertificationNote}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Where Funds Will Be Used"
            title="High-impact, need-focused allocations"
            description="Every contribution supports measurable community outcomes across core social needs."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {fundUsage.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Project Highlights</h3>
            <div className="mt-5 space-y-3">
              {keyProjects.map((project) => (
                <div key={project.title} className="rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mb-3 h-28 w-full rounded-lg object-cover"
                      loading="lazy"
                      onError={(e) => {
                        if (project.fallback) e.currentTarget.src = project.fallback;
                      }}
                    />
                  <p className="font-medium text-white">{project.title}</p>
                  <p className="text-sm text-slate-300">{project.impact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">COVID-19 Relief</h3>
            <img
              src="https://source.unsplash.com/1200x600/?relief,volunteer,medical"
              alt="InAmigos Covid-19 relief activities"
              className="mt-4 w-full rounded-xl border border-white/10 object-cover"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = '/images/covid-relief.svg')}
            />
            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
              {covidRelief.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Our Internships</h3>
            <p className="mt-2 text-sm text-slate-300">InAmigos Foundation recruits volunteers for 1-3 month internship programs.</p>
            <img
              src="https://source.unsplash.com/1200x600/?interns,office,volunteers"
              alt="Internship program roles"
              className="mt-4 w-full rounded-xl border border-white/10 object-cover"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = '/images/internships.svg')}
            />
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {internships.map((role) => (
                <div key={role} className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-center">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Certificate Value for Interns and Volunteers</h3>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
              {certificateBenefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold text-white">Social Media Presence</h3>
          <p className="mt-2 text-sm text-slate-300">Official InAmigos links for transparency and public updates.</p>
          <ul className="mt-5 space-y-2 text-sm text-sky-300">
            {socialPresenceLinks.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer" className="break-all transition hover:text-sky-200">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
