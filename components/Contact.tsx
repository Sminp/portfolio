// 박스 크기 5xl
import Link from "next/link";
import profileData from "@/data/profile.json";

export default function Contact() {
  const contact = profileData.contact;

  return (
    <div className="w-screen h-[334px] flex items-center justify-center">
      <div className="w-[1020px] grid grid-cols-2">
        <div className="flex flex-col">
          <p className=" text-[32px] font-semibold text-left ">Contact</p>
          <p className="w-[358.95px]text-xl text-left ">
            <span className="w-[358.95px] text-xl text-left ">
              Tel. : {contact.phone}
            </span>
            <br />
            <span className="w-[358.95px] text-xl text-left">
              <a href={`mailto:${contact.email}`}>Email : {contact.email}</a>
            </span>
            <br />
            <span className="w-[358.95px] text-xl text-left ">
              <Link href={contact.github} target="_blank">
                Github : {contact.github}
              </Link>
            </span>
            <br />
            <span className="w-[358.95px] text-xl text-left">
              <Link href={contact.blog} target="_blank">
                Blog : {contact.blog}
              </Link>
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-around items-start">
          <p className="w-[97.89px] text-xl font-semibold text-right ">
            About me
          </p>
          <p className="w-[82.67px] text-xl font-semibold text-right ">
            Projects
          </p>
        </div>
      </div>
    </div>
  );
}
