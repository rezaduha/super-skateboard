import Component from "@glimmer/component";

export default class SkateboardsFilterComponent extends Component {
  get results() {
    let { skateboards, query } = this.args;

    if (query) {
      skateboards = skateboards.filter((skateboard) =>
        skateboard.title.includes(query)
      );
    }

    return skateboards;
  }
}
