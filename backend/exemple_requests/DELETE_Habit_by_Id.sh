source /workspaces/express-backend/.env

API_URL="https://express-backend-manupenteado.vercel.app/habits/$ID_ITEM"
curl -X DELETE "$API_URL" \
  -H "Authorization: Bearer $TOKEN"