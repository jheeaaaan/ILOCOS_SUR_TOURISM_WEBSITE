window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hidden');
  }, 1500);
});


const navbarMain = document.querySelector('.navbar-main');

window.addEventListener('scroll', () => {
  if (navbarMain) navbarMain.classList.toggle('scrolled', window.scrollY > 60);
  const btt = document.getElementById('back-to-top');
  if (btt) btt.classList.toggle('show', window.scrollY > 400);
});

// Mobile: tap nav-link with chevron to expand dropdown
document.querySelectorAll(".nav-links .nav-link").forEach(function(link) {
  link.addEventListener("click", function(e) {
    var parent = this.closest(".nav-item");
    var drop = parent ? parent.querySelector(".nav-dropdown") : null;
    if (!drop) return;
    if (window.innerWidth <= 900) {
      e.preventDefault();
      parent.classList.toggle("mobile-open");
    }
  });
});

document.getElementById('back-to-top')?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

//DESTINATION DATA
const destinations = [
  // ── HISTORICAL SITES (5) ────────────────────────────────────────────
  { id:1, name:"Calle Crisologo", city:"Vigan City", category:"Historical Site", image:"images/calle.png", shortDesc:"A UNESCO World Heritage cobblestone street lined with Spanish colonial houses, kalesas, and antique shops.", fullDesc:"Calle Crisologo is the most iconic street in Vigan and the entire Ilocos region. This UNESCO World Heritage Site showcases remarkably preserved Spanish colonial architecture. Walking through it is like stepping back in time to the 17th century.", activities:["Heritage walking tour","Kalesa (horse-drawn carriage) ride","Photography","Shopping for antiques and souvenirs"], bestTime:"Early morning or late afternoon", fee:"Free", hours:"Open 24 hours (shops: 8AM–8PM)", tips:"Visit early morning for fewer crowds. Hire a kalesa for the full experience. Best photographed at dusk." },
  { id:2, name:"Bantay Church & Bell Tower", city:"Bantay", category:"Historical Site", image:"images/bantay.png", shortDesc:"A 16th-century Augustinian church with a separate bell tower once used as a Spanish-era watchtower.", fullDesc:"Built in 1590, the Bantay Church is one of the oldest churches in the Philippines. Its iconic bell tower, standing separately from the main church, served as a watchtower. Today it offers panoramic views of Vigan City.", activities:["Church visit","Bell tower climb","Photography","Historical tour"], bestTime:"Year-round, best during morning Mass", fee:"Free (bell tower ₱20)", hours:"6AM–8PM daily", tips:"Climb the bell tower for stunning views of Vigan. Wear comfortable shoes for the steep ascent." },
  { id:3, name:"Bessang Pass", city:"Cervantes", category:"Historical Site", image:"images/besang.png", shortDesc:"A National Historical Landmark — site of the last major WWII battle in the Philippines against Japan.", fullDesc:"Bessang Pass is where Fil-American forces defeated the Japanese army in 1945 in the last major WWII battle in the Philippines. At over 1,200 meters above sea level, it offers cool temperatures and breathtaking mountain views.", activities:["Historical tour","Hiking","Nature photography","Camping"], bestTime:"November to February", fee:"₱30/person", hours:"7AM–5PM", tips:"Bring warm clothing. The temperatures can drop significantly. Good hiking shoes are essential." },
  { id:5, name:"Vigan Cathedral (St. Paul Metropolitan)", city:"Vigan City", category:"Historical Site", image:"images/paul.png", shortDesc:"One of the oldest and most magnificent Spanish-era cathedrals in the Philippines, sitting at the heart of Vigan City.", fullDesc:"The Metropolitan Cathedral of Vigan, dedicated to St. Paul the Apostle, was first built in 1574 and has stood as the spiritual center of Vigan for over four centuries. Its baroque facade and massive interior make it one of the most visited heritage structures in the Philippines.", activities:["Church visit","Heritage photography","Attending Mass","Historical tour"], bestTime:"Year-round; most festive during January Fiesta", fee:"Free", hours:"6AM–6PM daily", tips:"Attend the early morning Mass for an atmospheric experience. The cathedral square is beautiful at night when lit up." },

  // ── BEACHES (5) ─────────────────────────────────────────────────────
  { id:6, name:"Mindoro Beach", city:"Santa Maria", category:"Beach", image:"images/mindoro.png", shortDesc:"A serene and unspoiled beach perfect for swimming, fishing, and peaceful sunset watching.", fullDesc:"Mindoro Beach in Santa Maria is one of the hidden gems of Ilocos Sur. Local fishing bancas create picturesque sunrise scenes. The beach is ideal for swimming, snorkeling, and relaxation away from the crowds.", activities:["Swimming","Fishing","Sunset watching","Beach picnic","Snorkeling"], bestTime:"March to June (dry season)", fee:"₱50/person", hours:"6AM–6PM", tips:"Bring your own food and drinks. Best visited on weekdays." },
  { id:7, name:"Candon Beach", city:"Candon City", category:"Beach", image:"images/candon.png", shortDesc:"A long, peaceful beach with fishing communities, fresh seafood, and spectacular Philippine Sea sunsets.", fullDesc:"Candon Beach stretches for several kilometers along the western coast of Candon City. Small seafood eateries serve the freshest catch of the day. Sunsets here are legendary — the sky turns brilliant orange and red over the Philippine Sea.", activities:["Swimming","Seafood dining","Sunset watching","Beach volleyball"], bestTime:"November to May", fee:"Free", hours:"Open 24 hours", tips:"Try the local kilawin at beachside eateries. Evening visits are magical for sunset views." },
  { id:8, name:"Vitalis White Sands", city:"Premier Resort Area, Santiago", category:"Beach", image:"images/narvacan.png", shortDesc:"Also located in Santiago, Vitalis White Sands is a premier beach resort area known for its powdery white sand and quality accommodation facilities", fullDesc:"It is the more developed and comfortable option compared to Santiago Cove, making it ideal for visitors who want a beach experience with proper amenities good rooms, clean restrooms, and reliable food service nearby.", activities:["Surfing","Swimming","Beach bonfire","Grilled fish dining","Sunset watching"], bestTime:"June to October for waves; November to May for calm swimming", fee:"Free", hours:"Open 24 hours", tips:"Bring your own grilling supplies for a local beach barbecue experience. Currents can be strong — always check conditions before swimming." },
  { id:9, name:"Ambucao Beach", city:"Cabugao", category:"Beach", image:"images/vitalis.png", shortDesc:"Located in Cabugao, Ambucao Beach is one of the most relaxed and family-friendly beaches in the province.", fullDesc:"The water is calm and shallow near the shore, making it safe for children to wade and swim. Coconut trees provide natural shade along the beach, and the local community maintains a clean, peaceful atmosphere that feels refreshingly simple.", activities:["Family swimming","Picnicking","Sunset watching","Beach volleyball","Kayaking"], bestTime:"December to May (dry and calm)", fee:"₱30/person", hours:"6AM–6PM", tips:"Bring your own food and shade — facilities are minimal but that's part of its charm. Perfect for a quiet escape." },
  { id:10, name:"Santiago Cove", city:"Santiago", category:"Beach", image:"images/santiago.png", shortDesc:"The most famous beach in Ilocos Sur and one of the most beautiful in northern Luzon. ", fullDesc:"Santiago Cove features fine white sand, crystal-clear calm water, and dramatic rock formations framing the cove on both sides. It is often called the 'Boracay of the North' but with far fewer crowds and a fraction of the cost. Definitely the number one beach stop in the province.", activities:["Swimming","Snorkeling","Island hopping","Fishing","Beach picnic"], bestTime:"October to May", fee:"₱50/person", hours:"6AM–6PM", tips:"Pair your beach visit with a snorkeling trip to the marine sanctuary. Bring your own gear for the best experience." },

  // ── WATERFALLS (5) ──────────────────────────────────────────────────
  { id:11, name:"Kindelpin Falls", city:"Salcedo", category:"Waterfall", image:"images/kindelpin.png", shortDesc:"A stunning waterfall surrounded by rock formations and lush trees, offering a peaceful nature escape in Salcedo.", fullDesc:"Kindelpin Falls is one of the most beautiful waterfalls in Ilocos Sur. Surrounded by massive rock formations and lush tropical vegetation, the falls drop into a clear natural pool perfect for a refreshing swim. The trek through the forest adds to the adventure.", activities:["Trekking","Swimming in natural pool","Photography","Nature walks"], bestTime:"June to November for peak flow", fee:"₱30–₱50/person", hours:"7AM–5PM", tips:"Wear waterproof footwear. The trail can be slippery after rain. Bring dry clothes to change into after swimming." },
  { id:12, name:"Pinsal Falls", city:"Santa Maria", category:"Waterfall", image:"images/pinsal.png", shortDesc:"A breathtaking multi-drop waterfall in Santa Maria cascading over smooth rock faces into a refreshing natural pool below.", fullDesc:"Pinsal Falls is one of the most visited natural attractions in Ilocos Sur, located in Santa Maria. The waterfall drops dramatically over layered rock formations into a wide, clear pool perfect for swimming. Surrounded by lush tropical vegetation, the site is ideal for nature lovers, families, and adventure seekers looking for a refreshing escape from the heat.", activities:["Trekking","Swimming in natural pool","Photography","Nature walks","Picnic"], bestTime:"June to November for peak water flow", fee:"₱30–₱50/person", hours:"7AM–5PM", tips:"Wear waterproof footwear as the rocks can be slippery. Bring dry clothes to change into after swimming. Visit on weekdays to avoid crowds." },
  { id:13, name:"Aw-asen Falls", city:"Alilem", category:"Waterfall", image:"images/aw.png", shortDesc:"A hidden multi-tiered waterfall deep in the mountains of Alilem, rewarding trekkers with cool mist and stunning natural scenery.", fullDesc:"Aw-asen Falls is a lesser-known gem tucked in the highlands of Alilem. The falls cascade through several tiers over mossy rock formations into crystal-clear pools below. The trek to reach it winds through dense forest and cool mountain air, making the journey as memorable as the destination itself. A perfect spot for those seeking solitude in nature.", activities:["Trekking","Swimming","Photography","Bird watching","Nature immersion"], bestTime:"July to October for fullest water flow", fee:"₱30/person + guide fee", hours:"7AM–5PM", tips:"Hire a local guide as the trail is not well-marked. Wear sturdy waterproof shoes. Bring enough water and snacks for the trek." },
  { id:14, name:"Dawara Falls", city:"Galimuyod", category:"Waterfall", image:"images/dawara.png", shortDesc:"A scenic and powerful waterfall in Galimuyod surrounded by lush forest and cool highland air, perfect for a refreshing nature escape.", fullDesc:"Dawara Falls in Galimuyod is a beautiful waterfall dropping into a wide natural basin framed by towering trees and rock walls. The surrounding forest is rich in wildlife and the cool highland climate makes it a pleasant retreat year-round. A short but rewarding trek leads visitors through rice fields and forest paths before arriving at the falls.", activities:["Trekking","Swimming","Photography","Rice terrace viewing","Bird watching"], bestTime:"August to November", fee:"₱50/person", hours:"7AM–4PM", tips:"Start early as the trail takes 1–2 hours. Bring a local guide from the barangay hall. Wear sturdy shoes and pack light snacks." },
  { id:15, name:"Baey Anito Falls", city:"Suyo", category:"Waterfall", image:"images/baey.png", shortDesc:"A mystical and towering waterfall deep in the highlands of Suyo, named after local spirits and steeped in Ilocano folklore.", fullDesc:"Baey Anito Falls is one of the most dramatic and remote waterfalls in Ilocos Sur, located in the rugged highlands of Suyo. Its name, meaning 'Spirit of the Water' in local folklore, reflects the awe it inspires in all who visit. The falls plunge from a great height into a deep emerald pool surrounded by ancient forest. The challenging trek to reach it is considered a rite of passage among local hikers.", activities:["Mountain trekking","Swimming","Photography","Camping","Cultural immersion"], bestTime:"September to December for fullest flow", fee:"₱50/person + ₱200 guide fee", hours:"6AM–3PM (allow a full day)", tips:"This is a full-day trek — start no later than 6AM. Always hire a mandatory local guide and register at the barangay hall. Bring 2L of water, high-energy snacks, and a first aid kit." },

  // ── MOUNTAINS (5) ───────────────────────────────────────────────────
  { id:16, name:"Mt. Kimat", city:"Cervantes", category:"Mountain", image:"images/kimat.png", shortDesc:"A challenging and rewarding mountain trek with panoramic views of Ilocos Sur and the Cordillera range.", fullDesc:"Trails around Cervantes wind through pine forests and grassy ridges up to peaks revealing breathtaking views of the Ilocos coastline to the west and the towering Cordillera ranges to the east. One of the most rewarding treks in northern Luzon.", activities:["Mountain trekking","Camping","Bird watching","Photography"], bestTime:"November to February (dry and cool)", fee:"₱50 registration + ₱500 guide fee per group", hours:"Depart 5AM for full-day trek", tips:"Hire a certified guide. Bring layered clothing, sufficient water, and high-energy food. Register at the municipal hall first." },
  { id:17, name:"Mt. Tirad Pass", city:"Gregorio del Pilar", category:"Mountain", image:"images/tirad.png", shortDesc:"Site of General Gregorio del Pilar's heroic last stand — a historical mountain trail of deep patriotic significance.", fullDesc:"Mt. Tirad Pass is where 18-year-old General Gregorio del Pilar made his heroic last stand against American forces on December 2, 1899. The difficult mountain trail is now a pilgrimage site for history lovers and trekkers alike.", activities:["Historical trekking","Bird watching","Nature photography"], bestTime:"December to February", fee:"₱50/person + guide required", hours:"6AM–3PM (allow full day)", tips:"Difficult trek — physically fit hikers only. Hire a mandatory local guide. Bring 2L of water minimum." },
  { id:18, name:"Mt. Cainiao", city:"Tagudin", category:"Mountain", image:"images/cainiao.png", shortDesc:"A scenic mountain in Tagudin offering stunning panoramic views of the Ilocos Sur coastline and the South China Sea.", fullDesc:"Mt. Cainiao in Tagudin is a beloved local trekking destination known for its accessible trails and rewarding summit views. From the top, trekkers are treated to a sweeping 360-degree panorama of the South China Sea to the west and the rolling hills of Ilocos Sur stretching eastward. The mountain is covered in lush vegetation and is home to various bird species, making it popular among birdwatchers and nature photographers.", activities:["Trekking","Photography","Bird watching","Sunrise viewing","Camping"], bestTime:"November to March", fee:"₱30/person", hours:"5AM–3PM", tips:"Great for beginners and intermediate hikers. Start early to catch the sunrise from the summit. Bring light snacks, plenty of water, and a light jacket for the summit breeze." },
  { id:19, name:"Mt. Tuwato", city:"Alilem", category:"Mountain", image:"images/tuwato.png", shortDesc:"A cool mist-covered mountain in Alilem with pine-forested trails and breathtaking views of highland valleys and terraced farmlands.", fullDesc:"Mt. Tuwato rises above the cool highlands of Alilem, surrounded by pine forests, misty ridges, and sweeping views of mountain valleys and vegetable terraces below. The trek winds through refreshing highland scenery that feels far removed from the lowland heat. At over 1,000 meters above sea level, the summit rewards climbers with extraordinary views and crisp mountain air that is rare in the Ilocos region.", activities:["Mountain trekking","Camping","Photography","Bird watching","Vegetable farm visits"], bestTime:"November to February for coolest and clearest weather", fee:"Free (guide recommended — ₱200)", hours:"Open year-round; best started at 5AM", tips:"Bring a jacket — temperatures drop significantly at the summit. Hire a local guide for the best trails. Visit the highland farms on the way back for fresh produce." },
  { id:20, name:"Padre Burgos Peak", city:"Padre Burgos", category:"Mountain", image:"images/padre.png", shortDesc:"A scenic viewpoint mountain in Padre Burgos with panoramic sights of the Ilocos Sur coastline and surrounding farmlands.", fullDesc:"The hills above Padre Burgos provide accessible panoramic views of the Ilocos Sur coast. The gentle slopes are covered in lush grass and wildflowers during the rainy season, and the summit reveals a sweeping 360-degree view of the town, farmlands, and the distant Philippine Sea.", activities:["Hiking","Photography","Picnic","Sunset watching"], bestTime:"Year-round; best views in the dry season", fee:"Free", hours:"Sunrise to sunset", tips:"A short, easy hike suitable for all fitness levels. Great for a quick half-day trip. Best at golden hour for photography." },

  // ── ISLANDS (5) ─────────────────────────────────────────────────────
  { id:21, name:"Raniag Island", city:"Caoayan", category:"Island", image:"images/raniag.png", shortDesc:"A small pristine island off the Ilocos Sur coast, perfect for snorkeling, island-hopping, and secluded beach relaxation.", fullDesc:"Raniag Island is a relatively undiscovered island off the coast of Caoayan with white sandy coves, clear turquoise waters, and excellent snorkeling spots. Access by outrigger boat from the mainland adds to its remote and exclusive appeal.", activities:["Island hopping","Snorkeling","Swimming","Beach picnic","Fishing"], bestTime:"March to May (calm seas)", fee:"₱100/person boat fee", hours:"Day trips only — depart 7AM, return by 5PM", tips:"Arrange boat hire in advance through local fishermen. Bring all food, drinks, and supplies — the island has no vendors." },
  { id:22, name:"Salomague Island", city:"Cabugao", category:"Island", image:"images/salomague.png", shortDesc:"A beautiful island off the coast of Cabugao with calm turquoise waters, white sandy shores, and rich marine life perfect for snorkeling.", fullDesc:"Salomague Island is one of the most scenic islands in Ilocos Sur, located off the coast of Cabugao. The island features calm, clear waters ideal for snorkeling and swimming, with vibrant coral reefs visible just beneath the surface. Its white sandy beach is lined with coconut trees providing natural shade. A favorite among locals for day trips and weekend getaways, Salomague offers a peaceful island escape with an authentic Ilocano coastal atmosphere.", activities:["Snorkeling","Swimming","Island hopping","Beach picnic","Fishing","Photography"], bestTime:"October to May", fee:"₱150/person (boat + island fee)", hours:"7AM–4PM", tips:"Bring your own snorkeling gear for the best experience. Do not touch or step on coral reefs. Arrange boat hire through local fishermen in Cabugao." },
  { id:23, name:"Snake Island and Sandbar", city:"Brgy. Rancho, Santiago", category:"Island", image:"images/snake.png", shortDesc:"A stunning serpentine sandbar in Santiago that winds dramatically through the sea — one of the most photogenic natural formations in Ilocos Sur.", fullDesc:"Snake Island and Sandbar in Barangay Rancho, Santiago is named for its long, winding sandbar that curves like a snake through the shallow turquoise waters. Visible from above as a dramatic S-shaped strip of white sand, it is one of the most photographed natural landmarks in Ilocos Sur. The sandbar is accessible by boat and appears most dramatically during low tide, offering a magical walk across the sea with water on both sides.", activities:["Photography","Sandbar walking","Swimming","Snorkeling","Boat tour","Island hopping"], bestTime:"March to June (lowest tides and calmest seas)", fee:"₱100/person boat fee + ₱30 sandbar fee", hours:"Tidal — best visited during low tide; check tide schedules", tips:"Check tide charts before visiting — the sandbar is most dramatic during low tide. Arrive early before the crowds. Drone photography here is absolutely stunning. Wear reef-safe sunscreen." },
  { id:24, name:"Puro Pinget Island", city:"Caoayan", category:"Island", image:"images/puro.png", shortDesc:"A remote and pristine island off the coast of Caoayan known for its untouched shores, clear waters, and spectacular marine biodiversity.", fullDesc:"Puro Pinget Island is one of the least-visited and most pristine islands in Ilocos Sur, located off the coast of Caoayan. Its isolation has preserved its natural beauty — the surrounding waters are crystal clear, rich in marine life, and ideal for snorkeling and diving. The beach is quiet, unspoiled, and free from commercial development, offering a rare genuine island escape for adventurous visitors willing to make the journey by outrigger boat.", activities:["Swimming","Snorkeling","Diving","Fishing","Beach picnic","Photography"], bestTime:"November to May (calm sea conditions)", fee:"₱100/person boat fee", hours:"Day trips; depart 7AM latest", tips:"Hire a banca through local fishermen in Caoayan. Bring all your own food, water, and supplies — the island has no vendors or facilities. Pack out all your trash to help preserve this pristine environment." },

  // ── FOOD DESTINATIONS (5) ────────────────────────────────────────────
  { id:26, name:"Vigan Plaza Burgos Food Strip", city:"Vigan City", category:"Food Destination", image:"images/plaza-burgos.png", shortDesc:"The culinary heart of Vigan — a vibrant food strip where empanada, longganisa, and bagnet are made fresh daily.", fullDesc:"Plaza Burgos and its surrounding streets form the ultimate Ilocano food destination. Empanada stalls fry their orange pastries to order, longganisa makers sizzle garlicky sausages, and vendors serve hot pinakbet and bagnet. The most authentic way to experience Ilocano cuisine.", activities:["Street food tasting","Market tour","Food photography","Cooking demos"], bestTime:"Morning 6AM–10AM for freshest food; Evenings 6PM–10PM for lively atmosphere", fee:"Free entry; food from ₱20–₱150 per item", hours:"Daily 6AM–10PM", tips:"Come hungry! Try empanada, longganisa, and tupig all in one visit. Bring cash — many stalls don't accept cards." },
  { id:27, name:"Vigan Public Market", city:"Vigan City", category:"Food Destination", image:"images/public.png", shortDesc:"Vigan's century-old public market — the best place to find fresh produce, sukang Iloko, and authentic Ilocano delicacies.", fullDesc:"The Vigan Public Market is packed with vendors selling fresh vegetables, seafood, dried delicacies, pastries, and the famous sukang Iloko vinegar. It's also where locals buy their chains of Vigan longganisa by the kilo. A genuine slice of everyday Ilocano life.", activities:["Market exploration","Food shopping","Pasalubong buying","Food tasting"], bestTime:"Early morning 5AM–9AM when produce is freshest", fee:"Free", hours:"5AM–6PM daily", tips:"Go early for the best selection. Buy sukang Iloko in large bottles — an excellent souvenir. Gentle bargaining is acceptable." },
  { id:28, name:"Calle Crisologo Restaurant Row", city:"Vigan City", category:"Food Destination", image:"images/restaurant.png", shortDesc:"A row of heritage restaurants inside colonial-era bahay na bato serving authentic Ilocano dishes in a stunning historical setting.", fullDesc:"Along Calle Crisologo and Heritage Road, several restaurants operate inside century-old Spanish colonial houses. Dining here is a full cultural experience — authentic Ilocano dishes like bagnet, dinengdeng, and pinakbet are served amid antique furniture and Spanish-tiled floors.", activities:["Fine dining","Heritage experience","Food photography","Cultural immersion"], bestTime:"Dinner for the most atmospheric experience", fee:"Meals from ₱150–₱500/person", hours:"Lunch and dinner (11AM–9PM, varies by restaurant)", tips:"Try Café Leona and Florentina Homes for the most authentic experience. Reserve a table on weekends. Dress smartly for a nicer atmosphere." },
  { id:29, name:"Candon City Roadside Food Stops", city:"Candon City", category:"Food Destination", image:"images/night.png", shortDesc:"Famous highway eateries along the Candon stretch serving grilled liempo, sinanglaw, and fresh buko juice.", fullDesc:"The road through Candon City is dotted with beloved eateries that have been feeding travellers for decades. The specialty is grilled liempo (pork belly) served with sawsawan, alongside fresh coconut juice and sinanglaw — a local beef soup. A mandatory pit stop on any Ilocos road trip.", activities:["Food tasting","Roadside dining","Pasalubong shopping"], bestTime:"Lunchtime for the freshest grill", fee:"Meals from ₱80–₱200/person", hours:"7AM–7PM", tips:"Stop here on your way to or from Vigan. Order the liempo and buko juice combo — a classic Candon road trip meal. Also stock up on local sweets and snacks as pasalubong." },
  { id:30, name:"Burnay Pottery & Sukang Iloko Village", city:"Vigan City", category:"Food Destination", image:"images/burnay.png", shortDesc:"Visit the traditional burnay pottery kilns where artisans also produce and sell the famous Ilocano sugarcane vinegar in clay jars.", fullDesc:"Along the road north of Vigan, traditional kilns produce the famous burnay clay pots and store sukang Iloko — the iconic Ilocano sugarcane vinegar fermented inside burnay jars. Visitors can tour the kilns, watch artisans at work, and buy fresh sukang Iloko direct from producers at the lowest prices.", activities:["Pottery workshop tour","Sukang Iloko tasting and buying","Photography","Cultural immersion"], bestTime:"Year-round; kilns most active in the morning", fee:"Free to visit; sukang Iloko from ₱50/bottle", hours:"8AM–5PM", tips:"Buy sukang Iloko here in bulk — it's far cheaper than in tourist shops. The large clay jars make great decorative souvenirs." },

  // ── ADVENTURE (5) ───────────────────────────────────────────────────
  { id:31, name:"Amburayan River Kayaking", city:"Tagudin", category:"Adventure", image:"images/amburayan.png", shortDesc:"A fast-flowing river ideal for kayaking and river trekking through scenic mountain and valley landscapes.", fullDesc:"The Amburayan River in Tagudin offers exciting kayaking and river trekking through dramatic Ilocos Sur foothills. The river cuts through valleys with clear waters perfect for adventure seekers. Peaceful sections are ideal for a refreshing dip or fishing.", activities:["Kayaking","River trekking","Swimming","Fishing","Photography"], bestTime:"June to September for whitewater; March to May for swimming", fee:"Free access; guided packages from ₱200", hours:"7AM–5PM", tips:"Always go with a local guide for whitewater sections. Life vests are mandatory." },
  { id:32, name:"River Kayaking Adventure", city:"Ilocos Sur", category:"Adventure", image:"images/kayaking.png", shortDesc:"Paddle through the scenic rivers of Ilocos Sur, gliding past lush valleys, rice fields, and dramatic Cordillera foothills.", fullDesc:"Ilocos Sur is home to several beautiful rivers perfect for kayaking adventures, including the Amburayan and Abra Rivers. Guided kayaking tours take visitors through calm and exciting stretches of river, passing traditional pottery villages, lush rice paddies, and stunning highland scenery. Whether you're a beginner looking for a scenic paddle or an adventurer seeking whitewater thrills, the rivers of Ilocos Sur offer an unforgettable outdoor experience.", activities:["Kayaking","River trekking","Swimming","Fishing","Photography","Pottery village visit"], bestTime:"October to February for calm paddling; June to September for whitewater", fee:"Guided packages from ₱200–₱300/person", hours:"7AM–5PM", tips:"Always go with a local guide especially for whitewater sections. Life vests are mandatory. Bring waterproof bags for your belongings and sunblock for open river stretches." },
  { id:33, name:"Cervantes Spelunking & Cave Tour", city:"Cervantes", category:"Adventure", image:"images/cervantes.png", shortDesc:"Explore natural limestone caves in the highlands of Cervantes — a thrilling underground adventure amid stunning formations.", fullDesc:"The highland municipality of Cervantes has several natural limestone cave systems formed over millions of years. Guided spelunking tours take visitors through underground chambers with impressive stalactite and stalagmite formations. The caves are cool, dramatic, and untouched by mass tourism.", activities:["Spelunking","Cave photography","Underground trekking","Nature appreciation"], bestTime:"Year-round (caves maintain a cool temperature)", fee:"₱100/person + ₱300 guide fee per group", hours:"8AM–4PM", tips:"Wear old clothes you don't mind getting muddy. Helmets and headlamps are provided but bring a backup flashlight. Not recommended for claustrophobic visitors." },
  { id:34, name:"Suyo Rappelling & Cliff Jump", city:"Suyo", category:"Adventure", image:"images/suyo.png", shortDesc:"Experience rappelling down rugged mountain cliffs and cliff jumping into natural pools in the wild highlands of Suyo.", fullDesc:"Suyo's rugged highlands offer some of the most exhilarating outdoor adventure activities in Ilocos Sur. Guided groups can rappel down rocky cliffs and cliff jump into cool natural pools below cascading waterfalls. Adrenaline-filled, raw, and completely off the beaten tourist path.", activities:["Rappelling","Cliff jumping","Trekking","Swimming","Photography"], bestTime:"March to October", fee:"₱300/person (guide and equipment included)", hours:"7AM–4PM", tips:"Only for physically fit and adventurous visitors. Always use certified local guides with proper equipment. Inform your accommodation of your plans before heading out." },
  { id:35, name:"Alilem Mountain Biking Trail", city:"Alilem", category:"Adventure", image:"images/ailem.png", shortDesc:"Thrilling mountain biking trails through the pine-forested highlands and terraced farms of Alilem.", fullDesc:"The cool highlands of Alilem provide some of the best mountain biking terrain in Ilocos Sur. Trails wind through pine forests, past vegetable terraces, and along ridges with spectacular valley views. Bikes can be rented in the town center and local guides know the best trails for every skill level.", activities:["Mountain biking","Trekking","Photography","Farm visits","Camping"], bestTime:"November to February (cool and dry)", fee:"Bike rental from ₱150/day; guide from ₱200", hours:"6AM–5PM", tips:"Bring a light jacket — it gets cold at elevation. The downhill trails are exhilarating but require basic biking experience. Ask your guide for the scenic ridge trail for the best views." }
];

