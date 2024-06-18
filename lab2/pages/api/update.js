export default function handler(req, res) {
    if (req.method === "put") 
    res.status(200).json({ msg: "updated"});
  }