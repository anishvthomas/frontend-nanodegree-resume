var bio={
	"name":"Anish Thomas",
	"role":"Front-End Web Developer",
	"contacts":{
		"mobile":"650-888-0987",
		"email":"anishvthomas@gmaildotcom",
		"location":"Chicago,IL",
		"twitter":"@anishvthomas",
		"github":"anishvthomas"
	},
	"pictureURL":"images/biopic.jpg",
	"welcomeMessage":"Welcome to my interactive resume",
	"skills":["JavaScipt","jQuery","CSS","HTML","Knockout.js"]
};
bio.display=function(){
	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedemail=HTMLemail.replace("%data%",bio.contacts.email);
	var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedgithub=HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedlocation);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedgithub);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedemail);
	$("#footerContacts").append(formattedlocation);
	$("#footerContacts").append(formattedtwitter);
	$("#footerContacts").append(formattedgithub);

	var formattedbioPic=HTMLbioPic.replace("%data%",bio.pictureURL);
	$("#header").append(formattedbioPic);

	var formattedwelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);


	if(bio.skills.length> 0)
	{
		var formattedSkill;
		$("#header").append(HTMLskillsStart);
		for (skillCount in bio.skills) {
			formattedSkill=HTMLskills.replace("%data%",bio.skills[skillCount]);
			$("#skills").append(formattedSkill);
		};


	}
}

var work={
	"jobs":[{
		"employer":"Avenir",
		"title":"Sr IT Officer",
		"location":"Cochin,India",
		"dates":"1999 -2003",
		"description":"Startup company focussed on web communication products like VOPI and application sharing"
		},
		{
		"employer":"Infosys",
		"title":"Software Engineer",
		"location":"Bangalore,India",
		"dates":"2003-2004",
		"description":"Offshore consulting giant"
		},
		{
		"employer":"Sapient",
		"title":"Sr. Associate",
		"location":"Bangalore,India",
		"dates":"2004-2008",
		"description":"Energy Consulting in North America and Europe"
		},
		{
		"employer":"Sapient",
		"title":"Manager",
		"location":"Chicago, IL",
		"dates":"2008-2015",
		"description":"Energy Consulting in North America and Europe"
		}]
};
work.display = function()
{
	for(job in work.jobs)
	{
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedworkdate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedworkLocation= HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedworkDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer+" "+formattedTitle);
		$(".work-entry:last").append(formattedworkdate);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDescription);


	}
}

var project={"projects":[
		{
			"title":"aveComm Applicationssharing",
			"dates":"1999-2001",
			"description":"Online aplication sharing application",
			"images":["images/aveComm.png"]

		},
		{
			"title":"Apple Global Service Exchange",
			"dates":"2003-2004",
			"description":"Applecare website",
			"images":["images/gsx.jpg"]

		},
		{
			"title":"Energy Trade Booking",
			"dates":"2005-2008",
			"description":"Online tradebooking application",
			"images":["images/trade.jpg","images/traderows.jpg"]

		}

]};
projects.display = function(){

	for(projectnum in project.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle =HTMLprojectTitle.replace("%data%",project.projects[projectnum].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%",project.projects[projectnum].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%",project.projects[projectnum].description);
		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);
		for(imagenum in project.projects[projectnum].images)
		{
			var formattedprojectImage = HTMLprojectImage.replace("%data%",project.projects[projectnum].images[imagenum]);
			$(".project-entry:last").append(formattedprojectImage);

		}


	}
}
var education={"schools":[
								{"name":"Cochin University of Science and Technology",
								"location":"Chengannur",
								"degree":"B. Tech",
								"majors":["Maths","Computer Science"],
								"dates":"1994-98",
								"url":"www.ceconline.edu"	},

								{"name":"UW",
								"location":"Seattle",
								"degree":"MS",
								"majors":["UI","UX"],
								"dates":"2015-16",
								"url":"www.hcde.edu"}
						],

			"onlineCourses":[	{"title":"Introduction to HCI",
								"school":"Coursera",
								"dates":"2012-12",
								"url":"http://www.coursera.com/HCI"},

								{"title":"Front-End Web Developer Nanodegree",
								"school":"Udacity",
								"dates":"2015-15",
								"url":"http://udacity.com/"}
							]
			}



education.display= function(){
	for(schoolnum in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedschoolName =HTMLschoolName.replace("%data%",education.schools[schoolnum].name);
		var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[schoolnum].dates);
		var formattedschoolDegree= HTMLschoolDegree.replace("%data%",education.schools[schoolnum].degree);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[schoolnum].location);
		var formattedschoolMajor= HTMLschoolMajor.replace("%data%",education.schools[schoolnum].majors);
		$(".education-entry:last").append(formattedschoolName);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolDegree);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);

	}

	$(".education-entry:last").append(HTMLonlineClasses);
	for(coursenum in education.onlineCourses)
	{
		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle =HTMLonlineTitle.replace("%data%",education.onlineCourses[coursenum].title);
		var formattednlineSchool =HTMLonlineSchool.replace("%data%",education.onlineCourses[coursenum].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[coursenum].dates);
		var formattedonlineURL= HTMLonlineURL.replace("%data%",education.onlineCourses[coursenum].url);

		$(".education-entry:last").append(formattedonlineTitle);
		$(".education-entry:last").append(formattednlineSchool);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineURL);


	}

}
$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
})

bio.display();
projects.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);
