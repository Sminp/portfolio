import Link from "next/link";
import profileData from "@/data/profile.json";

export default function Contact() {
  const contact = profileData.contact;

  return (
    <>
      <div>
        <div className="w-[1440px] bg-[#F2E6EE]" />
        <div className="w-[1240px] relative overflow-hidden">
          <div className="w-[855px] h-[230px]">
            <p className="absolute left-[617px] top-[57px] text-xl font-semibold text-right text-[#4d4f78]">
              About me
            </p>
            <p className="absolute left-[75px] top-[103px] text-xl text-left text-[#4d4f78]">
              <span className="text-xl text-left text-[#4d4f78]">
                Tel. : {contact.phone}
              </span>
              <br />
              <span className="text-xl text-left text-[#4d4f78]">
                <a href={`mailto:${contact.email}`}>Email : {contact.email}</a>
              </span>
              <br />
              <span className="text-xl text-left text-[#4d4f78]">
                <Link href={contact.github} target="_blank">
                  Github : {contact.github}
                </Link>
              </span>
              <br />
              <span className="text-xl text-left text-[#4d4f78]">
                <Link href={contact.blog} target="_blank">
                  Blog : https://aster-code.tistory.com/
                </Link>
              </span>
            </p>
            <p className="absolute left-[854px] top-[57px] text-xl font-semibold text-right text-[#4d4f78]">
              Projects
            </p>
          </div>
          <p className="absolute left-[75px] top-[50px] text-[32px] font-semibold text-left text-[#4d4f78]">
            Contact
          </p>
        </div>
      </div>
      ;
    </>
  );
}
