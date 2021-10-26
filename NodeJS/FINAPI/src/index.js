import { listen, use, json } from 'express';

use(json());

listen(3333);
