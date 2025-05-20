source /workspaces/express-backend/.env

API_URL="https://express-backend-manupenteado.vercel.app/habits/$ID_ITEM"
curl -X PATCH "$API_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "description": "Atualização parcial",
    "daysOfWeek": ["ter", "qui"]
  }'