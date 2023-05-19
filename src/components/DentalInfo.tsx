import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";

const DentalInfo = () => {
  const iconClassName = "mt-1 ml-2 w-4 h-4 text-white";
  const headerClassName = "tracking-widest text-sm text-white pb-1";
  const divClassName = "mt-5 mb-6";
  return (
    <div>
      {/* info */}
      <div>
        <div className=" flex flex-row text-sm">
          <div className="flex flex-col justify-evenly">
            <div className={divClassName}>
              <div className="flex flex-row justify-center ">
                <h3 className={headerClassName}>
                  <strong>Phone</strong>
                </h3>
                <AiOutlinePhone className={iconClassName} />
              </div>
              <p className="text-sm text-white">+1 416 366 0777</p>
            </div>

            <div className="flex flex-col mb-6">
              <div className="flex flex-row text-center justify-center">
                <h3 className={headerClassName}>
                  <strong>E-mail</strong>
                </h3>
                <AiOutlineMail className={iconClassName} />
              </div>
              <div>
                <a
                  className="hover:underline text-sm text-white"
                  href="mailto:info@richmondwestdental.com"
                >
                  info@richmondwestdental.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-10">
            <div className={divClassName}>
              <div className="flex flex-row justify-center ">
                <h3 className={headerClassName}>
                  <strong>Office</strong>{" "}
                </h3>
                <CiLocationOn className={iconClassName} />
              </div>
              <a
                className="hover:underline text-sm text-white"
                href="https://www.google.com/maps?q=500+Richmond+St.+W,+Suite+128,+Toronto,+ON,+M5V+3N4"
                target="_blank"
                rel="noopener noreferrer"
              >
                500 Richmond St. W, Suite 128 <br /> Toronto, ON, M5V 3N4
              </a>
            </div>

            <div className="mb-6">
              <div className="flex flex-row justify-center">
                <h3 className={headerClassName}>
                  <strong>Opening Hours</strong>
                </h3>
                <AiOutlineClockCircle className={iconClassName} />
              </div>
              <p className="flex justify-center text-left text-sm text-white">
                Mon - Thu: 10 AM - 5 PM <br />
                Fri: 10 AM - 4 PM <br />
                Every Other Sat: 10 AM - 4 PM <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalInfo;
