import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-3 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <h5 className="flex flex-col xl:flex-row gap-4 justify-center items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> ahchambersoflaw@gmail.com
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 justify-center items-center text-xl font-jost tracking-tight">
        {" "}
        <Phone /> 9000907575, 8142486668
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 justify-center items-center text-xl font-jost tracking-tight">
        {" "}
        <Web /> www.ahchambersoflaw.in
      </h5>
    </div>
  );
};

export default ContactInfo;
