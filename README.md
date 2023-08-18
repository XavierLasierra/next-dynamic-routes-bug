# Server side locale bug in dynamic routes when a middleware is present

Steps to reproduce

1. Create new next 13 app
2. Configure i18n
3. Create a dynamic route
4. Server side locale will always be the default one when navigating on the client side
