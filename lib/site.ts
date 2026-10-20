// Site-wide flags.
//
// UNDER_CONSTRUCTION: while true, every route shows the holding page
// (components/UnderConstruction.tsx) instead of the real site. The site is
// live by default; set the UNDER_CONSTRUCTION environment variable to "true"
// to bring the holding page back without editing code.

export const UNDER_CONSTRUCTION = process.env.UNDER_CONSTRUCTION === "true";
