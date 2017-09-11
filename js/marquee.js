$(document).ready(function() {
	$("marquee").append(getQuote());
	scroll();
});

function scroll() 
{
	var marquee = $('div.marquee');
	marquee.each(function() {
	    var mar = $(this),indent = mar.width();
	    mar.marquee = function() {
	        indent--;
	        mar.css('text-indent',indent);
	        if (indent < -1 * mar.children('div.marquee-text').width()) {
	            indent = mar.width();
	        }
	    };
	    mar.data('interval',setInterval(mar.marquee,1000/60));
	})
};

function getQuote()
{
	var quotes = 
	[
		"Life is wonderful. Without it we'd all be dead.",
		"My attitude isn’t bad. It’s in beta.",
		"If at first you don’t succeed; call it version 1.0.",
		"Daddy, why doesn't this magnet pick up this floppy disk?",
		"Give me ambiguity or give me something else.",
		"I.R.S.: We've got what it takes to take what you've got!",
		"We are born naked, wet and hungry. Then things get worse.",
		"Make it idiot proof and someone will make a better idiot.",
		"He who laughs last thinks slowest!",
		"Always remember you're unique, just like everyone else.",
		"More hay, Trigger?\" \"No thanks, Roy, I'm stuffed!",
		"A flashlight is a case for holding dead batteries.",
		"Lottery: A tax on people who are bad at math.",
		"Error, no keyboard - press F1 to continue.",
		"There's too much blood in my caffeine system.",
		"Artificial Intelligence usually beats real stupidity.",
		"Hard work has a future payoff. Laziness pays off now.",
		"Puritanism: The haunting fear that someone, somewhere may be happy.",
		"Consciousness: that annoying time between naps.",
		"Don't take life too seriously, you won't get out alive.",
		"Better to understand a little than to misunderstand a lot.",
		"The gene pool could use a little chlorine.",
		"When there's a will, I want to be in it.",
		"Okay, who put a \"stop payment\" on my reality check?",
		"Programming is an art form that fights back.",
		"Daddy, what does FORMATTING DRIVE C mean?",
		"Never forget: 2 + 2 = 5 for extremely large values of 2.",
		"To define recursion, we must first define recursion.",
		"Good programming is 99% sweat and 1% coffee.",
		"Home is where you hang your @",
		"A journey of a thousand sites begins with a single click.",
		"You can't teach a new mouse old clicks.",
		"Great groups from little icons grow.",
		"Speak softly and carry a cellular phone.",
		"C:\ is the root of all directories.",
		"Don't put all your hypes in one home page.",
		"The modem is the message.",
		"Too many clicks spoil the browse.",
		"The geek shall inherit the earth.",
		"A chat has nine lives.",
		"Don't byte off more than you can view.",
		"Fax is stranger than fiction.",
		"What boots up must come down.",
		"Virtual reality is its own reward.",
		"Modulation in all things.",
		"A user and his leisure time are soon parted.",
		"There's no place like http://www.home.com",
		"Know what to expect before you connect.",
		"Oh, what a tangled website we weave when first we practice.",
		"Speed thrills.",
		"Give a man a fish and you feed him for a day; teach him to use the Net and he won't bother you for weeks.",
		"42.7 percent of all statistics are made up on the spot.",
		"A clean desk is a sign of a cluttered desk drawer. ",
		"A conclusion is the place where you got tired of thinking.",
		"A day without sunshine is like, night.",
		"C program run. C program crash. C programmer quit.",
		"Death is hereditary.",
		"Don't be irreplaceable; if you can't be replaced, you can't be promoted.",
		"Everyone has a photographic memory. Some don't have film.",
		"For Sale: Parachute. Only used once, never opened, small stain.",
		"Honk if you love peace and quiet.",
		"I used to be indecisive. Now I'm not sure.",
		"Why is abbreviation such a long word?",
		"What is a free gift? Aren't all gifts free?",
		"Warning: Dates in calendar are closer than they appear.",
		"There are 3 kinds of people: those who can count & those who can't.",
		"The severity of the itch is inversely proportional to the ability to reach it. ",
		"The quickest way to double your money is to fold it in half and put it back in your pocket.",
		"The problem with the gene pool is that there is no lifeguard.",
		"The journey of a thousand miles begins with a broken fan belt and a flat tire.",
		"The early bird may get the worm, but the second mouse gets the cheese.",
		"On the other hand, you have different fingers."
	];

	return quotes[Math.floor(Math.random()*quotes.length)];
};"Give a man a fish and you feed him for a day; teach him to use the Net and he won't bother you for weeks."