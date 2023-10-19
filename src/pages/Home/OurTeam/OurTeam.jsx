import { useEffect, useState } from "react";
import Member from "../Member/Member";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const OurTeam = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div className="mx-2 lg:mx-0">
      <div className="max-w-6xl mx-auto mt-10 md:mt-20 ">
        <SectionTitle
          title="Our Team"
          description="Our experienced and dedicated team at CarVista is customer-oriented, innovative, and committed to delivering efficient and trustworthy services with dynamic teamwork and a result-driven approach."
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 lg:gap-y-6  gap-6 mt-20">
          {members.map((member) => (
            <Member key={member.id} member={member}></Member>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
