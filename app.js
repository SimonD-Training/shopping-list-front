const app = require('express')()

app.use(body_parser.json())

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Listening on port: ${port}..`))

app.get('*.*', express.static('dist/shopping-list-front', { maxAge: '1y' })) //sets up the URIs for collecting the resources angular needs from the root of dist/shopping-list-front

app.get('/*', (req, res) => {
	res.status(200).sendFile(`/`, { root: 'dist/shopping-list-front' })
})
