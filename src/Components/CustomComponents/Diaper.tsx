import React from "react";
import FormComponent from "./Form";

interface DiaperProps {
    data: object;
    setData: (data: object) => void;
    translate: (key: string) => string;
}

const Diaper: React.FC<DiaperProps> = ({ data, setData, translate }) => {
    const fields: {
        name: string;
        label: string;
        type: "number" | "date" | "select" | "text";
        options?: { value: string | number; label: string; }[];
    }[] = [
            { name: "start_date", label: translate("start-date"), type: "date" },
            { name: "type", label: translate("type"), type: "select", options: [{ value: 1, label: "Wet" }, { value: 2, label: "Dirty" }] },
            { name: "observation", label: translate("observation"), type: "text" },
        ];

    const handleSubmit = () => {
        console.log("Dados enviados:", data);
    };
    
    return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};

export default Diaper;
