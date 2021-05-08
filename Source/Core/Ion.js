import Credit from "./Credit.js";
import defined from "./defined.js";
import Resource from "./Resource.js";

var defaultTokenCredit;
var defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0Yjk4NzIzOS02M2U2LTRjNjgtOTNlMC1hYmUyMGViYjM5MzMiLCJpZCI6MjU5LCJpYXQiOjE2MTIyMDExMzR9.NBGvD2I8hg3CE4o7SZmd_UXyVpthuq19XQoc76VUrZ4";

defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo";
defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2N2NjZjU1MS02ZDE5LTRjYzAtYjg0Zi0wODc2YjMxNGE1ZWEiLCJpZCI6MjU5LCJpYXQiOjE2MjAwNDczMDl9.159vCWIGDh0dexF393wvC4zUCbq4oZg6VkPAB5U6tg0";
/**
 * Default settings for accessing the Cesium ion API.
 *
 * An ion access token is only required if you are using any ion related APIs.
 * A default access token is provided for evaluation purposes only.
 * Sign up for a free ion account and get your own access token at {@link https://cesium.com}
 *
 * @see IonResource
 * @see IonImageryProvider
 * @see IonGeocoderService
 * @see createWorldImagery
 * @see createWorldTerrain
 * @namespace Ion
 */
var Ion = {};

/**
 * Gets or sets the default Cesium ion access token.
 *
 * @type {String}
 */
Ion.defaultAccessToken = defaultAccessToken;

/**
 * Gets or sets the default Cesium ion server.
 *
 * @type {String|Resource}
 * @default https://api.cesium.com
 */
Ion.defaultServer = new Resource({ url: "https://api.cesium.com/" });

Ion.getDefaultTokenCredit = function (providedKey) {
  if (providedKey !== defaultAccessToken) {
    return undefined;
  }

  if (!defined(defaultTokenCredit)) {
    var defaultTokenMessage =
      '<b> \
            This application is using Cesium\'s default ion access token. Please assign <i>Cesium.Ion.defaultAccessToken</i> \
            with an access token from your ion account before making any Cesium API calls. \
            You can sign up for a free ion account at <a href="https://cesium.com">https://cesium.com</a>.</b>';

    defaultTokenCredit = new Credit(defaultTokenMessage, true);
  }

  return defaultTokenCredit;
};
export default Ion;
