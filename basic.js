

// ------------PROBLEM-01: TAX CALCULATION-----------------------------------
function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0 || expenses >= income) {
        return "Invalid Input";
    }
    
    const difference = income - expenses;
    const tax = difference * 0.20;
    return tax;
}


// -------------PROBLEM-02: NOTIFICATION GENERATOR------------------------------
function sendNotification(email) {
    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];
    
    if (!username || !domain) {
        return "Invalid Email";
     }

    const message = username + " sent you an email from " + domain;
    return message; 
}


// -------------PROBLEM-03: CHECKING DIGITS INSIDE A NAME--------------------------
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {
        const num = name[i];
    
        if (num >= '0' && num <= '9') {
            return true;
        }
    }
    return false;
}


// -------------PROBLEM-04: CALCULATE ADMISSION FINAL SCORE-------------------------
function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    const name = obj.name;
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFamily = obj.isFFamily;

    if (
        typeof name !== 'string' || 
        typeof testScore !== 'number' || testScore > 50 || 
        typeof schoolGrade !== 'number' || schoolGrade > 30 || 
        typeof isFFamily !== 'boolean'
    ) 
    {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    }
    else {
        return false;
    }
}


// -------------PROBLEM-05: PREDICT AVERAGE WAITING TIME-------------------------
function waitingTime(serialNumber, interviewTimes) {

    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let totalTime = 0;
    for (let i = 0; i < interviewTimes.length; i++) {
        totalTime += interviewTimes[i];
    }

    let averageTime = Math.round(totalTime / interviewTimes.length);

    let remainingPeople = serialNumber - 1 - interviewTimes.length;

    let waitingTime = remainingPeople * averageTime;

    return waitingTime;
}