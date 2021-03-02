# Loc4tor

---

Loc4tor is a simple tool capable to grab ip, latitude and longitude of a "victim".

---

# How to use

- Generate an uuid4 `/proc/sys/kernel/random/uuid` on linux or using the
  [Online UUID Generator Tool](https://www.uuidgenerator.net/version4);
- Compose the url adding 2 GET parameters:
    - **url** -> The url where to redirect the user;
    - **rid** -> The unique IDentifier (It will be used in future)

Example:  
`https://loc4tor.github.io/index.html?url=https://www.google.com&rid=2a6b09ca-eed4-41e5-8729-0d85e2d41bef`

When the user will click on the link -> ip, latitude and longitude will be logged into his client browser console. 
In order to see the result (from the attacker perspective) we could setup an external database and we could execute a 
REST call in order to save results on that db. Then we could make an interface where to find the result searching
for the *rid*.

---

# Disclaimer

This tool is designed to "automatically" (the user have to allow permissions) grab user informations, it is not
addressed to those who want to destroy but to those who want to research and mitigate.  
Use it at your discretion, better if you know that me and whoever contributed, **we take no responsibility for this**. 