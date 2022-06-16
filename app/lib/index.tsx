import React, { useEffect, useState } from "react";

import { ElyraTestProps } from "../../contract/src/props";
import { Button } from "./button";
import styles from "./index.module.css";

const ElyraTest: React.FC<ElyraTestProps> = ({
  name,
  onCounterChange,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello {name}{name}{name}{name}!</h1>

      <div className={styles.descriptionContainer}>
          EXAMPLE TEST EXAMPLE TEST TEST TEST EXAMPLE
          EXAMPLE TEST EXAMPLE TEST TEST TEST EXAMPLE
          EXAMPLE TEST EXAMPLE TEST TEST TEST EXAMPLE
          EXAMPLE TEST EXAMPLE TEST TEST TEST EXAMPLE
          <br />
          <br />
          <br />
        <p>
          You pressed my button <strong>{value} times</strong>!
        </p>
      </div>

      <Button onClick={() => setValue((value) => value + 1)}>Press me!</Button>
    </div>
  );
};

export default ElyraTest;
