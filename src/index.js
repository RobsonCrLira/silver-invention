import 'dotenv/config';
import app from './app';

app.listen(process.env.PORT_API, () => { console.log(`Server is Running in Port ${process.env.PORT_API}`); });
