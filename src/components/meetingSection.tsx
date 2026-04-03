import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { Button } from "../utils";
export default function meetingSection() {
  const meetings = [
    {
      id: 1,
      image: "/metting/meeting_icon_1.png",
      title: "Add requirements & sign up today",
    },
    {
      id: 2,
      image: "/metting/meeting_icon_2.png",
      title: "Connect with your CSM & onboarding team",
    },
    {
      id: 3,
      image: "/metting/meeting_icon_3.png",
      title: "Meet your STR Assistant next week",
    },
  ];

  const reasons = [
    {
      id: 1,
      title: "Brilliant Client Service",
    },
    {
      id: 2,
      title: "Flexibility & Adaptibility",
    },
    {
      id: 3,
      title: "We make it Personal",
    },
    {
      id: 4,
      title: "We have expart in our team",
    },
  ];
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-6 w-full py-10">
        <h1 className="w-full text-center text-3xl font-semibold">
          Getting Started is <span className="text-foreground">Easy</span>
        </h1>

        <p className="text-center font-medium lg:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="w-full px-4 sm:px-6 lg:px-8 ">
          <div className=" py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 w-auto">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex flex-col items-center gap-4 relative w-full"
                >
                  <div className="absolute size-10 sm:size-12 border-2 sm:border-3 bg-background border-foreground rounded-full flex justify-center items-center -top-4 -left-4 text-sm sm:text-base">
                    {meeting.id}
                  </div>

                  <div className="bg-background rounded-lg shadow-md w-full h-36 sm:h-40 md:h-44 grid place-items-center">
                    <Image
                      src={meeting.image}
                      alt={meeting.title}
                      width={200}
                      height={200}
                      className="w-16 sm:w-20 md:w-24 h-auto"
                    />
                  </div>

                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-center px-2 ">
                    {meeting.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" w-full  bg-[#FDEBF0] flex flex-col-reverse gap-6 lg:flex-row  justify-center items-center p-4">
          <div className="flex flex-col justify-center items-center gap-4 h-full w-full  lg:w-1/2 mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold w-full">
              Few Reasons Why you Choose us?
            </h2>
            <p className="w-full font-semibold!">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex flex-col justify-start items-start  w-full">
              {reasons.map((reason) => {
                return (
                  <div
                    key={reason.id}
                    className="mt-6  flex justify-start items-center  gap-3"
                  >
                    <span className="size-8 bg-[#FAC4D2] rounded-full flex justify-center items-center">
                      <FaCheck className="text-foreground" />
                    </span>
                    <span className="font-semibold!">{reason.title}</span>
                  </div>
                );
              })}

              <Button className="bg-foreground text-background mt-6 w-full lg:w-auto">
                Schedule A Meeting
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <Image
              src="/metting_images.png"
              alt="Meeting Image"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
