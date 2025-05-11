source /workspaces/express-backend/.env
API_URL="https://express-backend-manupenteado.vercel.app/habits/$ID_ITEM"

curl -X PUT "$API_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Beber água atualizado",
    "description": "Tomar 10 copos por dia",
    "frequency": ["specific_days"],
    "daysOfWeek": ["seg", "qua", "sex"],
    "completedDates": ["2024-02-20T00:00:00Z", "2024-02-21T00:00:00Z"]
  }'