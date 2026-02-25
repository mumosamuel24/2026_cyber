import ServiceCard from "@/components/ServiceCard";

const servicesData = [
  {
    name: "IT Support",
    description: "Computer repair, software troubleshooting, network setup.",
    category: "IT_SUPPORT",
  },
  {
    name: "Web Development",
    description: "Business websites, e-commerce, and web maintenance.",
    category: "WEB_DEV",
  },
  {
    name: "Graphic Design",
    description: "Logos, flyers, posters, and branding materials.",
    category: "GRAPHIC_DESIGN",
  },
  {
    name: "Government Services",
    description: "eCitizen assistance, KRA, NTSA, HELB support.",
    category: "GOVERNMENT",
  },
  {
    name: "Cyber Café Services",
    description: "Printing, scanning, passport photos, document processing.",
    category: "CYBER_CAFE",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-red-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.category}
              name={service.name}
              description={service.description}
              category={service.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}