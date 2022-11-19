---
sidebar_position: 1
---

# Serverless or Not

### Serverless dependant cost
In our solution we have to think we will have some times of processing:
1. Authentication
2. Create URL Shortner (Save on Redis and Postgres)
3. Access to the short url and go to the longest one
4. Capture Data and save on redis user information
5. Migrate that data to Elastic Search
6. ELK solution

### If you think in size you must be clound independant
• How big you are you have to think on EC2.
![alt text](@site/static/img/graph-cloud-cost-3.png)
![alt text](@site/static/img/graph-cloud-cost-2.png)
![alt text](@site/static/img/graph-cloud-cost-1.png)

### Best Solution for Each Process   :
1. Authentication via Keycloak (EC2)
2. NodeJS for Processing/ RDS for Postgres (EC2)
3. Redis (EC2)
4. Elastic Search 3 shards (EC2)
5. Kibana ( for the first stage, because Data Analytics has better solution)

### References
https://www.bbva.com/en/economics-of-serverless/