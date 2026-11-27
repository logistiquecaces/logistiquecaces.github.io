// Documents PFMP — Bac Pro Métiers de la logistique (complètent la convention et le livret officiel du lycée)
function L(n){ let h=""; for(let i=0;i<(n||1);i++) h+="<div class='ligne'></div>"; return h; }
function champ(lbl){ return "<div class='champ'><span>"+lbl+"</span><span class='pointilles'></span></div>"; }
function grille(lignes, cols){
  cols = cols || ["Non maîtrisé","Insuffisant","Maîtrisé","Très bonne maîtrise","Non observé"];
  return "<table class='grille-pos'><tr><th>Compétence</th>"+cols.map(function(c){return "<th>"+c+"</th>";}).join("")+"</tr>"+
    lignes.map(function(l){ return "<tr><td>"+l+"</td>"+cols.map(function(){return "<td class='case'>☐</td>";}).join("")+"</tr>"; }).join("")+"</table>";
}
function signatures(liste){ return "<table class='sign'><tr>"+liste.map(function(s){return "<th>"+s+"</th>";}).join("")+"</tr><tr>"+liste.map(function(){return "<td>Date :<br><br>Signature :</td>";}).join("")+"</tr></table>"; }
const ENTETE = "<p class='entete-doc'>Lycée professionnel · Bac Pro Métiers de la logistique</p>";
const PERIODES = [
  ["PFMP 1","1re","4 semaines avant les vacances de Noël","Réception, mise en stock, inventaire. Repérer une situation à risque."],
  ["PFMP 2","1re","Dernière semaine de mai + 3 semaines de juin","Polyvalence : réception, préparation de commandes, conduite d'engins si autorisée."],
  ["PFMP 3","Terminale","Janvier – 4 semaines","Produits spécifiques, traçabilité, organisation de l'équipe, actions RSE."],
  ["PFMP 4","Terminale","Avril – mai – 6 semaines","Autonomie, initiatives, encadrement ponctuel, finalisation du livret E31."]
];
const COMP_BLOCS = [
  ["Bloc 1 – Opérations en environnement sécurisé (E31)",["C1.1 Situer son activité dans la supply chain","C1.2 Appliquer les règles de sécurité et de prévention","C1.3 Préparer la réception","C1.4 Réceptionner et contrôler les produits","C1.5 Mettre en stock","C1.6 Suivre les stocks, participer à l'inventaire"]],
  ["Bloc 2 – Satisfaire le client (E21)",["C2.1 Répondre à la demande du client","C2.2 Préparer les commandes","C2.3 Approvisionner la production","C2.4 Participer à une tournée de livraison","C2.5 Traiter les retours de supports","C2.6 Préparer une expédition par un transporteur"]],
  ["Bloc 3 – Contribuer de manière responsable (E22)",["C3.1 Adapter son travail au type de produit","C3.2 Respecter la traçabilité","C3.3 Proposer une amélioration (RSE)","C3.4 Coordonner une petite équipe"]],
  ["Bloc 4 – Conduite d'engins (E32)",["C4.1 Vérifier et mettre en service l'engin","C4.2 Circuler en sécurité","C4.3 Prendre, déposer, gerber des charges","C4.4 Réaliser la fin de poste"]]
];

