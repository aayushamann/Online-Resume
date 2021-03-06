var work = {
	jobs: [
		// {
		// 	employer: "",
		// 	title: "",
		// 	location: "",
		// 	dates: "",
		// 	description: ""
		// }
	]
};

var projects = {
	projects: [
		{
			title: "Anubhuti",
			dates: "Dec 2016 - Feb 2017",
			description: "Developer of the official Android App for the cultural fest 'Anubhuti' of Kamla " +
			"<br>- The app targetted Phone devices with Android Kitkat 4.4 and above." +
			"<br>- The app was linked to the website of Anubhuti where a centralized database was maintained." +
			"<br>- Facebook API used for the login feature." +
			"<br>- Google Firebase API used for the real-time notification feature." +
			"<br>- Google Map API used for the Map." +
			"<br>- Call, messaging, and e-mail feature for easy communication.",
			images: ["images/Anbti1.png", "images/Anbti2.png", "images/Anbti3.png", "images/Anbti4.png"]
		},
		{
			title: "TPO Automation Project - Python based Desktop Application",
			dates: "Jan 2016 – Feb 2016",
			description: "Developed GUI for the desktop App using wxPython." +
			"Nehru Institute of Technology, Sultanpur, UP, India. Objective was to automate tasks related " +
			"to Training and Placement Cell i.e. Database Management and Message Broadcasting through SMS and mails." + 
			"<br>- Used Python for the overall development of the application." +
			"<br>- Used wxPython for the development of Graphical User Interface (GUI)." + 
			"<br>- The application interface is Dynamic and Multi-panel for easy operation.",
			images: ["images/TPC1.jpg", "images/TPC2.jpg", "images/TPC4.jpg"],
			url: "https://github.com/aayushamann/Anubhuti"
		}
	]
};

var bio = {
	name: "Ayush Aman",
	role: "Undergraduate",
	contacts: {
		mobile: "+91 7052469479",
	 	email: "aayushamann@gmail.com",
	 	github: "aayushamann",
	 	location: "Lucknow, Uttar Pradesh, India"
	},
	biopic: "images/Ayush.jpg",
	welcomeMessage: "Welcome",
	skills: ["Android", "Python", "Java", "HTML", "CSS", "JavaScript", "PHP", "wxPython"]
};

var education = {
	schools: [
		{
			name: "St. John's School",
			location: "DLW, Varanasi, UP, India",
			degree: "High School",
			dates: "2010 - 2011",
			url: "", 
			majors: ["Computer Science", "Science", "Maths"]
		},
		{
			name: "Modern Academy",
			location: "Lucknow, UP, India",
			degree: "Intermediate",
			dates: "2012 - 2013",
			url: "", 
			majors: ["Physics", "Chemistry", "Maths"]
		},
		{
			name: "Kamla Nehru Institute Technology",
			location: "Sultanpur, UP, India",
			degree: "Bachelor of Technology",
			dates: "2014 - 2018",
			url: "",
			majors: ["Computer Science and Engineering"]
		}
	],
	onlineCourses: [
		{
			title: "JavaScript",
			school: "Udacity",
			dates: "Aug 2017",
			url: ""
		}
	]
};

$('#mapDiv').append(googleMap);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

if(bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	// for(var i = 0; i < bioSkillLength; i++) {
	// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	// 	$('#skills').append(formattedSkill);
	// }
	for(key in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[key]);
		$('#skills').append(formattedSkill);
	}
}

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);


function displayWork() {
	for(var i = 0; i < work.jobs.length; i++) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTile = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTile);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$('.work-entry:last').append(formattedDescription);
	}
}
if(work.jobs.length > 0) {
	$('#workExperience').append(HTMLworkStart);
	displayWork();
}

// $('#main').append(internationalizeButton);

// function inName(name) {
// 	name = name.trim().split(" ");
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	name[1] = name[1].toUpperCase();
// 	return name[0] + " " + name[1];
// }

projects.display = function() {
	for(project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.projects[project].images.length>0) {
			for(image in projects.projects[project].images) {
				formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		};
	}
}

education.display = function() {
	for(school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$('.education-entry:last').append(formattedName);
		$('.education-entry:last').append(formattedDegree);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedLocation);
		$('.education-entry:last').append(formattedMajor);
	}
}

projects.display();
education.display();

