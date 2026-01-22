import { CheckCircle2, Shield, Award } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Professionals Choose RV Tech Elevators
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over a decade of experience, we have redefined vertical mobility through engineering excellence and a
              customer-centric approach.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Safety First Approach", text: "ISO certified processes and advanced safety features." },
                { title: "Fully Customizable", text: "Bespoke cabin designs to match your building's architecture." },
                { title: "24/7 Rapid Response", text: "Emergency support and quick maintenance turnaround." },
                { title: "Modern Technology", text: "Energy-efficient gearless motors and smart control systems." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-safety-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/industrial-elevator-gears.jpg"
                  alt="Industrial Detail"
                  className="rounded-2xl shadow-lg w-full object-cover h-64"
                />
                <div className="bg-primary p-6 rounded-2xl text-white">
                  <Shield className="h-8 w-8 mb-2" />
                  <h4 className="text-xl font-bold">100%</h4>
                  <p className="text-sm opacity-80">Safety Record</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-safety-orange p-6 rounded-2xl text-white">
                  <Award className="h-8 w-8 mb-2" />
                  <h4 className="text-xl font-bold">ISO</h4>
                  <p className="text-sm opacity-80">9001:2015 Certified</p>
                </div>
                <img
                  src="/elevator-control-panel.jpg"
                  alt="Technology Detail"
                  className="rounded-2xl shadow-lg w-full object-cover h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
