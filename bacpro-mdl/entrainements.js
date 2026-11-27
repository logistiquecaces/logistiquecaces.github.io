// Entraînements QCM — q = question, c = choix, a = index de la bonne réponse, e = explication
const ENTRAINEMENTS = [
{ id:"Q1", titre:"Supply chain et sécurité", bloc:1, classe:"1re", competences:["C1.1","C1.2"], questions:[
  {q:"Qu'est-ce que la supply chain ?", c:["Le service comptable de l'entreprise","L'ensemble des étapes du fournisseur au client final","Uniquement le transport des marchandises","Le logiciel de gestion d'entrepôt"], a:1, e:"La supply chain regroupe toutes les étapes qui mettent un produit à disposition du client : approvisionnement, stockage, préparation, transport."},
  {q:"Une commande envoyée par un magasin à l'entrepôt est un flux…", c:["physique","financier","d'information","de retour"], a:2, e:"La commande transmet une information. Elle déclenche ensuite un flux physique (la livraison)."},
  {q:"Dans quel ordre un produit traverse-t-il l'entrepôt ?", c:["Stockage → réception → expédition → préparation","Réception → stockage → préparation → expédition","Préparation → réception → stockage → expédition","Réception → expédition → stockage → préparation"], a:1, e:"Le produit est reçu, stocké, prélevé pour une commande, puis expédié."},
  {q:"Que signifie WMS ?", c:["Logiciel de gestion d'entrepôt","Contrôle qualité des produits","Méthode de rangement","Document de transport"], a:0, e:"Warehouse Management System : il enregistre les emplacements, les stocks et tous les mouvements."},
  {q:"Un chariot qui circule dans une allée est…", c:["un risque","un danger","un accident","un EPI"], a:1, e:"Le chariot est un danger. Le risque apparaît quand une personne est exposée à ce danger."},
  {q:"Selon les principes généraux de prévention, que faut-il privilégier ?", c:["Les EPI","Les protections collectives","Les sanctions","Les affiches"], a:1, e:"La protection collective (barrière, séparation des flux) protège tout le monde : elle passe avant l'EPI."},
  {q:"Comment s'appelle le document où l'employeur recense les risques ?", c:["Le bon de livraison","Le DUER","La lettre de voiture","Le carnet de bord"], a:1, e:"DUER : document unique d'évaluation des risques professionnels."},
  {q:"Les TMS sont principalement causés par…", c:["le bruit","les gestes répétitifs et le port de charges","le froid uniquement","l'éclairage"], a:1, e:"Les troubles musculo-squelettiques touchent articulations, muscles et tendons : répétition des gestes, postures, port de charges."},
  {q:"Tu vois un collègue monter sur une palette pour attraper un carton. Que fais-tu ?", c:["Rien, ce n'est pas mon problème","Je l'aide en tenant la palette","Je l'arrête et je signale la situation","Je prends une photo"], a:2, e:"Toute situation dangereuse doit être stoppée et signalée. On utilise un escabeau ou une plateforme adaptée."},
  {q:"Lequel de ces équipements est un EPI ?", c:["Le marquage au sol","Le miroir de croisement","Les chaussures de sécurité","La barrière de quai"], a:2, e:"L'EPI protège une seule personne. Les trois autres sont des protections collectives."}
]},
{ id:"Q2", titre:"La réception des marchandises", bloc:1, classe:"1re", competences:["C1.3","C1.4"], questions:[
  {q:"Avant l'arrivée d'un camion, que consultes-tu en premier ?", c:["Le planning de réception","Le tableau des congés","La facture","Le DUER"], a:0, e:"Le planning de réception indique les transporteurs attendus et leurs créneaux."},
  {q:"Avec quel document compares-tu les produits reçus pour savoir s'ils ont bien été commandés ?", c:["La lettre de voiture","Le bon de commande","Le bon de préparation","Le carnet de bord"], a:1, e:"Le bon de commande indique ce que l'entreprise a commandé au fournisseur."},
  {q:"Quelle réserve est correcte ?", c:["Sous réserve de déballage","Colis abîmés","2 colis sur 20 écrasés, film déchiré sur palette n°3","Livraison pas terrible"], a:2, e:"Une réserve doit être précise : nombre de colis concernés et nature du dommage."},
  {q:"Où écrit-on les réserves ?", c:["Sur la lettre de voiture, signée par le conducteur","Sur un post-it","Dans un mail au client","Sur le bon de préparation"], a:0, e:"Les réserves sont portées sur la lettre de voiture et contresignées par le conducteur."},
  {q:"Dans quel délai confirme-t-on les réserves au transporteur ?", c:["24 heures","3 jours (hors jours fériés)","1 mois","Aucun délai"], a:1, e:"Code de commerce, art. L. 133-3 : confirmation par lettre recommandée dans les 3 jours, non compris les jours fériés."},
  {q:"Le contrôle devant le conducteur porte surtout sur…", c:["le nombre de colis et l'état apparent","le prix des produits","la date de la prochaine commande","le contenu de chaque carton"], a:0, e:"Devant le conducteur, on compte et on vérifie l'aspect extérieur. Le contrôle détaillé vient après."},
  {q:"Il manque 6 cartons d'une référence au contrôle détaillé. Que remplis-tu ?", c:["Une fiche d'anomalie","Un bon de sortie","Une fiche kanban","Rien"], a:0, e:"Tout écart est tracé sur une fiche d'anomalie pour être traité avec le fournisseur."},
  {q:"Avant que le conducteur descende du camion à quai, il doit…", c:["laisser le moteur tourner","couper le moteur et caler le véhicule","ouvrir les portes en roulant","décharger lui-même avec un chariot"], a:1, e:"Moteur coupé et cales en place évitent un départ du camion pendant le déchargement."},
  {q:"Le stock informatique est mis à jour…", c:["à la fin du mois","lors de la saisie de l'entrée dans le WMS","quand le client commande","jamais à la réception"], a:1, e:"La saisie dans le WMS fait entrer les produits en stock informatique."},
  {q:"Commande : 20 palettes de 48 cartons. Combien de cartons attends-tu ?", c:["68","480","960","1 200"], a:2, e:"20 × 48 = 960 cartons."}
]},
{ id:"Q3", titre:"Stockage et calculs de stocks", bloc:1, classe:"1re", competences:["C1.5","C1.6"], questions:[
  {q:"Que signifie l'adresse B-04-2-1 ?", c:["Bâtiment B, 4e étage, bureau 21","Allée B, travée 4, niveau 2, alvéole 1","Bloc 4, 2 palettes, 1 carton","Commande B n°421"], a:1, e:"L'adressage classique : allée – travée – niveau – alvéole."},
  {q:"Où places-tu les articles de classe A ?", c:["Le plus haut possible","Au fond de l'entrepôt","Près de la zone de préparation, à hauteur d'homme","Dans la zone de quarantaine"], a:2, e:"Les articles A sont les plus demandés : on réduit les déplacements des préparateurs."},
  {q:"FEFO signifie…", c:["Premier entré, premier sorti","Premier périmé, premier sorti","Dernier entré, premier sorti","Premier fabriqué, dernier sorti"], a:1, e:"First Expired, First Out : on sort d'abord le produit dont la date limite est la plus proche."},
  {q:"Stock initial 300, stock final 500. Quel est le stock moyen ?", c:["200","400","800","250"], a:1, e:"(300 + 500) ÷ 2 = 400."},
  {q:"Sorties de l'année : 2 000. Stock moyen : 400. Taux de rotation ?", c:["0,2","5","1 600","2 400"], a:1, e:"2 000 ÷ 400 = 5. Le stock « tourne » 5 fois dans l'année."},
  {q:"Consommation 40 unités/jour, délai 5 jours, stock de sécurité 60. Stock d'alerte ?", c:["100","200","260","300"], a:2, e:"40 × 5 + 60 = 260 unités."},
  {q:"Stock 360 unités, consommation 30 unités/jour. Couverture ?", c:["12 jours","30 jours","330 jours","10 800 jours"], a:0, e:"360 ÷ 30 = 12 jours."},
  {q:"Stock physique 95, stock informatique 100. L'écart est de…", c:["+5","–5","195","0"], a:1, e:"Écart = physique – informatique = 95 – 100 = –5."},
  {q:"Que fais-tu en premier face à un écart d'inventaire ?", c:["Je corrige le WMS immédiatement","Je recompte","Je l'ignore","Je préviens le client"], a:1, e:"On recompte d'abord pour vérifier qu'il ne s'agit pas d'une erreur de comptage."},
  {q:"Emplacement dynamique (aléatoire) signifie…", c:["Chaque article a toujours la même place","Le WMS choisit une place libre","On range au hasard sans scanner","On ne range jamais"], a:1, e:"Le WMS attribue un emplacement libre : meilleur remplissage, mais il faut scanner chaque rangement."}
]},
{ id:"Q4", titre:"Préparation de commandes et expédition", bloc:2, classe:"1re", competences:["C2.1","C2.2","C2.6"], questions:[
  {q:"Un atelier de production qui commande des pièces au magasin est un client…", c:["externe","interne","fournisseur","transporteur"], a:1, e:"Un service de la même entreprise est un client interne."},
  {q:"Le préparateur prélève pour plusieurs commandes en même temps puis on trie. C'est la préparation…", c:["par commande","par lot (batch)","par zone","par palette"], a:1, e:"La préparation par lot réduit les déplacements quand les commandes sont nombreuses et petites."},
  {q:"Sur une palette, où places-tu les produits lourds ?", c:["En haut","Au milieu","En bas","Peu importe"], a:2, e:"Lourds en bas pour la stabilité et pour ne pas écraser les produits fragiles."},
  {q:"Dimensions d'une palette Europe ?", c:["1 000 × 1 000 mm","1 200 × 800 mm","1 200 × 1 000 mm","800 × 600 mm"], a:1, e:"La palette Europe (EPAL) mesure 1 200 × 800 mm."},
  {q:"Combien de cartons de 400 × 200 mm par couche sur une palette Europe ?", c:["6","8","12","16"], a:2, e:"(1 200 ÷ 400) × (800 ÷ 200) = 3 × 4 = 12 cartons."},
  {q:"Pour expédier 2 colis à un particulier, tu choisis…", c:["un lot complet","la messagerie","un lot partiel","un porte-conteneurs"], a:1, e:"La messagerie est adaptée aux colis et petits envois."},
  {q:"Pour 26 palettes vers un seul destinataire, le plus adapté est…", c:["la messagerie","le lot complet","le lot partiel","le coursier"], a:1, e:"Un camion entier (jusqu'à 33 palettes Europe) pour un seul client : c'est un lot complet."},
  {q:"Pour un transport routier international, le document de transport est…", c:["la CMR","le kanban","le DUER","le bon de préparation"], a:0, e:"La lettre de voiture internationale s'appelle CMR (convention de Genève de 1956)."},
  {q:"Il manque un article pour une commande. Le meilleur réflexe :", c:["Envoyer la commande sans rien dire","Annuler la commande","Prévenir le client et proposer une solution","Remplacer par n'importe quel article"], a:2, e:"Le client doit être prévenu : livraison partielle, produit de remplacement accepté, nouvelle date."},
  {q:"Taux de service : 190 commandes conformes sur 200. Il est de…", c:["90 %","95 %","98 %","190 %"], a:1, e:"190 ÷ 200 × 100 = 95 %."}
]},
{ id:"Q5", titre:"Produits spécifiques et ADR", bloc:3, classe:"Tle", competences:["C3.1"], questions:[
  {q:"Que réglemente l'ADR ?", c:["Le transport routier des marchandises dangereuses","Les temps de conduite","Le stockage des palettes","La conduite des chariots"], a:0, e:"L'ADR est l'accord européen sur le transport international des marchandises dangereuses par route."},
  {q:"Combien de classes de danger compte l'ADR ?", c:["5","7","9","12"], a:2, e:"9 classes, de 1 (explosifs) à 9 (matières dangereuses diverses)."},
  {q:"Les liquides inflammables (essence, alcool…) appartiennent à la classe…", c:["1","3","6","8"], a:1, e:"Classe 3 : liquides inflammables."},
  {q:"L'eau de Javel (hypochlorite de sodium) est un produit…", c:["explosif","corrosif","radioactif","non dangereux"], a:1, e:"Elle relève de la classe 8 (matières corrosives) et est incompatible avec les acides."},
  {q:"Le numéro ONU d'une matière dangereuse comporte…", c:["2 chiffres","4 chiffres","13 chiffres","18 chiffres"], a:1, e:"Le numéro ONU (ex. 1791) identifie la matière sur 4 chiffres."},
  {q:"Quel document donne les dangers et précautions d'un produit chimique ?", c:["La fiche de données de sécurité (FDS)","Le bon de livraison","La lettre de voiture","Le kanban"], a:0, e:"La FDS indique dangers, stockage, EPI et conduite à tenir en cas d'accident."},
  {q:"Les produits surgelés doivent être conservés à…", c:["+4 °C","0 °C","–18 °C ou moins","+10 °C"], a:2, e:"Les surgelés se conservent à –18 °C ou moins."},
  {q:"Une palette de yaourts arrive à +8 °C au lieu de 0 / +4 °C. Tu…", c:["la ranges normalement","refuses ou bloques selon la procédure et notes des réserves","la mets au congélateur","la donnes au personnel"], a:1, e:"La chaîne du froid est rompue : on applique la procédure (refus ou quarantaine), avec réserves et information du responsable qualité."},
  {q:"DLC signifie…", c:["Date limite de consommation","Délai de livraison client","Document de liaison commerciale","Date de lancement commercial"], a:0, e:"La DLC (« à consommer jusqu'au ») concerne les produits très périssables."},
  {q:"Des cartons de verrerie portent le pictogramme « fragile ». Tu dois…", c:["les gerber au maximum","les manipuler avec précaution et respecter le gerbage indiqué","les mettre en bas de palette sous les charges lourdes","les lancer sur le convoyeur"], a:1, e:"Fragile = précaution, calage, gerbage limité selon les indications du fabricant."}
]},
{ id:"Q6", titre:"Traçabilité et litiges", bloc:3, classe:"Tle", competences:["C3.2"], questions:[
  {q:"Retrouver l'origine d'un produit (fournisseur, lot, date de réception), c'est la traçabilité…", c:["descendante","ascendante","circulaire","financière"], a:1, e:"Ascendante : on remonte vers l'origine du produit."},
  {q:"Retrouver tous les clients livrés avec un lot, c'est la traçabilité…", c:["descendante","ascendante","interne","inverse"], a:0, e:"Descendante : on suit le lot vers ses destinations. Indispensable lors d'un rappel produit."},
  {q:"Combien de chiffres compte un SSCC ?", c:["4","8","13","18"], a:3, e:"Le SSCC (Serial Shipping Container Code) identifie une unité logistique sur 18 chiffres."},
  {q:"Le code EAN-13 identifie…", c:["une palette unique","un article","un transporteur","un emplacement"], a:1, e:"L'EAN-13 identifie la référence de l'article. Le SSCC identifie une unité logistique précise."},
  {q:"La technologie qui lit une étiquette à distance par ondes radio s'appelle…", c:["QR code","RFID","EDI","WMS"], a:1, e:"La RFID utilise une puce et une antenne lues sans contact visuel."},
  {q:"Un produit douteux est placé…", c:["en zone de préparation","en zone de quarantaine","sur le quai d'expédition","dans la benne"], a:1, e:"La quarantaine bloque le produit en attendant la décision qualité."},
  {q:"Un mouvement de stock non scanné…", c:["n'a pas d'importance","casse la traçabilité","accélère le travail sans risque","est automatiquement corrigé"], a:1, e:"Sans scan, le WMS ne connaît plus la position réelle du produit."},
  {q:"Lot reçu : 480 colis. Livrés : 120 + 96 + 72. Combien en stock ?", c:["192","288","312","480"], a:0, e:"120 + 96 + 72 = 288 livrés ; 480 – 288 = 192 colis restent en stock."},
  {q:"Dans un dossier litige, on joint en priorité…", c:["des photos et les documents (bon de réception, lettre de voiture)","l'emploi du temps de l'équipe","le planning des congés","rien"], a:0, e:"Photos et documents prouvent l'anomalie et permettent de déterminer la responsabilité."},
  {q:"Lors d'un rappel produit, la première action en entrepôt est…", c:["vendre rapidement le stock restant","bloquer le stock du lot concerné","attendre une semaine","changer les étiquettes"], a:1, e:"On bloque immédiatement le lot (WMS + physique) pour qu'aucun produit ne soit expédié."}
]},
{ id:"Q7", titre:"Palettisation, tournées et supports", bloc:2, classe:"Tle", competences:["C2.2","C2.4","C2.5"], questions:[
  {q:"Cartons 400 × 300 mm sur palette Europe : combien par couche au maximum ?", c:["6","8","10","12"], a:1, e:"Orientation 300 mm sur la longueur : (1 200 ÷ 300) × (800 ÷ 400) = 4 × 2 = 8 cartons."},
  {q:"Hauteur max 1 200 mm palette comprise (palette 144 mm), cartons de 250 mm. Combien de couches ?", c:["3","4","5","6"], a:1, e:"(1 200 – 144) ÷ 250 = 4,2 → 4 couches entières."},
  {q:"32 cartons de 12 kg + palette de 25 kg. Poids total ?", c:["384 kg","409 kg","444 kg","397 kg"], a:1, e:"32 × 12 = 384 kg + 25 kg = 409 kg."},
  {q:"Pourquoi croise-t-on les couches de cartons ?", c:["Pour décorer","Pour stabiliser la palette","Pour gagner du poids","Ça n'a aucun intérêt"], a:1, e:"Le croisement lie les couches entre elles et évite que la palette se disloque."},
  {q:"Une tournée livre A, puis B, puis C. Quel client charges-tu en premier (au fond) ?", c:["A","B","C","Peu importe"], a:2, e:"Dernier livré = premier chargé : C au fond, A près des portes."},
  {q:"Distance 120 km à 60 km/h de moyenne. Temps de trajet ?", c:["1 h","1 h 30","2 h","2 h 30"], a:2, e:"120 ÷ 60 = 2 heures."},
  {q:"Après 4 h 30 de conduite, un conducteur poids lourd doit prendre…", c:["une pause de 45 minutes","une pause de 10 minutes","aucune pause","un repos de 11 heures"], a:0, e:"Règlement CE 561/2006 : 45 minutes de pause (fractionnables en 15 + 30 min)."},
  {q:"Transporter ses propres marchandises avec ses camions, c'est le transport…", c:["en compte d'autrui","en compte propre","en messagerie","en affrètement"], a:1, e:"Compte propre : l'entreprise utilise ses véhicules et ses conducteurs pour ses marchandises."},
  {q:"Tu livres 12 palettes Europe pleines et le client en rend 8 vides. Tu…", c:["oublies la différence","fais signer un bon d'échange pour les 4 manquantes","reprends 4 palettes pleines","refuses la livraison"], a:1, e:"Le bon d'échange (ou bon de dette) trace les supports non rendus."},
  {q:"340 palettes perdues à 13 € HT l'une. Coût ?", c:["353 €","3 400 €","4 420 €","13 340 €"], a:2, e:"340 × 13 = 4 420 € HT."}
]},
{ id:"Q8", titre:"RSE et coordination d'équipe", bloc:3, classe:"Tle", competences:["C3.3","C3.4"], questions:[
  {q:"Quels sont les trois piliers de la RSE ?", c:["Prix, qualité, délai","Environnemental, social, économique","Achat, stock, vente","Sécurité, rapidité, propreté"], a:1, e:"La RSE combine la performance économique, le respect de l'environnement et l'attention aux personnes."},
  {q:"Remplacer les caisses en polystyrène par des bacs consignés agit surtout sur le pilier…", c:["social","environnemental","juridique","commercial"], a:1, e:"Moins de déchets à usage unique : action environnementale (souvent aussi économique)."},
  {q:"Installer des aides à la manutention pour réduire les maux de dos agit sur le pilier…", c:["social","environnemental","financier uniquement","aucun"], a:0, e:"Santé et conditions de travail relèvent du pilier social."},
  {q:"80 néons de 58 W remplacés par des LED de 25 W. Puissance économisée ?", c:["33 W","2 000 W","2 640 W","4 640 W"], a:2, e:"80 × (58 – 25) = 80 × 33 = 2 640 W, soit 2,64 kW."},
  {q:"Une bonne proposition RSE doit être…", c:["vague pour rester souple","concrète, chiffrée et suivie par un indicateur","coûteuse","réservée à la direction"], a:1, e:"Un indicateur permet de vérifier que l'action produit le résultat attendu."},
  {q:"Le brief de début de poste dure en général…", c:["5 à 10 minutes","1 heure","une demi-journée","il n'existe pas"], a:0, e:"Court et efficace : sécurité, objectifs, affectations, questions."},
  {q:"5 préparateurs à 8 commandes/heure pendant 3 heures traitent…", c:["40 commandes","100 commandes","120 commandes","150 commandes"], a:2, e:"5 × 8 × 3 = 120 commandes."},
  {q:"Un opérateur est absent. Le chef d'équipe doit d'abord…", c:["annuler les commandes","évaluer l'impact et réorganiser les priorités","attendre le lendemain","faire travailler un intérimaire sans formation sur un chariot"], a:1, e:"On mesure l'impact, on réaffecte selon la polyvalence et les priorités clients, puis on informe."},
  {q:"Un nouveau salarié ne peut pas porter plus de 10 kg. Tu…", c:["lui confies quand même les charges lourdes","adaptes son poste à sa restriction","refuses de l'intégrer","ne dis rien à personne"], a:1, e:"Adapter le travail à la personne est un principe de prévention et une obligation d'inclusion."},
  {q:"Une consigne bien transmise précise…", c:["seulement « fais vite »","qui, quoi, où, quand, comment","uniquement le résultat","rien, l'équipe devine"], a:1, e:"Les 5 éléments rendent la consigne claire et évitent les erreurs."}
]}
];
