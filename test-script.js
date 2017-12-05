import http from "k6/http";
import { sleep } from "k6";

export let options = {
    ext: {
      loadimpact: {
          name: "Farmrio test script"
      }
    },
    stages: [
        { duration: "1m", target: 10 },
        { duration: "1m", target: 20 },
        { duration: "1m", target: 30 },
        { duration: "1m", target: 50 },
        { duration: "1m" },
        { duration: "1m", target: 0 },
    ],
    insecureSkipTLSVerify: true
  };



TestOpt = {
  minTT = 10,
  maxTT = 20
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//script de VU fica aqui
export default function() {
  http.get("http://www.farmrio.com.br");
  sleep(getRandomInt(minTT, maxTT));
  http.get("http://www.farmrio.com.br/br/achadinhos");
  sleep(getRandomInt(minTT, maxTT));
};