// RENDER DESTINATION CARDS
function renderDestinations(data) {
  const grid = document.getElementById('dest-grid');
  const noResults = document.getElementById('no-results');
  if (!grid) return;
  grid.innerHTML = '';
  if (data.length === 0) {
    if (noResults) noResults.style.display = 'block';
    return;
  }
  if (noResults) noResults.style.display = 'none';
  data.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'col destination-card-col';
    card.innerHTML = `
      <div class="destination-card reveal">
        <div class="destination-image">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800'">
          <span class="destination-badge">${dest.category}</span>
        </div>
        <div class="destination-content">
          <h3 class="destination-title">${dest.name}</h3>
          <p class="destination-location"><i class="bi bi-geo-alt-fill"></i> ${dest.city}, Ilocos Sur</p>
          <p class="destination-description">${dest.shortDesc}</p>
          <div class="destination-meta">
            <span><i class="bi bi-clock"></i> ${dest.hours}</span>
            <span><i class="bi bi-ticket-perforated"></i> ${dest.fee}</span>
          </div>
          <div class="destination-footer">
            <button class="btn-dark" onclick="openModal(${dest.id})">
              <i class="bi bi-eye"></i> View Details
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  setTimeout(() => {
    document.querySelectorAll('.destination-card.reveal').forEach(el => revealObserver.observe(el));
  }, 50);
}

// ============ SEARCH & FILTER ============
let activeCategory = 'All';
let searchTerm = '';

function applyFilters() {
  let filtered = destinations;
  if (activeCategory !== 'All') filtered = filtered.filter(d => d.category === activeCategory);
  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase();
    filtered = filtered.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.city.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
    );
  }
  renderDestinations(filtered);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.filter;
    applyFilters();
  });
});

const searchInput = document.getElementById('dest-search');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchTerm = e.target.value;
    applyFilters();
  });
}

if (document.getElementById('dest-grid')) renderDestinations(destinations);

// DESTINATION MODAL
function openModal(id) {
  const dest = destinations.find(d => d.id === id);
  if (!dest) return;
  const modal = document.getElementById('dest-modal');
  if (!modal) return;
  modal.querySelector('#modal-img').src = dest.image;
  modal.querySelector('#modal-img').alt = dest.name;
  modal.querySelector('#modal-title').textContent = dest.name;
  modal.querySelector('#modal-location').innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${dest.city}, Ilocos Sur`;
  modal.querySelector('#modal-desc').textContent = dest.fullDesc;
  modal.querySelector('#modal-fee').textContent = dest.fee;
  modal.querySelector('#modal-hours').textContent = dest.hours;
  modal.querySelector('#modal-best-time').textContent = dest.bestTime;
  modal.querySelector('#modal-tips').textContent = dest.tips;
  modal.querySelector('#modal-activities').innerHTML = dest.activities.map(a => `<li>• ${a}</li>`).join('');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('dest-modal');
  if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

document.getElementById('dest-modal')?.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.playbackRate = 0.7;
}

