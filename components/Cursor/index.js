import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  useEffect(() => {
    setMount(true);
  }, []);

  return <>{mount && <div>Cursor Component Placeholder</div>}</>;
};

export default Cursor;
