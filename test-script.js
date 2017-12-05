import http from "k6/http";
import { sleep } from "k6";

export let options = {
    vus: 20,
    duration: "60s",
    insecureSkipTLSVerify: true
  };

export default function() {
  http.get("http://www.farmrio.com.br");
  sleep(1);
};
