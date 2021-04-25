let current_book_name = "창세기";
let current_chapter = 1;

let systemDrawer = false;
let functionDrawer = false;

function clone(obj){
    return JSON.parse(JSON.stringify(obj))
}

function showSystemNaviDrawer(){
    systemDrawer = systemDrawer;
    eventBus.$emit("updateSystemDrawer", systemDrawer);
}


function showChartList (){
    eventBus.$emit("updateChartList", );
}



/*

  created () {
    eventBus.$on('change_toolbar_title', (book_name, chapter_number) => {        
      this.current_book_name = book_name;
      this.current_chapter = chapter_number;
    })
  },
*/