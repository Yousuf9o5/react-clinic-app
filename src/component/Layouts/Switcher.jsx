import { Switch } from "evergreen-ui";
import React, { useContext } from "react";
import themeContext from "../Context/theme";

const Switcher = () => {
  const Context = useContext(themeContext);
  const check = Context.Checked;
  const setCheck = Context.setChecked;

  return (
    <div className=" mx-6">
      <Switch
        height={24}
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
    </div>
  );
};

export default Switcher;
