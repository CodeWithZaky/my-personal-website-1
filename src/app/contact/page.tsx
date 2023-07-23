import { contact_icons } from "@/src/utils/contact-icons";
const Contact = () => {
  return (
    <div className="flex flex-col border border-red-500 w-[70%] m-auto space-y-3 pb-10">
      <h1 className="text-5xl font-bold">Contact</h1>
      <h2 className="font-semibold">
        {
          "Don't hesitate to contact me by following my social media accounts below :"
        }
      </h2>
      <div className="flex flex-col">
        {contact_icons.map((items) => {
          return items;
        })}
      </div>
    </div>
  );
};

export default Contact;
