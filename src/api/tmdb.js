import Api from "../utils/api";

const API_BASE = "https://api.themoviedb.org/3";
// Create React App replaces process.env.REACT_APP_* at build time with actual values
// Fallback to direct API key if env var is not set (for development/local builds)
const API_KEY =
  process.env.REACT_APP_TMDB_API_KEY || "039bfd3babb13485045791cbbd18c638";

const tmdb = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

export default tmdb;
