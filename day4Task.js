let resume = {
    "name": {
        "first": "Arjun",
        "last": "Chandran"
    },
    "contact": {
        "email": "arjunvimala.c@gmail.com",
        "phone": "96787764747",
        "location": "Chennai"
    },
    "experience": [
        {
            "title": "Associate Software Developer",
            "company": "Wolterskluwer ELM Solution",
            "location": "Chennai",
            "dates": "2022 - Present"
        }
    ],
    "education": [
        {
            "degree": "B.Tech",
            "institution": "Velammal Engineering College",
            "location": "Chennai",
            "graduation_year": "2018-2022"
        }
    ],
    "skills": [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "languages": [
        {
            "language": "Tamil"
        }
    ]
};

// For Loop
console.log(" Using for loop:");
for (let i = 0; i < resume.experience.length; i++) {
    console.log(resume.experience[i]);
}

// For...In Loop
console.log("\n Using for...in loop:");
for (let key in resume.contact) {
    console.log(`${key}: ${resume.contact[key]}`);
}

// For...Of Loop
console.log("\n Using for...of loop:");
for (let skill of resume.skills) {
    console.log(skill);
}

// ForEach Loop
console.log("\n Using forEach loop:");
resume.education.forEach(edu => {
    console.log(edu);
});

// While Loop
console.log("\n Using while loop:");
let i = 0;
while (i < resume.languages.length) {
    console.log(resume.languages[i]);
    i++;
};