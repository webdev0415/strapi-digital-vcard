# Strapi application

Admin:
admin@bschauer.de
DemoAdmin01

Demo URL:
http://localhost:1337/api/vcards/47bb1b26e97e9afc8f0a5de4593a90271aa10ae8d5894f18b72ffea00df330b2

VUE URL:
http://localhost:8080/vcard/47bb1b26e97e9afc8f0a5de4593a90271aa10ae8d5894f18b72ffea00df330b2

TODO:
A visitor opens the URL with his smartphone. There he gets a brief overview of the contact. (Already exists).

Now, after a delay of 1 second, the requested URL should start downloading a .vcf file. The content of the .vcf file should be generated from the data of the API (JSON). The image of the person must be converted into a string using BASE64 and also included in the .vcf.
After the download has started, the smartphone should offer the user the option of adding the contact to the phone book.
