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

export default function Eat ({ data, setData, translate }:EatProps)  {
  const fields: {
  name: string;
  label: string;
  type: "number" | "select" | "text" | "date";
  options?: { value: string | number; label: string }[];
}[] = [
  { name: "type", label: translate("Tipo"), type: "select", options: [
      { value: 1, label: translate("Mamadeira") },
      { value: 2, label: translate("Seio") },
    ] 
  },
  { name: "side", label: translate("Lado"), type: "select", options: [
      { value: 1, label: translate("Esquerdo") },
      { value: 2, label: translate("Direito") },
      { value: 3, label: translate("Ambos") },
    ] 
  },
  { name: "quantity", label: translate("Quantidade (ml)"), type: "number" },
  { name: "start_date", label: translate("Data Inicial"), type: "date" },
  { name: "end_date", label: translate("Data Final"), type: "date" },
  { name: "observation", label: translate("Observação"), type: "text" },
];


  const handleSubmit = () => {
    console.log("Submitted data:", data);
  };

  return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};


