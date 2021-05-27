const start = gsap.timeline();

start
	.from("#one", {
		delay: 2,
		duration: 1,
		opacity: 0,
	})
	.from(".header", {
		delay: 1.5,
		duration: 1.5,
		opacity: 0,
		stagger: 1,
	})
	.from("#scroll", {
		duration: 0.8,
		opacity: 0,
		y: 50,
	})
	.from(".fas", {
		duration: 1.25,
		y: 7.5,
		yoyo: true,
		repeat: -1,
		yoyoEase: true,
	});

gsap.from(".text-one", {
	scrollTrigger: {
		trigger: "#one",
		start: "bottom center",
		end: "=+300",
		// markers: true
	},
	duration: 1.2,
	y: 100,
	opacity: 0,
	stagger: 0.5,
});

gsap.from(".text-two", {
	scrollTrigger: {
		trigger: "#three",
		start: "bottom 30%",
		// markers: true
	},
	duration: 1.2,
	y: 100,
	opacity: 0,
	stagger: 0.5,
});

gsap.from(".text-three", {
	scrollTrigger: {
		trigger: "#four",
		start: 1900,
		end: "+=500",
		// markers: true
	},
	// delay: 2,
	duration: 1.2,
	y: 100,
	opacity: 0,
	stagger: 0.5,
});

gsap.from(".text-four", {
	scrollTrigger: {
		trigger: "#five",
		start: 2600,
		end: "=+500",
		// markers: true
	},
	duration: 1.2,
	y: 100,
	opacity: 0,
	stagger: 0.5,
});

gsap.from(".text-five", {
	scrollTrigger: {
		trigger: "#six",
		start: 3400,
		end: "=+500",
		// markers: true
	},
	duration: 1.2,
	y: 100,
	opacity: 0,
	stagger: 0.5,
});

const tl = gsap.timeline();

tl.from("#two", { yPercent: -100 })
	.from("#three", { yPercent: 100 })
	.from("#four", { yPercent: -100 })
	.from("#five", { yPercent: 100 })
	.from("#six", { yPercent: -100 });

ScrollTrigger.create({
	animation: tl,
	trigger: "#container",
	start: "top top",
	end: "+=4000",
	scrub: 0.8,
	pin: true,
	snap: Math.round(0.1 / 0.2) * 0.2,
	anticipatePin: 1,
});

const panel = gsap.timeline();

panel;
