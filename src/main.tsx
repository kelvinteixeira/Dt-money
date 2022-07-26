import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer Website",
          amount: 6000,
          type: "deposit",
          category: "Dev",
          createDate: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Amazon prime video",
          amount: 14.90,
          type: "withdraw",
          category: "Lazer",
          createDate: new Date("2021-02-13 19:30:17"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return this.schema.all("transaction");
    });
    
    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
