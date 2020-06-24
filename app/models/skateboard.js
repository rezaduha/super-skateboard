import Model, { attr } from "@ember-data/model";

export default class SkateboardModel extends Model {
  @attr title;
  @attr construction;
  @attr profile;
  @attr trucks;
  @attr wheels;
  @attr bearings;
  @attr hardware;
  @attr image;
  @attr description;
}
