var sessions = [
    {id:0 , title:"Corporate Citizenship Committee", chair:"David Gooch", purpose:"Utilize Daugherty's resources to make a direct, targeted and positive impact in the local Atlanta Community.", room:"Ballroom A", members: "Tarun Sethi, KJ Kandell, Jake Lovejoy, Rasha Jones"},
    {id:1 , title:"Health & Wellness", chair:"Brooke Holt, Abishua Prashanth, Numan Hasan", purpose:"Our mission is to promote an active lifestyle and encourage engagement in healthful activities, while providing opportunities to connect and build deeper relationships with our Daugherty colleagues.", room:"Ballroom B", members: "Andre Williams, Cassandra Williams, Chris Woods, Danielle Amdur, Jim Piscano, Kamlesh Gokal, Ning Peng, Pam Hibbard, Tharshini Ganeshan, William Santasiero"},
    {id:2 , title:"Social Committee", chair:"Cheryl Bassa", purpose:"Our mission is to create fun and engaging opportunities for Daugherty employees to network and socialize across the Atlanta practice.", room:"Ballroom A", members: "Ben Cho, Gavin Choice, Juhun Chung, Dhaval Dani, Eric Deahl, Lauren Dreyfuss, BJ Hall, Romy Heylen, Thomas Jonas, Grant Knox, Robert Masino, Douglas Miller, Chris Staufer, Aaron Szerlip"},
    //{id:3 , title:"Knowledge Management", chair:"JESSICA WONG", purpose:"3:10Pm", room:"Ballroom B", members: "In this session, you will learn performance techniques to speed up your mobile application."},
    //{id:4 , title:"Corporate Awards", chair:"LAURA TAYLOR", purpose:"2:00pm", room:"Ballroom A", members: "Join Laura to learn different approaches to build modular JavaScript applications."},
	//{id:5 , title:"Employee Engagement", chair:"LAURA TAYLOR", purpose:"2:00pm", room:"Ballroom A", members: "Join Laura to learn different approaches to build modular JavaScript applications."},
	//{id:6 , title:"Recruiting", chair:"LAURA TAYLOR", purpose:"2:00pm", room:"Ballroom A", members: "Join Laura to learn different approaches to build modular JavaScript applications."},
	{id:3 , title:"Performance Management", chair:"Gavin Maguire", purpose:"To facilitate career development and growth through the alignment of performance and promotion standards and guidelines while fostering an environment that allows consultants to grow professionally, provide input to the process and partake in a career path that benefits both Consultant and Daugherty. ", room:"Ballroom A", members: "David Gooch, Malini Pandya, Kailash Lala, Tracy Pace, Michelle Sorensen, Terry Clark, Edward Kenney"}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};

