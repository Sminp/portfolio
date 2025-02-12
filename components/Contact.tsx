import Link from "next/link";
import profileData from "@/data/profile.json";

export default function Contact() {
  const contact = profileData.contact;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-center space-x-6">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">📧</span>
            <span>{contact.email}</span>
          </a>
          <Link
            href={`${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">Github</span>
          </Link>
          <Link
            href={`${contact.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">Blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
