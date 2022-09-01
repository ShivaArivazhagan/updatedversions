interface objectinterface{
    versionName:string,
    releaseDate:string,
    bugId:any[],
    features:any[],
    author: any[],
    typeOf:string
  }
  
  interface bugs{
      id: string,
      details:string  
  }
  
  const version:objectinterface[]=[{
      versionName: "7.0. 01",
      releaseDate: "23-03-2021",
      bugId: ["b1E35P"],
      features: ["1st update"],
      author: ["RAMAKRISHNAN"],
      typeOf:"PATCH"
  },{
      versionName: "7.0. 03",
      releaseDate: "21-09-2021",
      bugId: ["b1E3T6"],
      features: ["2 nd update"],
      author: ["MANIKANNU"],
      typeOf:"ENHANCEMENT"
  },{
      versionName: "7.0. 04",
      releaseDate: "10-10-2022",
      bugId: ["b1E357P"],
      features: ["3 rd update"],
      author: ["RAMAKRISHNAN"],
      typeOf:"PATCH"
  },{
      versionName: "7.0. 055",
      releaseDate: "6-11-2022",
      bugId: ["b5E357P"],
      features: ["4 th update"],
      author: ["VADIVELU"],
      typeOf:"MAJOR"
  },{
      versionName: "7.0. 099",
      releaseDate: "18-12-2021",
      bugId: ["b1E857P"],
      features: ["5 th update"],
      author: ["KALLAN"],
      typeOf: "ENHANCEMENT"}];
  
  const bugIdLists:bugs[]= [{
      id: "b1E35P",
      details: "fixed the animation"
  },{
      id: "b1E3T6",
      details: "fixed the bugs for android"
  },{
      id: "b1E357P",
      details: "fixed the bugs for sound"
  },{
      id: "b5E357P",
      details: "fixed the bugs for screen"
  },{
      id: "b1E857P",
      details: "fixed the bugs for update theme"}];
  //--------------------------------findbugs------------------------------------------------------------------------
  function findBugs() {
      let enterId = "b1E35P";
      console.log("bugId:",enterId);
      for (let i = 0; i < bugIdLists.length; i++) {
          if (bugIdLists[i].id == enterId) {
              console.log("details:-", bugIdLists[i].details);
          }
      }
  }findBugs()
  //--------------------------------------findYearReleaseVersion-----------------------------------------------------
  function findYearReleaseVersion() {
      let findYearVersion = "2021";
      console.log("YEAR-:",findYearVersion,"ReleaseVersion");
      for ( let i = 0; i < version.length; i++) {
          if (findYearVersion == (version[i].releaseDate).slice(-4)) {
              console.log("version:-",version[i].versionName);
          }
      }
  }findYearReleaseVersion()
  //------------------------------------------------findFeatures---------------------------------------------------------
  function findFeatures() {
      let findVersion = "7.0. 01";
      console.log("VERSION-NAME :",findVersion);
      for (let i = 0; i < version.length; i++) {
          if (version[i].versionName ==findVersion) {
              console.log("FEATURES:-",version[i].features)
          }
      }
  }findFeatures()
  // -----------------------------------------findAuthorBasedOnTheWork---------------------------------------------------
  function findAuthorBasedOnTheWork(){
    const authorNames:any= []
    let findAuther="";
    version.forEach((element) => {
       for (let i of element.author)
           authorNames.push(i)
       });
       let Count=1;
       let empty:any=[];
       for(let i=0;i<authorNames.length;i++){
           if(!empty.includes(authorNames[i])){
               empty.push(authorNames[i])
           }else{
               Count++;
               findAuther=authorNames[i];
           }
       }
    console.log(`\nThe author'${findAuther}'has worked on more nnumber  of findYearReleaseVersions, the count is "${Count}"`);
  }findAuthorBasedOnTheWork()
  
  // ------------------------------------------versionRealeseBasedOnTypes---------------------------------------------------
  function versionRealeseBasedOnTypes() {
      var checkType="PATCH";
      console.log ("TYPE :", checkType)
      for (let i = 0; i < version.length; i++) {
          if (version[i].typeOf == checkType) {
              console.log(checkType,"-version:-",version[i].versionName);
          }
      }
  }versionRealeseBasedOnTypes()
  
  
  
  
  