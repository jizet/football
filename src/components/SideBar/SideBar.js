import { stateManager } from "../../common/store.service";

const clubsList = [
  { id: 73, name: "Tottenham" },
  { id: 678, name: "Ajax" },
  { id: 65, name: "Manchester City" },
  { id: 78, name: "Atletico de Madrid" },
  { id: 109, name: "Juventus" },
  { id: 81, name: "Barcelona" }
];

const competitionList = [
  { id: 2001, name: "UEFA Champions League" }
];

export default {
  name: "SideBar",
  data: function() {
    return {
      clubs: clubsList,
      competitions: competitionList
    };
  },
  methods: {
    clubSelected(club) {
      stateManager.setFilter('teams', club);
    },
    competitionSelected(competition) {
      stateManager.setFilter('competitions', competition);
    }
  }
};
