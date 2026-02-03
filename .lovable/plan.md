
# Plan : Améliorer la section Features NFT

## Objectif
Rendre la section "Ownership, Tradeable, Provable, Collectible" plus attractive avec des descriptions plus détaillées et un design amélioré.

---

## Modifications à effectuer

### Fichier : `src/components/web3/BettingNFT.jsx`

**1. Contenu amélioré pour les 4 features :**

```jsx
const features = [
  { 
    icon: <FaCheckCircle />, 
    title: 'True Ownership', 
    desc: 'Your bets are yours forever. No platform can freeze, delete, or modify your tickets—full control in your wallet.',
    highlight: '100% yours'
  },
  { 
    icon: <FaExchangeAlt />, 
    title: 'Freely Tradeable', 
    desc: 'Sell your winning positions before the game ends, or buy into promising tickets from other bettors.',
    highlight: 'Buy & Sell'
  },
  { 
    icon: <FaShieldAlt />, 
    title: 'Fully Provable', 
    desc: 'Every bet is recorded on-chain. Verify odds, stakes, and outcomes with complete transparency.',
    highlight: 'On-chain proof'
  },
  { 
    icon: <FaStar />, 
    title: 'Collectible Wins', 
    desc: 'Build your trophy case of winning tickets. Show off your best calls and track your betting history.',
    highlight: 'Your legacy'
  },
]
```

**2. Design amélioré des cartes :**
- Ajout d'un badge "highlight" pour chaque feature
- Icônes plus grandes avec animation au hover
- Effet de glow plus prononcé
- Meilleure hiérarchie visuelle avec le titre en plus grand

**3. Style des cartes mis à jour :**
- Fond avec gradient subtil
- Border qui change de couleur au hover (doré)
- Animation de scale au hover
- Badge coloré en haut de chaque carte

---

## Ce qui reste inchangé

- Les cartes NFT au-dessus (PSG vs OM, Lakers vs Celtics, etc.)
- Le titre principal "Every Bet is an NFT"
- Les animations Framer Motion existantes

---

## Résultat attendu

- Descriptions plus convaincantes et orientées bénéfices utilisateur
- Design plus premium avec badges et effets visuels
- Meilleure lisibilité et hiérarchie de l'information
- Cohérence avec l'identité visuelle Pryzen (doré #FEB413 / violet #A035DD)
