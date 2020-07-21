exports.error404 = (req, res, next) => {
    res.status(404).render("error404.ejs", { title: "404 Not Found", path: "error404" });
};