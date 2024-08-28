import 'dotenv/config'
import express from 'express'
import cors from "cors"
import router from './routes/index.js'
import sequelize from './config/db.js'
import './models/models.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))
    } catch (e) {
        throw e
    }
}

start()
