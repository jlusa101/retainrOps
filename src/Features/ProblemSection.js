const problems = [
  { icon: "fa-exclamation-triangle", title: "Delayed cash flow impacts operations", desc: "Unpaid invoices mean you can't pay your team or invest in growth." },
  { icon: "fa-clock", title: "Manual reminders are time-consuming", desc: "Hours wasted each month chasing payments could be spent on billable work." },
  { icon: "fa-user-friends", title: "Chasing clients is stressful and awkward", desc: "Damages client relationships when you have to be the 'bad cop'." }
];

const ProblemSection = () => (
  <section className="section-padding bg-white">
    <div className="container mx-auto px-6 md:px-0 md:w-10/12 lg:w-8/12 xl:w-6/12">
      <h2 className="text-3xl font-bold text-center mb-12">Late Retainers Hurt Your Agency</h2>
      <div className="space-y-6">
        {problems.map((p, i) => (
          <div key={i} className="flex items-start">
            <div className="feature-icon rounded-full p-3 mr-4">
              <i className={`fas ${p.icon} text-xl`}></i>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ProblemSection;