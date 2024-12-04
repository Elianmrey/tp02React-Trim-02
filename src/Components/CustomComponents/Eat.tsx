import React from "react";
import FormComponent from "./Form";

interface EatProps {
  data: {
    type?: number;
    side?: number;
    quantity?: string;
    start_date?: string;
    end_date?: string;
    observation?: string;
    action_type?: number;
  };
  setData: (data: object) => void;
  translate: (key: string) => string;
}

const Eat: React.FC<EatProps> = ({ data, setData, translate }) => {
  const fields: {
    name: string;
    label: string;
    type: "number" | "select" | "text" | "date";
    options?: { value: string | number; label: string; }[];
  }[] = [
      { name: "quantity", label: translate("Quantidade"), type: "text" },
      { name: "start_date", label: translate("Data Inicial"), type: "date" },
      { name: "end_date", label: translate("Data Final"), type: "date" },
      { name: "observation", label: translate("Observação"), type: "text" },
    ];

  const handleSubmit = () => {
    console.log("Submitted data:", data);
  };

  return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};

export default Eat;
