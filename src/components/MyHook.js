import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const MyHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>

      <Button onClick={() => setCount(count + 1)}>Tap</Button>
    </div>
  );
};

export default MyHook;
