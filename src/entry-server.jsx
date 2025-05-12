import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./App";

/**
 * @param {string} _url
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(_url, options) {
  return renderToPipeableStream(
    <StaticRouter location={_url}>
      <App />
    </StaticRouter>,
    options,
  );
}