// GALLERY LIGHTBOX
const galleryImages = [
  { src:"images/calle.png",        caption:"Calle Crisologo at Dusk, Vigan City" },
  { src:"images/bantay.png",       caption:"Bantay Bell Tower, Bantay" },
  { src:"images/candon.png",       caption:"Candon Beach, Ilocos Sur" },
  { src:"images/crisologo.png",    caption:"Crisologo Heritage Street, Vigan" },
  { src:"images/plaza.png",        caption:"Plaza Burgos, Vigan City" },
  { src:"images/tirad.png",        caption:"Mt. Tirad Pass, Cervantes" },
  { src:"images/vigan.png",        caption:"Heritage Zone, Vigan City" },
  { src:"images/1.png",            caption:"Ilocos Sur — A Glimpse of History" },
  { src:"images/2.png",            caption:"Provincial Landscape, Ilocos Sur" },
  { src:"images/paul.png",         caption:"St. Paul Metropolitan Cathedral, Vigan" },
  { src:"images/viganbg.png",      caption:"Vigan City Panorama" },
  { src:"images/kindelpin.png",    caption:"Kindelpin Falls, Salcedo" },
  { src:"images/namandiraan.png",  caption:"Namandiraan Falls, Suyo" },
  { src:"images/dawara.png",       caption:"Scenic Landscape, Ilocos Sur" },
  { src:"images/viva.png",         caption:"Viva Vigan Festival of the Arts" },
  { src:"images/kanawidan.png",    caption:"Kannawidan Ylocos Festival, Vigan" },
  { src:"images/ylocos.png",       caption:"Ylocos Festival Celebrations" },
  { src:"images/abel.png",         caption:"Abel Iloko Weaving, Ilocos Sur" },
  { src:"images/arts.png",         caption:"Arts and Culture Festival" },
  { src:"images/longganisa.png",   caption:"Vigan Longganisa Festival" },
  { src:"images/raniag.png",       caption:"Raniag Festival, Vigan City" },
  { src:"images/bagnet.png",       caption:"Bagnet — Ilocano Crispy Pork" },
  { src:"images/empanada.png",     caption:"Ilocano Empanada, Vigan City" },
  { src:"images/longganisaf.png",  caption:"Vigan Longganisa" },
  { src:"images/pakbet.png",       caption:"Pinakbet — Ilocano Vegetable Stew" },
  { src:"images/dinengdeng.png",   caption:"Dinengdeng — Light Ilocano Soup" },
  { src:"images/sinanglaw.png",    caption:"Sinanglaw — Bold Ilocano Beef Soup" },
  { src:"images/dinardaraan.png",  caption:"Dinardaraan — Ilocano Dinuguan" },
  { src:"images/igado.png",        caption:"Igado — Ilocano Pork and Liver Dish" },
  { src:"images/tupig.png",        caption:"Tupig — Grilled Sticky Rice Snack" },
];

