//bio object - basic info
var bio = {
    "name": "Martin Schuh",
    "role": "Web Developer",
    "contacts": {
        "email": "fake@email.com",
        "mobile": "123-456-7890",
        "github": "Iforgot",
        "location": "Sacramento, CA",
        "twitter": "@notapplicable"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Welcome to my resume.",
    "skills": ["Coding", "Rat Dota", "Procrastinating", "Starcraft"]
};

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    $("#header").append(HTMLskillsStart);
    for (var i=0; i<bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

    }

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

};

bio.display();



var work = {
  'jobs': [{
    'employer': 'Jack in the Box',
    'title': 'Cashier',
    'location': 'Sacramento, CA',
    'dates': 'January 2016 - now',
    'description': 'I take the money and give the food.'
  }]
};

work.display = function() {
  $('.work-title').append('<hr class="work-hr">'); 

  work.jobs.forEach(function(job) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%',job.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%',job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
    var formattedDates = HTMLworkDates.replace('%data%',job.dates);  
    var formattedDescription = HTMLworkDescription.replace('%data%',job.description);      
    $('.work-entry:last').append(formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription);
  });
};

work.display();

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
    for (var i=0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        // $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "American River College",
        "location": "Sacramento, CA, US",
        "degree": "In Progress",
        "majors": "Marketing",
        "dates": "2012-2016",
        "url": "http://www.arc.losrios.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};

education.display = function() {
    for (var i=0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
    }

    $("#education").append(HTMLonlineClasses);
    for (var i=0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
};

education.display();

//FUNCTION to Internationalize Names:
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

//you want to see a map?
$("#mapDiv").append(googleMap); 
