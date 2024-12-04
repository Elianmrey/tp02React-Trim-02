import React from "react";
import FormComponent from "./Form";

interface DiaperProps {
    data: Record<string, never>;
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
            { name: "start_date", label: translate("Start Date"), type: "date" },
            { name: "type", label: translate("Type"), type: "select", options: [{ value: 1, label: "Wet" }, { value: 2, label: "Dirty" }] },
            { name: "observation", label: translate("Observation"), type: "text" },
        ];

    const handleSubmit = () => {
        console.log("Submitted data:", data);
    };
    
    return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};

export default Diaper;
