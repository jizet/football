import ApiService from "../../common/api.service";
import { stateManager } from "../../common/store.service";

export default {
  name: "AppHeader",
  data: function() {
    return {
      matches: [],
      shareData: stateManager.state
    };
  },
  methods: {
    changeFilter() {},
    handleClose(){
      stateManager.clearFilter();
    }
  },
  watch: {
    "shareData.filter": {
      handler(newValue) {
        if (newValue.value){
          // let today = new Date();
          // today = today.toLocaleDateString("esp-ARG",{year:'numeric', month: '2-digit', day: '2-digit'})
          ApiService.get(`${newValue.type}/${newValue.value.id}/matches`).then(
            response => (this.matches = response.data.matches),
            error => (this.info = error)
          );
        }else{
          this.matches = [];
        }
      }
    }
  }
};
