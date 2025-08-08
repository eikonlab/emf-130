# EMF 130 ans

[130ans.emf.ch](https://130ans.emf.ch)

## Prérequis

- Git installé
- NPM installé

## Installation

Cloner le repository git

```
git clone git@github.com:eikonlab/emf-130.git
```

Se rendre dans le dossier du projet, puis installer les dépendances avec NPM

```
cd emf-130
npm install
```

## Commandes

Compiler la SCSS, aggréger le JS, lancer le serveur et écouter les changements

```
npm run dev
```

Compiler pour la production

```
npm run build
```

## Déploiement

1. Compiler le code avec `npm run build`
2. Connection en FTP et se rendre dans le répertoire `subdomains/emf/130ans/public`
3. Remplacer le contenu du répertoire par celui se trouvant dans le dossier `/dist`
