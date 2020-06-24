import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class SkateboardRoute extends Route {
  @service store;

  async model(params) {
    return this.store.find("skateboard", params.skateboard_id);
  }
}
