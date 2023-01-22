export default function handler(req, res) {
    res.setPreviewData({user: "Viswas"});
    // res.end("Preview mode enabled");
    res.redirect(req.query.redirect);
}