Perfect, let’s make your app interview-ready! Here’s a comprehensive test plan for your URL shortener, including what to fill in, what to expect, and how to debug any issues. We’ll go step by step, and I’ll help you fix any errors immediately.

1. Basic Connectivity Check
* Open your frontend: http://localhost:3000
* Try to shorten this URL:
    * Original URL: https://www.google.com
    * Leave all other fields blank.
    * Click Shorten
Expected:
* You should get a short URL.
* No errors in frontend, Django, or ngrok terminals.

￼



2. Custom Alias
* Original URL: https://www.wikipedia.org
* Custom Alias: wiki2025
* Leave other fields blank.
* Click Shorten
Expected:
* Short URL should end with /wiki2025.
* Reusing the same alias should give an error about duplicate alias.
￼
￼
￼

3. Expiration Date
* Original URL: https://www.github.com
* Expiration Date: Pick a time a few minutes in the future.
* Leave other fields blank.
* Click Shorten
* After expiration, try to visit the short URL.
Expected:
* Before expiration: URL works.
* After expiration: URL should be blocked/expired.
￼
￼

4. Password Protection
* Original URL: https://www.python.org
* Password: testpass123
* Click Shorten
* Visit the short URL.
Expected:
* You are prompted for a password.
* Entering the correct password allows access.
￼
￼
￼
