Perfect, let’s make web app deploy ready! Here’s a comprehensive test plan for the URL shortener, including what to fill in, what to expect, and how to debug any issues, We’ll go step by step.

1. Basic Connectivity Check
* Open your frontend: http://localhost:3000
* Try to shorten this URL:
    * Original URL: https://www.google.com
    * Leave all other fields blank.
    * Click Shorten
Expected:
* You should get a short URL.
* No errors in frontend, Django, or ngrok terminals.

<img width="735" height="1024" alt="httpswww google com" src="https://github.com/user-attachments/assets/27145bb8-bb9b-4a86-944d-f2ff592f9c8d" />

2. Custom Alias
* Original URL: https://www.wikipedia.org
* Custom Alias: wiki2025
* Leave other fields blank.
* Click Shorten
Expected:
* Short URL should end with /wiki2025.
* Reusing the same alias should give an error about duplicate alias.
￼
￼<img width="448" height="719" alt="Shorten Your URL For Free" src="https://github.com/user-attachments/assets/6a703af9-15d1-448d-abdb-32da8e5570e7" />

￼<img width="608" height="811" alt="WIKIPEDIA" src="https://github.com/user-attachments/assets/db1e9fef-99be-4c9b-b7df-2a09a7e1192b" />

<img width="582" height="442" alt="Shorten Your URL For Free" src="https://github.com/user-attachments/assets/673882bb-1e32-448d-997c-0ea3197c39c0" />

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
￼<img width="441" height="719" alt="Shorten Your URL For Free" src="https://github.com/user-attachments/assets/91b990be-3678-43ca-8d93-6f024553525c" />

<img width="640" height="569" alt="• This short URL has expired" src="https://github.com/user-attachments/assets/6be4eb88-8db5-4979-8d4a-a5dd1766d1e9" />

4. Password Protection
* Original URL: https://www.python.org
* Password: testpass123
* Click Shorten
* Visit the short URL.
Expected:
* You are prompted for a password.
* Entering the correct password allows access.
￼
<img width="442" height="719" alt="Shorten Your URL For Free" src="https://github.com/user-attachments/assets/be838dce-b739-47e0-b8cc-c4ada277f2cf" />
￼
￼<img width="642" height="241" alt="X Incorrect password" src="https://github.com/user-attachments/assets/025f84c6-f7ad-4bcc-9be4-e6fa15ea43eb" />

<img width="634" height="224" alt="a This short URL is password protected" src="https://github.com/user-attachments/assets/16179154-a343-4bd6-82ff-ff86644ad2d4" />

<img width="640" height="858" alt="e python" src="https://github.com/user-attachments/assets/9358b515-6778-4ffc-b2b5-6e7a5ae92c41" />
