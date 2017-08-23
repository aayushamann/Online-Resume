var work = {
	jobs: [
		{
			employer: "Facebook",
			title: "Software Developer",
			location: "Paulo Alto, CA",
			dates: "2017 - Present",
			description: ""
		}
	]
};

var projects = {
	projects: [
		{
			title: "Anubhuti",
			dates: "Dec 2016 - Feb 2017",
			description: "Developer of the official Android App for the cultural fest 'Anubhuti' of Kamla Nehru Institute of Technology, Sultanpur, UP, India.",
			images: ["URL"]
		},
		{
			title: "TPO Automation Project - Python based Desktop Application",
			date: "Jan 2016 – Feb 2016",
			description: "Developed GUI for the desktop App using wxPython",
			images: [""]
		}
	]
};

var bio = {
	name: "Ayush Aman",
	role: "App and Web developer",
	contact: {
		phone: "+91 7052469479",
	 	email: "aayushamann@gmail.com",
	 	github: "aayushamann",
	 	location: "Lucnow, UP, India"
	},
	biopic: "images/fry.jpg",
	welcomeMessage: "Welcome",
	skills: ["HTML", "CSS", "JavaScript", "PHP", "Android", "Python"]
};

var education = {
	schools: [
		{
			name: "St. John's School",
			location: "DLW, Varanasi, UP, India",
			degree: "High School",
			dates: "2010 - 2011",
			urlStrings: "", 
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

if(work.jobs.length > 0) {
	$('#workExperience').append(HTMLworkStart);
	for(job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTile = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTile);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
	}
}
