// Fiches de cours — une par compétence du référentiel (arrêté du 8 janvier 2025)
const COURS = [
/* ===================== BLOC 1 ===================== */
{ code:"C1.1", bloc:1, classe:"1re", titre:"Positionner les activités logistiques dans la supply chain",
  resume:"Flux physiques, flux d'information, acteurs de la chaîne.",
  objectif:"Situer ton poste de travail dans la chaîne qui va du fournisseur au client final.",
  sections:[
    { t:"La supply chain (chaîne logistique)", p:"C'est l'ensemble des étapes qui permettent de mettre un produit à disposition du client : au bon endroit, au bon moment, en bonne quantité, en bon état et au meilleur coût." },
    { t:"Les acteurs", l:["<strong>Fournisseurs</strong> : produisent ou vendent les marchandises.","<strong>Transporteurs</strong> : acheminent les produits entre les sites.","<strong>Entrepôts / plateformes</strong> : reçoivent, stockent, préparent, expédient.","<strong>Distributeurs</strong> : magasins, sites e-commerce.","<strong>Clients</strong> : internes (un autre service de l'entreprise) ou externes."] },
    { t:"Les trois flux", tab:[["Flux","Ce qui circule","Exemple"],["Physique","Les marchandises","20 palettes de chaussures"],["D'information","Les données et documents","Commande, bon de livraison, message EDI"],["Financier","L'argent","Facture, paiement du fournisseur"]] },
    { t:"Les zones d'un entrepôt", l:["Quais de réception","Zone de contrôle","Zone de stockage (palettiers, rayonnages)","Zone de préparation de commandes","Zone d'emballage / colisage","Quais d'expédition"] }
  ],
  retenir:["Flux physique et flux d'information circulent en sens inverse : la commande remonte, la marchandise descend.","Chaque opérateur est un maillon : une erreur à la réception se retrouve chez le client.","La logistique cherche le meilleur service au meilleur coût."],
  vocabulaire:[["Supply chain","Chaîne logistique globale du fournisseur au client final"],["Flux tendu","Organisation qui limite les stocks au strict nécessaire"],["EDI","Échange de données informatisé entre entreprises"],["WMS","Logiciel de gestion d'entrepôt (Warehouse Management System)"]],
  questions:["Dessine la supply chain d'ÔFil de l'eau et place l'entrepôt dessus.","Donne un exemple de flux d'information qui déclenche un flux physique.","Que se passe-t-il pour le client si la réception fait une erreur de quantité ?"] },

{ code:"C1.2", bloc:1, classe:"1re/Tle", titre:"Mettre en œuvre les règles de sécurité",
  resume:"Danger, risque, prévention, EPI, document unique.",
  objectif:"Repérer les dangers, appliquer les consignes et proposer des mesures de prévention.",
  sections:[
    { t:"Danger ou risque ?", p:"Le <strong>danger</strong> est ce qui peut causer un dommage (un chariot en mouvement). Le <strong>risque</strong> apparaît quand une personne est exposée à ce danger (un piéton dans l'allée du chariot)." },
    { t:"Les principaux risques en entrepôt", l:["Manutention manuelle : troubles musculo-squelettiques (TMS), lombalgies","Circulation des engins : collision, renversement","Chutes de plain-pied ou de hauteur","Chute d'objets depuis les palettiers","Incendie, produits dangereux"] },
    { t:"Les 9 principes généraux de prévention", p:"Prévus par le Code du travail (article L. 4121-2) :", l:["Éviter les risques","Évaluer les risques qui ne peuvent pas être évités","Combattre les risques à la source","Adapter le travail à l'homme","Tenir compte de l'évolution de la technique","Remplacer ce qui est dangereux par ce qui l'est moins","Planifier la prévention","Donner la priorité aux protections collectives sur les protections individuelles","Donner les instructions appropriées aux travailleurs"] },
    { t:"Les outils de la prévention", l:["<strong>DUER</strong> (document unique d'évaluation des risques) : l'employeur y recense les risques et les actions.","<strong>Plan de circulation</strong> : séparation piétons / engins, sens de circulation.","<strong>Protections collectives</strong> : barrières, marquage au sol, éclairage.","<strong>EPI</strong> : chaussures de sécurité, gants, gilet haute visibilité, casque si nécessaire."] }
  ],
  retenir:["Protection collective d'abord, EPI ensuite.","Toute situation dangereuse se signale immédiatement au responsable.","Réveil musculaire avant l'activité physique : il prépare le corps et réduit les TMS."],
  vocabulaire:[["TMS","Troubles musculo-squelettiques : douleurs des articulations, muscles, tendons"],["DUER","Document unique d'évaluation des risques professionnels"],["EPI","Équipement de protection individuelle"],["Presqu'accident","Événement qui aurait pu blesser quelqu'un mais sans dommage"]],
  questions:["Donne un danger et le risque qui lui correspond sur le plateau technique.","Pour ce risque, propose une protection collective et un EPI.","Quelle situation à risque pourrais-tu décrire dans ton dossier prévention E31 ?"] },

{ code:"C1.3", bloc:1, classe:"1re", titre:"Préparer l'action de réception",
  resume:"Planning des arrivées, préparation du quai et des documents.",
  objectif:"Organiser la réception avant l'arrivée du camion.",
  sections:[
    { t:"Anticiper les arrivées", l:["Consulter le <strong>planning de réception</strong> (prises de rendez-vous transporteurs).","Récupérer la <strong>commande fournisseur</strong> pour connaître les produits attendus.","Prévoir la place au quai et en zone de contrôle.","Prévoir le personnel et les engins (transpalette, gerbeur)."] },
    { t:"Préparer le poste", l:["Quai dégagé, niveleur de quai en état, éclairage","Engin vérifié (vérifications de prise de poste)","Documents prêts : bon de commande, fiche de réception, étiquettes","Terminal radio (scanner) chargé et connecté au WMS"] }
  ],
  retenir:["Une réception préparée est plus rapide et plus sûre.","On compare toujours ce qui arrive avec ce qui a été commandé."],
  vocabulaire:[["Prise de rendez-vous","Créneau horaire réservé par le transporteur pour décharger"],["Niveleur de quai","Plateforme qui fait le lien entre le quai et le plancher du camion"]],
  questions:["Liste dans l'ordre ce que tu prépares avant l'arrivée d'un camion.","Pourquoi la prise de rendez-vous est-elle utile pour l'entrepôt et pour le transporteur ?"] },

{ code:"C1.4", bloc:1, classe:"1re", titre:"Traiter les opérations de réception",
  resume:"Contrôles, réserves, anomalies, enregistrement.",
  objectif:"Contrôler une livraison, émettre des réserves et enregistrer l'entrée en stock.",
  sections:[
    { t:"Accueillir le conducteur", p:"Accueil courtois, vérification du rendez-vous, indication du quai, rappel des consignes de sécurité (moteur coupé, cales, conducteur dans la zone prévue)." },
    { t:"Le contrôle contradictoire (devant le conducteur)", l:["Compter les palettes ou colis","Vérifier l'état apparent : emballage abîmé, film déchiré, trace d'humidité","Comparer avec la lettre de voiture et le bon de livraison"] },
    { t:"Les réserves", p:"En cas d'anomalie, on écrit des <strong>réserves précises</strong> sur la lettre de voiture, signées par le conducteur : nombre de colis concernés et nature du dommage. « Sous réserve de déballage » n'a aucune valeur. Les réserves sont confirmées au transporteur par lettre recommandée dans les <strong>3 jours</strong> (hors jours fériés) qui suivent la réception (Code de commerce, art. L. 133-3)." },
    { t:"Le contrôle détaillé (après le départ du camion)", l:["Contrôle quantitatif : références et quantités","Contrôle qualitatif : conformité, état, dates (DLC/DDM si besoin)","Rédaction d'une fiche d'anomalie si écart","Saisie de l'entrée dans le WMS, étiquetage"] }
  ],
  retenir:["Réserves = précises, écrites, signées.","Ce qui n'est pas noté à la livraison est très difficile à réclamer ensuite.","Le stock informatique doit correspondre au stock physique dès la réception."],
  vocabulaire:[["Lettre de voiture","Document de transport qui accompagne la marchandise (CMR à l'international)"],["Bon de livraison","Liste des produits livrés, émise par le fournisseur"],["Réserve","Mention écrite d'une anomalie constatée à la livraison"],["Fiche d'anomalie","Document interne qui décrit un écart"]],
  questions:["Rédige une réserve correcte pour 2 colis écrasés sur 20.","Quelle différence entre contrôle contradictoire et contrôle détaillé ?"] },

{ code:"C1.5", bloc:1, classe:"1re", titre:"Mettre en stock les produits",
  resume:"Adressage, emplacements, méthode ABC, FIFO.",
  objectif:"Ranger le bon produit au bon emplacement, en sécurité.",
  sections:[
    { t:"L'adressage", p:"Chaque emplacement a une adresse unique : <strong>allée – travée (colonne) – niveau – alvéole</strong>. Exemple : B-04-2-1 = allée B, travée 4, niveau 2, alvéole 1." },
    { t:"Emplacement fixe ou dynamique", tab:[["","Fixe","Dynamique (aléatoire)"],["Principe","Chaque article a toujours la même place","Le WMS choisit une place libre"],["Avantage","Facile à retenir","Meilleur remplissage"],["Inconvénient","Places vides quand l'article manque","Dépend du WMS et de la saisie"]] },
    { t:"Où placer les produits ?", l:["<strong>Méthode ABC</strong> : les articles les plus demandés (A) près de la zone de préparation, à hauteur d'homme.","Les produits lourds en bas, les légers en haut.","Respecter la <strong>charge maximale</strong> affichée sur le palettier.","<strong>FIFO</strong> (premier entré, premier sorti) ou <strong>FEFO</strong> (premier périmé, premier sorti) pour les produits datés."] }
  ],
  retenir:["Un produit mal adressé est un produit perdu.","On scanne l'emplacement ET le produit pour valider le rangement.","Jamais de palette abîmée ou instable dans un palettier."],
  vocabulaire:[["Palettier","Structure métallique de stockage des palettes"],["Alvéole","Emplacement d'une palette dans une travée"],["Méthode ABC","Classement des articles selon leur importance (règle des 20/80)"]],
  questions:["Explique l'adresse C-12-3-2.","Pourquoi place-t-on les articles A près de la zone de préparation ?"] },

{ code:"C1.6", bloc:1, classe:"1re", titre:"Gérer le suivi des stocks",
  resume:"Inventaire, écarts, stock d'alerte, rotation.",
  objectif:"Contrôler le stock, calculer les indicateurs et participer à l'inventaire.",
  sections:[
    { t:"Les niveaux de stock", l:["<strong>Stock de sécurité</strong> : réserve pour faire face à un retard ou une hausse de la demande.","<strong>Stock d'alerte</strong> = consommation moyenne journalière × délai de livraison (en jours) + stock de sécurité. Quand on l'atteint, on recommande.","<strong>Stock maximum</strong> : à ne pas dépasser (place, argent immobilisé)."] },
    { t:"Les indicateurs", tab:[["Indicateur","Formule"],["Stock moyen","(stock initial + stock final) ÷ 2"],["Taux de rotation","sorties de la période ÷ stock moyen"],["Couverture (en jours)","stock ÷ consommation moyenne journalière"]] },
    { t:"L'inventaire", l:["<strong>Annuel (intermittent)</strong> : comptage de tout le stock, obligatoire au moins une fois par an.","<strong>Tournant</strong> : on compte une partie des emplacements chaque semaine.","<strong>Écart</strong> = stock physique – stock informatique. On recompte, puis on cherche la cause (erreur de saisie, casse, vol)."] }
  ],
  retenir:["Exemple : 40 unités/jour × 5 jours + 60 = stock d'alerte de 260 unités.","Plus la rotation est élevée, plus le stock « tourne » vite.","Un écart se justifie toujours avant d'être corrigé dans le WMS."],
  vocabulaire:[["Rupture","Le produit manque alors qu'il est demandé"],["Surstock","Stock trop important qui coûte cher"],["Démarque","Perte de marchandise (casse, vol, erreur)"]],
  questions:["Calcule le stock moyen si le stock passe de 300 à 500 unités.","Avec 2 000 sorties dans l'année, quel est le taux de rotation ?","Cite deux causes possibles d'un écart d'inventaire."] },

/* ===================== BLOC 2 ===================== */
{ code:"C2.1", bloc:2, classe:"1re/Tle", titre:"Répondre à la demande des clients",
  resume:"Client interne/externe, commande, délai, qualité de service.",
  objectif:"Comprendre la demande du client et y répondre dans les délais.",
  sections:[
    { t:"Qui est le client ?", l:["<strong>Client externe</strong> : une autre entreprise ou un particulier qui achète.","<strong>Client interne</strong> : un service de ta propre entreprise (atelier de production, magasin)."] },
    { t:"Analyser une commande", l:["Références et quantités","Date et heure de livraison souhaitées","Adresse et contraintes du lieu de livraison (quai, horaires)","Exigences particulières : emballage, étiquetage, hauteur de palette"] },
    { t:"Mesurer la satisfaction", l:["<strong>Taux de service</strong> = commandes livrées conformes et à l'heure ÷ commandes totales × 100","Taux de litiges, délai moyen de traitement","Retours clients"] },
    { t:"Communiquer", p:"Prévenir le client dès qu'un problème est connu (rupture, retard) et proposer une solution : livraison partielle, produit de remplacement, nouvelle date." }
  ],
  retenir:["Le client juge la logistique sur : le délai, la quantité, l'état du produit.","Mieux vaut prévenir d'un retard que le laisser découvrir."],
  vocabulaire:[["Taux de service","Pourcentage de commandes servies sans erreur et dans les délais"],["Reliquat","Partie d'une commande livrée plus tard"]],
  questions:["Donne un exemple de client interne dans un entrepôt.","Un article manque : rédige le message que tu envoies au client."] },

{ code:"C2.2", bloc:2, classe:"1re/Tle", titre:"Optimiser les préparations de commandes",
  resume:"Méthodes de picking, outils, palettisation.",
  objectif:"Préparer vite, sans erreur, et constituer une unité de charge stable.",
  sections:[
    { t:"Les méthodes de préparation", tab:[["Méthode","Principe"],["Par commande","Le préparateur prépare une commande complète"],["Par lot (batch)","Il prélève pour plusieurs commandes en même temps puis on trie"],["Par zone","Chaque préparateur reste dans sa zone, la commande passe de zone en zone"]] },
    { t:"Les outils", l:["Bon de préparation papier","Terminal radio (scanner)","Commande vocale (voice picking)","Pick-to-light (voyants sur les emplacements)"] },
    { t:"Optimiser", l:["Bon de préparation trié dans l'ordre du parcours","Articles A près de la zone de départ","Lourds en bas, fragiles en haut de la palette","Filmer et étiqueter la palette"] },
    { t:"Calculer", p:"Palette Europe : 1 200 × 800 mm. Nombre de cartons par couche = (1 200 ÷ longueur carton) × (800 ÷ largeur carton), en gardant les nombres entiers. Hauteur totale = hauteur palette (environ 144 mm) + nombre de couches × hauteur carton." }
  ],
  retenir:["La productivité se mesure en lignes (ou colis) préparées par heure.","Une erreur de préparation = un client mécontent + un retour qui coûte cher.","Respecter la hauteur maximale demandée par le client ou le transporteur."],
  vocabulaire:[["Picking","Prélèvement des articles dans les emplacements"],["Ligne de commande","Une référence avec sa quantité"],["Unité de charge","Ensemble manutentionné en une fois (palette, roll)"],["Colisage","Mise en carton des articles"]],
  questions:["Quelle méthode choisir pour 50 petites commandes de 2 articles ? Pourquoi ?","Combien de cartons de 400 × 200 mm par couche sur une palette Europe ?"] },

{ code:"C2.3", bloc:2, classe:"1re", titre:"Contribuer au processus de logistique industrielle",
  resume:"Approvisionner une ligne de production, kanban, juste-à-temps.",
  objectif:"Mettre les composants à disposition de la production au bon moment.",
  sections:[
    { t:"La logistique industrielle", p:"Dans une usine, le magasin approvisionne les lignes de production en composants. Si un composant manque, la ligne s'arrête : c'est très coûteux." },
    { t:"Les méthodes", l:["<strong>Juste-à-temps</strong> : livrer la quantité nécessaire au moment où elle est utilisée.","<strong>Kanban</strong> : une étiquette (ou un bac vide) revient au magasin et déclenche le réapprovisionnement.","<strong>Bord de ligne</strong> : petit stock au poste de travail.","<strong>Kitting</strong> : préparer un kit de toutes les pièces pour un produit."] },
    { t:"Les documents internes", l:["Bon de sortie / bon de prélèvement","Ordre de fabrication (OF)","Fiche kanban"] }
  ],
  retenir:["Le client de la logistique industrielle est souvent un client interne : l'atelier.","Bac vide = signal de réapprovisionnement."],
  vocabulaire:[["Kanban","Système d'étiquettes qui déclenche la production ou l'approvisionnement"],["OF","Ordre de fabrication"],["Bord de ligne","Zone de stock au pied du poste de production"]],
  questions:["Explique le fonctionnement d'un kanban avec deux bacs.","Quelles sont les conséquences d'une rupture en bord de ligne ?"] },

{ code:"C2.4", bloc:2, classe:"Tle", titre:"Organiser une tournée de livraison",
  resume:"Compte propre, itinéraire, temps de conduite, plan de chargement.",
  objectif:"Préparer une tournée réalisée avec les véhicules de l'entreprise.",
  sections:[
    { t:"Compte propre ou compte d'autrui", p:"En <strong>compte propre</strong>, l'entreprise transporte ses propres marchandises avec ses véhicules et ses conducteurs. En <strong>compte d'autrui</strong>, elle confie le transport à un transporteur professionnel." },
    { t:"Préparer la tournée", l:["Lister les clients, adresses, horaires d'ouverture","Choisir l'ordre de passage (le plus court, en respectant les horaires)","Calculer distances et temps (temps de trajet + temps de livraison chez chaque client)","Vérifier le poids et le volume par rapport au véhicule"] },
    { t:"Le plan de chargement", p:"On charge en <strong>ordre inverse de livraison</strong> : le dernier client livré est chargé en premier (au fond). On répartit le poids et on arrime la charge." },
    { t:"Temps de conduite (poids lourds, règlement CE 561/2006)", l:["Conduite journalière : 9 h maximum (10 h deux fois par semaine)","Pause de 45 min après 4 h 30 de conduite (ou 15 min + 30 min)","Repos journalier : 11 h (réductible à 9 h trois fois entre deux repos hebdomadaires)","Conduite hebdomadaire : 56 h maximum, 90 h sur deux semaines"] }
  ],
  retenir:["Temps = distance ÷ vitesse moyenne. Exemple : 120 km à 60 km/h = 2 h.","Dernier livré = premier chargé.","Les temps de conduite s'appliquent aux poids lourds : vérifie toujours la réglementation à jour."],
  vocabulaire:[["Tournée","Circuit de livraison de plusieurs clients"],["Chronotachygraphe","Appareil qui enregistre les temps de conduite"],["Arrimage","Fixation de la charge dans le véhicule"]],
  questions:["Un conducteur a roulé 4 h 30 : que doit-il faire ?","Trois clients A, B, C livrés dans cet ordre : dans quel ordre charges-tu ?"] },

{ code:"C2.5", bloc:2, classe:"Tle", titre:"Traiter les retours des supports de charge et contenants",
  resume:"Palettes, bacs, rolls consignés, logistique inverse.",
  objectif:"Gérer les supports qui reviennent pour éviter pertes et coûts.",
  sections:[
    { t:"Les supports et contenants", l:["Palettes Europe (EPAL) : 1 200 × 800 mm, réutilisables et échangeables","Palettes perdues (à usage unique)","Bacs plastiques, caisses consignées","Rolls (conteneurs grillagés à roulettes)"] },
    { t:"L'échange de palettes", p:"À la livraison, le client rend autant de palettes vides en bon état qu'il en reçoit pleines. Sinon, on remplit un <strong>bon d'échange de palettes</strong> (ou bon de dette) signé par les deux parties." },
    { t:"Traiter les retours", l:["Compter et contrôler l'état (planche cassée, clou dépassant = palette à réparer ou à jeter)","Trier : réutilisable / à réparer / à recycler","Mettre à jour le compte de supports de chaque client ou transporteur","Nettoyer les bacs si nécessaire (alimentaire)"] }
  ],
  retenir:["Un support perdu, c'est de l'argent perdu.","Toujours un document signé quand l'échange n'est pas fait.","La réutilisation des supports fait partie de la démarche RSE."],
  vocabulaire:[["Logistique inverse (retour)","Flux qui revient du client vers l'entreprise"],["Consigne","Somme due tant que le contenant n'est pas rendu"],["EPAL","Association qui certifie les palettes Europe"]],
  questions:["Tu livres 12 palettes et le client n'en rend que 8 : que fais-tu ?","Pourquoi trier les palettes au retour ?"] },

{ code:"C2.6", bloc:2, classe:"1re", titre:"Confier l'expédition à un prestataire de transport",
  resume:"Messagerie, lots, lettre de voiture, choix du transporteur.",
  objectif:"Choisir un transporteur et préparer les documents d'expédition.",
  sections:[
    { t:"Les types de transport routier", tab:[["Type","Pour quoi ?"],["Messagerie","Colis et petits envois, regroupés sur des plateformes"],["Lot partiel","Quelques palettes, le camion fait plusieurs ramasses"],["Lot complet","Un camion entier pour un seul client"]] },
    { t:"Choisir le transporteur", l:["Délai de livraison","Prix (grille tarifaire selon poids, zone, nombre de palettes)","Fiabilité (taux de retard, litiges)","Capacité à transporter le produit (hayon, température…)"] },
    { t:"Les documents", l:["<strong>Lettre de voiture</strong> (national) ou <strong>CMR</strong> (international) : expéditeur, destinataire, transporteur, nature et poids de la marchandise, nombre de colis","Étiquettes colis / palettes","Bon de livraison pour le client"] },
    { t:"Le chargement", p:"Contrôler les palettes avant chargement, faire signer la lettre de voiture au conducteur, noter l'heure de départ et informer le client." }
  ],
  retenir:["Le bon transporteur dépend du volume, du délai et du prix.","La lettre de voiture est signée par l'expéditeur, le transporteur puis le destinataire."],
  vocabulaire:[["Expéditeur","Celui qui envoie la marchandise"],["Destinataire","Celui qui la reçoit"],["Hayon","Plateforme élévatrice à l'arrière du camion"]],
  questions:["Pour 3 palettes vers Lyon, quel type de transport choisis-tu ?","Quelles informations sont obligatoires sur une lettre de voiture ?"] },

/* ===================== BLOC 3 ===================== */
{ code:"C3.1", bloc:3, classe:"Tle", titre:"Adapter le processus selon le type de produit",
  resume:"Produits dangereux, température dirigée, fragiles, pharma.",
  objectif:"Appliquer les règles propres à chaque famille de produits spécifiques.",
  sections:[
    { t:"Produits dangereux (ADR)", p:"L'ADR est l'accord européen sur le transport routier des marchandises dangereuses. Il classe les produits en <strong>9 classes</strong> (1 explosifs, 2 gaz, 3 liquides inflammables, 4 solides inflammables, 5 comburants et peroxydes, 6 toxiques et infectieux, 7 radioactifs, 8 corrosifs, 9 divers).", l:["Étiquettes de danger en losange sur les colis","Numéro ONU (4 chiffres) qui identifie la matière","Panneau orange sur le véhicule","Fiche de données de sécurité (FDS) et règles de stockage séparé (incompatibilités)"] },
    { t:"Produits sous température dirigée", l:["Produits frais : généralement entre 0 et +4 °C","Surgelés : –18 °C ou moins","<strong>Chaîne du froid</strong> : ne jamais l'interrompre, relever et enregistrer les températures"] },
    { t:"Autres produits spécifiques", l:["<strong>Fragiles</strong> : pictogrammes, calage, ne pas gerber","<strong>Pharmaceutiques</strong> : bonnes pratiques de distribution, traçabilité des lots, température","<strong>Alimentaires</strong> : DLC / DDM, hygiène, FEFO","<strong>Hors normes</strong> : charges longues ou lourdes, engins adaptés"] }
  ],
  retenir:["Toujours lire les pictogrammes et la fiche de données de sécurité.","Un produit dangereux mal stocké met en danger tout l'entrepôt.","La température se contrôle à la réception, au stockage et à l'expédition."],
  vocabulaire:[["ADR","Accord européen relatif au transport international des marchandises dangereuses par route"],["FDS","Fiche de données de sécurité d'un produit chimique"],["DLC","Date limite de consommation (à consommer jusqu'au)"],["DDM","Date de durabilité minimale (à consommer de préférence avant)"]],
  questions:["Cite trois classes ADR et un exemple de produit pour chacune.","Une palette de yaourts arrive à +9 °C : que fais-tu ?"] },

{ code:"C3.2", bloc:3, classe:"Tle", titre:"Mettre en œuvre la traçabilité",
  resume:"Lots, codes-barres, SSCC, rappel produit, litiges.",
  objectif:"Pouvoir retrouver à tout moment l'origine et la destination d'un produit.",
  sections:[
    { t:"Deux sens de traçabilité", l:["<strong>Ascendante</strong> : à partir d'un produit, retrouver son origine (fournisseur, lot, date de réception).","<strong>Descendante</strong> : à partir d'un lot, retrouver tous les clients livrés (utile pour un rappel)."] },
    { t:"Les outils", tab:[["Outil","Rôle"],["Numéro de lot","Identifie un groupe de produits fabriqués ensemble"],["Code EAN-13","Identifie l'article (13 chiffres)"],["SSCC","Numéro unique à 18 chiffres d'une unité logistique (palette, colis), sur l'étiquette logistique GS1"],["RFID","Puce lue à distance par radio"],["WMS","Enregistre chaque mouvement : entrée, emplacement, sortie"]] },
    { t:"Gérer un litige ou un retour", l:["Identifier le produit et le lot","Retrouver les documents (bon de réception, bon de livraison, lettre de voiture)","Isoler le produit en zone de quarantaine","Ouvrir un dossier litige avec photos et décision (retour fournisseur, destruction, avoir)"] }
  ],
  retenir:["Chaque scan est une preuve : un mouvement non scanné casse la traçabilité.","Lors d'un rappel produit, la traçabilité descendante permet de prévenir les bons clients rapidement."],
  vocabulaire:[["Quarantaine","Zone où l'on bloque un produit en attente de décision"],["Rappel produit","Retrait des produits déjà livrés à cause d'un défaut"],["GS1","Organisme qui gère les standards de codes-barres"]],
  questions:["Différence entre traçabilité ascendante et descendante ?","Un client signale un lot défectueux : quelles étapes suis-tu ?"] },

{ code:"C3.3", bloc:3, classe:"Tle", titre:"Proposer des améliorations dans une démarche RSE",
  resume:"Environnement, social, économique : agir en logistique.",
  objectif:"Analyser une situation et proposer des actions responsables et chiffrées.",
  sections:[
    { t:"La RSE : trois piliers", l:["<strong>Environnemental</strong> : déchets, énergie, émissions de CO₂","<strong>Social</strong> : santé et sécurité, conditions de travail, inclusion","<strong>Économique</strong> : réduire les coûts, rester performant"] },
    { t:"Exemples d'actions en logistique", l:["Réduire et trier les emballages, réutiliser les cartons, films plus fins","Éclairage LED avec détecteurs, portes rapides en zone froide","Optimiser le remplissage des camions, éco-conduite","Équipements qui limitent le port de charges (aide à la manutention)","Accueil et formation des nouveaux, accessibilité aux personnes handicapées"] },
    { t:"Construire une proposition", l:["Constat chiffré (ex. : 3 tonnes de carton jetées par mois)","Action proposée","Coût et bénéfice attendus","Indicateur de suivi (ex. : tonnes recyclées par mois)"] }
  ],
  retenir:["Une bonne proposition RSE est concrète, chiffrée et mesurable.","Les trois piliers se renforcent : moins d'emballage = moins de déchets et moins de coûts."],
  vocabulaire:[["RSE","Responsabilité sociétale des entreprises"],["Indicateur","Mesure chiffrée qui permet de suivre un résultat"],["Éco-conduite","Conduite souple qui réduit consommation et usure"]],
  questions:["Propose une action RSE pour chacun des trois piliers sur le plateau technique.","Quel indicateur choisirais-tu pour suivre la réduction des déchets ?"] },

{ code:"C3.4", bloc:3, classe:"Tle", titre:"Coordonner une petite équipe logistique",
  resume:"Brief, répartition des tâches, aléas, intégration.",
  objectif:"Organiser le travail de quelques opérateurs et réagir aux imprévus.",
  sections:[
    { t:"Le rôle du chef d'équipe", l:["Répartir les tâches selon la charge et les compétences","Transmettre les consignes (sécurité, priorités, objectifs)","Suivre l'avancement et les indicateurs","Remonter les problèmes à la hiérarchie"] },
    { t:"Le brief de début de poste (5 à 10 min)", l:["Sécurité du jour","Volume à traiter et priorités","Affectation des postes","Questions de l'équipe"] },
    { t:"Gérer un aléa", p:"Absence d'un opérateur, pic de commandes, panne d'engin : on évalue l'impact, on réorganise (polyvalence, priorités clients), on informe la hiérarchie et les clients si besoin." },
    { t:"Intégrer un nouveau collaborateur", l:["Accueil et visite du site","Consignes de sécurité et EPI","Parrainage par un opérateur expérimenté","Adaptation du poste si nécessaire (handicap, restrictions médicales)"] }
  ],
  retenir:["Une consigne claire = qui, quoi, où, quand, comment.","Le chef d'équipe montre l'exemple, notamment sur la sécurité.","Écouter l'équipe permet de repérer les problèmes plus tôt."],
  vocabulaire:[["Polyvalence","Capacité à tenir plusieurs postes"],["Brief","Réunion courte de début de poste"],["Productivité","Quantité produite par heure de travail"]],
  questions:["Prépare les 4 points de ton brief pour demain matin sur le plateau.","Un opérateur sur six est absent : comment réorganises-tu le travail ?"] },

/* ===================== BLOC 4 ===================== */
{ code:"C4.1", bloc:4, classe:"1re/Tle", titre:"Mettre en service un engin en sécurité",
  resume:"Autorisation de conduite, vérifications, plaque de charge.",
  objectif:"Vérifier l'engin et son adaptation à la tâche avant de conduire.",
  sections:[
    { t:"Pour conduire", l:["Aptitude médicale","Formation et contrôle des connaissances (CACES R489 recommandé)","Connaissance du site","<strong>Autorisation de conduite</strong> écrite délivrée par l'employeur"] },
    { t:"Les vérifications de prise de poste", l:["Tour de l'engin : fuites, roues, fourches, mât, chaînes","Niveau de charge batterie ou de carburant","Freins, direction, avertisseur sonore, feux","Dispositifs de sécurité : ceinture, protège-conducteur","Lire le carnet de bord : anomalies signalées"] },
    { t:"La plaque de charge", p:"Elle indique la charge maximale selon la hauteur de levée et la distance du centre de gravité de la charge. On ne la dépasse jamais." }
  ],
  retenir:["Engin en anomalie = engin arrêté et signalé.","Le CACES ne suffit pas : il faut l'autorisation de l'employeur."],
  vocabulaire:[["CACES","Certificat d'aptitude à la conduite en sécurité"],["R489","Recommandation de la CNAM pour les chariots à conducteur porté"],["Centre de gravité","Point d'équilibre de la charge"]],
  questions:["Cite cinq vérifications de prise de poste.","Que fais-tu si les freins sont défectueux ?"] },

{ code:"C4.2", bloc:4, classe:"1re/Tle", titre:"Conduire un engin de manutention",
  resume:"Circulation, visibilité, pentes, piétons.",
  objectif:"Circuler en sécurité, à vide et en charge.",
  sections:[
    { t:"Règles de circulation", l:["Respecter le plan de circulation et la vitesse du site","Fourches basses (environ 15 cm du sol) pendant les déplacements","Charge inclinée vers l'arrière (mât incliné)","Marche arrière si la charge masque la vue","Avertir aux croisements et aux sorties de zone"] },
    { t:"Les pentes", p:"En charge, la charge est toujours du côté amont (vers le haut de la pente) : on monte en marche avant et on descend en marche arrière. Jamais de demi-tour dans une pente." },
    { t:"Interdits", l:["Transporter une personne","Lever une personne sur les fourches","Circuler fourches levées","Freiner brutalement ou prendre un virage rapide en charge"] }
  ],
  retenir:["Le piéton est prioritaire mais le cariste doit toujours anticiper.","Risque n°1 : le renversement. En cas de basculement, rester dans la cabine, ceinture attachée."],
  vocabulaire:[["Amont","Côté haut de la pente"],["Porte-à-faux","Charge placée en avant des roues avant"]],
  questions:["Comment descends-tu une pente avec une charge ?","Pourquoi les fourches doivent-elles rester basses ?"] },

{ code:"C4.3", bloc:4, classe:"1re/Tle", titre:"Manœuvrer un engin (cat. 1B, 3, 5)",
  resume:"Prise, dépose, gerbage, stockage en palettier.",
  objectif:"Prendre, déplacer et déposer une charge en sécurité.",
  sections:[
    { t:"Les catégories R489 du Bac Pro", tab:[["Catégorie","Engins"],["1B","Gerbeurs à conducteur porté (hauteur de levée supérieure à 1,20 m)"],["3","Chariots élévateurs frontaux en porte-à-faux (capacité jusqu'à 6 000 kg)"],["5","Chariots élévateurs à mât rétractable"]] },
    { t:"Prendre une charge", l:["S'arrêter face à la charge, fourches à la bonne hauteur","Écarter les fourches au maximum selon la palette","Engager les fourches à fond, lever légèrement, incliner le mât vers l'arrière","Reculer, puis descendre en position de circulation"] },
    { t:"Gerber / stocker en hauteur", l:["Vérifier la place, la charge admissible du niveau et la plaque de charge","S'approcher lentement, lever à l'arrêt","Mât vertical pour déposer, puis dégager les fourches","Jamais de levée en roulant"] }
  ],
  retenir:["Lever et descendre uniquement à l'arrêt.","Une charge instable ne se lève pas : on la reconditionne."],
  vocabulaire:[["Gerbage","Empilement de charges les unes sur les autres"],["Mât rétractable","Mât qui avance et recule entre les longerons du chariot"]],
  questions:["Décris les étapes de prise d'une palette au sol.","Quelle catégorie R489 pour un chariot à mât rétractable ?"] },

{ code:"C4.4", bloc:4, classe:"1re/Tle", titre:"Effectuer les opérations de fin de poste",
  resume:"Stationnement, recharge, signalement des anomalies.",
  objectif:"Laisser l'engin en sécurité et prêt pour le prochain utilisateur.",
  sections:[
    { t:"Stationner", l:["Sur l'emplacement prévu, hors des allées et issues de secours","Fourches posées au sol, mât légèrement incliné vers l'avant","Frein de parc serré, contact coupé, clé retirée"] },
    { t:"Énergie", l:["Mettre en charge la batterie selon la procédure (zone ventilée, pas de flamme)","Ou refaire le plein (thermique, gaz) en zone autorisée"] },
    { t:"Maintenance de niveau 1", l:["Nettoyage sommaire","Contrôles visuels","Noter toute anomalie dans le carnet de bord et prévenir le responsable"] }
  ],
  retenir:["Clé retirée = personne ne peut utiliser l'engin sans autorisation.","Une anomalie non signalée met en danger le collègue suivant."],
  vocabulaire:[["Carnet de bord","Document où l'on note l'utilisation et les anomalies de l'engin"],["Maintenance de niveau 1","Entretien simple réalisé par le conducteur"]],
  questions:["Liste les étapes de fin de poste dans l'ordre.","Pourquoi recharger la batterie dans une zone ventilée ?"] }
];
