export default function handler(req, res) {
  res.status(200).json(
    {
      "title": "Kill Bill",
      "overview": "Will Bill Get Killed?"
    });
}