let currentLightboxIndex = 0;

function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  galleryImages.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'gal-item';
    item.innerHTML = `
      <img src="${img.src}" alt="${img.caption}" loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800'">
      <div class="gal-overlay"><i class="bi bi-zoom-in"></i></div>
    `;
    item.addEventListener('click', () => openLightbox(i));
    grid.appendChild(item);
  });
}

function openLightbox(index) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  currentLightboxIndex = index;
  updateLightbox();
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) { lb.classList.remove('active'); document.body.style.overflow = ''; }
}

function updateLightbox() {
  document.getElementById('lightbox-img').src = galleryImages[currentLightboxIndex].src;
  document.getElementById('lightbox-caption').textContent =
    `${galleryImages[currentLightboxIndex].caption} (${currentLightboxIndex + 1}/${galleryImages.length})`;
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
  updateLightbox();
}

document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb?.classList.contains('active')) return;
  if (e.key === 'ArrowRight') nextLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
  if (e.key === 'Escape') closeLightbox();
});

document.getElementById('lightbox')?.addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

// ============ FORM VALIDATION ============
const inquiryForm = document.getElementById('inquiry-form');
if (inquiryForm) {
  const destSelect = document.getElementById('destination');
  if (destSelect) {
    destinations.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.name;
      opt.textContent = `${d.name} — ${d.city} (${d.category})`;
      destSelect.appendChild(opt);
    });
  }
  inquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const checks = [
      { id:'full-name',   test: v => v.trim() !== '' },
      { id:'email',       test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id:'contact',     test: v => /^[0-9]{7,15}$/.test(v.replace(/[\s\-\+]/g,'')) },
      { id:'destination', test: v => v !== '' },
      { id:'travel-date', test: v => v !== '' },
      { id:'visitors',    test: v => v !== '' && parseInt(v) >= 1 },
      { id:'message',     test: v => v.trim() !== '' }
    ];
    checks.forEach(({ id, test }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const ok = test(el.value);
      el.classList.toggle('is-invalid', !ok);
      if (!ok) valid = false;
    });
    if (valid) {
      const success = document.getElementById('form-success');
      if (success) {
        success.style.display = 'block';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => success.style.display = 'none', 6000);
      }
      inquiryForm.reset();
    }
  });
  inquiryForm.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('is-invalid'));
  });
}

// ANIMATED COUNTERS
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const suffix = el.dataset.suffix || '';
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target + suffix; clearInterval(timer); }
    else el.textContent = Math.floor(start) + suffix;
  }, 16);
}

// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stats counter
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(el => animateCounter(el, parseInt(el.dataset.count)));
      }
    });
  }, { threshold: 0.3 }).observe(statsSection);
}

// ABOUT PAGE TABS
document.querySelectorAll('.tab-btn, .about-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn, .about-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel, .about-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.panel)?.classList.add('active');
  });
});

buildGallery();

const travelDateInput = document.getElementById('travel-date');
if (travelDateInput) travelDateInput.min = new Date().toISOString().split('T')[0];

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (href === currentPage) link.classList.add('active');
});

document.addEventListener("DOMContentLoaded", () => {

  const toggler = document.querySelector(".navbar-toggler"); // matches id="nav-toggler" class="navbar-toggler"
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  if (toggler && navLinks) {
    toggler.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      if (overlay) overlay.classList.toggle("show");
    });

    if (overlay) {
      overlay.addEventListener("click", () => {
        navLinks.classList.remove("open");
        if (overlay) overlay.classList.remove("show");
      });
    }
  }

});
