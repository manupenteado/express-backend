source /workspaces/express-backend/.env

curl -X POST "https://express-backend-manupenteado.vercel.app/habits" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Beber água",
    "description": "Tomar 8 copos por dia",
    "frequency": ["daily"],
    "daysOfWeek": [],
    "completedDates": ["2024-02-20T00:00:00Z"]
  }'