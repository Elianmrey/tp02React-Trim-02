interface Data {
    [key: string]: string;
}

type SetDataFunction = (data: Data) => void;

const handleInputChange = (
    field: string,
    value: Date,
    data: Data,
    setData: SetDataFunction
): void => {
    setData({ ...data, [field]: value });
};

const selectItem = (
    value: Date, 
    key: string,
    data: Data,
    setData: SetDataFunction
): void => {
    setData({ ...data, [key]: value });
};



const getTitle = (action_type: string): string => {
    switch (action_type) {
        case "1":
            return "sleep";
        case "2":
            return "eat";
        case "3":
            return "diaper";
        default:
            return "eat";
    }
};

const validateDiaper = (data: Data): string[] => {
    const errors: string[] = [];
    if (!data.diaperType) {
        errors.push('Diaper type is required');
    }
    return errors;
};

const validateSleep = (data: Data): string[] => {
    const errors: string[] = [];
    if (!data.sleepType) {
        errors.push('Sleep type is required');
    }
    return errors;
};

const validateEat = (data: Data): string[] => {
    const errors: string[] = [];
    if (!data.eatType) {
        errors.push('Eat type is required');
    }
    return errors;
};

const validateFields = (data: Data, actionType: string): string[] => {
    switch (actionType) {
        case "1":
            return validateSleep(data);
        case "2":
            return validateEat(data);
        case "3":
            return validateDiaper(data);
        default:
            return validateEat(data);
    }
};

export {
    handleInputChange,
    generateSubtitle,
    getTitle,
    selectItem,
    validateFields,
};
