import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("about");
  this.route("contact", { path: "/getting-in-touch" });
  this.route("board");
  this.route("skateboard", { path: "/skateboards/:skateboard_id" });
  this.route("404", { path: "/*path" });
});
