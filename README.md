Examen NODE JS
===============

LOPES CORREIA Audrey 
===============

**Notes générales :**

 * Défense d'utiliser d'autres packages que ceux pré-installés !
 * Ne pas modifier le code des tests !
 * Faites un FORK de ce projet dans votre propre GitHub 
 * La validation de l'examen se fera par Pull Request, sur GitHub, **au plus tard en fin de séance**. Préciser votre prénom + nom dans le descriptif de cette dernière !


TESTS & LINTER
--------------

* Faire en sorte que, lorsqu'un utilisateur lance les tests, le linter soit éxécuté *à la suite* de ces derniers
* De plus, l'ensemble du code de l'examen doit respecter les règles du linter, sans bypass !

BASIC-AUTH
----------

* Implémenter le middleware d'authentification basic auth, l'authentification doit être valide quand
  * le login vaut `node` 
  * le mot de passe vaut `password`, encodé en sha1
    * L'encodage d'une chaine de caractère se fera avec [la classe Hash du module natif 'crypto'](https://nodejs.org/docs/latest-v12.x/api/crypto.html#crypto_class_hash)

API REST + Services
-------------------

* Faire en sorte que le serveur se lance via la commande `npm run start:rest`
* Implémenter la v1 de l'API people, dans api/api.js et api/people-service.js
  * route de modification : permet de modifier une personne existante
  * routes de récupération de toutes les personne, avec filtres. Les filtres consistent en des paramètres à ajouter dans l'url. Si aucun filtre n'est précisé, l'ensemble des personnes doit être renvoyé. Sinon, ne renvoyer que les personnes dont les attributs correspondent exactement aux filtres

I/O
---

* Implémenter la fonction decodeHexFileContent du fichier io/io.js
  * prend en paramètre un chemin de fichier, dont le contenu est encodé en **hexadécimal**
  * retourne une promesse contenant le contenu du fichier décodé (en utf8)

WebSocket 
---------

Soit un serveur websocket simple, gérant des messages d'utilisateurs non-authentifiés
  * Faire en sorte que le serveur web affichant la page (contenue dans le dossier websocket/public) et lançant le serveur websocket se lance via la commande `npm run start:websocket`
  * Modifier le code de façon à ce que tout nouvel utilisateur reçoive l'historique des messages quand il se "connecte"
  