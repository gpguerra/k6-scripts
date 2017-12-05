import http from "k6/http";
import { sleep } from "k6";

export let options = {
    vus: 50,
    duration: "300s",
    insecureSkipTLSVerify: true
  };

export default function() {
  http.get("http://www.farmrio.com.br");
  sleep(1);
};
