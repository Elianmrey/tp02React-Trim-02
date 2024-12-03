import { useEffect, FC } from "react";
import { Button, DateTimePicker, Grid, TextField } from "..";
import { handleInputChange, selectItem } from "../../Utils/Utils";


interface EatProps {
  data: {
    type: number;
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

const Eat: FC<EatProps> = ({ data, setData, translate }) => {
  useEffect(() => {
    setData({ ...data, action_type: 2 });
  }, [data, setData]);

  function handleTypeChange (type: number) {
    setData({ ...data, type });
    if (type === 1) {
      setData({ ...data, side: null, end_date: null });
    } else {
      setData({ ...data, quantity: null });
    }
  };

  const renderBottleFields = () => (
    <Grid item xs={12}>
      <TextField
        value={data.quantity || ""}
        label={`${translate("quantity")} (ml)`}
        name="quantity"
        type="number"
        fullWidth
        onChange={(event) =>
          handleInputChange("quantity", event.target.value, data, setData)
        }
      />
    </Grid>
  );

  const renderBosomFields = () => (
    <Grid item xs={12}>
      <Button
        color={data.side === 1 ? "secondary" : "primary"}
        onClick={() => selectItem(1, "side", data, setData)}
      >
        {translate("left")}
      </Button>
      <Button
        color={data.side === 2 ? "secondary" : "primary"}
        onClick={() => selectItem(2, "side", data, setData)}
      >
        {translate("right")}
      </Button>
      <Button
        color={data.side === 3 ? "secondary" : "primary"}
        onClick={() => selectItem(3, "side", data, setData)}
      >
        {translate("both")}
      </Button>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {/* Action Type Selection */}
      <Grid item xs={12}>
        <Button
          color={data.type === 1 ? "secondary" : "primary"}
          onClick={() => handleTypeChange(1)}
        >
          {translate("eat-bottle")}
        </Button>
        <Button
          color={data.type === 2 ? "secondary" : "primary"}
          onClick={() => handleTypeChange(2)}
        >
          {translate("eat-bosom")}
        </Button>
      </Grid>

      {/* Start Date */}
      <Grid item xs={12}>
        <DateTimePicker
          value={
            data.start_date
              ? adjustDateTimeForTimezone(data.start_date)
              : null
          }
          label={
            data.type === 1
              ? translate("data-hour")
              : translate("data-hour-start")
          }
          name="start_date"
          fullWidth
          ampm={false}
          format="DD/MM/YYYY HH:mm"
          onChange={(value) =>
            handleInputChange(
              "start_date",
              new Date(value.toString()),
              data,
              setData
            )
          }
        />
      </Grid>

      {/* Conditional Fields */}
      {data.type === 1 && renderBottleFields()}
      {data.type === 2 && (
        <>
          <Grid item xs={12}>
            <DateTimePicker
              value={
                data.end_date
                  ? adjustDateTimeForTimezone(data.end_date)
                  : null
              }
              label={translate("data-hour-end")}
              name="end_date"
              fullWidth
              ampm={false}
              format="DD/MM/YYYY HH:mm"
              onChange={(value) =>
                handleInputChange(
                  "end_date",
                  new Date(value.toString()),
                  data,
                  setData
                )
              }
            />
          </Grid>
          {renderBosomFields()}
        </>
      )}

      {/* Observations */}
      <Grid item xs={12}>
        <TextField
          value={data.observation || ""}
          label={translate("observation")}
          name="observation"
          rows={6}
          fullWidth
          multiline
          onChange={(event) =>
            handleInputChange("observation", event.target.value, data, setData)
          }
        />
      </Grid>
    </Grid>
  );
};

export default Eat;
