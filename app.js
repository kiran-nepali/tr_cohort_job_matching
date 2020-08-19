var jobCharacter = [];
var indivSkill = [];
var matchScore = 0;

function SkillMatch(jobCharacter =[],indivSkill=[]){
    for(var i = 0;i<jobCharacter.length;i++){
        for(var j = 0;j<indivSkill.length;j++){
            if (jobCharacter[i]===indivSkill[j]){
                matchScore++;
                // console.log("The skillset matches with the person")
            }
        }
    }
    avgMatchScore = (matchScore/jobCharacter.length) * 100;
    if (avgMatchScore === 0){
        console.log("The person doesn't match our skill");
    }
    else if(avgMatchScore === 100){
        console.log("The person matches our skill set");
    }
    else{
        console.log("The Skillset match score for this person is "+avgMatchScore);
    }
}

SkillMatch(["remote","parttime","flexible"],["flexible","remote"]);