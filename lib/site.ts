// Site-wide flags.
//
// UNDER_CONSTRUCTION: while true, every route shows the holding page
// (components/UnderConstruction.tsx) instead of the real site. Flip to false
// to launch the full website. You can also override it without editing code by
// setting the UNDER_CONSTRUCTION environment variable to "true" or "false".

export const UNDER_CONSTRUCTION =
  process.env.UNDER_CONSTRUCTION === "false"
    ? false
    : process.env.UNDER_CONSTRUCTION === "true"
      ? true
      : true; // default: under construction
