import React from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";

interface FormComponentProps {
    fields: {
        name: string;
        label: string;
        type: "text" | "select" | "date" | "number";
        options?: { value: number | string; label: string }[]; // para selects
    }[];
    data: Record<string, string | number | undefined>;
    setData: (data: Record<string, string | number | undefined>) => void;
    onSubmit: () => void;
}

export default function FormComponent ({
    fields,
    data,
    setData,
    onSubmit,
}: FormComponentProps) {
    const handleChange = (name: string, value: string | number | undefined) => {
        setData({ ...data, [name]: value });
    };

    return (
        <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ display: "grid", gap: 2 }}>
            {fields.map((field) => (
                <Box key={field.name}>
                    {field.type === "select" ? (
                        <TextField
                            select
                            label={field.label}
                            value={data[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            fullWidth
                        >
                            {field.options?.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    ) : (
                        <TextField
                            type={field.type}
                            label={field.label}
                            value={data[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            fullWidth
                        />
                    )}
                </Box>
            ))}
            <Button variant="contained" color="primary" onClick={onSubmit}>
                Submit
            </Button>
        </Box>
    );
};

