
// DATA RESOURCES
let dataResorce = [
    {
        heading: "ELIMINATE SINGLE-USE PLASTICS, AND SAVE <em>$$$</em> WHILE YOU'RE AT IT.",
        bodyText: "With reports suggesting that by 2050 there could be more plastic in our oceans than fish, It's about time we start cutting back on single use plastics! On a budget? No problem. Check out these simple tips to save the planet, and your wallet to boot!<br><br><ol><li> Invest in a reusable shopping bag. It sounds like an obvious one, but you'd be surprised how many people don't do this. You can buy a reusable bag that folds up super small for a few quid, and it'll save you paying 5p every time you need a bag.</li><br><li>Buy a stainless steel water bottle. Of course plastic reusable water bottles are also an option here, but the plastic can go a bit funny after a few months and make your water taste weird, so we'd recommend stainless steel for longevity. Plus you'll save money in the long-run by cutting out those random bottles of water you buy when you're out and about. Apply the same logic to hot beverages and invest in a reusable coffee cup or flask.</li><br><li>It's been in the media a lot recently, but try and avoid plastic straws if you're in a position to be able to. Opt for no straw, or a paper/metal one instead</li><br><li>Use your own tupperware. Any local butchers, grocers and delis (and some supermarkets) near you will likely allow you to take along your own tupperware to transport food in, cutting out the need for other plastic packaging. This will also help keep it airtight and stop it from going off as quickly.</li><br><li>Ditch the chewing gum. Did you know chewing gum is actually made from plastic? This means that once you ditch it, it won't degrade. However, Iceland have recently become the first UK supermarket to sell plastic free gum. Simply Gum is £2 a pack and comes in mint, ginger and maple flavour.</li><br><li>Try out a menstrual cup - If you're looking for a way to cut plastic out of your periods (and save money), then you could try out a menstrual cup or reusable sanitary pads. We've rounded up the cheapest sanitary products here.</li><br><li>Choose a bar of soap over a plastic dispenser. People often think a bar of soap is gross as everyone uses it, but at least it gets a rinse after each use... unlike the pump on a dispenser.</li><br><li>When it comes round to your birthday or Christmas, why not ask for a refillable fountain pen? There might be a lot of pressure not to lose it, but you won't have to keep chucking away plastic pens every time they run dry.</li><br><li>Always choose an ice cream cone over a tub - duh!</li></ol><br><span>via:<em> savethestudent.org<em></span>",
        
        imgUrl: "../img/plastic.jpg"
    },
    {
        heading: "TRAVEL <em>MORE</em>,  <em>LESS </em>OFTEN.",
        bodyText: "Travelling is perhaps both the most expensive and environmentall harmful thing us earthlings enjoy to partake in. That said, here are some easy tips to reduce not only your carbon footprint, but your expenses as well, while exploring the world.<ol><li> Choose the destination carefully.Where you go has a big effect on your environmental footprint. Choose a place that isn't so far, that you can perhaps reach without relying on an airplane, or that is pedestrian- or bicycle-friendly, so you don't need to use a car upon arrival.   Stay away from the big no-no's: cruise ships, mega resorts, and large beachfront developments. Making these adjustments will not only save the planet, but your pocket too!</li><br><li> Research the accommodations. Consider alternative forms of accommodation, such as house swapping, couch surfing, or camping, all of which are more cost effective than traditional hotels, and far more  environmetally concsious as well.</li><br><li> Stay in one place. Avoid trying to cover as much territory as you can within a limited time, but instead embrace a slower pace. Stay put and get to know a single community more intimately. This can be a hard concept for many North Americans to grasp, who, for example, tend to 'do Europe' and hop from city to city, but it will save you on transport expenses and is a much greener approach to travelling.</li><br><li> Avoid costly tourist traps and instead act like a local as best you can. Imitating the local way of life is the most respectful way to travel. Disconnect from the online recommendations and the travel books (if people even read them anymore), and talk to people where you're at. Go to libraries, restaurants, markets, shows. Strike up conversations and get people on the ground to give you recommendations.</li><br><li>Eat like a local.Eat the way people around you are eating, without dragging along your preconceived notions of how a diet should be. For example, if beans and rice are the daily staple, then chow down with enthusiasm! Chances are you'll try something new and save some serious cash while you're at it!</li></ol><br><span>via:<em>treehugger.com<em></span>",
        
        imgUrl: "../img/travel.jpeg"
    },
    {
        heading: "REDUCE YOUR <em>MEAT </em> INTAKE.",
        bodyText: "If we all swapped beef burgers and bacon sandwiches for vegetarian alternatives most of the week, we could cut greenhouse gas emissions from the food sector by more than half. It's as simple as that, so say the scientists behind a new study published in Nature, who predicted that in 2050, sticking to a plant-based diet, with just one portion of red meat a week, could reduce greenhouse gas emissions related to food by 56%.<ul>For their research, the scientists outlined the flexitarian diet as one that included:<br><br><li>At least 500g per day of fruits and vegetables of different colours and groups (the composition of which is determined by regional preferences).</li><br><li>At least 100g per day of plant-based protein sources (legumes, soybeans and nuts) At least 100g per day of plant-based protein sources (legumes, soybeans and nuts).</li><br><li> Modest amounts of animal-based proteins, such as poultry, fish, milk and eggs.</li><br><li>Limited amounts of red meat (one portion per week), refined sugar (less than 5% of total energy), vegetable oils that are high in saturated fat (in particular palm oil) and starchy foods with a relatively high glycaemic index.</li></ul><p>So why not swap expensive meats and animal biproducts for comparably sustainable fruits, vegetables, and legumes? You don't have to go vegan, or even vegetarian, but adapting a flexitarian diet may be the easiest and most effective way for us earthlings, as individuals, to make a real impact in saving our dear planet.<br><br><span>via:<em>weforum.org</em></span>",
        
        imgUrl: "../img/diet.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // fetch the clicked button
    let clickedBtn = ev.target;
    
    // read the text inside the button
    let btnText = clickedBtn.innerText;
    
    // print the text of the clicked button
    //console.log(btnText);
    
    if (btnText === "Say no to single use plastics.") {
        $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <div class="intro"><p>${dataResorce[0].bodyText}</p></div>`;
    } else if (btnText === "Spend time, not money.") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}</h3>
                              <img src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;    
    } else {
        $content.innerHTML = `<h3>${dataResorce[2].heading}</h3>
                              <img src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }
    
}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}