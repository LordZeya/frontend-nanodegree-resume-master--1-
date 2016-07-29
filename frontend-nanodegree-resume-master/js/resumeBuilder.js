var bio = {
    "name": "Martin",
    "age": 21,
    "role": "Web Developer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "testpost@pleaseignore.com",
        "github": "Iforgot",
        "twitter": "@Martin",
        "location": "Sacramento"
    },
    "welcomeMessage": "Welcome!",
    "skills": ["Writing", "Starcraft 2", "Dota 2", "Reading"],
    "bioPic": "images/fry.jpg"
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#topContacts").append(formattedWelcomeMessage);

bio.display = function() {
    for (bio in bio.bio) {

    }
};

var work = {
    "jobs": [{
        "employer": "Jack in the Box",
        "title": "Cashier",
        "dates": "February 2016-now",
        "location": "Sacramento, CA",
        "description": "I take money and give food."
    }]
};

function displayWork() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}

displayWork();


var education = {
    "schools": [{
        "name": "American River College",
        "location": "Sacramento, CA, US",
        "degree": "In Progress",
        "major": "Marketing",
        "dates": "2012-2016",
    }],
    "onlineCourses": [{
        "title": "intro to programming",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};


education.display = function() {
    for (var schools in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].school);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
        $(".education-entry:last").append(formattedSchoolMajor);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
        $(".education-entry:last").append(formattedSchoolDates);
    }


    for (var onlineCourses in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }

};

education.display();

var projects = {
    "projects": [{
        "title": "What kind of project",
        "dates": "are we expected to put here?",
        "description": "Lesson doesn't mention it until end.",
        "images": [
            "http://vignette2.wikia.nocookie.net/aliens/images/a/a5/Ultralisk.jpg/revision/latest?cb=20111007032659"
        ]
    }]
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();




$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);

$('#main').append(internationalizeButton);
