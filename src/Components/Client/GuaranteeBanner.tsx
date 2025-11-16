import { CheckCircle } from "lucide-react";

export const GuaranteeBanner: React.FC = () => (
  <section className="bg-linear-to-r h-fit mx-auto m-0 from-green-500 to-green-700 p-8 rounded-2xl shadow-2xl text-white">
    <div className="md:flex md:gap-6 gap-3 grid space-x-4">
      <CheckCircle className="w-10 h-10 shrink-0 md:m-0" />
      <div className="flex gap-7 items-center">
        <div className="grid">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            Our 100% Practical Guarantee
          </h2>
          <p className="text-lg opacity-90">
            Every CyberHunter course is designed with a focus on real-world,
            hands-on labs, ensuring you gain job-ready, practical skills that
            directly apply to the cybersecurity industry.
          </p>
        </div>
        {/* <Link
          href="/academy-courses/guarantee"
          className="hidden md:block px-6 py-2 bg-white h-fit text-green-700 font-bold rounded-lg shadow-md hover:bg-green-100 transition duration-150 shrink-0"
        >
          Learn More
        </Link> */}
      </div>
    </div>
  </section>
);