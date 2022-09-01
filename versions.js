const  Version  = [{
    versionName: "7.0. 01",
    releaseDate: "23-03-2021",
    bugId: ["b1E35P"],
    features: ["1st update"],
    author: ["RAMAKRISHNAN"],
    type:"PATCH"
},{
    versionName: "7.0. 03",
    releaseDate: "21-09-2021",
    bugId: ["b1E3T6"],
    features: ["2 nd update"],
    author: ["MANIKANNU"],
    type:"ENHANCEMENT"
},{
    versionName: "7.0. 04",
    releaseDate: "10-10-2022",
    bugId: ["b1E357P"],
    features: ["3 rd update"],
    author: ["RAMAKRISHNAN"],
    type:"PATCH"
},{
    versionName: "7.0. 055",
    releaseDate: "6-11-2022",
    bugId: ["b5E357P"],
    features: ["4 th update"],
    author: ["VADIVELU"],
    type:"MAJOR"
},{
    versionName: "7.0. 099",
    releaseDate: "18-12-2021",
    bugId: ["b1E857P"],
    features: ["5 th update"],
    author: ["KALLAN"],
    type: "ENHANCEMENT"}];

const bugIdList= [{
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
console.table( Version);
//--------------------------------findbugs------------------------------------------------------------------------
function findBugs(bugid) {
    let enterId = "b1E35P";
    console.log("bugId:",enterId);
    for (let i = 0; i < bugid.length; i++) {
        if (bugid[i].id == enterId) {
            console.log("details:-", bugIdList[i].details);
        }
    }
}findBugs(bugIdList)
console.log("--------------------------------------------------------------------------------------------------------------")
//--------------------------------------findYearReleaseVersion-----------------------------------------------------
function findYearReleaseVersion(years) {
    let findYearVersion = "2021";
    console.log("YEAR-:",findYearVersion,"ReleaseVersion");
    for ( let i = 0; i < years.length; i++) {
        if (findYearVersion == (years[i].releaseDate).slice(-4)) {
            console.log("version:-",years[i].versionName);
        }
    }
}findYearReleaseVersion( Version)
console.log("----------------------------------------------------------------------------------------------------------------")
//------------------------------------------------findFeatures---------------------------------------------------------
function findFeatures(Features) {
    let findVersion = "7.0. 01";
    console.log("VERSION-NAME :",findVersion);
    for (let i = 0; i < Features.length; i++) {
        if (Features[i].versionName ==findVersion) {
            console.log("FEATURES:-",Features[i].features)
        }
    }
}findFeatures( Version)
console.log("------------------------------------------------------------------------------------------------------------------")
// -----------------------------------------findAutherBasedOnTheWork---------------------------------------------------
function findAutherBasedOnTheWork(){
 const authorNames= []
 Version.forEach((element) => {
    for (let i of element.author)
        authorNames.push(i)
    });
    let mostFrequent = 1;
    let findAuther = "";
    let m = 1;
    for (let i = 0; i < authorNames.length; i++) {
        for (let j = 1; j < authorNames.length; j++) {
            if (authorNames[i] == authorNames[j]){
                m++;
                if (mostFrequent < m) {
                    mostFrequent = m;
                    findAuther = authorNames[i]; 
                }
            }  
        }
        m = 0;
    }
 console.log(`\nThe author'${findAuther}'has worked on more nnumber  of findYearReleaseVersions, the count is "${mostFrequent}"`);
}findAutherBasedOnTheWork(Version)
console.log("-----------------------------------------------------------------------------------------------------------------------")
// ------------------------------------------versionRealeseBasedOnTypes---------------------------------------------------
function versionRealeseBasedOnTypes(typeOfVersion) {
    var checkType="PATCH";
    console.log ("TYPE :", checkType)
    for (let i = 0; i < typeOfVersion.length; i++) {
        if (typeOfVersion[i].type == checkType) {
            console.log(checkType,"-version:-",typeOfVersion[i].versionName);
        }
    }
}
versionRealeseBasedOnTypes( Version)