const PFMP_DOCS = [
{ id:"presentation", titre:"Présentation des PFMP", pour:"Élèves et familles", icone:"📅",
  html: function(){ return ENTETE+"<h2>Les périodes de formation en milieu professionnel (PFMP)</h2>"+
  "<p>Les PFMP font partie de la formation : elles sont obligatoires pour obtenir le diplôme. Tu y développes tes compétences en entreprise et tu y récupères les preuves pour tes épreuves (livret de compétences E31, dossier prévention, bilans de mission).</p>"+
  "<h3>Calendrier</h3><table><tr><th>Période</th><th>Classe</th><th>Dates</th><th>Objectifs</th></tr>"+PERIODES.map(function(p){return "<tr><td><strong>"+p[0]+"</strong></td><td>"+p[1]+"</td><td>"+p[2]+"</td><td>"+p[3]+"</td></tr>";}).join("")+"</table>"+
  "<p class='petit'>Les dates exactes sont communiquées chaque année par le lycée. Les dates de Terminale sont indicatives.</p>"+
  "<h3>Qui fait quoi ?</h3><table><tr><th>L'élève</th><th>Le tuteur en entreprise</th><th>Le professeur référent</th></tr><tr><td>Trouve son entreprise, respecte les horaires et le règlement, remplit son livret élève, rédige ses bilans de mission.</td><td>Accueille l'élève, lui confie des activités du référentiel, le positionne sur ses compétences, signe l'attestation.</td><td>Valide l'entreprise, rend visite à l'élève, fait le lien avec le tuteur, exploite les documents au retour.</td></tr></table>"+
  "<h3>Les règles</h3><ul><li><strong>Pas de convention signée = pas de départ en PFMP.</strong> Elle est signée par l'entreprise, le lycée, l'élève et ses responsables légaux s'il est mineur.</li><li>Les horaires sont ceux de la convention. Tout retard ou absence est signalé <strong>le jour même</strong> au tuteur et au lycée, avec un justificatif.</li><li>En cas d'accident, même léger : préviens immédiatement ton tuteur et le lycée.</li><li>Port des EPI obligatoire. Tu ne conduis un engin que si l'employeur te l'autorise.</li><li>Discrétion : ne diffuse pas d'informations ni de photos de l'entreprise sans son accord.</li></ul>"+
  "<h3>Les documents</h3><ul><li><strong>Convention de PFMP</strong> (fournie par le lycée)</li><li><strong>Livret élève</strong> : tu le remplis pendant chaque PFMP</li><li><strong>Livret tuteur</strong> : positionnement de tes compétences</li><li><strong>Attestation de PFMP</strong> : obligatoire pour l'examen, à rapporter signée</li><li><strong>Fiche d'appréciation</strong> et <strong>fiche de visite</strong></li></ul>"; } },

{ id:"recherche", titre:"Fiche de recherche d'entreprise", pour:"Élève", icone:"🔎",
  html: function(){ return ENTETE+"<h2>Ma recherche d'entreprise</h2>"+champ("Nom, prénom :")+champ("Classe :")+champ("PFMP n° :")+
  "<h3>Où chercher ?</h3><ul><li>Entrepôts et plateformes logistiques, transporteurs, grande distribution (réserves, drives)</li><li>Services logistiques d'usines, magasins de pièces, hôpitaux, collectivités</li><li>Annuaire des entreprises partenaires du lycée, réseau familial, sites d'emploi</li></ul>"+
  "<h3>Mon suivi des démarches</h3><table><tr><th>Date</th><th>Entreprise et ville</th><th>Contact (nom, tél., mail)</th><th>Moyen (visite, appel, mail)</th><th>Réponse / relance</th></tr>"+[1,2,3,4,5,6,7,8].map(function(){return "<tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>";}).join("")+"</table>"+
  "<h3>Ce que je dis au téléphone</h3><p class='encadre'>« Bonjour, je m'appelle … Je suis élève en Bac Pro Métiers de la logistique au lycée … Je recherche une période de formation en entreprise de … semaines, du … au … Pourrais-je parler à la personne responsable de l'entrepôt ou des stages ? »</p>"+
  "<h3>Mon mail de candidature</h3><p class='encadre'>Objet : Demande de période de formation – Bac Pro Métiers de la logistique<br><br>Madame, Monsieur,<br>Élève en classe de … Bac Pro Métiers de la logistique au lycée …, je recherche une entreprise pour effectuer ma période de formation en milieu professionnel du … au …<br>Je souhaite découvrir vos activités de réception, de stockage et de préparation de commandes. Je suis motivé(e), ponctuel(le) et attentif(ve) aux règles de sécurité.<br>Vous trouverez mon CV en pièce jointe. Je reste disponible pour vous rencontrer.<br>Veuillez agréer, Madame, Monsieur, mes salutations distinguées.<br>Prénom Nom – téléphone</p>"; } },

{ id:"depart", titre:"Check-list avant le départ", pour:"Élève", icone:"✅",
  html: function(){ return ENTETE+"<h2>Check-list avant le départ en PFMP</h2>"+champ("Nom, prénom :")+champ("Entreprise :")+
  "<table><tr><th>À faire</th><th>Fait</th></tr>"+["La convention est signée par tout le monde et rendue au lycée","Je connais l'adresse, le trajet et le temps de trajet","Je connais mes horaires et le nom de mon tuteur","J'ai le numéro de téléphone de l'entreprise et celui du lycée","J'ai mes chaussures de sécurité (et les EPI demandés)","J'ai imprimé mon livret élève, mon livret tuteur et l'attestation","Je sais qui prévenir en cas d'absence ou de retard","J'ai relu les objectifs de cette PFMP"].map(function(x){return "<tr><td>"+x+"</td><td class='case'>☐</td></tr>";}).join("")+"</table>"+
  "<h3>Numéros utiles</h3>"+champ("Entreprise / tuteur :")+champ("Lycée (vie scolaire) :")+champ("Professeur référent :"); } },

{ id:"eleve", titre:"Livret élève (PFMP 1 à 4)", pour:"Élève", icone:"📗",
  html: function(){ return ENTETE+"<h2>Mon livret de PFMP</h2>"+champ("Nom, prénom :")+champ("Classe :")+champ("PFMP n° :")+champ("Dates :")+
  "<h3>1. Je présente l'entreprise (première semaine)</h3>"+champ("Nom et adresse :")+champ("Secteur et activité :")+champ("Effectif du site / du service logistique :")+champ("Clients et fournisseurs principaux :")+champ("Produits stockés (standards, spécifiques ?) :")+champ("Outils numériques (WMS, scanner, EDI…) :")+champ("Engins de manutention utilisés :")+
  "<p><strong>Je dessine la supply chain de l'entreprise et je me place dessus :</strong></p><div class='cadre'></div>"+
  "<h3>2. Mon journal d'activités (chaque semaine)</h3><table><tr><th>Semaine</th><th>Activités réalisées</th><th>Compétences (codes C)</th><th>Seul / accompagné</th></tr>"+[1,2,3,4,5,6].map(function(n){return "<tr><td>S"+n+"</td><td style='height:48px'></td><td></td><td></td></tr>";}).join("")+"</table>"+
  "<h3>3. Ce que j'observe selon ma PFMP</h3><table><tr><th>PFMP 1 (1re)</th><th>PFMP 2 (1re)</th><th>PFMP 3 (Tle)</th><th>PFMP 4 (Tle)</th></tr><tr><td>Déroulement d'une réception, contrôles, réserves · règles de stockage · inventaire</td><td>Méthode de préparation de commandes · expédition, transporteurs · engins utilisés</td><td>Produits spécifiques · traçabilité (lots, SSCC) · rôle du chef d'équipe · actions RSE</td><td>Prise d'initiative · organisation d'une équipe · amélioration proposée</td></tr></table>"+
  "<h3>4. Ma situation à risque (dossier prévention E31)</h3>"+champ("Où et quand :")+champ("Ce qui s'est passé :")+champ("Le danger et le risque :")+champ("Ce qui a été fait / les consignes :")+champ("Ce que je proposerais :")+
  "<h3>5. Mon bilan de mission (150 mots maximum)</h3><p class='petit'>Ce que j'ai fait et mon rôle · une difficulté et comment je l'ai surmontée · ce que je sais faire maintenant.</p>"+L(8); } },

{ id:"tuteur", titre:"Livret tuteur – positionnement", pour:"Tuteur en entreprise", icone:"📘",
  html: function(){ return ENTETE+"<h2>Livret tuteur – positionnement de l'élève</h2>"+
  "<p class='encadre'>Madame, Monsieur, merci d'accueillir notre élève. Ce document vous prend environ 10 minutes en fin de période. Cochez uniquement les compétences que vous avez pu observer. Vos appréciations alimentent le livret de compétences de l'épreuve E31 et l'évaluation de l'élève.</p>"+
  champ("Élève :")+champ("PFMP n° et dates :")+champ("Entreprise :")+champ("Tuteur (nom, fonction, téléphone, mail) :")+
  "<h3>Positionnement sur les compétences</h3>"+COMP_BLOCS.map(function(b){ return "<p><strong>"+b[0]+"</strong></p>"+grille(b[1]); }).join("")+
  "<h3>Situation 2 de l'E31 : la situation à risque</h3><p>L'élève doit décrire une situation à risque vécue ou observée dans votre entreprise. Merci de l'aider à en identifier une et de valider qu'il peut la décrire (sans élément confidentiel).</p>"+champ("Situation retenue :")+champ("Accord pour l'utiliser dans le dossier :  ☐ oui  ☐ non")+
  "<h3>Appréciation générale</h3>"+L(4)+signatures(["Tuteur (cachet de l'entreprise)","Élève"]); } },

{ id:"appreciation", titre:"Fiche d'appréciation (savoir-être)", pour:"Tuteur en entreprise", icone:"⭐",
  html: function(){ return ENTETE+"<h2>Fiche d'appréciation du comportement professionnel</h2>"+champ("Élève :")+champ("Entreprise :")+champ("PFMP n° :")+
  grille(["Ponctualité et assiduité","Respect des consignes de sécurité et port des EPI","Respect du règlement et des horaires","Présentation et politesse","Motivation et curiosité","Esprit d'équipe, communication","Autonomie, prise d'initiative","Soin et rigueur dans le travail"],["Insuffisant","Moyen","Bien","Très bien"])+
  "<h3>Points forts</h3>"+L(2)+"<h3>Points à améliorer</h3>"+L(2)+
  "<p>Accepteriez-vous d'accueillir à nouveau un élève du lycée ? ☐ oui ☐ non</p>"+signatures(["Tuteur (cachet)"]); } },

{ id:"visite", titre:"Fiche de visite du professeur", pour:"Professeur référent", icone:"🧑‍🏫",
  html: function(){ return ENTETE+"<h2>Fiche de suivi – visite en entreprise</h2>"+champ("Élève :")+champ("Entreprise :")+champ("Tuteur rencontré :")+champ("Professeur :")+champ("Date et mode (visite / téléphone / visio) :")+
  "<table><tr><th>Points abordés</th><th>Observations</th></tr>"+["Intégration de l'élève, assiduité, comportement","Activités réellement confiées (lien avec les blocs 1 à 4)","Conduite d'engins : autorisation de conduite ?","Situation à risque repérée pour le dossier prévention","Tenue du livret élève","Difficultés rencontrées, ajustements décidés"].map(function(x){return "<tr><td>"+x+"</td><td style='height:46px'></td></tr>";}).join("")+"</table>"+
  "<h3>Suite à donner</h3>"+L(3)+signatures(["Professeur","Tuteur"]); } },

{ id:"attestation", titre:"Attestation de PFMP", pour:"Entreprise (à rapporter au lycée)", icone:"📄",
  html: function(){ return ENTETE+"<h2 style='text-align:center'>ATTESTATION DE PÉRIODE DE FORMATION EN MILIEU PROFESSIONNEL</h2>"+
  "<p style='text-align:center' class='petit'>Baccalauréat professionnel Métiers de la logistique</p>"+
  "<p>Je soussigné(e) :</p>"+champ("Nom et fonction :")+champ("Entreprise (raison sociale) :")+champ("Adresse :")+champ("N° SIRET :")+
  "<p>atteste que l'élève :</p>"+champ("Nom, prénom :")+champ("Classe et établissement :")+
  "<p>a effectué une période de formation en milieu professionnel dans notre entreprise :</p>"+champ("du :")+champ("au :")+champ("soit (nombre de semaines) :")+champ("Nombre de jours d'absence :")+champ("dont justifiés :")+
  "<p>Activités principales confiées :</p><p>☐ Réception &nbsp; ☐ Stockage &nbsp; ☐ Inventaire &nbsp; ☐ Préparation de commandes &nbsp; ☐ Expédition &nbsp; ☐ Approvisionnement de production &nbsp; ☐ Conduite d'engins &nbsp; ☐ Produits spécifiques &nbsp; ☐ Autre : …………</p>"+
  champ("Fait à :")+champ("le :")+"<table class='sign'><tr><th>Signature du responsable et cachet de l'entreprise</th></tr><tr><td style='height:110px'></td></tr></table>"+
  "<p class='petit'>L'attestation est indispensable : les semaines de PFMP sont vérifiées pour l'inscription à l'examen. Si l'établissement ou la circulaire d'examen fournit un modèle officiel, c'est ce modèle qui fait foi.</p>"; } },

{ id:"retour", titre:"Bilan de retour de PFMP", pour:"Élève (au lycée)", icone:"🔁",
  html: function(){ return ENTETE+"<h2>Mon bilan de retour de PFMP</h2>"+champ("Nom, prénom :")+champ("PFMP n° et entreprise :")+
  "<h3>Je fais le point</h3><table><tr><th>Question</th><th>Ma réponse</th></tr>"+["Les 3 activités que j'ai le plus pratiquées","Ce que j'ai appris que je ne savais pas faire avant","La situation la plus difficile et ce que j'ai fait","Un écart entre ce qu'on fait au lycée et en entreprise","Mon objectif pour la prochaine PFMP"].map(function(x){return "<tr><td>"+x+"</td><td style='height:50px'></td></tr>";}).join("")+"</table>"+
  "<h3>Je m'auto-positionne</h3>"+grille(["Bloc 1 – réception, stockage, sécurité","Bloc 2 – préparation, expédition, client","Bloc 3 – produits spécifiques, traçabilité, RSE, équipe","Bloc 4 – conduite d'engins"],["Je découvre","Je fais avec aide","Je fais seul(e)","Je peux l'expliquer"])+
  "<p><strong>Documents rendus :</strong> ☐ attestation signée ☐ livret tuteur ☐ fiche d'appréciation ☐ livret élève complété ☐ bilan de mission</p>"; } }
];
