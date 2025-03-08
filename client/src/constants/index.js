import {
	appstore,
	googleplay,
	main4,
	main5,
	person1,
	person2,
	person3,
	person4,
	person5,
	person6,
	person7,
	product1,
	product2,
	product3,
	product4,
	product5,
	uni1,
	uni2,
	uni3,
	uni4,
	uni5,
	uni6,
} from "../assets/Images";

const navLinks = [
	{ name: "Signup", href: "/signup" },
	{ name: "About", href: "/about" },
	{ name: "Products", href: "/products" },
	{ name: "Pricing", href: "/pricing" },
	{ name: "Support", href: "/support" },
];

const appInfo = [
	{
		title: "Customer-first always",
		content:
			"That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
	},
	{
		title: "No spam or gimmicks",
		content:
			'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
	},
	{
		title: "The zerodha universe",
		content:
			"Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
	},
	{
		title: "Do better with money",
		content:
			"With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
	},
];

const benefits = [
	{ img: main4, content: "Free account opening" },
	{ img: main4, content: "Free equity delivery and direct mutual funds" },
	{ img: main5, content: "Intraday and F&O" },
];

const footerLinks = [
	{
		title: "Company",
		links: [
			{ link: "About", href: "/" },
			{ link: "Products", href: "/" },
			{ link: "Pricing", href: "/" },
			{ link: "Referral programme", href: "/" },
			{ link: "Careers", href: "/" },
			{ link: "Zerodha.tech", href: "/" },
			{ link: "Press & media", href: "/" },
			{ link: "Zerodha Cares (CSR)", href: "/" },
		],
	},
	{
		title: "Support",
		links: [
			{ link: "Contact us", href: "/" },
			{ link: "Support portal", href: "/" },
			{ link: "Z-Connect blog", href: "/" },
			{ link: "List of charges", href: "/" },
			{ link: "Downloads & resources", href: "/" },
			{ link: "Videos", href: "/" },
			{ link: "Market overview", href: "/" },
			{ link: "How to file a complaint?", href: "/" },
			{ link: "Status of your complaints", href: "/" },
		],
	},

	{
		title: "Account",
		links: [
			{ link: "Open an account", href: "/" },
			{ link: "Fund transfer", href: "/" },
		],
	},
];

const footerDesc = [
	"Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF",
	"Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances",
	"Investments in securities market are subject to market risks; read all the related documents carefully before investing.",
	"Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.",
	`"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.`,
];

const aboutLeft = [
	'We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.',

	"Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.",

	"Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.",
];

const aboutRight = [
	"In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.",

	"Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.",

	"And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.",
];

const footerPolicies = [
	"NSE",
	"BSE",
	"MCX",
	"Terms & conditions",
	"Policies & procedures",
	"Privacy policy",
	"Disclosure",
	"For investor's attention",
	"Investor charter",
];

const employees = [
	{
		img: person1,
		name: "Nikhil Kamath",
		post: "Co-founder & CFO",
	},
	{
		img: person2,
		name: "Dr. Kailash Nadh",
		post: "CTO",
	},
	{
		img: person3,
		name: "Venu Madhav",
		post: "COO",
	},
	{
		img: person4,
		name: "Hanan Delvi",
		post: "CCO",
	},
	{
		img: person5,
		name: "Seema Patil",
		post: "Director",
	},
	{
		img: person6,
		name: "Karthik Rangappa",
		post: "Chief of Education",
	},
	{
		img: person7,
		name: "Austin Prakesh",
		post: "Director Strategy",
	},
];

const products = [
	{
		title: "Kite",
		text: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
		img: product1,
		links: [
			{ name: "Try demo", href: "/" },
			{ name: "Learn more", href: "/" },
		],
		icons: [
			{
				text: "Google Play",
				img: googleplay,
			},
			{
				text: "App Store",
				img: appstore,
			},
		],
	},
	{
		title: "Console",
		text: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
		img: product2,
		links: [{ name: "Learn more", href: "/" }],
	},
	{
		title: "Coin",
		text: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
		links: [{ name: "Coin", href: "/" }],
		icons: [
			{
				text: "Google Play",
				img: googleplay,
			},
			{
				text: "App Store",
				img: appstore,
			},
		],
		img: product3,
	},
	{
		title: "Kite Connect API",
		text: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
		links: [{ name: "Kite connect", href: "/" }],
		img: product4,
	},
	{
		title: "Varsity mobile",
		text: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
		icons: [
			{
				text: "Google Play",
				img: googleplay,
			},
			{
				text: "App Store",
				img: appstore,
			},
		],
		img: product5,
	},
];

const zerodhaUniverse = [
	{
		img: uni1,
		text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
	},
	{
		img: uni2,
		text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
	},
	{
		img: uni3,
		text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
	},
	{
		img: uni4,
		text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
	},
	{
		img: uni5,
		text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
	},
	{
		img: uni6,
		text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
	},
];

const support = [
	{
		name: "Account Opening",
		links: [
			"Getting started",
			"Online",
			"Offline",
			"Charges",
			"Company, Partnership and HUF",
			"Non Resident Indian (NRI)",
		],
		icon: "fa-plus",
	},
	{
		name: "Your Zerodha Account",
		links: [
			"Login credentials",
			"Your Profile",
			"Account modification and segment addition",
			"CMR & DP ID",
			"Nomination",
			"Transfer and conversion of shares",
		],
		icon: "fa-user"
	},
	{
		name: "Trading and Markets",
		links: [
			"Trading FAQs",
			"Kite",
			"Margins",
			"Product and order types",
			"Corporate actions",
			"Kite features",
		],
		icon: "fa-chart-simple"
	},
	{
		name: "Funds",
		links: ["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"],
		icon: "fa-credit-card"
	},
	{
		name: "Console",
		links: ["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"],
		icon: "fa-shop"
	},
	{
		name: "Coin",
		links: [
			"Understanding mutual funds and Coin",
			"Coin app",
			"Coin web",
			"Transactions and reports",
			"National Pension Scheme (NPS)",
		],
		icon: "fa-money-check-dollar"
	},
];

const signupTerms = [
	"I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.",

	"By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.",

	"If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.",
];

export {
	aboutLeft,
	aboutRight,
	appInfo,
	benefits,
	employees,
	footerDesc,
	footerLinks,
	footerPolicies,
	navLinks,
	products,
	signupTerms,
	support,
	zerodhaUniverse,
};
