import { useEffect, useState } from "react";
import { CanvasController, CommonCanvas } from '@elyra/canvas';
import { IntlProvider } from 'react-intl'

import './styles/styles.scss';

import LanguageBundles from './static/lang';
import PipelineFlow from './static/allTypesCanvas.json';
import PipelineFlowPalette from './static/modelerPalette.json';
const LOCALE = "en";

/**
 * Here we want to export a working Elyra
 * Common Canvas as a consumable component
 * for UMD in other React x.0.0 projects.
 */
const ElyraComponentFinal = () => {
  const [canvasController, setCanvasController] = useState<null |
   typeof CanvasController>(null);
  const [intlMessages, setIntlMessages] = useState({});

  useEffect(() => {
    const canvasInstance = new CanvasController();
    canvasInstance.setPipelineFlow(PipelineFlow);
    canvasInstance.setPipelineFlowPalette(PipelineFlowPalette);
    setCanvasController(canvasInstance);

    const messages = {};
    Object.values(LanguageBundles).forEach((bundle) => {
      Object.assign(messages, bundle[LOCALE]);
    });
    setIntlMessages(messages);
  }, []);

  return (
    <IntlProvider locale={LOCALE} messages={intlMessages} defaultLocale={LOCALE}>
      <div>
        <h1>elyra-adaptor-vite</h1>
      </div>
      {canvasController && (
        <div id="app-container">
          <CommonCanvas canvasController={canvasController} />
        </div>
      )}
    </IntlProvider>
  );
}

export default ElyraComponentFinal;


// import React, { useEffect, useState } from "react";

// import { ExampleTinyFrontendProps } from "../../contract/src/props";
// import { Button } from "./button";
// import styles from "./index.module.css";

// const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
//   name,
//   onCounterChange,
// }) => {
//   const [value, setValue] = useState(0);

//   useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Hello {name}!</h1>

//       <div className={styles.descriptionContainer}>
//         <p>
//           EXAMPLE TEST EXAMPLE TEST TEST TEST EXAMPLE
//           <br />
//           <br />
//           <br />
//           I&apos;m a{" "}
//           <a
//             href="https://tiny-frontend.github.io"
//             target="_blank"
//             rel="noreferrer"
//           >
//             tiny frontend
//           </a>{" "}
//           🐰 , I was deployed from{" "}
//           <a
//             href="https://github.com/tiny-frontend/example-tiny-frontend"
//             target="_blank"
//             rel="noreferrer"
//           >
//             this git repository
//           </a>
//           . I&apos;m just a regular React component, but my implementation was
//           loaded at runtime!
//         </p>
//         <p>
//           You pressed my button <strong>{value} times</strong>!
//         </p>
//       </div>

//       <Button onClick={() => setValue((value) => value + 1)}>Press me!</Button>
//     </div>
//   );
// };

// export default ExampleTinyFrontend;
