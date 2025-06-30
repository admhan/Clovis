# MCP Serveurs HOC

## 🚀 Lancement

```bash
npm install
npm run build
firebase deploy
```

## ⚙️ Setup Firebase
- Crée Firestore, ajoute la collection `servers`.
- Configure Auth (Google ou email).
- Ajoute le rôle admin via custom claims si besoin.

## 💡 API Functions
- `/api/servers` — liste les serveurs
- `/api/servers/:id` — détail
- `/api/servers` [POST] — ajoute un serveur (auth requis)
- `/api/install` [POST] — simule l’installation

---

✅ **Tu peux remplacer `YOUR LOGO` dans Navbar et Hero par une vraie image.**
