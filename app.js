
var matchScore = 0;

function SkillMatch(){
    var jobChar = document.getElementsByName('jobChar[]');
    var indivSkill = document.getElementsByName('indivSkill[]'); 
    for(var i = 0;i<jobChar.length;i++){
        for(var j = 0;j<indivSkill.length;j++){
            if (jobChar[i].value===indivSkill[j].value){
                matchScore++;
                // console.log("The skillset matches with the person")
            }
        }
    }
    avgMatchScore = (matchScore/jobChar.length) * 100;
    if (avgMatchScore === 0){
        document.getElementById("result").innerHTML = "The person doesn't match our skill";
        console.log("The person doesn't match our skill");
    }
    else if(avgMatchScore === 100){
        document.getElementById("result").innerHTML = "The person matches our skill set";
        console.log("The person matches our skill set");
    }
    else{
        document.getElementById("result").innerHTML = "The Skillset match score for this person is "+avgMatchScore;
        console.log("The Skillset match score for this person is "+avgMatchScore);
    }
}

// SkillMatch(["remote","parttime","flexible"],["flexible","remote"]);