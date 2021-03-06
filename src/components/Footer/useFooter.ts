import React from "react";

export const useFooter = () => {
  const [year, setYear] = React.useState(0);

  React.useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear());
  }, []);

  return year;
};
