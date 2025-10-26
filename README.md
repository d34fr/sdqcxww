# 4Protect - Bot Discord AntiRaid

Bot Discord spécialisé dans la protection antiraid pour sécuriser vos serveurs.

Discord: https://dsc.gg/4wip

## Installation

1. Clonez ou téléchargez le projet

2. Installez les dépendances:
```bash
npm install
```

3. Copiez `config.example.js` en `config.js`:
```bash
cp config.example.js config.js
```

4. Modifiez `config.js` et ajoutez votre token Discord:
```javascript
token: 'VOTRE_TOKEN_BOT'
```

5. Lancez le bot:
```bash
npm start
```

## Fonctionnalités de Protection

- **antiban**: Protection contre les bannissements massifs
- **antibot**: Empêche l'ajout de bots non autorisés
- **antichannel**: Protection contre la création/suppression de salons
- **antirole**: Protection contre la création/suppression de rôles
- **antiwebhook**: Protection contre les webhooks malveillants
- **antilink**: Protection contre les invitations Discord
- **antieveryone**: Protection contre les mentions @everyone/@here
- **antidown**: Protection contre les downgrades de serveur
- **antiupdate**: Protection contre les modifications du serveur
- **antiadmin**: Protection contre les ajouts de permissions admin
- **serverlock**: Verrouillage complet du serveur
- **bypass**: Système de contournement pour les utilisateurs de confiance
- **whitelist**: Liste blanche des utilisateurs autorisés
- **owner**: Gestion des propriétaires du bot

## Configuration

Toutes les configurations se font via les commandes du bot avec le préfixe `+`

Exemple:
```
+antiban on
+wl @user
+bypass @user
``` 
