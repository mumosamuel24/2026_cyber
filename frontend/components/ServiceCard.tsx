import Link from "next/link";

type ServiceCardProps = {
  name: string;
  description: string;
  category: string;
  price?: string;
  href?: string;
};

export default function ServiceCard({
  name,
  description,
  category,
  price,
  href = "/request",
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition cursor-pointer">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-black-600 mb-4">{description}</p>
        {price && <p className="font-semibold text-blue-900">{price}</p>}
        <span className="inline-block mt-3 text-blue-700 font-medium hover:underline">
          Request Service
        </span>
      </div>
    </Link>
  );
}