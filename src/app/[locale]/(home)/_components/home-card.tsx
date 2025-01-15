import { Ambulance, Clock, KeySquare, Wallet } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const HomeCard = async () => {
  const t = await getTranslations("Home");
  const data = [
    {
      id: "1",
      icon: <Ambulance />,
      title: t("Fast Delivery"),
      desc: "Start from $10",
    },
    {
      id: "2",
      icon: <Wallet />,
      title: t("Money Guarantee"),
      desc: "7 Days Back",
    },
    {
      id: "3",
      icon: <Clock />,
      title: t("15 Days"),
      desc: "For free return",
    },
    {
      id: "4",
      icon: <KeySquare />,
      title: t("Payment"),
      desc: "Secure system",
    },
  ];
  return (
    <div className="flex flex-wrap gap-5 max-w-screen-lg mx-auto">
      {data.map((item) => (
        <div
          className="flex max-w-96 bg-slate-100 p-5 rounded-md"
          key={item.id}
        >
          <div className="flex gap-4">
            {item.icon}
            <div>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
