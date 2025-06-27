// Dependencias del servidor
const path = require('node:path')
const express = require('express')
const app = express()

// Middlware
process.loadEnvFile()
const PORT = process.env.PORT || 3000

// Indicar la ruta de los ficheros estaticos
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})


app.use((req, res) => {
    res.status(404).send("Pagina no encontrada")
})

// Indicar el puerto de ejecucion
app.listen(PORT, () => {
    console.log(`Servidor arrancado en http://localhost:${PORT}`);
})