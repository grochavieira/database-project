import http from "k6/http";
import { sleep } from "k6";

// export let options = {
//     vus: 10,
//     duration: '30s',
//   };

export default function() {
  http.get(`http://localhost:3333/images`);
  sleep(1);
}

// docker run -i loadimpact/k6 run - <script.js
// docker run -i loadimpact/k6 run --vus 10 --duration 30s - <script.js
// k6 run script.js
