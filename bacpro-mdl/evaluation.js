// Guide d'évaluation — définition des épreuves de l'arrêté du 8 janvier 2025 (Bac Pro Métiers de la logistique)
const EVALUATION = [
{ id:"E31", bloc:1, titre:"E31 – Réaliser des opérations logistiques dans un environnement sécurisé", unite:"U31", coef:4,
  valide:"Bloc 1 : positionnement dans la supply chain, prévention des risques et des dangers, réception de produits standards, mise en stock et suivi des stocks (C1.1 à C1.6).",
  ccf:{
    resume:"Note = moyenne pondérée de 2 situations d'évaluation.",
    situations:[
      { titre:"Situation 1 – Suivi de pratiques professionnelles (coefficient 0,7)", texte:"Positionnement régulier de l'élève sur les activités 1, 3 et 4 du bloc (supply chain, réception, mise en stock et suivi des stocks), à partir du livret de compétences. Les preuves viennent des scénarios au lycée et des PFMP (tuteur + professeur)." },
      { titre:"Situation 2 – Dossier prévention des risques et des dangers (coefficient 0,3)", texte:"Dossier de 10 pages maximum décrivant une situation à risque vécue ou observée (activité 2) : contexte, dangers et risques, mesures appliquées, propositions d'amélioration, regard personnel." }
    ],
    calcul:"Note E31 = (note situation 1 × 0,7) + (note situation 2 × 0,3). Exemple : 14 × 0,7 + 12 × 0,3 = 9,8 + 3,6 = 13,4 / 20."
  },
  ponctuel:"Oral de 40 minutes maximum. Le candidat apporte un dossier : 4 bilans de mission (activités 1, 3 et 4) + l'écrit prévention des risques. Deux temps de 20 minutes : exposé de 2 bilans choisis par la commission, puis exposé de l'écrit prévention, chacun suivi d'un échange. Un dossier non conforme entraîne la note de 0/20.",
  quand:"Livret de compétences renseigné de la 1re à la fin de la Terminale. Dossier prévention rédigé en début de Terminale, à partir d'une situation observée en PFMP.",
  eleve:["Garde tous tes bilans de mission (schéma de la supply chain + 150 mots)","Pendant chaque PFMP, note une situation à risque : lieu, danger, ce qui a été fait, photo si l'entreprise l'autorise","Fais signer ton livret de compétences par ton tuteur à chaque PFMP","Relis les fiches de cours C1.1 à C1.6"],
  prof:["Positionner l'élève dans le livret après chaque scénario et chaque PFMP","Fixer la date de remise du dossier prévention et en contrôler la conformité (10 pages max)","Croiser les regards : tuteur, professeur, et si possible un second évaluateur"] },

{ id:"E21", bloc:2, titre:"E21 – Satisfaire le client par la coordination des activités logistiques", unite:"U21", coef:4,
  valide:"Bloc 2 : besoins du client, préparation de commandes, mise à disposition interne, transport en compte propre, expédition par un prestataire, retours des supports (C2.1 à C2.6).",
  ccf:{
    resume:"3 situations d'évaluation en groupe, sur plateau technique.",
    situations:[
      { titre:"Organisation de chaque situation", texte:"Groupe de 4 à 6 élèves. Le scénario fixe un objectif collectif et une mission individuelle pour chaque élève. Un aléa est introduit dans 2 des 3 situations." },
      { titre:"Ce qui est couvert", texte:"Les 3 situations, prises ensemble, couvrent toutes les activités du bloc 2." },
      { titre:"Ce que contient le dossier", texte:"Pour chaque candidat, un dossier (scénarios, productions, grilles) est transmis au jury académique. La commission propose une note sur 20." }
    ],
    calcul:"Chaque élève est évalué individuellement, même s'il travaille en groupe."
  },
  ponctuel:"Épreuve pratique de 1 h 40 sur plateau technique, sujet issu d'une banque nationale : 10 min de découverte du contexte, 1 h de réalisation du scénario en groupe de 4 à 6 (aléas transmis par le jury), puis 30 min de compte rendu écrit individuel. Commission de 2 membres (1 enseignant d'économie-gestion + 1 professionnel, ou 2 enseignants), grille nationale, note sur 20.",
  quand:"Terminale, à partir d'octobre, après les scénarios d'entraînement de 1re (préparation de commandes, expédition) et de début de Terminale (palettisation, tournée, retours).",
  eleve:["Entraîne-toi au format : découverte du contexte, réalisation en équipe, compte rendu écrit","Dans ton compte rendu : ce que tu as fait, l'aléa, comment tu as réagi, ce que tu améliorerais","Ta mission individuelle compte : connais ton rôle et communique avec ton équipe","Révise les fiches C2.1 à C2.6 et refais les entraînements Q4 et Q7"],
  prof:["Construire 3 scénarios qui couvrent ensemble toutes les activités du bloc 2","Prévoir l'aléa dans 2 situations sur 3 et une mission individuelle par élève","Observer chaque élève avec la grille, conserver les productions dans le dossier du candidat"] },

{ id:"E22", bloc:3, titre:"E22 – Contribuer de manière responsable à l'efficacité des activités logistiques", unite:"U22", coef:5,
  valide:"Bloc 3 : produits spécifiques, traçabilité, démarche RSE, coordination d'une petite équipe (C3.1 à C3.4).",
  ccf:{
    resume:"3 situations d'évaluation réparties sur le cycle de formation.",
    situations:[
      { titre:"Contenu", texte:"Le contenu est identique à celui de l'épreuve ponctuelle : des dossiers d'analyse appuyés sur une base documentaire." },
      { titre:"Ce qui est couvert", texte:"Les 3 situations, prises ensemble, couvrent les 4 activités du bloc 3." },
      { titre:"Jury", texte:"Un dossier par candidat. Une commission de 2 enseignants ou formateurs propose une note sur 20." }
    ],
    calcul:"Exemple de répartition : situation 1 sur produits spécifiques et traçabilité (début de Terminale), situations 2 et 3 sur RSE et coordination d'équipe (février-mars)."
  },
  ponctuel:"Épreuve écrite de 3 heures, sujet national : plusieurs dossiers indépendants et une base documentaire. Correction prioritairement par un professeur d'économie-gestion qui enseigne en Bac Pro Métiers de la logistique. Note sur 20.",
  quand:"Terminale : de septembre (produits spécifiques, traçabilité) à mars (RSE, coordination d'équipe).",
  eleve:["Lis toute la base documentaire avant de répondre et souligne les chiffres utiles","Justifie chaque réponse avec un document ou une règle","Pour une proposition RSE : constat chiffré, action, coût/bénéfice, indicateur","Révise les fiches C3.1 à C3.4 et refais Q5, Q6 et Q8"],
  prof:["Répartir les 3 situations pour couvrir les 4 activités du bloc","Utiliser des sujets au format de l'épreuve (dossiers + base documentaire)","Récupérer en PFMP 3 des documents réels pour les sujets"] },

{ id:"E32", bloc:4, titre:"E32 – Conduire en sécurité des engins de manutention", unite:"U32", coef:2,
  valide:"Bloc 4 : mise en service, conduite, manœuvres (catégories 1B, 3 et 5 de la R489) et fin de poste (C4.1 à C4.4).",
  ccf:{
    resume:"4 parties : une partie théorique et trois parties pratiques. La note est la moyenne des 4 notes sur 20.",
    situations:[
      { titre:"Partie théorique", texte:"QCM national de 100 questions sur les connaissances de la R489 : connaissances générales, technologie et stabilité des chariots, plaque de charge, exploitation. Noté sur 100, ramené sur 20." },
      { titre:"Parties pratiques", texte:"Scénarios issus d'une banque nationale : catégorie 1B (40 min), catégorie 3 (40 min), catégorie 5 (50 min)." },
      { titre:"Règle éliminatoire", texte:"Toute mise en danger des personnes ou des biens entraîne la note de 0/20 à la partie concernée." }
    ],
    calcul:"Note E32 = (théorie + 1B + 3 + 5) ÷ 4. L'épreuve peut donner lieu à une attestation de niveau de conduite par catégorie."
  },
  ponctuel:"Même structure : QCM théorique de 2 h 30 et parties pratiques par catégorie selon la banque nationale.",
  quand:"Cat. 1B en 1re (février-avril), cat. 3 et 5 en Terminale (novembre-décembre), épreuves selon le calendrier de l'établissement.",
  eleve:["Fais les 10 sujets du site CACES jusqu'à obtenir au moins 14/20 à chacun","Vérifications de prise de poste : récite-les dans l'ordre","Sur le plateau : on lève et on descend toujours à l'arrêt","La sécurité passe avant la vitesse : une mise en danger = 0"],
  prof:["Programmer les créneaux plateau par catégorie","Utiliser les scénarios de la banque nationale dès leur publication","Tracer les entraînements et les QCM blancs"] }
];

