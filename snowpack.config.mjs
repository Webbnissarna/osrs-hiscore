/** @type {import("snowpack").SnowpackUserConfig } */

import proxy from "http2-proxy";

export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    ["@snowpack/plugin-typescript", { tsc: "tsc" }],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
    {
      src: "/api/*",
      dest: (req, res) => {
        return proxy.web(req, res, {
          hostname: "localhost",
          port: 3000,
        });
      },
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
