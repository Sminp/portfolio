// 박스 크기 5xl
import Link from "next/link";
import profileData from "@/data/profile.json";

export default function Contact() {
  const contact = profileData.contact;

  return (
    <div className="w-screen h-[534px] flex flex-col justify-end">
      <div className="w-screen h-[334px] flex items-center justify-center  border-t border-[#4D4F78]">
        <div className="w-[1240px] h-full grid grid-cols-2 pt-[50px]">
          <div className="flex flex-col">
            <p className=" text-[32px] font-semibold text-left pb-[10px]">
              Contact
            </p>
            <p className="text-xl text-left leading-9">
              Tel. : {contact.phone}
              <br />
              <a href={`mailto:${contact.email}`}>Email : {contact.email}</a>
              <br />
              <Link href={contact.github} target="_blank">
                Github : {contact.github}
              </Link>
              <br />
              <Link href={contact.blog} target="_blank">
                Blog : {contact.blog}
              </Link>
            </p>
          </div>
          <div className="flex flex-row justify-around items-start">
            <p className="text-xl font-semibold text-left ">About me</p>
            <p className="text-xl font-semibold text-left ">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
