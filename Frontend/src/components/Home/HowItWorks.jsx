import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>Streamline Your Jobhunt</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Begin your journey by setting up a personalized profile to access exclusive features and opportunities tailored to your needs.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Explore Careers/Advertise Opportunities</p>
              <p>
              Discover a wide range of career opportunities tailored to your skills and aspirations. Attract top talent by posting your job openings to our extensive network of qualified candidates.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Submit Applications/Source Ideal Talent</p>
              <p>
              Apply for positions that match your qualifications and career goals with ease.Find and engage the most qualified candidates for your job openings, ensuring a perfect fit for your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
