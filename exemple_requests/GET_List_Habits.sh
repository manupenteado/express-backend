source /workspaces/express-backend/.env

curl -X GET "https://express-backend-manupenteado.vercel.app/habits" \
  -H "Authorization: Bearer $TOKEN"