const EVAL_GENERAL = {
  principes:["Le CCF se déroule pendant la formation, au lycée et en PFMP, quand l'élève est prêt. Il n'y a pas de session unique en fin d'année.","Les évaluateurs sont les professeurs de l'élève, avec un professionnel quand la définition de l'épreuve le prévoit.","Les notes de CCF sont des propositions transmises au jury : c'est le jury qui arrête la note définitive.","Chaque élève a un dossier qui regroupe les preuves : scénarios, productions, grilles, livret de compétences."],
  coefs:[["E1","Économie-droit (E11) et mathématiques (E12)","2"],["E21","Bloc 2 – satisfaire le client","4"],["E22","Bloc 3 – contribuer de manière responsable","5"],["E31","Bloc 1 – opérations en environnement sécurisé","4"],["E32","Bloc 4 – conduite d'engins","2"],["E33","Prévention-Santé-Environnement","1"],["E4","Langues vivantes A et B","4"],["E5","Français, histoire-géographie-EMC","5"],["E6","Arts appliqués","1"],["E7","EPS","1"]],
  calendrier:[["1re","Livret de compétences E31 ouvert dès la PFMP 1 · entraînements au format E21 · formation cat. 1B (E32)"],["Tle – sept.-oct.","Dossier prévention E31 (situation 2) · situation E22 n°1"],["Tle – oct.-déc.","Situations CCF E21 · entraînement cat. 3 et 5"],["Tle – fév.-mars","Situations E22 n°2 et n°3"],["Tle – avr.-juin","Livret E31 finalisé (situation 1) · épreuves E32 · oral E31 si forme ponctuelle"]]
};
