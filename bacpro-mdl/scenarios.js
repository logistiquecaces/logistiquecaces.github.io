// Scénarios pédagogiques — univers TRANSLOG France
const SECU_PLATEAU = ["Réveil musculaire de 5 minutes avant d'entrer sur le plateau","EPI obligatoires : chaussures de sécurité, gilet haute visibilité, gants pour la manutention","Respect du plan de circulation : allées piétons et allées engins","Gestes et postures : dos droit, jambes fléchies, charge près du corps","Toute anomalie ou presqu'accident est signalé immédiatement au professeur"];
const SECU_SALLE = ["Pas d'activité physique dans ce scénario : les règles de sécurité sont étudiées sur documents","Si une partie se déroule sur le plateau : EPI et réveil musculaire obligatoires"];

const SCENARIOS = [
/* ======================== 1re ======================== */
{ id:"S1.1", titre:"Bienvenue chez ÔFil de l'eau", classe:"1re", blocs:[1], competences:["C1.1"], duree:"2 séances de 3 h",
  entreprise:"ÔFil de l'eau – entrepôt d'articles de sport (Plaisir, 78)", lieu:"Salle puis plateau technique",
  evenement:"Tu es recruté(e) comme agent logisticien pour ta période d'essai. Le chef d'entrepôt, M. Garnier, te demande de préparer le livret d'accueil des prochains intérimaires.",
  contexte:"ÔFil de l'eau distribue des articles de sport (chaussures, textiles, ballons) à 45 magasins en Île-de-France et sur son site internet. L'entrepôt de 6 000 m² reçoit les marchandises de fournisseurs français et asiatiques, les stocke et prépare chaque jour environ 300 commandes. Il fait partie du groupe TRANSLOG France. Horaires : 6 h – 13 h et 13 h – 20 h.",
  missions:[
    { n:"M1", titre:"Repérer les zones", consigne:"À partir du plan de l'entrepôt, identifie et nomme chaque zone. Indique par des flèches le chemin d'un produit, du quai de réception au quai d'expédition.", livrable:"Plan annoté", duree:"45 min" },
    { n:"M2", titre:"Identifier les acteurs", consigne:"Classe les partenaires cités dans le mail de M. Garnier : fournisseurs, transporteurs, clients. Ajoute pour chacun ce qu'il apporte à ÔFil de l'eau.", livrable:"Tableau des acteurs", duree:"30 min" },
    { n:"M3", titre:"Dessiner la supply chain", consigne:"Réalise le schéma de la supply chain d'ÔFil de l'eau avec les trois flux (physique, information, financier) en trois couleurs.", livrable:"Schéma en couleur", duree:"45 min" },
    { n:"M4", titre:"Rédiger la page « Notre entrepôt »", consigne:"En 10 lignes maximum, présente l'entrepôt et le rôle d'un agent logisticien pour le livret d'accueil.", livrable:"Page du livret d'accueil", duree:"45 min" }
  ],
  documents:[
    { type:"Mail – de M. Garnier", style:"mail", texte:"Objet : livret d'accueil intérimaires\n\nBonjour,\nNos principaux partenaires : Sportex (Lille, fabricant de textile), Kicko Ltd (Vietnam, chaussures), Transport Express+ (livraisons magasins), DHL Freight (conteneurs du port du Havre), nos 45 magasins et nos clients web.\nMerci de me rendre le livret vendredi.\nM. Garnier, chef d'entrepôt" },
    { type:"Plan simplifié de l'entrepôt", style:"form", texte:"[Quais 1-4] → [Contrôle] → [Palettier A-D]\n                         ↓\n[Quais 5-8] ← [Emballage] ← [Préparation]\nBureau logistique : à côté du quai 4" },
    { type:"Post-it sur le bureau", style:"postit", texte:"N'oublie pas : le WMS s'appelle SimuLog. Tout mouvement = 1 scan !" }
  ],
  aleas:["Un intérimaire arrive demain matin et ne parle pas bien le français. M. Garnier te demande d'ajouter au livret une page avec des pictogrammes pour expliquer les zones."],
  indicateurs:[["C1.1","Les zones sont correctement identifiées · le cheminement du produit est logique · les trois flux sont représentés dans le bon sens · le rôle de l'agent logisticien est situé dans la chaîne"]],
  securite:SECU_SALLE,
  conscientisation:["Qu'est-ce qu'une supply chain ? Explique-le à quelqu'un qui ne connaît pas la logistique.","Pourquoi le flux d'information va-t-il dans le sens inverse du flux physique ?","Complète la fiche de cours C1.1 avec ton propre schéma."] },

{ id:"S1.2", titre:"Les risques du site", classe:"1re", blocs:[1], competences:["C1.2"], duree:"2 séances de 3 h",
  entreprise:"ÔFil de l'eau", lieu:"Plateau technique",
  evenement:"Lundi matin, un préparateur a été légèrement blessé au pied par un transpalette. La direction lance un « audit sécurité » et te confie l'observation de la zone de préparation.",
  contexte:"L'accident a eu lieu à l'intersection entre l'allée de préparation et l'allée de circulation des engins. Le préparateur ne portait pas ses chaussures de sécurité. Le DUER de l'entrepôt n'a pas été mis à jour depuis deux ans.",
  missions:[
    { n:"M1", titre:"Observer et repérer", consigne:"Sur le plateau, repère au moins 6 situations dangereuses. Pour chacune, note le danger et le risque.", livrable:"Grille d'observation", duree:"45 min" },
    { n:"M2", titre:"Analyser l'accident", consigne:"Retrouve les causes de l'accident de lundi (humaines, matérielles, organisationnelles).", livrable:"Arbre des causes simplifié", duree:"45 min" },
    { n:"M3", titre:"Proposer des mesures", consigne:"Pour chaque risque repéré, propose une mesure en appliquant les principes généraux de prévention (collective d'abord).", livrable:"Tableau de mesures", duree:"45 min" },
    { n:"M4", titre:"Afficher les consignes", consigne:"Réalise une affiche A4 « Les 5 règles d'or de la zone de préparation » avec pictogrammes.", livrable:"Affiche", duree:"45 min" }
  ],
  documents:[
    { type:"Déclaration interne d'accident", style:"form", texte:"Date : lundi 7 h 40 – Zone : préparation allée C\nVictime : Yanis T., préparateur intérimaire (2e jour)\nCirconstances : heurté au pied par un transpalette électrique en sortie d'allée\nLésion : contusion du pied droit\nEPI portés : gilet. Chaussures de sécurité : NON (« oubliées »)" },
    { type:"SMS du cariste", style:"sms", texte:"Je l'ai pas vu, il est sorti d'un coup de l'allée, y a pas de miroir à cet endroit 😕" },
    { type:"Extrait du DUER (2 ans)", style:"note", texte:"Zone préparation – Risque : heurt par engin – Gravité : 3/4 – Mesure prévue : marquage au sol (non réalisé)" }
  ],
  aleas:["Pendant ton observation, un collègue monte sur une palette pour attraper un carton au 2e niveau du rayonnage. Que fais-tu ? Note ta réaction et la consigne que tu proposes."],
  indicateurs:[["C1.2","Les dangers et les risques sont correctement distingués · les causes sont identifiées · les mesures respectent la priorité des protections collectives · les consignes sont claires et visuelles"]],
  securite:SECU_PLATEAU,
  conscientisation:["Quelle différence fais-tu maintenant entre un danger et un risque ?","Pourquoi la protection collective passe-t-elle avant l'EPI ?","Note une situation de ta PFMP qui pourrait servir à ton dossier prévention."] },

{ id:"S1.3", titre:"Le camion de Kicko arrive", classe:"1re", blocs:[1], competences:["C1.3","C1.4"], duree:"2 séances de 3 h",
  entreprise:"ÔFil de l'eau", lieu:"Plateau technique (quai)",
  evenement:"8 h 15 : le camion de DHL Freight se présente au quai 2 avec 20 palettes de chaussures du fournisseur Kicko, en avance de 45 minutes sur son rendez-vous.",
  contexte:"L'équipe réception est composée de 3 personnes. La commande n° CF-2026-118 prévoyait 20 palettes de 48 cartons (6 références). Une seconde livraison est prévue à 9 h au quai 3.",
  missions:[
    { n:"M1", titre:"Préparer la réception", consigne:"Vérifie le planning, prépare le quai, l'engin et les documents. Décide si tu acceptes le camion en avance.", livrable:"Check-list complétée", duree:"30 min" },
    { n:"M2", titre:"Accueillir le conducteur (jeu de rôle)", consigne:"Accueille le conducteur, rappelle les consignes de sécurité du quai, récupère les documents.", livrable:"Grille d'observation remplie par un camarade", duree:"20 min" },
    { n:"M3", titre:"Contrôler devant le conducteur", consigne:"Compte les palettes, vérifie l'état apparent, compare avec la lettre de voiture. Émets des réserves si nécessaire.", livrable:"Lettre de voiture annotée", duree:"40 min" },
    { n:"M4", titre:"Contrôle détaillé et enregistrement", consigne:"Contrôle les quantités par référence, remplis la fiche de réception et la fiche d'anomalie, saisis l'entrée dans SimuLog.", livrable:"Fiche de réception + fiche d'anomalie", duree:"60 min" }
  ],
  documents:[
    { type:"Lettre de voiture (extrait)", style:"form", texte:"Expéditeur : Kicko Ltd via port du Havre\nTransporteur : DHL Freight – plaque GH-482-TR\nDestinataire : ÔFil de l'eau, quai réception\nNombre de palettes : 20 – Poids total : 4 600 kg\nNature : chaussures de sport en cartons" },
    { type:"Bon de commande CF-2026-118", style:"form", texte:"KR-RUN42 : 4 palettes × 48 cartons\nKR-RUN43 : 4 palettes × 48 cartons\nKR-TRAIL40 : 3 palettes × 48 cartons\nKR-TRAIL41 : 3 palettes × 48 cartons\nKR-KID30 : 3 palettes × 48 cartons\nKR-KID32 : 3 palettes × 48 cartons" },
    { type:"Message Teams – chef d'équipe", style:"sms", texte:"Le quai 3 est réservé à 9 h pour Sportex. Si tu prends DHL en avance, libère le quai 2 avant 9 h 30 stp." }
  ],
  aleas:["Lors du contrôle, une palette de KR-TRAIL40 a son film déchiré et 3 cartons sont écrasés. Le conducteur est pressé et refuse d'attendre : « Signez, on verra après ! »","Au contrôle détaillé, il manque 6 cartons de KR-KID32."],
  indicateurs:[["C1.3","Le quai, l'engin et les documents sont prêts · la décision sur l'avance du camion est justifiée"],["C1.4","L'accueil est courtois et sécurisé · le contrôle est méthodique · les réserves sont précises (nombre et nature) · les écarts sont tracés · la saisie WMS est exacte"]],
  securite:SECU_PLATEAU.concat(["Camion : moteur coupé, cales en place avant toute entrée dans la remorque"]),
  conscientisation:["Pourquoi les réserves doivent-elles être précises ?","Quelle est la différence entre le contrôle devant le conducteur et le contrôle détaillé ?","Que se passe-t-il si tu signes sans réserve ?"] },

{ id:"S1.4", titre:"Ranger 20 palettes avant midi", classe:"1re", blocs:[1], competences:["C1.5","C1.6"], duree:"2 séances de 3 h",
  entreprise:"ÔFil de l'eau", lieu:"Plateau technique (palettier)",
  evenement:"Les palettes Kicko sont contrôlées. Le responsable veut que tout soit rangé avant 12 h, car les magasins attendent les nouvelles chaussures de running pour une promotion.",
  contexte:"L'entrepôt utilise un adressage allée-travée-niveau-alvéole. Les références de running sont classées A (forte demande). Le palettier supporte 1 000 kg par alvéole.",
  missions:[
    { n:"M1", titre:"Choisir les emplacements", consigne:"À partir de l'état des emplacements libres et de la classe ABC, propose un emplacement pour chaque palette. Justifie.", livrable:"Tableau d'affectation", duree:"45 min" },
    { n:"M2", titre:"Mettre en stock", consigne:"Range les palettes sur le plateau en scannant emplacement et produit.", livrable:"Palettes rangées et validées", duree:"60 min" },
    { n:"M3", titre:"Mettre à jour les stocks", consigne:"Calcule le nouveau stock de chaque référence et vérifie s'il dépasse le stock maximum.", livrable:"Fiche de stock à jour", duree:"30 min" },
    { n:"M4", titre:"Calculer le stock d'alerte", consigne:"Pour KR-RUN42, calcule le stock d'alerte et indique dans combien de jours il faudra recommander.", livrable:"Calcul justifié", duree:"30 min" }
  ],
  documents:[
    { type:"Extrait SimuLog – emplacements libres", style:"form", texte:"A-02-0-1 (sol, près préparation) libre\nA-02-1-2 libre\nA-03-0-2 libre\nC-10-3-1 libre\nC-11-3-2 libre\nD-15-4-1 libre" },
    { type:"Note du responsable stocks", style:"note", texte:"KR-RUN42 : stock avant réception 96 cartons · consommation moyenne 32 cartons/jour · délai fournisseur 5 jours · stock de sécurité 64 cartons · stock maximum 400 cartons.\nRappel : 1 palette = 48 cartons." },
    { type:"Post-it", style:"postit", texte:"Poids d'une palette Kicko ≈ 230 kg. Les A en bas, près de la prépa !" }
  ],
  aleas:["L'emplacement A-02-0-1 est en réalité occupé par une palette non saisie dans SimuLog. Que fais-tu ?"],
  indicateurs:[["C1.5","Les emplacements respectent la classe ABC et les charges admissibles · chaque rangement est scanné · aucune palette instable n'est stockée"],["C1.6","Les stocks sont mis à jour sans erreur · le stock d'alerte est correctement calculé et interprété"]],
  securite:SECU_PLATEAU,
  conscientisation:["Pourquoi les articles A sont-ils stockés près de la préparation ?","Explique avec tes mots à quoi sert le stock d'alerte.","Que risque-t-on si un emplacement occupé n'est pas enregistré dans le WMS ?"] },

{ id:"S2.1", titre:"Rush avant la promo running", classe:"1re", blocs:[2], competences:["C2.1","C2.2"], duree:"2 séances de 3 h",
  entreprise:"ÔFil de l'eau", lieu:"Plateau technique (zone de préparation)",
  evenement:"Mercredi 13 h : 8 magasins passent commande en même temps pour la promotion « Spécial running » qui démarre samedi. Les commandes doivent partir demain à 10 h.",
  contexte:"L'équipe de préparation compte 4 personnes. Les commandes contiennent de 3 à 8 lignes. Les magasins demandent des palettes de 1,50 m de haut maximum, étiquetées avec leur numéro de magasin.",
  missions:[
    { n:"M1", titre:"Analyser les commandes", consigne:"Lis les 8 commandes, repère les contraintes (hauteur, étiquetage, horaires) et le volume total.", livrable:"Tableau de synthèse", duree:"30 min" },
    { n:"M2", titre:"Choisir la méthode", consigne:"Choisis entre préparation par commande, par lot ou par zone. Justifie et organise le parcours.", livrable:"Bons de préparation triés", duree:"30 min" },
    { n:"M3", titre:"Préparer et contrôler", consigne:"En équipe, prépare les commandes sur le plateau, contrôle quantités et références.", livrable:"Commandes préparées", duree:"75 min" },
    { n:"M4", titre:"Constituer les palettes", consigne:"Palettise (lourds en bas), filme, étiquette. Vérifie la hauteur maximale.", livrable:"Palettes conformes", duree:"45 min" }
  ],
  documents:[
    { type:"Mail – magasin n°12 (Versailles)", style:"mail", texte:"Bonjour,\nVoici notre commande pour la promo. Notre réserve ferme à 17 h et nous n'avons pas de quai : livraison avec hayon impérativement.\nMerci, Clara, responsable magasin" },
    { type:"Bon de préparation – magasin 12", style:"form", texte:"KR-RUN42 – 12 cartons – A-02-0-1\nKR-RUN43 – 8 cartons – A-02-1-2\nSPX-TSHIRT-M – 20 cartons – B-05-0-1\nSPX-SHORT-L – 10 cartons – B-06-1-1\nBAL-FOOT5 – 4 cartons – C-09-0-2" },
    { type:"Note de service", style:"note", texte:"Rappel qualité : taux d'erreur de préparation du mois dernier 1,8 %. Objectif : moins de 1 %. Contrôle systématique de la dernière ligne avant filmage." }
  ],
  aleas:["Le magasin 12 appelle à 15 h : il ajoute 6 cartons de KR-RUN42 à sa commande.","Il ne reste que 10 cartons de SPX-SHORT-L au lieu des 16 demandés au total : qui sert-on en priorité ?"],
  indicateurs:[["C2.1","Les contraintes clients sont repérées · le client est informé de la rupture avec une solution"],["C2.2","La méthode est justifiée · le parcours est optimisé · zéro erreur de référence ou de quantité · palettes stables, filmées, étiquetées, à la bonne hauteur"]],
  securite:SECU_PLATEAU,
  conscientisation:["Quelle méthode de préparation est la plus adaptée selon le nombre et la taille des commandes ?","Comment as-tu priorisé les clients quand le produit manquait ?","Qu'est-ce qu'une préparation « optimisée » ?"] },

{ id:"S2.6", titre:"Expédier avec Transport Express+", classe:"1re", blocs:[2], competences:["C2.6","C2.1"], duree:"1 séance de 3 h",
  entreprise:"ÔFil de l'eau et Transport Express+", lieu:"Salle et quai d'expédition",
  evenement:"Les palettes de la promo sont prêtes. Il faut choisir le transporteur pour chaque destination et préparer les documents avant le passage des camions à 10 h.",
  contexte:"ÔFil de l'eau travaille avec deux transporteurs : Transport Express+ (messagerie et lots partiels en Île-de-France) et RoutiLog (lots complets France entière). Trois envois sont à organiser : 8 palettes pour les magasins franciliens, 2 colis pour un client web à Rennes, 26 palettes pour la plateforme de Lyon.",
  missions:[
    { n:"M1", titre:"Choisir le mode de transport", consigne:"Pour chaque envoi, choisis messagerie, lot partiel ou lot complet et le transporteur. Justifie avec la grille tarifaire.", livrable:"Tableau de choix", duree:"40 min" },
    { n:"M2", titre:"Calculer le coût", consigne:"Calcule le coût de chaque expédition.", livrable:"Calculs", duree:"30 min" },
    { n:"M3", titre:"Remplir la lettre de voiture", consigne:"Complète la lettre de voiture pour l'envoi vers Lyon.", livrable:"Lettre de voiture", duree:"30 min" },
    { n:"M4", titre:"Charger et informer", consigne:"Contrôle le chargement, fais signer le conducteur et rédige le mail d'avis d'expédition à la plateforme de Lyon.", livrable:"Mail d'avis d'expédition", duree:"30 min" }
  ],
  documents:[
    { type:"Grille Transport Express+ (Île-de-France)", style:"form", texte:"Messagerie : 12 € HT par colis\nLot partiel : 38 € HT par palette (max 10 palettes)\nDélai : J+1" },
    { type:"Grille RoutiLog", style:"form", texte:"Lot complet (33 palettes max) Plaisir → Lyon : 1 150 € HT\nMessagerie France : 18 € HT par colis, délai J+2" },
    { type:"SMS – plateforme de Lyon", style:"sms", texte:"Merci de nous envoyer l'heure d'arrivée prévue, nos quais ferment à 18 h." }
  ],
  aleas:["9 h 45 : le camion de Transport Express+ arrive sans hayon alors que le magasin 12 n'a pas de quai."],
  indicateurs:[["C2.6","Le mode de transport est adapté au volume et au délai · les coûts sont exacts · la lettre de voiture est complète · le chargement est contrôlé"],["C2.1","Le client est informé de l'heure d'arrivée · une solution est trouvée pour le problème de hayon"]],
  securite:SECU_PLATEAU,
  conscientisation:["Comment choisit-on entre messagerie, lot partiel et lot complet ?","Pourquoi informer le destinataire avant l'arrivée du camion ?"] },

{ id:"S4.1", titre:"Le permis cariste de l'entrepôt", classe:"1re/Tle", blocs:[4], competences:["C4.1","C4.2","C4.3","C4.4"], duree:"Séances plateau tout au long de l'année",
  entreprise:"ÔFil de l'eau (1re) puis Logistique Services+ (Tle)", lieu:"Plateau technique – zone engins",
  evenement:"L'entrepôt manque de caristes pour le pic de fin d'année. M. Garnier veut former des volontaires et leur délivrer une autorisation de conduite après réussite des tests.",
  contexte:"Le plateau dispose d'un gerbeur à conducteur porté (cat. 1B) et, selon l'équipement, de chariots cat. 3 et 5. Le parcours d'entraînement comprend une allée, un virage, une pente, une zone de gerbage et un palettier.",
  missions:[
    { n:"M1", titre:"Prise de poste", consigne:"Réalise les vérifications de prise de poste avec la check-list. Lis le carnet de bord et la plaque de charge.", livrable:"Check-list signée", duree:"15 min" },
    { n:"M2", titre:"Circulation", consigne:"Effectue le parcours à vide puis en charge : ligne droite, virage, marche arrière, pente.", livrable:"Grille d'observation du binôme", duree:"30 min" },
    { n:"M3", titre:"Manœuvres", consigne:"Prends une palette au sol, gerbe-la sur une autre, puis stocke une palette au niveau 1 du palettier et déstocke-la.", livrable:"Grille d'évaluation pratique", duree:"30 min" },
    { n:"M4", titre:"Fin de poste", consigne:"Stationne l'engin, mets-le en charge, complète le carnet de bord.", livrable:"Carnet de bord complété", duree:"10 min" }
  ],
  documents:[
    { type:"Plaque de charge (extrait)", style:"form", texte:"Gerbeur – capacité nominale 1 200 kg à 600 mm\nHauteur de levée max : 3 300 mm\nÀ 3 300 mm : 1 000 kg à 600 mm" },
    { type:"Carnet de bord", style:"note", texte:"Mardi – équipe matin : « Bruit au niveau de la roue arrière gauche » – signé K.B.\nAction : en attente du technicien" },
    { type:"Post-it du formateur", style:"postit", texte:"On lève et on descend À L'ARRÊT. Toujours !" }
  ],
  aleas:["Un piéton traverse l'allée sans regarder pendant ta circulation en charge.","Le carnet de bord signale une anomalie de freinage non réparée : peux-tu utiliser l'engin ?"],
  indicateurs:[["C4.1","Toutes les vérifications sont faites · une anomalie bloquante entraîne l'arrêt de l'engin"],["C4.2","Vitesse adaptée · fourches basses · visibilité assurée · règles de pente respectées"],["C4.3","Prise et dépose précises · levée à l'arrêt · plaque de charge respectée"],["C4.4","Stationnement conforme · clé retirée · carnet de bord complété"]],
  securite:SECU_PLATEAU.concat(["Personne dans la zone de manœuvre sauf le conducteur et le formateur","Toute mise en danger arrête l'exercice"]),
  conscientisation:["Pourquoi le CACES ne suffit-il pas pour conduire en entreprise ?","Quelle est la manœuvre la plus difficile pour toi et comment progresser ?","Révise la théorie sur le site d'entraînement CACES."] },

{ id:"S1.6", titre:"L'inventaire tournant", classe:"1re", blocs:[1], competences:["C1.6"], duree:"1 séance de 3 h",
  entreprise:"ÔFil de l'eau", lieu:"Plateau technique et salle",
  evenement:"Le contrôleur de gestion signale que le stock informatique de l'allée B ne correspond plus aux ventes. Un inventaire tournant de l'allée est lancé ce matin.",
  contexte:"L'allée B contient le textile Sportex (classe B). L'inventaire se fait en binôme : un compteur, un contrôleur. Les écarts supérieurs à 2 % doivent être recomptés.",
  missions:[
    { n:"M1", titre:"Préparer l'inventaire", consigne:"Prépare les fiches de comptage, organise les binômes et le parcours.", livrable:"Plan d'inventaire", duree:"20 min" },
    { n:"M2", titre:"Compter", consigne:"Compte les emplacements B-05 à B-08 sur le plateau sans regarder le stock informatique (comptage « à l'aveugle »).", livrable:"Fiches de comptage", duree:"60 min" },
    { n:"M3", titre:"Analyser les écarts", consigne:"Calcule l'écart et le pourcentage d'écart par référence. Identifie ceux à recompter.", livrable:"Tableau des écarts", duree:"40 min" },
    { n:"M4", titre:"Expliquer", consigne:"Propose des causes possibles et des actions pour éviter les écarts.", livrable:"Note au responsable (10 lignes)", duree:"30 min" }
  ],
  documents:[
    { type:"Extrait SimuLog – stock informatique", style:"form", texte:"SPX-TSHIRT-M : 240\nSPX-TSHIRT-L : 180\nSPX-SHORT-L : 96\nSPX-SWEAT-M : 60" },
    { type:"Mail du contrôleur de gestion", style:"mail", texte:"Bonjour, la démarque du mois sur le textile atteint 1 900 € HT. Merci de me transmettre les écarts justifiés avant vendredi." }
  ],
  aleas:["En comptant, tu trouves 12 cartons de SPX-SHORT-L dans un emplacement de l'allée C, sans étiquette d'emplacement."],
  indicateurs:[["C1.6","Le comptage est rigoureux et tracé · les écarts et pourcentages sont exacts · les causes proposées sont plausibles · les actions sont réalistes"]],
  securite:SECU_PLATEAU.concat(["Pas d'escalade des rayonnages : utiliser l'escabeau ou la plateforme prévue"]),
  conscientisation:["Pourquoi compte-t-on sans regarder le stock informatique ?","Quelle différence entre inventaire annuel et inventaire tournant ?"] },

{ id:"S2.3", titre:"La ligne de montage ne doit pas s'arrêter", classe:"1re", blocs:[2], competences:["C2.3"], duree:"1 séance de 3 h",
  entreprise:"Atelier Vélo+ (client interne de Logistique Services+)", lieu:"Plateau technique",
  evenement:"L'atelier Vélo+ assemble 40 vélos par jour. Ce matin, le premier bac de roues avant est vide et sa fiche kanban est arrivée au magasin : il ne reste qu'un bac au poste, soit 2 heures d'autonomie.",
  contexte:"Le magasin de Logistique Services+ approvisionne l'atelier en bord de ligne avec un système kanban à deux bacs. Chaque bac contient 10 roues. La ligne consomme 5 roues par heure.",
  missions:[
    { n:"M1", titre:"Lire les kanbans", consigne:"Identifie les références, quantités et emplacements indiqués sur les fiches kanban.", livrable:"Liste de prélèvement", duree:"20 min" },
    { n:"M2", titre:"Préparer le réapprovisionnement", consigne:"Prélève les composants, remplis les bacs, édite le bon de sortie.", livrable:"Bacs prêts + bon de sortie", duree:"45 min" },
    { n:"M3", titre:"Livrer le bord de ligne", consigne:"Livre les bacs en respectant la tournée du train logistique et l'heure limite.", livrable:"Bacs livrés à l'heure", duree:"30 min" },
    { n:"M4", titre:"Calculer l'autonomie", consigne:"Calcule combien de temps la ligne peut tourner avec 2 bacs pleins.", livrable:"Calcul justifié", duree:"20 min" }
  ],
  documents:[
    { type:"Fiche kanban", style:"form", texte:"Réf. : ROUE-AV-26 – Roue avant 26 pouces\nQuantité par bac : 10\nEmplacement magasin : M-02-1-3\nPoste : ligne 1 – poste 4" },
    { type:"Message du chef d'atelier", style:"sms", texte:"On attaque une série de 20 vélos enfants à 14 h, il me faudra 2 bacs de ROUE-AV-20 en plus !" }
  ],
  aleas:["Il ne reste que 8 roues ROUE-AV-26 en stock au magasin."],
  indicateurs:[["C2.3","Les kanbans sont correctement lus · les bonnes quantités sont livrées à l'heure · l'autonomie est bien calculée · la rupture est signalée avec une solution"]],
  securite:SECU_PLATEAU,
  conscientisation:["Explique le principe du kanban à deux bacs.","Qui est le client dans ce scénario ?"] },

/* ======================== Terminale ======================== */
{ id:"S3.1", titre:"Produits sensibles chez Logistique Services+", classe:"Tle", blocs:[3], competences:["C3.1"], duree:"2 séances de 3 h",
  entreprise:"Logistique Services+ – entrepôt multi-flux (Gennevilliers, 92)", lieu:"Salle et plateau technique",
  evenement:"Logistique Services+ signe trois nouveaux clients en même temps : un distributeur de produits d'entretien, un grossiste en produits laitiers et un fabricant de verrerie. Tu dois préparer leur arrivée.",
  contexte:"L'entrepôt de 15 000 m² dispose d'une cellule pour produits dangereux, d'une chambre froide positive (0 / +4 °C) et d'une zone de stockage classique. Il fait partie du groupe TRANSLOG France.",
  missions:[
    { n:"M1", titre:"Identifier les produits", consigne:"À partir des fiches produits, classe chaque produit (dangereux, température dirigée, fragile) et repère les pictogrammes.", livrable:"Tableau d'identification", duree:"45 min" },
    { n:"M2", titre:"Définir les règles de stockage", consigne:"Pour chaque famille, indique la zone, les règles de stockage et les incompatibilités.", livrable:"Fiche de règles", duree:"60 min" },
    { n:"M3", titre:"Contrôler une réception frais", consigne:"Réalise le contrôle de température d'une livraison de yaourts et complète le relevé.", livrable:"Relevé de température", duree:"30 min" },
    { n:"M4", titre:"Former l'équipe", consigne:"Réalise une fiche réflexe A4 pour les opérateurs : « Je reçois un produit sensible ».", livrable:"Fiche réflexe", duree:"45 min" }
  ],
  documents:[
    { type:"Fiche produit – Javel Pro 5 L", style:"form", texte:"Hypochlorite de sodium – Corrosif\nN° ONU 1791 – Classe ADR 8\nIncompatible avec les acides\nStockage : bac de rétention" },
    { type:"Fiche produit – Désinfectant spray", style:"form", texte:"Aérosol – N° ONU 1950 – Classe ADR 2\nNe pas exposer à la chaleur" },
    { type:"Bon de livraison – Laiterie du Vexin", style:"form", texte:"Yaourts nature × 120 colis\nTempérature de transport exigée : 0 / +4 °C\nDLC : J+21" },
    { type:"Mail – client verrerie", style:"mail", texte:"Nos cartons de verres ne doivent pas être gerbés sur plus de 2 niveaux et doivent être manipulés avec précaution." }
  ],
  aleas:["Au relevé, une palette de yaourts est à +8 °C. Le conducteur explique que le groupe froid est tombé en panne il y a une heure."],
  indicateurs:[["C3.1","Les familles de produits sont correctement identifiées · les règles de stockage et incompatibilités sont exactes · la rupture de chaîne du froid est traitée selon la procédure · la fiche réflexe est claire et utilisable"]],
  securite:SECU_PLATEAU.concat(["Produits dangereux : consulter la FDS, gants et lunettes si manipulation","Chambre froide : vêtements adaptés, temps d'exposition limité"]),
  conscientisation:["Pourquoi ne stocke-t-on pas les produits corrosifs n'importe où ?","Que signifie « rupture de la chaîne du froid » et quelles conséquences pour le consommateur ?"] },

{ id:"S3.2", titre:"Le lot qui pose problème", classe:"Tle", blocs:[3], competences:["C3.2"], duree:"1 séance de 3 h",
  entreprise:"Logistique Services+", lieu:"Salle (poste informatique)",
  evenement:"La Laiterie du Vexin envoie une alerte : le lot L2611-04 de yaourts aux fruits présente un défaut d'opercule. Il faut retrouver tous les produits concernés en moins de 2 heures.",
  contexte:"Le lot a été reçu il y a 5 jours. Une partie est encore en stock, le reste a été livré à plusieurs magasins. Le WMS SimuLog enregistre chaque mouvement avec le numéro de lot et le SSCC des palettes.",
  missions:[
    { n:"M1", titre:"Traçabilité ascendante", consigne:"Retrouve la date de réception, la quantité reçue et les emplacements de stockage du lot.", livrable:"Fiche de traçabilité ascendante", duree:"30 min" },
    { n:"M2", titre:"Traçabilité descendante", consigne:"Retrouve tous les clients livrés avec ce lot et les quantités.", livrable:"Liste des clients concernés", duree:"40 min" },
    { n:"M3", titre:"Bloquer le stock", consigne:"Décris les actions pour isoler les produits encore en stock (quarantaine, blocage WMS, étiquetage).", livrable:"Procédure de blocage", duree:"30 min" },
    { n:"M4", titre:"Informer", consigne:"Rédige le mail d'information aux magasins concernés.", livrable:"Mail", duree:"30 min" }
  ],
  documents:[
    { type:"Mail – Laiterie du Vexin", style:"mail", texte:"URGENT – Alerte qualité\nLot L2611-04 – yaourts fruits rouges 4×125 g\nDéfaut d'opercule possible. Merci de bloquer et retirer tous les produits de ce lot.\nService qualité" },
    { type:"Extrait SimuLog – mouvements du lot", style:"form", texte:"Réception : 4 palettes SSCC ...0412 à ...0415 – 480 colis\nSortie : Magasin Cergy 120 colis\nSortie : Magasin Pontoise 96 colis\nSortie : Magasin Osny 72 colis\nEn stock : F-02-1-1 et F-02-1-2" }
  ],
  aleas:["Le magasin d'Osny répond que les produits sont déjà en rayon depuis hier."],
  indicateurs:[["C3.2","Les données ascendantes et descendantes sont exactes · le stock restant est correctement calculé · la procédure de blocage est complète · le message est clair et rapide"]],
  securite:SECU_SALLE,
  conscientisation:["À quoi sert la traçabilité descendante lors d'un rappel ?","Que se passerait-il si un mouvement n'avait pas été scanné ?"] },

{ id:"S2.2", titre:"Optimiser la palettisation", classe:"Tle", blocs:[2], competences:["C2.1","C2.2"], duree:"2 séances de 3 h",
  entreprise:"Logistique Services+ pour le client Biomarine", lieu:"Plateau technique",
  evenement:"Biomarine, nouveau client, se plaint : ses palettes arrivent trop hautes pour ses camions et les cartons du bas sont écrasés. Il demande une nouvelle organisation de la préparation.",
  contexte:"Biomarine distribue des conserves de produits de la mer. Les cartons mesurent 400 × 300 × 250 mm et pèsent 12 kg. Le client exige des palettes Europe de 1,20 m de haut maximum (palette comprise) et de 600 kg maximum.",
  missions:[
    { n:"M1", titre:"Analyser le cahier des charges", consigne:"Relève toutes les contraintes du client et les causes possibles des problèmes.", livrable:"Liste des contraintes", duree:"30 min" },
    { n:"M2", titre:"Calculer le plan de palettisation", consigne:"Calcule le nombre de cartons par couche, de couches et par palette, puis vérifie le poids et la hauteur.", livrable:"Plan de palettisation chiffré", duree:"45 min" },
    { n:"M3", titre:"Réaliser la palette type", consigne:"Construis la palette type sur le plateau en croisant les couches.", livrable:"Palette type + photo", duree:"60 min" },
    { n:"M4", titre:"Répondre au client", consigne:"Rédige un mail au client présentant la nouvelle organisation.", livrable:"Mail", duree:"30 min" }
  ],
  documents:[
    { type:"Mail – Biomarine", style:"mail", texte:"Bonjour,\nTrois palettes refusées cette semaine : trop hautes (1,45 m) et cartons du bas écrasés. Nos camions n'acceptent pas plus de 1,20 m. Merci de revoir vos préparations rapidement.\nNadia, responsable approvisionnement" },
    { type:"Fiche article", style:"form", texte:"Carton conserves Biomarine\nDimensions : 400 × 300 × 250 mm\nPoids : 12 kg\nGerbage : 5 cartons maximum" },
    { type:"Post-it", style:"postit", texte:"Hauteur palette vide ≈ 144 mm" }
  ],
  aleas:["Biomarine appelle : pour la commande de demain, il veut des palettes de 50 cartons exactement."],
  indicateurs:[["C2.1","Le cahier des charges est entièrement pris en compte · la réponse au client est professionnelle"],["C2.2","Les calculs sont exacts · le plan respecte hauteur, poids et gerbage · la palette type est stable et conforme"]],
  securite:SECU_PLATEAU.concat(["Cartons de 12 kg : levée jambes fléchies, charge près du corps, rotation du buste interdite"]),
  conscientisation:["Quelles contraintes faut-il vérifier avant de constituer une palette ?","Pourquoi croiser les couches de cartons ?"] },

{ id:"S2.4", titre:"La tournée du jeudi", classe:"Tle", blocs:[2], competences:["C2.4"], duree:"1 séance de 3 h",
  entreprise:"Transport Express+ (flotte en compte propre de TRANSLOG France)", lieu:"Salle",
  evenement:"Le planificateur est absent. Tu dois organiser la tournée de jeudi pour livrer 4 magasins ÔFil de l'eau avec le porteur 19 tonnes de l'entreprise.",
  contexte:"Départ de l'entrepôt de Plaisir à 6 h. Le porteur transporte 18 palettes maximum. Vitesse moyenne retenue : 50 km/h. Temps de déchargement : 20 minutes par magasin.",
  missions:[
    { n:"M1", titre:"Choisir l'ordre de passage", consigne:"À partir du tableau des distances et des horaires d'ouverture des réserves, propose l'ordre de passage.", livrable:"Ordre de passage justifié", duree:"40 min" },
    { n:"M2", titre:"Calculer les temps", consigne:"Calcule les heures d'arrivée chez chaque client et l'heure de retour.", livrable:"Feuille de route", duree:"40 min" },
    { n:"M3", titre:"Vérifier la réglementation", consigne:"Vérifie que la tournée respecte les temps de conduite et de pause.", livrable:"Contrôle réglementaire", duree:"20 min" },
    { n:"M4", titre:"Plan de chargement", consigne:"Établis le plan de chargement du porteur.", livrable:"Schéma de chargement", duree:"30 min" }
  ],
  documents:[
    { type:"Distances (km)", style:"form", texte:"Plaisir → Versailles : 15\nPlaisir → Cergy : 40\nVersailles → Saint-Germain : 15\nSaint-Germain → Poissy : 10\nPoissy → Cergy : 20\nCergy → Plaisir : 40\nVersailles → Poissy : 25" },
    { type:"Horaires des réserves et volumes", style:"form", texte:"Versailles (n°12) : 6 h 30 – 11 h – 5 palettes\nSaint-Germain (n°7) : 7 h – 12 h – 4 palettes\nPoissy (n°21) : 8 h – 12 h – 4 palettes\nCergy (n°3) : 9 h – 12 h – 3 palettes" },
    { type:"SMS – conducteur", style:"sms", texte:"Pour jeudi, pense qu'à Versailles il n'y a pas de quai, je décharge au hayon." }
  ],
  aleas:["Mercredi soir, le magasin de Saint-Germain prévient que sa réserve n'ouvrira qu'à 9 h jeudi."],
  indicateurs:[["C2.4","L'ordre respecte les horaires et limite les kilomètres · les temps sont exacts · la réglementation est vérifiée · le plan de chargement respecte l'ordre inverse de livraison · la tournée est réorganisée après l'aléa"]],
  securite:SECU_SALLE,
  conscientisation:["Pourquoi charge-t-on en ordre inverse de livraison ?","Quelle différence entre transport en compte propre et en compte d'autrui ?"] },

{ id:"S2.5", titre:"Où sont passées nos palettes ?", classe:"Tle", blocs:[2], competences:["C2.5"], duree:"1 séance de 3 h",
  entreprise:"Logistique Services+", lieu:"Plateau technique et salle",
  evenement:"Le contrôleur de gestion constate qu'il manque 340 palettes Europe sur le parc de l'entrepôt depuis le début de l'année. Il te charge de remettre de l'ordre dans la gestion des supports.",
  contexte:"Les palettes Europe sont échangées avec les transporteurs et les clients. Les rolls et bacs consignés de Biomarine reviennent aussi par les tournées. Aucun bon d'échange n'est rempli de façon systématique.",
  missions:[
    { n:"M1", titre:"Trier les retours du jour", consigne:"Sur le plateau, trie les supports revenus : réutilisables, à réparer, à recycler.", livrable:"Tri réalisé + fiche de comptage", duree:"45 min" },
    { n:"M2", titre:"Mettre à jour les comptes", consigne:"À partir des bons de livraison de la semaine, calcule le solde de palettes de chaque transporteur.", livrable:"Tableau des soldes", duree:"40 min" },
    { n:"M3", titre:"Proposer une procédure", consigne:"Rédige la procédure d'échange de palettes au quai, avec le modèle de bon d'échange.", livrable:"Procédure + bon d'échange", duree:"45 min" },
    { n:"M4", titre:"Chiffrer la perte", consigne:"Calcule le coût des palettes manquantes.", livrable:"Calcul", duree:"15 min" }
  ],
  documents:[
    { type:"Mail – contrôleur de gestion", style:"mail", texte:"Bonjour, 340 palettes Europe manquent depuis janvier. Prix de rachat d'une palette Europe : 13 € HT. Merci de me proposer une solution." },
    { type:"Mouvements de la semaine – RoutiLog", style:"form", texte:"Lundi : 24 palettes livrées pleines, 20 rendues vides\nMardi : 18 livrées, 18 rendues\nJeudi : 30 livrées, 22 rendues" }
  ],
  aleas:["Le conducteur RoutiLog de ce matin rend 10 palettes dont 3 ont des planches cassées et refuse de signer un bon d'échange."],
  indicateurs:[["C2.5","Le tri est conforme à l'état des supports · les soldes sont exacts · la procédure est applicable au quai · le coût est correct"]],
  securite:SECU_PLATEAU.concat(["Palettes abîmées : gants anti-coupure, attention aux clous"]),
  conscientisation:["Pourquoi un support non rendu est-il une perte pour l'entreprise ?","En quoi la gestion des supports participe-t-elle à la démarche RSE ?"] },

{ id:"S3.3", titre:"Biomarine passe au vert", classe:"Tle", blocs:[3], competences:["C3.3"], duree:"2 séances de 3 h",
  entreprise:"Biomarine – plateforme de produits frais de la mer (Rungis, 94)", lieu:"Salle",
  evenement:"Biomarine veut obtenir un label RSE l'an prochain. La directrice demande à chaque service de proposer trois actions concrètes. Ton équipe représente la logistique.",
  contexte:"La plateforme de 4 000 m² fonctionne de 2 h à 12 h. Elle comprend une zone froide à +2 °C, une zone de préparation et 6 quais. Elle emploie 35 personnes, dont beaucoup d'intérimaires.",
  missions:[
    { n:"M1", titre:"Établir le diagnostic", consigne:"À partir des documents, relève les points faibles environnementaux, sociaux et économiques.", livrable:"Tableau de diagnostic", duree:"45 min" },
    { n:"M2", titre:"Proposer trois actions", consigne:"Propose une action par pilier de la RSE avec coût, bénéfice attendu et indicateur de suivi.", livrable:"Fiches actions", duree:"75 min" },
    { n:"M3", titre:"Chiffrer une action", consigne:"Calcule l'économie annuelle de l'action « éclairage LED ».", livrable:"Calcul justifié", duree:"30 min" },
    { n:"M4", titre:"Présenter", consigne:"Présente tes propositions à la directrice en 5 minutes (oral en groupe).", livrable:"Oral + support", duree:"30 min" }
  ],
  documents:[
    { type:"Note de la directrice", style:"note", texte:"Constats : 2,5 tonnes de polystyrène jetées par mois · portes de la zone froide souvent ouvertes · 4 arrêts de travail pour mal de dos cette année · taux de remplissage moyen des camions : 68 %." },
    { type:"Devis éclairage", style:"form", texte:"Actuel : 80 néons de 58 W allumés 10 h/jour, 360 jours/an\nProposé : 80 LED de 25 W\nPrix de l'électricité : 0,20 € HT le kWh\nCoût de l'installation : 4 800 € HT" },
    { type:"Post-it du chef de quai", style:"postit", texte:"Les caisses polystyrène pourraient être remplacées par des bacs isothermes consignés ?" }
  ],
  aleas:["La directrice annonce que le budget est limité à 5 000 € pour cette année : quelle action proposes-tu en priorité ?"],
  indicateurs:[["C3.3","Le diagnostic couvre les trois piliers · les actions sont concrètes, chiffrées et suivies par un indicateur · le calcul est exact · le choix sous contrainte budgétaire est argumenté"]],
  securite:SECU_SALLE,
  conscientisation:["Qu'est-ce qu'une démarche RSE en logistique ?","Pourquoi faut-il un indicateur pour chaque action ?"] },

{ id:"S3.4", titre:"Chef d'équipe d'un jour", classe:"Tle", blocs:[3], competences:["C3.4"], duree:"2 séances de 3 h",
  entreprise:"Biomarine", lieu:"Plateau technique",
  evenement:"Le chef d'équipe du matin est en formation. Tu le remplaces pour coordonner 6 préparateurs qui doivent traiter 120 commandes avant 9 h.",
  contexte:"Les préparateurs ont des profils différents : 2 expérimentés, 2 intérimaires, 1 nouveau salarié qui arrive aujourd'hui (reconnu travailleur handicapé, il ne peut pas porter de charges de plus de 10 kg) et 1 cariste. La préparation démarre à 5 h. Productivité moyenne : 8 commandes par heure et par préparateur (le cariste ne prépare pas).",
  missions:[
    { n:"M1", titre:"Préparer le brief", consigne:"Prépare un brief de 5 minutes : sécurité, objectifs, affectations.", livrable:"Fiche brief", duree:"30 min" },
    { n:"M2", titre:"Répartir le travail", consigne:"Affecte chaque personne à un poste en tenant compte des compétences et des contraintes. Vérifie que l'objectif est atteignable.", livrable:"Planning d'affectation + calcul", duree:"45 min" },
    { n:"M3", titre:"Animer et suivre", consigne:"Sur le plateau, anime le brief puis suis l'avancement toutes les 30 minutes.", livrable:"Tableau de suivi", duree:"60 min" },
    { n:"M4", titre:"Accueillir le nouveau", consigne:"Prépare le parcours d'accueil du nouveau salarié pour sa première journée.", livrable:"Parcours d'accueil", duree:"30 min" }
  ],
  documents:[
    { type:"SMS du chef d'équipe", style:"sms", texte:"Merci de me remplacer 🙏 Priorité aux commandes Rungis Marée (30 commandes, départ camion 7 h 30). Le nouveau s'appelle Lucas, sois sympa avec lui !" },
    { type:"Planning des présences", style:"form", texte:"Inès (expérimentée) · Moussa (expérimenté) · Julie (intérim) · Kevin (intérim) · Lucas (nouveau, RQTH, charges ≤ 10 kg) · Samir (cariste)" }
  ],
  aleas:["6 h 30 : Kevin prévient qu'il ne viendra pas. Comment atteins-tu l'objectif ?","7 h 10 : le transpalette électrique tombe en panne."],
  indicateurs:[["C3.4","Le brief est clair et intègre la sécurité · les affectations respectent les compétences et les restrictions · le calcul de capacité est juste · les aléas sont gérés et remontés · l'accueil du nouveau est organisé"]],
  securite:SECU_PLATEAU.concat(["Le chef d'équipe vérifie le port des EPI de toute l'équipe avant le démarrage"]),
  conscientisation:["Quelles qualités faut-il pour coordonner une équipe ?","Comment as-tu adapté ton organisation à l'absence d'un préparateur ?","Quelle différence entre un ordre et une consigne bien transmise ?"] }
];
