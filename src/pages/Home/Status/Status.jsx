import { FaAward, FaUserTie } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
const Status = () => {
  return (
    <div className="mt-20">
      <div className="bg-primary-color py-20 px-2 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <div className=" rounded-none grid md:grid-cols-2 gap-8  lg:grid-cols-4">
            <div className="flex items-center gap-4">
              <div>
                <FaUserTie className="text-6xl text-white" />
              </div>
              <div className="text-start">
                <div className="stat-value text-white text-lg">50 +</div>
                <div className="stat-desc text-lg text-white font-semibold ">
                  team workers
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <TbTargetArrow className="text-6xl text-white" />
              </div>
              <div className="text-start">
                <div className="stat-value text-white text-lg">600 +</div>
                <div className="stat-desc text-lg text-white font-semibold ">
                  our clients
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <HiOfficeBuilding className="text-6xl text-white" />
              </div>
              <div className="text-start">
                <div className="stat-value text-white text-lg">40 +</div>
                <div className="stat-desc text-lg text-white font-semibold ">
                  offices in country
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaAward className="text-6xl text-white" />
              </div>
              <div className="text-start">
                <div className="stat-value text-white text-lg">60 +</div>
                <div className="stat-desc text-lg text-white font-semibold ">
                  company awards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
