const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.getServers = functions.https.onRequest(async (req, res) => {
  const snapshot = await db.collection("servers").get();
  const servers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(servers);
});

exports.getServer = functions.https.onRequest(async (req, res) => {
  const id = req.query.id;
  const doc = await db.collection("servers").doc(id).get();
  if (!doc.exists) return res.status(404).send("Not found");
  res.json({ id: doc.id, ...doc.data() });
});

exports.addServer = functions.https.onRequest(async (req, res) => {
  if (!req.body || !req.body.title) return res.status(400).send("Missing data");
  const data = req.body;
  const ref = await db.collection("servers").add(data);
  res.send(`Server added with ID: ${ref.id}`);
});

exports.installServer = functions.https.onRequest(async (req, res) => {
  const id = req.body.id;
  const ref = db.collection("servers").doc(id);
  await ref.update({ status: "installed" });
  res.send(`Server installed successfully: ${id}`);
});