function Q(question, target, score = 5) {
    const effect = typeof target === 'string' ? { [target]: score } : target;
    return { question, effect };
}

questions = [
    // Integration Axis (Europeanism vs. Euroscepticism)
    Q("Internal border controls within the Schengen Area should be completely abolished under all circumstances.", "integration", 5),
    Q("A single European foreign policy represents our collective interests better than individual national diplomacy.", "integration", 5),
    Q("All member states should be required to adopt the Euro to ensure total economic unity.", "integration", 5),
    Q("European law should always take precedence over national constitutions and domestic court rulings.", "integration", 5),
    Q("The European Parliament should hold the sole right to initiate legislation rather than relying on the European Commission.", "integration", 5),
    Q("The European Union should possess direct taxation powers to finance its own independent budget without relying on member state contributions.", "integration", 5),
    Q("The President of the European Commission should be chosen through a direct, union-wide popular vote of all European citizens.", "integration", 5),
    Q("The ultimate goal of European cooperation should be a unified federal state with a central government.", "integration", 10),

    Q("National parliaments must always hold the power to reject and overrule regulations coming from Brussels.", "integration", -5),
    Q("Maintaining an independent national currency is essential for economic stability and national self-determination.", "integration", -5),
    Q("The European Union has created an unaccountable, technocratic bureaucracy that alienates ordinary citizens.", "integration", -5),
    Q("Supranational European courts have too much power to interfere in the domestic traditions and laws of sovereign states.", "integration", -5),
    Q("Individual member states should retain the unilateral constitutional right to permanently opt out of any European directive or treaty clause.", "integration", -5),
    Q("The European Commission should be stripped of its executive policymaking authority and reduced to an advisory secretarial body.", "integration", -5),
    Q("National governments should have absolute authority to subsidize, bail out, and protect domestic industries without needing state aid approval from Brussels.", "integration", -5),
    Q("My country would be more democratic and prosperous outside of the European Union.", "integration", -10),

    // Economic Axis (Socialism vs. Liberalism)
    Q("Essential infrastructure, such as rail transport, energy grids, and water utilities, should be owned and run by the public sector.", "economy", 5),
    Q("Large corporations and high-income earners should face significantly higher tax rates to fund the welfare state.", "economy", 5),
    Q("Employees should be granted legal representation and voting power on company executive boards (co-determination).", "economy", 5),
    Q("Essential services like healthcare, childcare, and higher education must remain strictly non-profit and publicly funded.", "economy", 5),
    Q("Reducing statutory working hours without cutting wages is a necessary step to distribute wealth and productivity fairly.", "economy", 5),
    Q("Mandatory price controls should be enacted on essential staple foods, domestic electricity, and residential heating fuels.", "economy", 5),
    Q("Free public transit, social housing, and telecommunications infrastructure should be guaranteed as non-market universal public services.", "economy", 5),
    Q("The government should guarantee a publicly funded job with living wages to any citizen willing and able to work.", "economy", 5),

    Q("Labor laws should be deregulated to allow businesses greater flexibility in hiring, firing, and setting work hours.", "economy", -5),
    Q("Introducing private competition into public monopolies almost always results in higher efficiency, better service, and lower consumer costs.", "economy", -5),
    Q("Excessive state regulations, bureaucratic red tape, and industrial subsidies distort fair market competition.", "economy", -5),
    Q("Welfare benefits should be strictly time-limited and means-tested to avoid creating dependency on state support.", "economy", -5),
    Q("Public pension systems should transition toward privately invested, market-based retirement funds.", "economy", -5),
    Q("Corporate tax rates should be substantially lowered to draw international capital, foster business investment, and stimulate productivity.", "economy", -5),
    Q("Wealth taxes, capital gains levies, and inheritance taxes are unjust penalties on enterprise, capital accumulation, and personal saving.", "economy", -5),
    Q("Statutory minimum wage laws should be abolished or deregulated to allow wages to adjust naturally according to market supply and demand.", "economy", -5),

    // Culture Axis (Progressivism vs. Conservatism)
    Q("Same-sex marriage and full adoption rights for LGBTQ+ couples should be legally recognized across all European nations.", "culture", 5),
    Q("Religious symbols, prayers, and clergy should have no role or influence within public schools and state institutions.", "culture", 5),
    Q("Access to safe, legal abortion should be universally guaranteed as a fundamental healthcare right.", "culture", 5),
    Q("Legal gender recognition should be based on personal self-determination rather than medical diagnoses or state approval.", "culture", 5),
    Q("Traditional gender roles are outdated social constructs that should be actively dismantled in education and the workplace.", "culture", 5),
    Q("The possession, production, and retail sale of recreational cannabis should be completely decriminalized and regulated like alcohol.", "culture", 5),
    Q("Consensual adult sex work should be entirely decriminalized and regulated under standard occupational health, safety, and tax rules.", "culture", 5),
    Q("Voluntary assisted dying and medical euthanasia should be legally accessible to adults enduring untreatable, terminal physical suffering.", "culture", 5),

    Q("Europe's Christian roots and historical traditions must remain the bedrock of our cultural identity and values.", "culture", -5),
    Q("The nuclear family composed of a mother, a father, and children is the most stable foundation for society and deserves special state protection.", "culture", -5),
    Q("Immigrants must fully assimilate into the host nation's cultural norms, language, and civic traditions before gaining full acceptance.", "culture", -5),
    Q("Biological reality, rather than personal identity, should strictly determine access to sex-segregated spaces and sports.", "culture", -5),
    Q("Faith communities must retain the legal freedom to govern their internal affairs according to their traditional moral doctrines.", "culture", -5),
    Q("State museums and educational curricula must emphasize national pride, historical achievements, and military sacrifices over historical guilt.", "culture", -5),
    Q("Public vandalism, desecration, or burning of the national flag and sacred religious symbols should carry severe criminal penalties.", "culture", -5),
    Q("Adoption of children should be legally reserved for married opposite-sex couples over single applicants or same-sex couples.", "culture", -5),

    // Ecology Axis (Ecologism vs. Productivism)
    Q("Carbon taxes should be applied aggressively to polluting goods and services, even if they increase the cost of living for consumers.", "ecology", 5),
    Q("The phase-out of fossil fuels must be accelerated regardless of the short-term economic disruption it causes.", "ecology", 5),
    Q("Short-haul domestic flights should be banned wherever reliable passenger rail connections exist.", "ecology", 5),
    Q("Economic policy should prioritize ecological sustainability and planetary boundaries over perpetual GDP growth.", "ecology", 5),
    Q("High meat and dairy consumption should be discouraged through targeted taxes and public health regulations.", "ecology", 5),
    Q("All non-medical single-use plastic packaging and disposable utensils should be outlawed across industrial supply chains.", "ecology", 5),
    Q("Mandatory energy consumption reductions should be imposed during seasonal peaks instead of turning on fossil-fuel reserve stations.", "ecology", 5),
    Q("Commercial marketing for fossil fuel corporations, sport utility vehicles (SUVs), and luxury international aviation should be banned.", "ecology", 5),

    Q("Farmers should be protected from burdensome green regulations that lower food yields and increase production costs.", "ecology", -5),
    Q("Free-market innovation and technological development will solve climate issues far better than state bans and quotas.", "ecology", -5 ),
    Q("Economic expansion and higher living standards should always take precedence over environmental conservation goals.", "ecology", -5),
    Q("Imposing strict limits on domestic industry places local producers at an unfair disadvantage against foreign competitors from unregulated markets.", "ecology", -5),
    Q("Climate policy should focus strictly on voluntary incentives and adaptation rather than punitive restrictions on citizens' lifestyles.", "ecology", -5),
    Q("Domestic mining of coal, natural gas fracking, and processing of critical minerals must be expanded to guarantee strategic self-sufficiency.", "ecology", -5),
    Q("Genetically modified seeds, advanced synthetic fertilizers, and chemical pesticides should be deregulated to maximize agricultural yields.", "ecology", -5),
    Q("Nuclear power station construction and power grid expansions must be exempted from protracted local ecological planning hearings.", "ecology", -5),

    // Geopolitics Axis (Atlanticism vs. Continentalism)
    Q("European security is fundamentally impossible without the military backing and nuclear umbrella of the United States.", "foreign", 5),
    Q("NATO must remain the sole and primary cornerstone of European collective defense.", "foreign", 5),
    Q("Deepening intelligence-sharing and defense cooperation with Washington is vital for protecting European borders.", "foreign", 5),
    Q("Europe and North America share a unique democratic alliance that must remain the bedrock of the rules-based international order.", "foreign", 5),
    Q("In major international crises, Europe should stand firmly alongside Washington rather than attempting to act as an unaligned mediator.", "foreign", 5),
    Q("European national militaries should standardize all weapons, radar networks, and ammunition calibers exclusively around American defense standards.", "foreign", 5),
    Q("Europe should align its strategic economic sanctions and high-tech export bans strictly with the foreign policy of the United States.", "foreign", 5),
    Q("European foreign policy must acknowledge that American strategic power is the essential foundation of the democratic international order.", "foreign", 5),

    Q("Europe must develop its own comprehensive military capabilities so it is never vulnerable to the shifting political priorities of Washington.", "foreign", -5),
    Q("Europe must forge an autonomous diplomatic path and avoid being drawn into confrontations driven by American geopolitical interests.", "foreign", -5),
    Q("Europe should establish itself as an independent global superpower capable of balancing between rival foreign blocs on its own terms.", "foreign", -5),
    Q("European trade policy and bilateral treaties should not be dictated or constrained by sanctions imposed by non-European allies.", "foreign", -5),
    Q("A truly self-reliant Europe must maintain independent space, cyber, and nuclear deterrence capabilities under domestic or pooled European command.", "foreign", -5),
    Q("European energy security requires pragmatic diplomatic and trade relations with Eurasian neighbors rather than reliance on imported American fuel.", "foreign", -5),
    Q("A standing European army answering to continental institutions should gradually replace national armed forces and reduce American reliance.", "foreign", -5),
    Q("Europe should position itself as a neutral global diplomatic mediator between competing power blocs rather than an arm of the Atlantic alliance.", "foreign", -5),

    // Migration Axis (Sanctuary Europe vs. Fortress Europe)
    Q("European nations have a moral and legal obligation to grant asylum to refugees fleeing war and persecution, regardless of arrival numbers.", "migration", 5),
    Q("Civil society NGOs operating humanitarian search-and-rescue vessels in the Mediterranean should be actively supported rather than restricted.", "migration", 5),
    Q("The EU should establish broad, legal pathways for humanitarian and labor migration to eliminate dangerous irregular crossings.", "migration", 5),
    Q("All EU member states must participate in mandatory burden-sharing and relocation quotas to support frontline Mediterranean nations.", "migration", 5),
    Q("Undocumented immigrants currently residing inside European borders should receive broad administrative amnesties and unrestricted work rights.", "migration", 5),
    Q("Border guards who turn away individuals seeking international protection before examining their claims should face direct criminal penalties.", "migration", 5),
    Q("Irregular migrants must have equal access to public healthcare, housing, and higher education without any reporting to immigration authorities.", "migration", 5),
    Q("Deporting asylum seekers or holding them in detention camps before their claims are fully processed is an unacceptable human rights violation.", "migration", 10),

    Q("The EU should directly fund physical walls, fences, and fortified surveillance barriers along all external land borders.", "migration", -5),
    Q("Frontex border forces should be empowered to turn back unauthorized migrant boats before they enter European territorial waters.", "migration", -5),
    Q("Asylum claims should be processed strictly outside the European continent in third-party partner countries.", "migration", -5),
    Q("Member states must retain the sovereign legal right to suspend the right to asylum and close their borders during migration emergencies.", "migration", -5),
    Q("Border security forces should be legally authorized to use physical barricades, water cannons, and tear gas to stop mass border breaches.", "migration", -5),
    Q("Mandatory biometric cataloging, DNA sampling, and secure closed detention must be enforced for anyone crossing external borders without papers.", "migration", -5),
    Q("Citizenship through birth on national soil should be eliminated, ensuring that nationality is passed exclusively through parental heritage.", "migration", -5),
    Q("Anyone entering Europe without authorization should be subject to immediate, unconditional deportation without access to domestic courts.", "migration", -10)
];
