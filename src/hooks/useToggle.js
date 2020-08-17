import { useState } from "react";

const useToggle = () => {
  const [toggle, setState] = useState(false);

  const onToggle = () => {
    setState(!toggle);
  };

  return [toggle, onToggle];
}

export default useToggle;
