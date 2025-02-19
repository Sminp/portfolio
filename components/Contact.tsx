import Link from "next/link";
import profileData from "@/data/profile.json";

export default function Contact() {
  const contact = profileData.contact;

  return (
    <div className="w-[1440px] h-[334px] relative overflow-hidden bg-[#f2e6ee]">
      <div className="w-[1040px] h-[334px] absolute left-[200px] top-0 overflow-hidden">
        <div className="w-[930px] h-[215px]">
          <p className="w-[97.89px] absolute left-[589.54px] top-[57px] text-xl font-semibold text-right text-[#4d4f78]">
            About me
          </p>
          <p className="w-[358.95px] absolute left-0 top-[105px] text-xl text-left text-[#4d4f78]">
            <span className="w-[358.95px] text-xl text-left text-[#4d4f78]">
              Tel. : {contact.phone}
            </span>
            <br />
            <span className="w-[358.95px] text-xl text-left text-[#4d4f78]">
              <a href={`mailto:${contact.email}`}>Email : {contact.email}</a>
            </span>
            <br />
            <span className="w-[358.95px] text-xl text-left text-[#4d4f78]">
              <Link href={contact.github} target="_blank">
                Github : {contact.github}
              </Link>
            </span>
            <br />
            <span className="w-[358.95px] text-xl text-left text-[#4d4f78]">
              <Link href={contact.blog} target="_blank">
                Blog : {contact.blog}
              </Link>
            </span>
          </p>
          <p className="w-[82.67px] absolute left-[847.33px] top-[57px] text-xl font-semibold text-right text-[#4d4f78]">
            Projects
          </p>
        </div>
        <p className="absolute left-0 top-[50px] text-[32px] font-semibold text-left text-[#4d4f78]">
          Contact
        </p>
      </div>
    </div>
  );
}
