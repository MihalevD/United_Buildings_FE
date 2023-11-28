import { Filter } from "./Filter";
import BasicBox from "./basic/BasicBox";
import { useSelector } from "react-redux";

export const FiltersRow = () => {
  const filters = useSelector((state: any) => state.filters);

  return (
    <BasicBox top="120px" fullWidth justify="center">
      {filters &&
        Object.entries(filters)?.map(([key, value]: any, index) => {
          if (key === "priceRange") {
            value = `${value[0]},000€` + " --- " + `${value[1]},000€`;
            return (
              <Filter
                key={key}
                text={value}
                item={value}
                type={key}
                close={false}
              />
            );
          }
          return value.map((item: any, newIndex: Number) => {
            return (
              <Filter
                key={key + newIndex}
                text={item.label}
                item={item}
                type={key}
              />
            );
          });
        })}
    </BasicBox>
  );
};
