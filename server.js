const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('API runing'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started and running on port ${PORT}`));
